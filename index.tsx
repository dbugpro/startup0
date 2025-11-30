import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Menu from './components/Menu';
import UserManagement from './components/UserManagement';
import AdminDashboard from './components/AdminDashboard';
import Analytics from './components/Analytics';
import Settings from './components/Settings';

const App = () => {
  const [currentView, setCurrentView] = useState<'splash' | 'menu' | 'userManagement' | 'dashboard' | 'analytics' | 'settings'>('splash');

  // Simple fade-in wrapper component
  const PageTransition = ({ children }: { children: React.ReactNode }) => (
    <div className="animate-in fade-in zoom-in-95 duration-300">
      {children}
    </div>
  );

  if (currentView === 'menu') {
    return (
      <PageTransition>
        <Menu 
          onBack={() => setCurrentView('splash')} 
          onNavigate={(view) => setCurrentView(view)}
        />
      </PageTransition>
    );
  }

  if (currentView === 'userManagement') {
    return (
      <PageTransition>
        <UserManagement onBack={() => setCurrentView('menu')} />
      </PageTransition>
    );
  }

  if (currentView === 'dashboard') {
    return (
      <PageTransition>
        <AdminDashboard onBack={() => setCurrentView('menu')} />
      </PageTransition>
    );
  }

  if (currentView === 'analytics') {
    return (
      <PageTransition>
        <Analytics onBack={() => setCurrentView('menu')} />
      </PageTransition>
    );
  }

  if (currentView === 'settings') {
    return (
      <PageTransition>
        <Settings onBack={() => setCurrentView('menu')} />
      </PageTransition>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white">
      <div className="w-full max-w-lg px-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
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
