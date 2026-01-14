import React, { useEffect, useState } from 'react';
import { GonkaLanding } from './pages/GonkaLanding';
import { SafeComputeLanding } from './pages/SafeComputeLanding';

function App() {
  const [isSafeCompute, setIsSafeCompute] = useState(false);

  useEffect(() => {
    // Check hostname for production domain
    const isSafeComputeDomain = window.location.hostname.includes('safecompute.tech');

    // Check path for development/testing
    const isSafeComputePath = window.location.pathname.startsWith('/safecompute');

    if (isSafeComputeDomain || isSafeComputePath) {
      setIsSafeCompute(true);

      // If we are on the safecompute domain but using the /safecompute path, 
      // we might want to clean up the URL, but for now let's just render the component.
    }
  }, []);

  return isSafeCompute ? <SafeComputeLanding /> : <GonkaLanding />;
}

export default App;
