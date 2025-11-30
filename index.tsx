import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Menu from './components/Menu';

const App = () => {
  const [currentView, setCurrentView] = useState<'splash' | 'menu'>('splash');

  if (currentView === 'menu') {
    return <Menu onBack={() => setCurrentView('splash')} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white">
      <div className="w-full max-w-lg px-4 text-center">
        <h1 className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
          repository
        </h1>
        <p 
          onClick={() => setCurrentView('menu')}
          className="mt-4 text-lg text-slate-400 font-medium tracking-wide cursor-pointer hover:text-brand-400 transition-colors duration-300"
        >
          startup001
        </p>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
