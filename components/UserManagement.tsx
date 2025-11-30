import React, { useState } from 'react';
import { ArrowLeft, Search, Plus, MoreVertical, Shield, ShieldAlert, X, Check } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
  lastActive: string;
}

const initialUsers: User[] = [
  { id: '1', name: 'Alex Morgan', email: 'alex.m@startup.com', role: 'Admin', status: 'Active', lastActive: '2 mins ago' },
  { id: '2', name: 'Sarah Connor', email: 'sarah.c@startup.com', role: 'Editor', status: 'Active', lastActive: '1 hour ago' },
  { id: '3', name: 'John Doe', email: 'john.d@startup.com', role: 'Viewer', status: 'Inactive', lastActive: '3 days ago' },
  { id: '4', name: 'Emily Blunt', email: 'emily.b@startup.com', role: 'Editor', status: 'Active', lastActive: '5 hours ago' },
  { id: '5', name: 'Michael Scott', email: 'm.scott@startup.com', role: 'Viewer', status: 'Active', lastActive: '1 day ago' },
  { id: '6', name: 'David Wallace', email: 'd.wallace@startup.com', role: 'Admin', status: 'Active', lastActive: '2 days ago' },
];

interface UserManagementProps {
  onBack: () => void;
}

const UserManagement: React.FC<UserManagementProps> = ({ onBack }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // New User Form State
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Viewer' as const });

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: 'Active',
      lastActive: 'Just now'
    };
    setUsers([user, ...users]);
    setIsModalOpen(false);
    setNewUser({ name: '', email: '', role: 'Viewer' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans selection:bg-brand-500 selection:text-white relative">
      <div className="max-w-6xl mx-auto">
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
                User Management
              </h1>
              <p className="text-slate-500 text-sm font-medium tracking-wide">Manage team access and permissions</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
             <div className="relative flex-grow md:flex-grow-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search users..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 w-full md:w-64 transition-all placeholder:text-slate-600"
                />
             </div>
             <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-brand-900/20 whitespace-nowrap"
             >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Add User</span>
             </button>
          </div>
        </header>

        {/* User List */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                   <th className="px-6 py-4 font-semibold">User</th>
                   <th className="px-6 py-4 font-semibold">Role</th>
                   <th className="px-6 py-4 font-semibold">Status</th>
                   <th className="px-6 py-4 font-semibold">Last Active</th>
                   <th className="px-6 py-4 font-semibold text-right">Actions</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-800/50">
                 {filteredUsers.map((user) => (
                   <tr key={user.id} className="group hover:bg-slate-800/30 transition-colors">
                     <td className="px-6 py-4">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-400 font-bold text-sm shrink-0">
                           {user.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                         </div>
                         <div>
                           <div className="font-medium text-slate-200">{user.name}</div>
                           <div className="text-sm text-slate-500">{user.email}</div>
                         </div>
                       </div>
                     </td>
                     <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${
                          user.role === 'Admin' 
                            ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' 
                            : user.role === 'Editor'
                            ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                            : 'bg-slate-700/30 text-slate-400 border-slate-700/50'
                        }`}>
                          {user.role === 'Admin' && <ShieldAlert className="w-3 h-3" />}
                          {user.role === 'Editor' && <Shield className="w-3 h-3" />}
                          {user.role}
                        </span>
                     </td>
                     <td className="px-6 py-4">
                       <div className="flex items-center gap-2">
                         {user.status === 'Active' ? (
                           <>
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                             <span className="text-emerald-500 text-sm font-medium">Active</span>
                           </>
                         ) : (
                            <>
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                             <span className="text-slate-500 text-sm font-medium">Inactive</span>
                           </>
                         )}
                       </div>
                     </td>
                     <td className="px-6 py-4 text-sm text-slate-500 whitespace-nowrap">
                       {user.lastActive}
                     </td>
                     <td className="px-6 py-4 text-right">
                       <button className="text-slate-500 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors">
                         <MoreVertical className="w-4 h-4" />
                       </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           
           {filteredUsers.length === 0 && (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-600">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-slate-300 font-medium mb-1">No users found</h3>
                <p className="text-slate-500 text-sm">Try adjusting your search terms</p>
              </div>
           )}
        </div>
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md shadow-2xl p-6 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Add New User</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={newUser.name}
                  onChange={e => setNewUser({...newUser, name: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                  placeholder="e.g. Jane Smith"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={newUser.email}
                  onChange={e => setNewUser({...newUser, email: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                  placeholder="e.g. jane@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Role</label>
                <select 
                  value={newUser.role}
                  onChange={e => setNewUser({...newUser, role: e.target.value as any})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none"
                >
                  <option value="Viewer">Viewer</option>
                  <option value="Editor">Editor</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              
              <div className="pt-4 flex justify-end space-x-3">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2 rounded-xl text-sm font-medium transition-colors shadow-lg shadow-brand-900/20"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
