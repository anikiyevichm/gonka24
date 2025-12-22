import React from 'react';
import { Header } from './components/ui/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Infrastructure } from './components/sections/Infrastructure';
import { Background3D } from './components/ui/Background3D';
import { Pricing } from './components/sections/Pricing';
import { Videos } from './components/sections/Videos';
import { Risks } from './components/sections/Risks';
import { Resources } from './components/sections/Resources';
import { FAQ } from './components/sections/FAQ';
import { CallToAction } from './components/sections/CallToAction';

// Lazy load dev tools to exclude from production bundle
const ModelDebugger = React.lazy(() => import('./components/dev/ModelDebugger'));

function App() {
  // Only enable in development mode
  if (process.env.NODE_ENV === 'development' && window.location.pathname === '/dev/3d') {
    return (
      <React.Suspense fallback={null}>
        <ModelDebugger />
      </React.Suspense>
    );
  }

  return (
    <div className="min-h-screen text-white font-sans selection:bg-primary/30 relative">
      <Background3D />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Infrastructure />
        <Pricing />
        <Videos />
        <Risks />
        <FAQ />
        <Resources />
        <CallToAction />
      </main>
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <p className="mb-2">© 2025 GONKA Mining. All rights reserved.</p>
          <p className="text-xs text-gray-600">Оплата: Предоплата за 1 месяц. Реквизиты будут предоставлены.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
