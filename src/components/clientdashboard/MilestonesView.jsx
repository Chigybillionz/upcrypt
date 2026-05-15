import React from 'react';
import { Plus, CheckCircle2, ClipboardList, Clock, Lock, MoreHorizontal } from 'lucide-react';

const MilestonesView = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Project Milestones</h2>
          <p className="text-gray-600">
            Track progress and release payments for <span className="text-[#3b3df2] font-semibold">Contract #882</span>.
          </p>
        </div>
        <button className="px-5 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-semibold rounded-lg flex items-center gap-2 transition-colors shadow-sm text-sm">
          <Plus className="w-4 h-4" />
          New Milestone
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center h-32">
          <span className="text-gray-400 font-bold text-xs tracking-wider mb-2 uppercase">Total Milestones</span>
          <div className="text-5xl font-bold text-gray-900 tracking-tight">5</div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border-l-[4px] border-l-[#10b981] border-t border-r border-b border-gray-100 flex flex-col justify-center h-32 relative overflow-hidden">
          <span className="text-gray-400 font-bold text-xs tracking-wider mb-2 uppercase">Completed</span>
          <div className="text-5xl font-bold text-gray-900 tracking-tight">3</div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border-l-[4px] border-l-[#3b3df2] border-t border-r border-b border-gray-100 flex flex-col justify-center h-32 relative overflow-hidden">
          <span className="text-gray-400 font-bold text-xs tracking-wider mb-2 uppercase">In Progress</span>
          <div className="text-5xl font-bold text-gray-900 tracking-tight">1</div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center h-32">
          <span className="text-gray-400 font-bold text-xs tracking-wider mb-2 uppercase">Remaining</span>
          <div className="text-5xl font-bold text-gray-900 tracking-tight">1</div>
        </div>
      </div>

      {/* Milestones List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-5 px-6 text-sm font-semibold text-gray-600">Milestone Name</th>
                <th className="py-5 px-6 text-sm font-semibold text-gray-600">Status</th>
                <th className="py-5 px-6 text-sm font-semibold text-gray-600">Amount</th>
                <th className="py-5 px-6 text-sm font-semibold text-gray-600">Due Date</th>
                <th className="py-5 px-6 text-sm font-semibold text-gray-600 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              
              {/* Row 1: Completed */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e5f4ef] flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">Initial Smart Contract Audit</span>
                  </div>
                </td>
                <td className="py-5 px-6">
                  <span className="px-3 py-1 bg-[#e5f4ef] text-[#10b981] text-xs font-bold rounded-full">
                    Completed
                  </span>
                </td>
                <td className="py-5 px-6 text-sm font-medium text-gray-700">2,500 USDC</td>
                <td className="py-5 px-6 text-sm font-medium text-gray-500">Oct 12, 2023</td>
                <td className="py-5 px-6 text-right">
                  <button className="text-[#3b3df2] font-semibold text-sm hover:text-[#2b2dd2] transition-colors">
                    View Receipt
                  </button>
                </td>
              </tr>

              {/* Row 2: In Review */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e0e2ff] flex items-center justify-center">
                      <ClipboardList className="w-4 h-4 text-[#3b3df2]" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">Frontend Integration</span>
                  </div>
                </td>
                <td className="py-5 px-6">
                  <span className="px-3 py-1 bg-[#e0e2ff] text-[#3b3df2] text-xs font-bold rounded-full">
                    In Review
                  </span>
                </td>
                <td className="py-5 px-6 text-sm font-medium text-gray-700">4,000 USDC</td>
                <td className="py-5 px-6 text-sm font-medium text-gray-500">Oct 28, 2023</td>
                <td className="py-5 px-6 text-right">
                  <button className="px-4 py-2 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white font-semibold rounded-lg text-sm shadow-sm transition-colors">
                    Approve & Release
                  </button>
                </td>
              </tr>

              {/* Row 3: Pending */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#8b5cf6]" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">Mainnet Deployment</span>
                  </div>
                </td>
                <td className="py-5 px-6">
                  <span className="px-3 py-1 bg-[#ede9fe] text-[#8b5cf6] text-xs font-bold rounded-full">
                    Pending
                  </span>
                </td>
                <td className="py-5 px-6 text-sm font-medium text-gray-700">3,500 USDC</td>
                <td className="py-5 px-6 text-sm font-medium text-gray-500">Nov 15, 2023</td>
                <td className="py-5 px-6 text-right">
                  <span className="text-gray-400 font-semibold text-sm">
                    View Submission
                  </span>
                </td>
              </tr>

              {/* Row 4: Upcoming */}
              <tr className="hover:bg-gray-50 transition-colors opacity-70">
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center">
                      <Lock className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="font-semibold text-gray-600 text-sm">Post-Launch Support (1 Mo)</span>
                  </div>
                </td>
                <td className="py-5 px-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded-full">
                    Upcoming
                  </span>
                </td>
                <td className="py-5 px-6 text-sm font-medium text-gray-600">1,500 USDC</td>
                <td className="py-5 px-6 text-sm font-medium text-gray-400">Dec 15, 2023</td>
                <td className="py-5 px-6 text-right">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreHorizontal className="w-5 h-5 inline" />
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        
        {/* Progress Tracking */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center">
          <h3 className="text-sm font-bold text-gray-900 mb-6">Milestone Progress Tracking</h3>
          
          <div className="w-full flex h-2.5 rounded-full overflow-hidden mb-6">
            <div className="bg-[#10b981]" style={{ width: '60%' }}></div>
            <div className="bg-[#3b3df2]" style={{ width: '10%' }}></div>
            <div className="bg-[#e0e2ff]" style={{ width: '30%' }}></div>
          </div>
          
          <div className="flex items-center justify-between text-xs font-bold">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
              <span className="text-gray-700">Funds Released (60%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3b3df2]"></span>
              <span className="text-gray-700">In Review (10%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e0e2ff]"></span>
              <span className="text-gray-700">Remaining (30%)</span>
            </div>
          </div>
        </div>

        {/* Automated Payouts Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-6">
          <div className="w-32 h-32 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0 flex items-center justify-center">
            {/* Placeholder for the illustration in the mockup */}
            <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt="Blockchain Escrow" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">Automated Payouts</h3>
            <p className="text-xs text-gray-800 leading-relaxed font-medium mb-3">
              Funds are held in a secure multi-sig escrow. Releasing a milestone triggers an immediate smart contract execution for instant USDC settlement.
            </p>
            <button className="text-[#3b3df2] font-semibold text-xs hover:text-[#2b2dd2] transition-colors">
              Learn about Escrow security
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default MilestonesView;
