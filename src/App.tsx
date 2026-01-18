import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SafeComputeLanding } from './pages/SafeComputeLanding';

import { CalculatorPage } from './pages/CalculatorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gnk-mining-infrastructure" element={<SafeComputeLanding />} />
        <Route path="/calc" element={<CalculatorPage />} />
        <Route path="/" element={<Navigate to="/gnk-mining-infrastructure" replace />} />
        <Route path="*" element={<Navigate to="/gnk-mining-infrastructure" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
