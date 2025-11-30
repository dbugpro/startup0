import React from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, Users, DollarSign, Activity, Server, Clock, AlertCircle } from 'lucide-react';

interface AdminDashboardProps {
  onBack: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans selection:bg-brand-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center space-x-4 mb-8">
          <button 
            onClick={onBack}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">
              Dashboard
            </h1>
            <p className="text-slate-500 text-sm font-medium tracking-wide">System performance and overview</p>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Revenue', value: '$48,294', change: '+12.5%', trend: 'up', icon: <DollarSign className="w-5 h-5 text-emerald-400" /> },
            { label: 'Active Users', value: '2,409', change: '+18.2%', trend: 'up', icon: <Users className="w-5 h-5 text-blue-400" /> },
            { label: 'Bounce Rate', value: '42.3%', change: '-2.1%', trend: 'down', icon: <Activity className="w-5 h-5 text-purple-400" /> }, // Down is good for bounce rate usually, but visually we use colors
            { label: 'Server Load', value: '34%', change: 'Normal', trend: 'neutral', icon: <Server className="w-5 h-5 text-amber-400" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-800 rounded-lg">{stat.icon}</div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.trend === 'up' ? 'bg-emerald-500/10 text-emerald-400' : 
                  stat.trend === 'down' ? 'bg-slate-700 text-slate-400' : 'bg-blue-500/10 text-blue-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-100 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Revenue Chart Placeholder */}
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 animate-in fade-in zoom-in-95 duration-500 delay-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-slate-200">Revenue Overview</h3>
              <div className="flex space-x-2">
                <button className="text-xs bg-slate-800 text-white px-3 py-1 rounded-lg transition-colors hover:bg-slate-700">7D</button>
                <button className="text-xs text-slate-500 hover:text-slate-300 px-3 py-1 transition-colors">1M</button>
                <button className="text-xs text-slate-500 hover:text-slate-300 px-3 py-1 transition-colors">1Y</button>
              </div>
            </div>
            
            <div className="h-64 flex items-end justify-between gap-2">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="w-full flex flex-col items-center gap-2 group">
                  <div className="w-full relative h-full flex items-end">
                     {/* Tooltip */}
                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-xs text-white px-2 py-1 rounded pointer-events-none whitespace-nowrap z-10 border border-slate-700">
                        ${h * 100}
                     </div>
                     <div 
                        className="bg-brand-600/20 border-t-2 border-brand-500 rounded-t-sm hover:bg-brand-600/40 transition-all w-full animate-in slide-in-from-bottom-full duration-700"
                        style={{ height: `${h * 2}px`, animationDelay: `${i * 100}ms` }} 
                      />
                  </div>
                  <span className="text-xs text-slate-500">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* System Health / Recent Activity */}
          <div className="flex flex-col gap-6">
            {/* Health */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 animate-in fade-in slide-in-from-right-8 duration-500 delay-300">
              <h3 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <Server className="w-4 h-4 text-slate-400" />
                System Status
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'API Latency', value: '24ms', color: 'bg-emerald-500' },
                  { label: 'Database', value: 'Operational', color: 'bg-emerald-500' },
                  { label: 'Storage Usage', value: '78%', color: 'bg-amber-500' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${item.color} animate-pulse`} />
                      <span className="text-slate-200 font-medium">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Log */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex-grow animate-in fade-in slide-in-from-right-8 duration-500 delay-500">
              <h3 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {[
                  { user: 'Sarah Connor', action: 'deployed to production', time: '10m ago', type: 'success' },
                  { user: 'System', action: 'backup completed', time: '2h ago', type: 'neutral' },
                  { user: 'Alex Morgan', action: 'updated billing info', time: '4h ago', type: 'warning' },
                  { user: 'AlertBot', action: 'high memory usage', time: '5h ago', type: 'error' },
                ].map((log, i) => (
                  <div key={i} className="flex gap-3 text-sm pb-3 border-b border-slate-800/50 last:border-0 last:pb-0">
                    <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                      log.type === 'success' ? 'bg-emerald-500' :
                      log.type === 'warning' ? 'bg-blue-500' :
                      log.type === 'error' ? 'bg-red-500' : 'bg-slate-500'
                    }`} />
                    <div>
                      <p className="text-slate-300">
                        <span className="font-medium text-slate-100">{log.user}</span> {log.action}
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">{log.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
