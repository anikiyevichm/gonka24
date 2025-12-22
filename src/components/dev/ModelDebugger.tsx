import React from 'react';
import { Background3D, Background3DOverrides } from '../ui/Background3D';
// @ts-ignore - leva might not have types installed
import { useControls, folder, button } from 'leva';
import { useState } from 'react';

export const ModelDebugger = () => {
  const [key, setKey] = useState(0);

  const {
    rotationX, rotationY, rotationZ, scale, radius, disableFloat,
    entEnabled, entRotY, entRotX, entZ, entDamping, entPivot, entDelay
  } = useControls({
    Model: folder({
      rotationX: { value: Math.PI / 4, min: -Math.PI, max: Math.PI, step: 0.1 },
      rotationY: { value: Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.1 },
      rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
      scale: { value: 1, min: 0.1, max: 3, step: 0.1 },
      disableFloat: { value: true, label: 'Disable Float' },
    }),
    Camera: folder({
      radius: { value: 9, min: 1, max: 20, step: 0.1 },
    }),
    Entrance: folder({
      entEnabled: { value: true, label: 'Enabled' },
      entRotY: { value: -3.142, min: -Math.PI * 2, max: Math.PI * 2, step: 0.1, label: 'Start Rot Y' },
      entRotX: { value: -0.942, min: -Math.PI, max: Math.PI, step: 0.1, label: 'Start Rot X' },
      entZ: { value: -20, min: -50, max: 20, step: 1, label: 'Start Z' },
      entDamping: { value: 1, min: 0.1, max: 5, step: 0.1, label: 'Damping (Speed)' },
      entPivot: { value: 0.5, min: 0, max: 1, step: 0.1, label: 'Pivot Y (0=Center, 1=Top)' },
      entDelay: { value: 500, min: 0, max: 2000, step: 100, label: 'Start Delay (ms)' },
      'Restart Animation': button(() => setKey((k) => k + 1)),
    })
  });

  const overrides: Background3DOverrides = {
    modelRotation: [rotationX, rotationY, rotationZ],
    modelScale: scale,
    cameraRadius: radius,
    disableFloat,
    entrance: {
      enabled: entEnabled,
      startRotationY: entRotY,
      startRotationX: entRotX,
      startZ: entZ,
      damping: entDamping,
      pivotOffsetFactor: entPivot,
      delay: entDelay,
    },
    animationKey: key,
  };

  const codeSnippet = `
// Model Rotation: [${rotationX.toFixed(3)}, ${rotationY.toFixed(3)}, ${rotationZ.toFixed(3)}]
// Model Scale: ${scale}
// Camera Radius: ${radius}

/* Copy to Background3D EntranceAnimation config: */
config={{
  enabled: ${entEnabled},
  startRotationY: ${entRotY.toFixed(3)}, // ${(entRotY / Math.PI).toFixed(2)} * PI
  startRotationX: ${entRotX.toFixed(3)}, // ${(entRotX / Math.PI).toFixed(2)} * PI
  startZ: ${entZ},
  damping: ${entDamping},
  pivotOffsetFactor: ${entPivot},
}}
`;

  return (
    <>
      <Background3D overrides={overrides} />
      <div className="fixed bottom-4 left-4 z-50 p-4 bg-black/80 text-white rounded-lg font-mono text-xs whitespace-pre backdrop-blur-md border border-white/10">
        <h3 className="font-bold mb-2 text-primary">Current Settings</h3>
        {codeSnippet}
      </div>
    </>
  );
};

export default ModelDebugger;
