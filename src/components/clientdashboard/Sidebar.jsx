import React from 'react';
import { LayoutGrid, FileText, Folder, MapPin, Plus, HelpCircle, LogOut } from 'lucide-react';

const Sidebar = ({ onNavigate, activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'workspace', icon: LayoutGrid, label: 'Workspace' },
    { id: 'contracts', icon: FileText, label: 'Contracts' },
    { id: 'files', icon: Folder, label: 'Files' },
    { id: 'milestones', icon: MapPin, label: 'Milestones' },
  ];

  return (
    <aside className="w-64 border-r border-gray-100 bg-[#f8f9fc] flex flex-col min-h-screen">
      {/* Brand / Logo Area */}
      <div className="p-6 pb-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#3b3df2] rounded-xl flex items-center justify-center shadow-md">
          {/* Simple geometric logo resembling the mockup */}
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-transparent border-b-white rounded-sm"></div>
        </div>
        <div>
          <h1 className="text-[#3b3df2] font-bold text-xl leading-none tracking-tight">Upcrypt</h1>
          <span className="text-gray-500 text-xs font-medium tracking-wide">Premium Tier</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab && setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full transition-all ${
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
      <div className="p-4 space-y-2 mb-2">
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white rounded-lg w-full font-semibold text-sm transition-all shadow-md mb-6">
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm transition-all">
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
  );
};

export default Sidebar;
