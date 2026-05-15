import React from 'react';
import { ShieldCheck, UploadCloud, MessageSquare, CheckCircle2, Star, ChevronRight } from 'lucide-react';

const RightSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Escrow Protected Card */}
      <div className="bg-gradient-to-br from-[#4f51f4] to-[#3032c2] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        {/* Background Shield Icon Accent */}
        <ShieldCheck className="absolute -right-4 -top-4 w-32 h-32 text-white opacity-10 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-blue-100 font-semibold text-sm mb-3">
            <ShieldCheck className="w-5 h-5" />
            ESCROW PROTECTED
          </div>
          <h3 className="text-2xl font-bold mb-2">Funds are Secure</h3>
          <p className="text-blue-50 text-sm leading-relaxed mb-6 opacity-90">
            Your deposit is held in a multisig vault and only released upon milestone approval.
          </p>
          
          <div className="flex items-center justify-between py-3 px-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
            <span className="text-sm font-semibold text-blue-50">Network Status</span>
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]"></span>
              Mainnet
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
        
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.1rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-100 before:to-transparent">
          
          {/* Activity 1 */}
          <div className="relative flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center flex-shrink-0 z-10 shadow-sm mt-0.5">
              <UploadCloud className="w-4 h-4 text-[#3b3df2]" />
            </div>
            <div>
              <p className="text-sm text-gray-800">
                <span className="font-bold text-gray-900">Alex.eth</span> uploaded 3 files to <span className="text-[#3b3df2] italic font-medium">Frontend assets</span>
              </p>
              <span className="text-xs text-gray-500 font-medium mt-1 block">2 hours ago</span>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="relative flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center flex-shrink-0 z-10 shadow-sm mt-0.5">
              <MessageSquare className="w-4 h-4 text-[#3b3df2]" />
            </div>
            <div>
              <p className="text-sm text-gray-800">
                <span className="font-bold text-gray-900">Alex.eth</span> left a comment: <br/>
                <span className="text-gray-500 italic mt-1 block">"Please review the mobile menu..."</span>
              </p>
              <span className="text-xs text-gray-500 font-medium mt-1 block">5 hours ago</span>
            </div>
          </div>

          {/* Activity 3 */}
          <div className="relative flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-white border-2 border-[#10b981] flex items-center justify-center flex-shrink-0 z-10 shadow-sm mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
            </div>
            <div>
              <p className="text-sm text-gray-800 font-medium">
                Milestone 1 payment released successfully.
              </p>
              <span className="text-xs text-gray-500 font-medium mt-1 block">Yesterday</span>
            </div>
          </div>

        </div>

        <div className="mt-8 text-center border-t border-gray-50 pt-4">
          <button className="text-[#3b3df2] font-semibold text-sm hover:text-[#2b2dd2] transition-colors">
            View Full Activity Log
          </button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow group">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
              alt="Alex Thompson" 
              className="w-12 h-12 rounded-xl object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#10b981] border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Alex Thompson</h4>
            <div className="text-xs font-semibold text-gray-500 flex items-center gap-1 mt-0.5">
              Full Stack Dev • 4.9 <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 inline -mt-0.5" />
            </div>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
      </div>
    </div>
  );
};

export default RightSidebar;
