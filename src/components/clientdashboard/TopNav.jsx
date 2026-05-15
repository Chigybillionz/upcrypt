import React, { useState } from 'react';
import { Search, Bell, Settings, Banknote, AlertTriangle, Wallet, FileSignature, X, Copy, Shield, ArrowRightLeft, HelpCircle, LogOut, Menu } from 'lucide-react';

const TopNav = ({ onOpenConnectModal, onOpenSettings, onToggleMobileMenu }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifications = [
    {
      id: 1,
      icon: Banknote,
      iconBg: 'bg-blue-50',
      iconColor: 'text-[#3b3df2]',
      title: 'Milestone 1 Released',
      desc: '$500 USDC has been released from escrow to your wallet.',
      time: '2 mins ago',
      unread: true
    },
    {
      id: 2,
      icon: AlertTriangle,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-500',
      title: 'New Dispute Raised - Project #882',
      desc: 'A client has opened a dispute regarding the last deliverable.',
      time: '45 mins ago',
      unread: true
    },
    {
      id: 3,
      icon: Wallet,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      title: 'Escrow Funded: UI Redesign',
      desc: 'Client has deposited 1,200 USDC into the contract escrow.',
      time: '3 hours ago',
      unread: false
    },
    {
      id: 4,
      icon: FileSignature,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      title: 'Contract Signed',
      desc: 'The smart contract for "Backend API" has been executed.',
      time: 'Yesterday',
      unread: false
    }
  ];

  return (
    <header className="flex flex-wrap items-center justify-between px-3 sm:px-8 py-3 sm:py-5 bg-[#f8f9fc] relative z-40 gap-y-4 gap-x-2">
      
      {/* Mobile Menu Toggle & Logo */}
      <div className="flex items-center gap-2 lg:hidden">
        <button 
          onClick={onToggleMobileMenu}
          className="p-1.5 sm:p-2 -ml-1 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <img src="/logo.png" alt="Upcrypt Logo" className="h-6 sm:h-8 w-auto object-contain" />
      </div>

      {/* Left side: Search (Order last on mobile to drop to new line) */}
      <div className="flex-1 w-full lg:max-w-md order-last lg:order-none">
        <div className="relative flex items-center">
          <Search className="absolute left-3 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search workspace..." 
            className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-[#edf0f5] border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3b3df2] focus:bg-white transition-all placeholder-gray-500"
          />
        </div>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-2 sm:gap-5 ml-auto lg:ml-0">
        {/* Network Status Pill */}
        <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#e5f4ef] rounded-full text-[10px] sm:text-xs font-semibold text-[#0f8c5b]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
          0x71C...3E4D
        </div>

        {/* Connect Wallet Button */}
        <button 
          onClick={onOpenConnectModal}
          className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all whitespace-nowrap"
        >
          Connect
          <span className="hidden sm:inline"> Wallet</span>
        </button>

        {/* Notifications Dropdown Container */}
        <div className="relative">
          <button 
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            className="text-gray-500 hover:text-gray-800 transition-colors relative focus:outline-none"
          >
            <Bell className="w-5 h-5" />
            {/* Unread indicator dot */}
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#f8f9fc]" />
          </button>

          {/* Notifications Panel */}
          {showNotifications && (
            <div className="fixed inset-0 z-[60] bg-white flex flex-col sm:absolute sm:inset-auto sm:right-0 sm:mt-3 sm:w-[22rem] sm:rounded-xl sm:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] sm:border sm:border-gray-100 sm:block overflow-hidden">
              
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-4 sm:py-3 border-b border-gray-50 bg-white z-10">
                <h4 className="font-bold text-gray-900 text-base sm:text-sm">Notifications</h4>
                <div className="flex items-center gap-3 sm:gap-3">
                  <button className="text-sm sm:text-xs font-semibold text-[#3b3df2] hover:underline">
                    Mark all as read
                  </button>
                  <button 
                    onClick={() => setShowNotifications(false)}
                    className="p-2 sm:p-0 text-gray-400 hover:text-gray-700 transition-colors focus:outline-none bg-gray-50 sm:bg-transparent rounded-full sm:rounded-none"
                  >
                    <X className="w-5 h-5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto sm:max-h-96 pb-4 sm:pb-0">
                {notifications.map((notif) => {
                  const Icon = notif.icon;
                  return (
                    <div key={notif.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer relative">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notif.iconBg}`}>
                          <Icon className={`w-5 h-5 ${notif.iconColor}`} />
                        </div>
                        <div className="flex-1 min-w-0 pr-4">
                          <h5 className="text-base sm:text-sm font-bold text-gray-900 leading-tight mb-1">{notif.title}</h5>
                          <p className="text-sm sm:text-xs text-gray-600 leading-relaxed">{notif.desc}</p>
                          <span className="text-[11px] sm:text-[10px] font-semibold text-gray-400 mt-1 block">{notif.time}</span>
                        </div>
                      </div>
                      {notif.unread && (
                        <div className="absolute top-5 right-4 w-2 h-2 rounded-full bg-[#3b3df2]"></div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="bg-[#f8f9fc] p-4 sm:p-3 text-center border-t border-gray-50 mt-auto sm:mt-0">
                <button className="text-sm font-bold text-[#3b3df2] hover:underline">
                  View All Notifications
                </button>
              </div>

            </div>
          )}
        </div>

        <button 
          onClick={onOpenSettings}
          className="text-gray-500 hover:text-gray-800 transition-colors focus:outline-none"
        >
          <Settings className="w-5 h-5" />
        </button>

        {/* Profile Dropdown Container */}
        <div className="relative">
          <button 
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-gray-100 focus:outline-none block"
          >
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </button>

          {/* Profile Menu Panel */}
          {showProfileMenu && (
            <div className="fixed inset-0 z-[60] bg-white flex flex-col sm:absolute sm:inset-auto sm:right-0 sm:mt-3 sm:w-64 sm:rounded-xl sm:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] sm:border sm:border-gray-100 sm:block overflow-hidden">
              
              {/* Top Section */}
              <div className="bg-[#f8f9fc] p-6 sm:p-4 relative">
                <button 
                  onClick={() => setShowProfileMenu(false)}
                  className="absolute top-4 sm:top-3 right-4 sm:right-3 p-2 sm:p-0 text-gray-400 hover:text-gray-700 transition-colors focus:outline-none bg-white sm:bg-transparent rounded-full sm:rounded-none shadow-sm sm:shadow-none"
                >
                  <X className="w-5 h-5 sm:w-4 sm:h-4" />
                </button>
                
                <div className="flex items-center gap-4 sm:gap-3 mb-4 sm:mb-3">
                  <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-[#3b3df2] text-white flex items-center justify-center font-bold text-base sm:text-sm shadow-sm">
                    AR
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg sm:text-base leading-tight">Alex Rivera</h4>
                    <p className="text-sm sm:text-xs font-medium text-gray-500">Client Dashboard</p>
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 sm:px-3 py-3 sm:py-2 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                    <span className="text-sm sm:text-xs font-mono font-bold text-gray-700">0x71C...3E4F</span>
                  </div>
                  <button className="text-[#3b3df2] hover:text-[#2b2dd2] transition-colors p-1 sm:p-0">
                    <Copy className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </div>

              {/* Menu Links */}
              <div className="py-2 border-t border-gray-50 flex-1 sm:flex-none">
                <button 
                  onClick={() => {
                    setShowProfileMenu(false);
                    onOpenSettings();
                  }}
                  className="w-full flex items-center gap-3 px-6 sm:px-4 py-4 sm:py-2.5 text-base sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#3b3df2] transition-colors"
                >
                  <Settings className="w-5 h-5 sm:w-4 sm:h-4" />
                  Account Settings
                </button>
                
                <button className="w-full flex items-center gap-3 px-6 sm:px-4 py-4 sm:py-2.5 text-base sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#3b3df2] transition-colors">
                  <Shield className="w-5 h-5 sm:w-4 sm:h-4" />
                  Security & Privacy
                </button>

                <button className="w-full flex items-center gap-3 px-6 sm:px-4 py-4 sm:py-2.5 text-base sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#3b3df2] transition-colors">
                  <ArrowRightLeft className="w-5 h-5 sm:w-4 sm:h-4" />
                  Switch to Freelancer
                </button>

                <button className="w-full flex items-center gap-3 px-6 sm:px-4 py-4 sm:py-2.5 text-base sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#3b3df2] transition-colors">
                  <HelpCircle className="w-5 h-5 sm:w-4 sm:h-4" />
                  Support & Help
                </button>
              </div>

              {/* Footer / Logout */}
              <div className="py-2 border-t border-gray-50 mt-auto sm:mt-0">
                <button className="w-full flex items-center gap-3 px-6 sm:px-4 py-4 sm:py-2.5 text-base sm:text-sm font-bold text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="w-5 h-5 sm:w-4 sm:h-4" />
                  Sign Out
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNav;
