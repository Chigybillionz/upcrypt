import React from 'react';
import { Wallet, Lock, CheckCircle, Calendar } from 'lucide-react';

const StatsRow = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Budget */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-36">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-semibold text-sm">Total Budget</span>
          <Wallet className="w-5 h-5 text-[#3b3df2]" />
        </div>
        <div>
          <div className="text-4xl font-bold text-gray-900 tracking-tight">24,500</div>
          <div className="text-gray-500 text-sm mt-1">USDC</div>
        </div>
      </div>

      {/* Locked in Escrow */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border-l-[4px] border-l-[#3b3df2] border-t border-r border-b border-gray-100 flex flex-col justify-between h-36">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-semibold text-sm">Locked in Escrow</span>
          <Lock className="w-5 h-5 text-[#3b3df2]" />
        </div>
        <div>
          <div className="text-4xl font-bold text-[#3b3df2] tracking-tight">12,250</div>
          <div className="text-gray-500 text-sm mt-1">USDC</div>
        </div>
      </div>

      {/* Released */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-36">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-semibold text-sm">Released</span>
          <CheckCircle className="w-5 h-5 text-[#10b981]" />
        </div>
        <div>
          <div className="text-4xl font-bold text-gray-900 tracking-tight">12,250</div>
          <div className="text-gray-500 text-sm mt-1">USDC</div>
        </div>
      </div>

      {/* Next Milestone */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-36">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-semibold text-sm">Next Milestone</span>
          <Calendar className="w-5 h-5 text-[#d97706]" />
        </div>
        <div>
          <div className="text-4xl font-bold text-[#d97706] tracking-tight">05</div>
          <div className="text-gray-500 text-sm mt-1">Days remaining</div>
        </div>
      </div>
    </div>
  );
};

export default StatsRow;
