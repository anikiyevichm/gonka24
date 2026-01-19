const fs = require('fs');
const path = require('path');

// Configuration
const NODE_API_URL = 'http://185.216.21.98:8000';
const STATS_FILE_PATH = path.join(__dirname, 'src', 'data', 'stats.json');
const CONCURRENCY_LIMIT = 5;

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function runWithChunks(items, chunkAsyncFn, chunkSize) {
  const results = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    const chunkPromises = chunk.map(item => chunkAsyncFn(item));
    const chunkResults = await Promise.all(chunkPromises);
    results.push(...chunkResults);
    // Small delay between chunks to be nice to the node
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  return results;
}

async function checkRewardsExist(epochId, participants) {
  // Check up to 3 participants to be sure
  const checkLimit = Math.min(participants.length, 3);
  for (let i = 0; i < checkLimit; i++) {
    const p = participants[i];
    const pId = p.index;
    if (!pId) continue;
    try {
      const response = await fetch(`${NODE_API_URL}/chain-api/productscience/inference/inference/epoch_performance_summary/${epochId}/${pId}`);
      if (response.ok) {
        const data = await response.json();
        if (data.code && data.code !== 0) continue;
        if (data.epochPerformanceSummary) return true;
      }
    } catch (e) {
      // Ignore error
    }
  }
  return false;
}

async function main() {
  try {
    console.log('--- Starting stats update ---');

    // 0. Calculate Epochs Per Day
    console.log('Calculating Epochs Per Day...');
    const t1 = Date.now();
    const e1Data = await fetchJson(`${NODE_API_URL}/v1/epochs/latest`);
    const h1 = e1Data.block_height;
    const epochLength = e1Data.epoch_params?.epoch_length || 15391;

    // Wait 5 seconds to measure block time
    await new Promise(resolve => setTimeout(resolve, 5000));

    const t2 = Date.now();
    const e2Data = await fetchJson(`${NODE_API_URL}/v1/epochs/latest`);
    const h2 = e2Data.block_height;

    const diffBlocks = h2 - h1;
    const diffTimeSeconds = (t2 - t1) / 1000;

    let blocksPerSecond = 1; // Default
    if (diffBlocks > 0 && diffTimeSeconds > 0) {
      blocksPerSecond = diffBlocks / diffTimeSeconds;
    }

    console.log(`Measured Blocks/Sec: ${blocksPerSecond.toFixed(4)} (Diff: ${diffBlocks} blocks in ${diffTimeSeconds.toFixed(2)}s)`);

    const epochDurationSeconds = epochLength / blocksPerSecond;
    const epochsPerDay = 86400 / epochDurationSeconds;

    console.log(`Estimated Epochs Per Day: ${epochsPerDay.toFixed(2)}`);

    // 1. Get Epoch Info
    const latestData = e2Data;
    const currentEpochId = latestData.latest_epoch.index;

    // 2. Calculate Total Compute Power
    const currentParticipantsData = await fetchJson(`${NODE_API_URL}/v1/epochs/current/participants`);
    const currentParticipants = currentParticipantsData.active_participants?.participants || [];

    const totalComputePower = currentParticipants.reduce((sum, p) => sum + (p.weight || 0), 0);
    console.log(`Current Epoch: ${currentEpochId}`);
    console.log(`Total Compute Power: ${totalComputePower}`);

    // 3. Determine best epoch for rewards
    let rewardEpochId = currentEpochId - 1;

    const getParticipantsForEpoch = async (id) => {
      try {
        const data = await fetchJson(`${NODE_API_URL}/v1/epochs/${id}/participants`);
        return data.active_participants?.participants || [];
      } catch (e) {
        console.warn(`Could not fetch participants for epoch ${id}: ${e.message}`);
        return [];
      }
    };

    console.log(`Checking rewards for epoch ${rewardEpochId}...`);
    let prevParticipants = await getParticipantsForEpoch(rewardEpochId);

    let hasRewards = false;
    if (prevParticipants.length > 0) {
      hasRewards = await checkRewardsExist(rewardEpochId, prevParticipants);
    }

    if (!hasRewards) {
      console.log(`Epoch ${rewardEpochId} seems to have no rewards yet. Falling back to ${rewardEpochId - 1}...`);
      rewardEpochId = rewardEpochId - 1;
      prevParticipants = await getParticipantsForEpoch(rewardEpochId);
    } else {
      console.log(`Epoch ${rewardEpochId} has rewards.`);
    }

    console.log(`Using Epoch ${rewardEpochId} for reward calculation.`);

    // 4. Calculate Rewards
    let totalRewardedCoins = 0n;

    if (prevParticipants.length > 0) {
      console.log(`Fetching rewards for ${prevParticipants.length} participants...`);
      let processedCount = 0;

      await runWithChunks(prevParticipants, async (participant) => {
        const pId = participant.index;
        if (!pId) return;

        try {
          const summaryData = await fetchJson(`${NODE_API_URL}/chain-api/productscience/inference/inference/epoch_performance_summary/${rewardEpochId}/${pId}`);
          const summary = summaryData.epochPerformanceSummary;
          const rewardedCoinsStr = summary ? (summary.rewarded_coins || "0") : "0";

          let amount = rewardedCoinsStr;
          if (typeof rewardedCoinsStr === 'object' && rewardedCoinsStr.amount) {
            amount = rewardedCoinsStr.amount;
          }

          totalRewardedCoins += BigInt(amount);
        } catch (err) {
          // Suppress
        }

        processedCount++;
        if (processedCount % 10 === 0 || processedCount === prevParticipants.length) {
          process.stdout.write(`Processed: ${processedCount}/${prevParticipants.length}\r`);
        }

      }, CONCURRENCY_LIMIT);
      console.log('');
    }

    const prevEpochRewardGNK = Number(totalRewardedCoins) / 1e9;

    console.log(`Epoch ${rewardEpochId} Reward: ${prevEpochRewardGNK.toLocaleString()} GNK`);

    // 5. Calculate Unit Price
    let unitPrice = 0;
    if (totalComputePower > 0) {
      unitPrice = prevEpochRewardGNK / totalComputePower;
    }

    console.log(`Unit Price: ${unitPrice}`);

    // 6. Save to file
    const statsData = {
      total_compute_power: totalComputePower,
      previous_epoch_reward: prevEpochRewardGNK,
      unit_price: unitPrice,
      epochs_per_day: epochsPerDay,
      last_updated: new Date().toISOString()
    };

    const dir = path.dirname(STATS_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(STATS_FILE_PATH, JSON.stringify(statsData, null, 2));
    console.log(`Stats updated and saved to ${STATS_FILE_PATH}`);

  } catch (error) {
    console.error('Error updating stats:', error);
    process.exit(1);
  }
}

main();
