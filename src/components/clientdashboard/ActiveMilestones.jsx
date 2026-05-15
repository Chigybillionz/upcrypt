import React from 'react';
import { CheckCircle2, ClipboardList, RotateCw, Paperclip } from 'lucide-react';

const ActiveMilestones = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-gray-900">Active Milestones</h3>
        <button className="text-[#3b3df2] font-semibold text-sm hover:text-[#2b2dd2] transition-colors">
          View Timeline →
        </button>
      </div>

      <div className="space-y-4">
        {/* Milestone 1: Completed */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#10b981]"></div>
          <div className="flex items-start gap-4 ml-2">
            <div className="w-12 h-12 rounded-full bg-[#e5f4ef] flex items-center justify-center flex-shrink-0 mt-1">
              <CheckCircle2 className="w-6 h-6 text-[#10b981]" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <h4 className="text-lg font-bold text-gray-900 mb-1">Landing Page Wireframes</h4>
                <span className="text-xs font-bold text-[#10b981] mt-1">Completed & Released</span>
              </div>
              <p className="text-gray-500 text-sm">Foundational UX architecture for the core landing experience.</p>
            </div>
          </div>
        </div>

        {/* Milestone 2: Pending Approval */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#3b3df2]"></div>
          <div className="flex items-start gap-4 ml-2">
            <div className="w-12 h-12 rounded-full bg-[#e0e2ff] flex items-center justify-center flex-shrink-0 mt-1">
              <ClipboardList className="w-6 h-6 text-[#3b3df2]" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-bold text-gray-900 mb-1">Frontend Implementation</h4>
                <span className="text-xs font-bold text-[#3b3df2] mt-1">Pending Approval</span>
              </div>
              <p className="text-gray-500 text-sm mb-6 max-w-lg">
                High-fidelity responsive UI built with Tailwind CSS and Framer Motion.
              </p>
              
              <div className="flex items-center gap-3">
                <button className="px-5 py-2 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white font-semibold rounded-lg text-sm shadow-sm transition-colors">
                  Approve & Release
                </button>
                <button className="px-5 py-2 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm">
                  Request Revision
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors ml-2">
                  <Paperclip className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone 3: In Progress */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden opacity-60">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gray-200"></div>
          <div className="flex items-start gap-4 ml-2">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
              <RotateCw className="w-6 h-6 text-gray-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-gray-900">Smart Contract Integration</h4>
                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded">In Progress</span>
              </div>
              {/* Progress bar placeholder */}
              <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-[#3b3df2]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveMilestones;
