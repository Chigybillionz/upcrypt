import React from 'react';
import { Plus, Download } from 'lucide-react';

const ContractsView = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Legal Contracts</h2>
          <p className="text-gray-600">
            Manage and track your signed agreements and service statements.
          </p>
        </div>
        <button className="px-5 py-2.5 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white font-semibold rounded-lg flex items-center gap-2 transition-colors shadow-sm text-sm">
          <Plus className="w-4 h-4" />
          New Contract
        </button>
      </div>

      {/* Contract List */}
      <div className="space-y-4 pt-4">
        
        {/* Contract 1: Master Service Agreement */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Master Service Agreement</h3>
            <p className="text-gray-500 text-sm">Signed Oct 12, 2023</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-[#e5f4ef] text-[#10b981] text-xs font-bold rounded-full">
              Active
            </span>
            <button className="flex items-center gap-2 text-[#3b3df2] font-semibold text-sm hover:text-[#2b2dd2] transition-colors">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>

        {/* Contract 2: DeFi Protocol Rebrand SOW */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">DeFi Protocol Rebrand SOW</h3>
            <p className="text-gray-500 text-sm">Project ID: UP-2024-0882 • Value: 45,000 USDC</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-[#e0e2ff] text-[#3b3df2] text-xs font-bold rounded-full">
              Signed
            </span>
            <button className="text-[#3b3df2] font-semibold text-sm hover:text-[#2b2dd2] transition-colors ml-2">
              View Terms
            </button>
            <button className="flex items-center gap-2 text-[#3b3df2] font-semibold text-sm hover:text-[#2b2dd2] transition-colors">
              <Download className="w-4 h-4" /> Download
            </button>
          </div>
        </div>

        {/* Contract 3: Non-Disclosure Agreement */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-l-[#d97706] border-t border-r border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Non-Disclosure Agreement</h3>
            <p className="text-[#d97706] text-sm font-medium">Awaiting client signature...</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-orange-50 text-[#d97706] text-xs font-bold rounded-full">
              Pending
            </span>
            <button className="px-6 py-2 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white font-semibold rounded-lg transition-colors shadow-sm text-sm">
              Sign Now
            </button>
          </div>
        </div>

      </div>

      {/* Compliance Summary */}
      <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Legal Compliance Summary</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Total Contracts</p>
            <div className="text-4xl font-bold text-gray-900">08</div>
          </div>
          
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Sign Rate</p>
            <div className="text-4xl font-bold text-gray-900">92%</div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-700 font-medium">On-chain Verification Status</span>
            </div>
            <div className="w-full bg-[#e0e2ff] rounded-full h-2.5 mb-2">
              <div className="bg-[#3b3df2] h-2.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <span className="text-xs font-bold text-gray-600">85% Verified</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContractsView;
