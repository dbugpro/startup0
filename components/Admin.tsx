import React, { useState } from 'react';
import { ArrowLeft, Lock, ShieldAlert, Terminal, AlertTriangle, CheckCircle, Info, RefreshCw, Key, Database, Server } from 'lucide-react';

interface AdminProps {
  onBack: () => void;
}

const Admin: React.FC<AdminProps> = ({ onBack }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate network delay
    setTimeout(() => {
      // Hardcoded password for demo purposes
      if (password === 'admin') {
        setIsAuthenticated(true);
      } else {
        setError('Invalid credentials');
        setPassword('');
      }
      setIsLoading(false);
    }, 800);
  };

  const logs = [
    { id: 1, type: 'error', message: 'Connection timeout: DB_SHARD_04', time: '10:42:01', source: 'Database' },
    { id: 2, type: 'info', message: 'User batch import completed (402 records)', time: '10:41:55', source: 'Worker' },
    { id: 3, type: 'warning', message: 'High memory usage on node-us-east-1a', time: '10:38:12', source: 'Monitor' },
    { id: 4, type: 'success', message: 'Backup verification successful', time: '10:30:00', source: 'System' },
    { id: 5, type: 'info', message: 'API Rate limit adjustment applied', time: '10:15:22', source: 'Gateway' },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 font-sans selection:bg-brand-500 selection:text-white">
        <div className="w-full max-w-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-700">
                <Lock className="w-8 h-8 text-brand-400" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
              <p className="text-slate-500 text-sm">Enter your credentials to access system controls</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                    placeholder="••••••••"
                    autoFocus
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-rose-400 text-sm bg-rose-500/10 p-3 rounded-lg border border-rose-500/20 animate-in slide-in-from-top-2">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {error}
                </div>
              )}

              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-brand-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Authenticating...
                    </>
                  ) : (
                    'Access System'
                  )}
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <button 
                onClick={onBack}
                className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors"
              >
                Return to Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans selection:bg-brand-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBack}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                System Administration
                <span className="bg-red-500/10 text-red-400 text-xs font-bold px-2 py-1 rounded-md border border-red-500/20">ROOT ACCESS</span>
              </h1>
              <p className="text-slate-500 text-sm font-medium tracking-wide">Advanced configuration and monitoring</p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="text-sm text-slate-400 hover:text-white transition-colors bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg border border-slate-800"
          >
            Sign Out
          </button>
        </header>

        {/* Admin Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Controls */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-400" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-xl hover:border-brand-500/50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="w-4 h-4 text-slate-400 group-hover:text-brand-400" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white">Clear System Cache</span>
                  </div>
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-xl hover:border-brand-500/50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Database className="w-4 h-4 text-slate-400 group-hover:text-brand-400" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white">Run Migrations</span>
                  </div>
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-xl hover:border-brand-500/50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Key className="w-4 h-4 text-slate-400 group-hover:text-brand-400" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white">Rotate API Keys</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <Server className="w-4 h-4 text-brand-400" />
                Server Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">CPU Usage</span>
                    <span className="text-slate-200">42%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-500 w-[42%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Memory</span>
                    <span className="text-slate-200">78%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[78%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Disk Space</span>
                    <span className="text-slate-200">24%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[24%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Logs */}
          <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
              <h3 className="font-semibold text-slate-200 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-400" />
                Live System Logs
              </h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Live</span>
              </div>
            </div>
            
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left text-sm font-mono">
                <thead className="bg-slate-900 text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium w-24">Time</th>
                    <th className="px-4 py-3 font-medium w-24">Level</th>
                    <th className="px-4 py-3 font-medium w-24">Source</th>
                    <th className="px-4 py-3 font-medium">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {logs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-900/30 transition-colors">
                      <td className="px-4 py-3 text-slate-500">{log.time}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          log.type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                          log.type === 'warning' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                          log.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                          'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        }`}>
                          {log.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-400">{log.source}</td>
                      <td className="px-4 py-3 text-slate-300">{log.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-slate-900/30 border-t border-slate-800 text-xs text-slate-500 text-center">
              Showing last 5 events • Logs are retained for 30 days
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admin;