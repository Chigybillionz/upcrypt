import React from 'react';
import { 
  UserCircle2, 
  ShieldCheck, 
  Camera,
  AtSign,
  Code2,
  Smartphone,
  Wallet,
  KeyRound
} from 'lucide-react';

const SettingsView = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      
      {/* Header */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Account Settings</h2>
        <p className="text-gray-600 text-lg">
          Manage your professional profile, security preferences, and financial notifications.
        </p>
      </div>

      {/* Profile Information Card */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
            <UserCircle2 className="w-6 h-6 text-[#3b3df2]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Profile Information</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg ring-1 ring-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-2 right-2 w-8 h-8 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white rounded-lg flex items-center justify-center shadow-md transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Display Name</label>
                <input 
                  type="text" 
                  defaultValue="Alex Rivera" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3b3df2] focus:border-transparent transition-all text-gray-900 font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Public Website</label>
                <input 
                  type="text" 
                  defaultValue="https://rivera.design" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3b3df2] focus:border-transparent transition-all text-gray-900 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Bio / Company Description</label>
              <textarea 
                rows="3" 
                defaultValue="Leading creative strategies for decentralized ecosystems. Focused on institutional-grade UI/UX for Web3."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3b3df2] focus:border-transparent transition-all text-gray-900 font-medium resize-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <AtSign className="w-5 h-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  defaultValue="@arivera_ux" 
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3b3df2] focus:border-transparent transition-all text-gray-900 font-medium"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Code2 className="w-5 h-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  defaultValue="arivera-dev" 
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3b3df2] focus:border-transparent transition-all text-gray-900 font-medium"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-50">
              <button className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                Discard Changes
              </button>
              <button className="px-6 py-2.5 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white font-bold rounded-xl transition-colors shadow-sm">
                Save Profile
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Security & Wallet Card */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#3b3df2]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Security & Wallet</h3>
        </div>

        <div className="space-y-4">
          
          {/* Row 1: 2FA */}
          <div className="bg-[#f8f9fc] rounded-xl p-5 flex items-center justify-between group border border-transparent hover:border-blue-100 transition-colors">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#3b3df2] flex-shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Two-Factor Authentication (2FA)</h4>
                <p className="text-sm text-gray-500 mt-0.5">Add an extra layer of security to your account.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-[#3b3df2] text-white text-xs font-bold px-3 py-1 rounded-full">Active</span>
              <button className="text-[#3b3df2] font-semibold text-sm hover:underline">Manage</button>
            </div>
          </div>

          {/* Row 2: Primary Wallet */}
          <div className="bg-[#f8f9fc] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group border border-transparent hover:border-purple-100 transition-colors">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                <Wallet className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Primary Wallet</h4>
                <div className="inline-block bg-gray-200 text-gray-700 text-xs font-mono font-bold px-2 py-1 rounded mt-1.5">
                  0x71C...8E2d
                </div>
              </div>
            </div>
            <div>
              <button className="w-full sm:w-auto px-5 py-2 bg-white border border-gray-200 text-gray-700 font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                Change Wallet
              </button>
            </div>
          </div>

          {/* Row 3: Account Password */}
          <div className="bg-[#f8f9fc] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group border border-transparent hover:border-orange-100 transition-colors">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                <KeyRound className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Account Password</h4>
                <p className="text-sm text-gray-500 mt-0.5">Last changed 4 months ago.</p>
              </div>
            </div>
            <div>
              <button className="w-full sm:w-auto px-5 py-2 bg-white border border-gray-200 text-gray-700 font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                Update
              </button>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default SettingsView;
