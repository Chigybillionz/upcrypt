import React from 'react';
import { MessageSquare } from 'lucide-react';

const ProjectHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Project Workspace</h2>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-[#3b3df2]">DeFi Protocol Rebrand</h1>
          <span className="px-3 py-1 bg-[#e0e2ff] text-[#3b3df2] text-xs font-semibold rounded-full mt-1">
            <span className="w-1.5 h-1.5 inline-block bg-[#3b3df2] rounded-full mr-1.5 mb-0.5"></span>
            In Progress - 2/4 Milestones
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm">
          View Contract
        </button>
        <button className="px-5 py-2.5 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white font-semibold rounded-lg flex items-center gap-2 transition-colors shadow-sm text-sm">
          <MessageSquare className="w-4 h-4" />
          Contact Freelancer
        </button>
      </div>
    </div>
  );
};

export default ProjectHeader;
