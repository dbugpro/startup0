import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Users, Globe, Smartphone, Monitor, Tablet, BarChart2, MousePointerClick } from 'lucide-react';

interface AnalyticsProps {
  onBack: () => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ onBack }) => {
  const [timeRange, setTimeRange] = useState('7D');

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
              <h1 className="text-2xl font-bold text-white">
                Analytics
              </h1>
              <p className="text-slate-500 text-sm font-medium tracking-wide">Traffic and engagement statistics</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-1 flex">
            {['24H', '7D', '30D', '90D'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  timeRange === range 
                    ? 'bg-slate-800 text-white shadow-sm' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </header>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Unique Visitors', value: '12,543', change: '+14.2%', icon: <Users className="w-5 h-5 text-indigo-400" /> },
            { label: 'Page Views', value: '48,229', change: '+8.1%', icon: <MousePointerClick className="w-5 h-5 text-emerald-400" /> },
            { label: 'Bounce Rate', value: '46.8%', change: '-2.4%', icon: <BarChart2 className="w-5 h-5 text-amber-400" /> },
            { label: 'Avg. Duration', value: '3m 42s', change: '+12s', icon: <TrendingUp className="w-5 h-5 text-blue-400" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-800 rounded-lg">{stat.icon}</div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-100 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Chart Section */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-8 animate-in fade-in zoom-in-95 duration-500 delay-300">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-semibold text-slate-200">Traffic Growth</h3>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-brand-500"></span>
                <span className="text-slate-400">Visitors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-700"></span>
                <span className="text-slate-400">Pageviews</span>
              </div>
            </div>
          </div>
          
          <div className="h-64 w-full flex items-end justify-between gap-1 sm:gap-3">
            {[35, 55, 40, 70, 60, 45, 80, 75, 60, 85, 95, 70, 65, 85].map((h, i) => (
              <div key={i} className="relative w-full h-full flex items-end group">
                <div className="w-full flex flex-col-reverse items-center gap-1 h-full justify-end">
                   {/* Tooltip */}
                   <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 bg-slate-800 text-xs text-white px-2 py-1 rounded transition-opacity whitespace-nowrap z-10 pointer-events-none border border-slate-700">
                      {h * 15} Views
                   </div>
                   
                   {/* Bar 1 */}
                   <div 
                      className="w-full bg-brand-500/80 rounded-t-sm hover:bg-brand-400 transition-all animate-in slide-in-from-bottom-full duration-700"
                      style={{ height: `${h}%`, animationDelay: `${i * 50}ms` }}
                   ></div>
                   
                   {/* Bar 2 (Stacked visually below for demo) */}
                   <div 
                      className="w-full bg-slate-700/50 rounded-b-sm animate-in slide-in-from-bottom-full duration-700"
                      style={{ height: `${h * 0.4}%`, animationDelay: `${i * 50 + 100}ms` }}
                   ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-slate-500 border-t border-slate-800/50 pt-4">
            <span>Mar 1</span>
            <span>Mar 3</span>
            <span>Mar 5</span>
            <span>Mar 7</span>
            <span>Mar 9</span>
            <span>Mar 11</span>
            <span>Mar 13</span>
          </div>
        </div>

        {/* Detailed Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Device Breakdown */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 animate-in fade-in slide-in-from-left-8 duration-500 delay-500">
            <h3 className="font-semibold text-slate-200 mb-6">Device Breakdown</h3>
            <div className="space-y-6">
              {[
                { label: 'Desktop', value: '58%', icon: <Monitor className="w-4 h-4" />, color: 'bg-brand-500' },
                { label: 'Mobile', value: '34%', icon: <Smartphone className="w-4 h-4" />, color: 'bg-purple-500' },
                { label: 'Tablet', value: '8%', icon: <Tablet className="w-4 h-4" />, color: 'bg-emerald-500' },
              ].map((device, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                      {device.icon}
                      <span>{device.label}</span>
                    </div>
                    <span className="font-medium text-slate-200">{device.value}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${device.color} rounded-full transition-all duration-1000 ease-out`} style={{ width: device.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-500">
            <h3 className="font-semibold text-slate-200 mb-6">Traffic Sources</h3>
            <div className="space-y-4">
              {[
                { label: 'Direct', value: '4,230', percent: 45 },
                { label: 'Social Media', value: '3,105', percent: 32 },
                { label: 'Organic Search', value: '1,504', percent: 15 },
                { label: 'Referral', value: '850', percent: 8 },
              ].map((source, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                  <div>
                    <div className="text-sm font-medium text-slate-200">{source.label}</div>
                    <div className="text-xs text-slate-500">{source.percent}%</div>
                  </div>
                  <div className="text-sm font-semibold text-slate-100">{source.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Geographies */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 animate-in fade-in slide-in-from-right-8 duration-500 delay-500">
            <h3 className="font-semibold text-slate-200 mb-6">Top Countries</h3>
            <div className="space-y-5">
              {[
                { country: 'United States', code: 'US', percent: 42, color: 'bg-blue-500' },
                { country: 'Germany', code: 'DE', percent: 18, color: 'bg-red-500' },
                { country: 'United Kingdom', code: 'UK', percent: 12, color: 'bg-indigo-500' },
                { country: 'Japan', code: 'JP', percent: 8, color: 'bg-pink-500' },
                { country: 'Other', code: 'globe', percent: 20, color: 'bg-slate-600' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 text-xs font-bold border border-slate-700">
                    {item.code === 'globe' ? <Globe className="w-4 h-4" /> : item.code}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">{item.country}</span>
                      <span className="text-slate-500">{item.percent}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} transition-all duration-1000 ease-out`} style={{ width: `${item.percent}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Analytics;
