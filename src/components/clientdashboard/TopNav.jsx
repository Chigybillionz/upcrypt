import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

const TopNav = ({ onOpenConnectModal }) => {
  return (
    <header className="flex items-center justify-between px-8 py-5 bg-[#f8f9fc]">
      {/* Left side: Search */}
      <div className="flex-1 max-w-md">
        <div className="relative flex items-center">
          <Search className="absolute left-3 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search workspace..." 
            className="w-full pl-10 pr-4 py-2 bg-[#edf0f5] border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3b3df2] focus:bg-white transition-all placeholder-gray-500"
          />
        </div>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-5">
        {/* Network Status Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#e5f4ef] rounded-full text-xs font-semibold text-[#0f8c5b]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
          0x71C...3E4D
        </div>

        {/* Connect Wallet Button */}
        <button 
          onClick={onOpenConnectModal}
          className="px-5 py-2 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white text-sm font-semibold rounded-lg shadow-sm transition-all"
        >
          Connect Wallet
        </button>

        {/* Icons */}
        <button className="text-gray-500 hover:text-gray-800 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-800 transition-colors">
          <Settings className="w-5 h-5" />
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-gray-100 cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
