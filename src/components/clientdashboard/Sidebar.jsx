import React from 'react';
import { LayoutGrid, FileText, Folder, MapPin, Plus, HelpCircle, LogOut, X } from 'lucide-react';

const Sidebar = ({ onNavigate, activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { id: 'workspace', icon: LayoutGrid, label: 'Workspace' },
    { id: 'contracts', icon: FileText, label: 'Contracts' },
    { id: 'files', icon: Folder, label: 'Files' },
    { id: 'milestones', icon: MapPin, label: 'Milestones' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 border-r border-gray-100 bg-[#f8f9fc] flex flex-col h-full
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 pb-8 flex items-center justify-between">
          <img src="/logo.png" alt="Upcrypt Logo" className="h-12 w-auto object-contain scale-110 origin-left" />
          <button 
            className="lg:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-4 flex flex-col gap-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab && setActiveTab(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full transition-all flex-shrink-0 ${
                  isActive 
                    ? 'bg-[#3b3df2] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 space-y-2 mb-2 flex-shrink-0">
          <button 
            onClick={() => setActiveTab && setActiveTab('new-project')}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white rounded-lg w-full font-semibold text-sm transition-all shadow-md mb-6"
          >
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </button>

          <button 
            onClick={() => setActiveTab && setActiveTab('support')}
            className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm transition-all"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="font-semibold text-sm">Support</span>
          </button>
          <button 
            onClick={() => onNavigate?.("landing")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-semibold text-sm">Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
