import React from 'react';
import { Home, Settings, Users, BarChart3, LogOut, ArrowLeft } from 'lucide-react';

interface MenuProps {
  onBack: () => void;
  onNavigate: (view: 'userManagement' | 'dashboard' | 'analytics' | 'settings' | 'admin') => void;
}

const Menu: React.FC<MenuProps> = ({ onBack, onNavigate }) => {
  const menuItems = [
    { id: 'dashboard', icon: <Home className="w-6 h-6" />, label: 'Dashboard', description: 'Overview of system metrics' },
    { id: 'userManagement', icon: <Users className="w-6 h-6" />, label: 'User Management', description: 'Manage access and roles' },
    { id: 'analytics', icon: <BarChart3 className="w-6 h-6" />, label: 'Analytics', description: 'View performance data' },
    { id: 'settings', icon: <Settings className="w-6 h-6" />, label: 'Settings', description: 'System configuration' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans selection:bg-brand-500 selection:text-white">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
             <button 
              onClick={onBack}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
                Menu
              </h1>
              <p className="text-slate-500 text-sm font-medium tracking-wide">startup001</p>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('admin')}
            className="h-10 px-3 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 hover:bg-slate-700 hover:border-brand-500/50 transition-all cursor-pointer group"
          >
            <span className="font-mono text-xs font-bold text-brand-400 group-hover:text-brand-300">ADMIN</span>
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                onNavigate(item.id as any);
              }}
              className="group flex flex-col p-6 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-brand-500/30 rounded-2xl transition-all duration-300 text-left"
            >
              <div className="flex items-start justify-between w-full mb-4">
                <div className="p-3 bg-slate-800 group-hover:bg-brand-900/30 rounded-xl text-brand-400 transition-colors">
                  {item.icon}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-400">
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white mb-1">
                {item.label}
              </h3>
              <p className="text-sm text-slate-500 group-hover:text-slate-400">
                {item.description}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex justify-center">
          <button className="flex items-center space-x-2 text-slate-500 hover:text-red-400 transition-colors text-sm font-medium">
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;