import React, { useState } from 'react';
import { ArrowLeft, User, Lock, Bell, CreditCard, Users, Save, Check, Globe, Shield, Mail, Slack, Smartphone, Loader2 } from 'lucide-react';

interface SettingsProps {
  onBack: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    slack: true,
    marketing: false
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }, 1200);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: <User className="w-5 h-5" /> },
    { id: 'security', label: 'Security', icon: <Lock className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'billing', label: 'Billing', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'team', label: 'Team', icon: <Users className="w-5 h-5" /> },
  ];

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
                Settings
              </h1>
              <p className="text-slate-500 text-sm font-medium tracking-wide">Manage your preferences and system configuration</p>
            </div>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving || saveSuccess}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg ${
                saveSuccess 
                ? 'bg-emerald-600 text-white shadow-emerald-900/20 cursor-default'
                : 'bg-brand-600 hover:bg-brand-500 text-white shadow-brand-900/20'
            }`}
          >
            {isSaving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
            ) : saveSuccess ? (
                <Check className="w-4 h-4" />
            ) : (
                <Save className="w-4 h-4" />
            )}
            <span>
                {isSaving ? 'Saving...' : saveSuccess ? 'Saved!' : 'Save Changes'}
            </span>
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-9">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8">
              
              {/* General Settings */}
              {activeTab === 'general' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Profile Information</h3>
                    <p className="text-slate-500 text-sm mb-6">Update your account's profile information and email address.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">First Name</label>
                        <input type="text" defaultValue="Alex" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Last Name</label>
                        <input type="text" defaultValue="Morgan" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-slate-300">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input type="email" defaultValue="alex.m@startup.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-8">
                    <h3 className="text-lg font-medium text-white mb-1">Regional Preferences</h3>
                    <p className="text-slate-500 text-sm mb-6">Set your language and timezone.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Language</label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <select className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none">
                            <option>English (US)</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Timezone</label>
                        <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none">
                          <option>Pacific Time (PT)</option>
                          <option>Eastern Time (ET)</option>
                          <option>Greenwich Mean Time (GMT)</option>
                          <option>Central European Time (CET)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === 'security' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Password</h3>
                    <p className="text-slate-500 text-sm mb-6">Change your password to keep your account secure.</p>
                    
                    <div className="space-y-4 max-w-lg">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Current Password</label>
                        <input type="password" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">New Password</label>
                        <input type="password" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Confirm New Password</label>
                        <input type="password" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-8">
                    <h3 className="text-lg font-medium text-white mb-4">Two-Factor Authentication</h3>
                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-brand-500/10 rounded-lg text-brand-400">
                          <Shield className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-200">Authenticator App</h4>
                          <p className="text-sm text-slate-500">Secure your account with TOTP (Time-based One-Time Password).</p>
                        </div>
                      </div>
                      <button className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors">Setup</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notification Settings */}
              {activeTab === 'notifications' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-6">Notification Preferences</h3>
                    
                    <div className="space-y-4">
                      {[
                        { id: 'email', label: 'Email Notifications', desc: 'Receive daily summaries and critical alerts.', icon: <Mail className="w-5 h-5" /> },
                        { id: 'push', label: 'Push Notifications', desc: 'Get real-time updates on your mobile device.', icon: <Smartphone className="w-5 h-5" /> },
                        { id: 'slack', label: 'Slack Integration', desc: 'Send activity logs to your dedicated channel.', icon: <Slack className="w-5 h-5" /> },
                        { id: 'marketing', label: 'Marketing Emails', desc: 'Receive news about new features and updates.', icon: <Globe className="w-5 h-5" /> }
                      ].map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-xl">
                          <div className="flex items-center space-x-4">
                            <div className="text-slate-400">{item.icon}</div>
                            <div>
                              <h4 className="font-medium text-slate-200">{item.label}</h4>
                              <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => setNotifications(prev => ({...prev, [item.id]: !prev[item.id as keyof typeof notifications]}))}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${notifications[item.id as keyof typeof notifications] ? 'bg-brand-600' : 'bg-slate-700'}`}
                          >
                            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${notifications[item.id as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-1'}`} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Settings */}
              {activeTab === 'billing' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Current Plan</h3>
                    <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-2xl p-6 relative overflow-hidden">
                      <div className="relative z-10 flex justify-between items-start">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold mb-2">PRO PLAN</span>
                          <h4 className="text-3xl font-bold text-white mb-1">$29<span className="text-lg text-indigo-200 font-normal">/mo</span></h4>
                          <p className="text-indigo-200 text-sm">Billed monthly. Next invoice on Apr 1, 2024.</p>
                        </div>
                        <div className="text-right">
                          <button className="bg-white text-indigo-900 px-4 py-2 rounded-lg font-medium text-sm hover:bg-indigo-50 transition-colors">Upgrade Plan</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-8">
                    <h3 className="text-lg font-medium text-white mb-4">Payment Method</h3>
                    <div className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="bg-slate-800 p-2 rounded text-slate-300">
                          <CreditCard className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-slate-200 font-medium">•••• •••• •••• 4242</p>
                          <p className="text-slate-500 text-sm">Expires 12/25</p>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-white text-sm font-medium">Edit</button>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-8">
                    <h3 className="text-lg font-medium text-white mb-4">Invoice History</h3>
                    <div className="overflow-hidden border border-slate-800 rounded-xl">
                      <table className="w-full text-left text-sm text-slate-400">
                        <thead className="bg-slate-950 text-slate-200">
                          <tr>
                            <th className="px-4 py-3 font-medium">Date</th>
                            <th className="px-4 py-3 font-medium">Amount</th>
                            <th className="px-4 py-3 font-medium">Status</th>
                            <th className="px-4 py-3 font-medium text-right">Invoice</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                          {[
                            { date: 'Mar 1, 2024', amount: '$29.00', status: 'Paid' },
                            { date: 'Feb 1, 2024', amount: '$29.00', status: 'Paid' },
                            { date: 'Jan 1, 2024', amount: '$29.00', status: 'Paid' },
                          ].map((inv, i) => (
                            <tr key={i} className="hover:bg-slate-900/50">
                              <td className="px-4 py-3">{inv.date}</td>
                              <td className="px-4 py-3">{inv.amount}</td>
                              <td className="px-4 py-3">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400">
                                  {inv.status}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-right">
                                <button className="text-brand-400 hover:text-brand-300">Download</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Team Settings */}
              {activeTab === 'team' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Team Members</h3>
                      <p className="text-slate-500 text-sm">Manage who has access to this project.</p>
                    </div>
                    <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Invite Member</button>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: 'Alex Morgan', role: 'Owner', email: 'alex.m@startup.com', initial: 'A' },
                      { name: 'Sarah Connor', role: 'Editor', email: 'sarah.c@startup.com', initial: 'S' },
                      { name: 'David Wallace', role: 'Viewer', email: 'd.wallace@startup.com', initial: 'D' },
                    ].map((member, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                            {member.initial}
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-200">{member.name}</h4>
                            <p className="text-sm text-slate-500">{member.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-slate-400">{member.role}</span>
                          <button className="text-slate-500 hover:text-slate-300">Edit</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
