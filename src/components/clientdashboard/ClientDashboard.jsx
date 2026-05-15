import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import ProjectHeader from './ProjectHeader';
import StatsRow from './StatsRow';
import ActiveMilestones from './ActiveMilestones';
import RightSidebar from './RightSidebar';
import ContractsView from './ContractsView';
import MilestonesView from './MilestonesView';
import FilesView from './FilesView';
import CreateProjectView from './CreateProjectView';
import SupportView from './SupportView';
import SettingsView from './SettingsView';

const ClientDashboard = ({ onNavigate, onOpenConnectModal }) => {
  const [activeTab, setActiveTab] = useState('workspace');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8f9fc] font-sans overflow-hidden">
      {/* Sidebar is fixed on the left */}
      <Sidebar 
        onNavigate={onNavigate} 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsMobileMenuOpen(false); // Close mobile menu on navigate
        }} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      {/* Main Content Area next to Sidebar */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navigation Bar */}
        <TopNav 
          onOpenConnectModal={onOpenConnectModal} 
          onOpenSettings={() => {
            setActiveTab('settings');
            setIsMobileMenuOpen(false);
          }} 
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        
        {/* Scrollable Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-[1200px] mx-auto space-y-8">
            {activeTab === 'workspace' && (
              <>
                <ProjectHeader />
                <StatsRow />
                {/* Split Grid for Milestones and Right Sidebar */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  <div className="xl:col-span-2">
                    <ActiveMilestones />
                  </div>
                  <div className="xl:col-span-1">
                    <RightSidebar />
                  </div>
                </div>
              </>
            )}

            {activeTab === 'contracts' && (
              <ContractsView />
            )}

            {activeTab === 'milestones' && (
              <MilestonesView />
            )}

            {activeTab === 'files' && (
              <FilesView />
            )}

            {activeTab === 'new-project' && (
              <CreateProjectView onCancel={() => setActiveTab('workspace')} />
            )}

            {activeTab === 'support' && (
              <SupportView />
            )}

            {activeTab === 'settings' && (
              <SettingsView />
            )}

            {/* Other tabs can go here later */}

            <footer className="pt-12 pb-4 text-center text-sm font-medium text-gray-500">
              © 2024 Upcrypt Protocol. Secure Freelance Management.
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientDashboard;
