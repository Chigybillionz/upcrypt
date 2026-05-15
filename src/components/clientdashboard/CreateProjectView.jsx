import React from 'react';
import { 
  CheckCircle2, 
  Settings2, 
  Network, 
  ShieldCheck, 
  UploadCloud, 
  Rocket,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

const CreateProjectView = ({ onCancel }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm font-medium text-gray-500 gap-2 mb-2">
        <button onClick={onCancel} className="hover:text-gray-900 transition-colors">Workspace</button>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#3b3df2]">Create New Project</span>
      </div>

      {/* Header */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Initialize Smart Contract</h2>
        <p className="text-gray-600 text-lg">
          Deploy a secure, trustless escrow agreement with your collaborator.
        </p>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between max-w-3xl py-4">
        {/* Step 1 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#3b3df2] text-white flex items-center justify-center font-bold shadow-md">1</div>
          <div>
            <div className="text-sm font-bold text-[#3b3df2]">Project Details</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">SCOPE & IDENTITY</div>
          </div>
        </div>
        <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
        
        {/* Step 2 */}
        <div className="flex items-center gap-3 opacity-50">
          <div className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-500 flex items-center justify-center font-bold">2</div>
          <div>
            <div className="text-sm font-bold text-gray-500">Milestones</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">DELIVERABLES</div>
          </div>
        </div>
        <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
        
        {/* Step 3 */}
        <div className="flex items-center gap-3 opacity-50">
          <div className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-500 flex items-center justify-center font-bold">3</div>
          <div>
            <div className="text-sm font-bold text-gray-500">Funding</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ESCROW LAUNCH</div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Form) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Project Identity Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Settings2 className="w-6 h-6 text-[#3b3df2]" />
              <h3 className="text-2xl font-bold text-gray-900">Step 1: Project Identity</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Project Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Protocol Governance Dashboard Redesign" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3b3df2] focus:border-transparent transition-all placeholder-gray-400 text-gray-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Category</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3b3df2] transition-all text-gray-900 appearance-none">
                    <option>UI/UX Design</option>
                    <option>Smart Contract Development</option>
                    <option>Frontend Development</option>
                    <option>Security Audit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Network</label>
                  <div className="w-full px-4 py-3 bg-[#f0f2fe] border border-blue-100 rounded-xl flex items-center gap-2">
                    <Network className="w-5 h-5 text-[#3b3df2]" />
                    <span className="font-semibold text-gray-900">Polygon Mainnet</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Project Description</label>
                <textarea 
                  rows="4" 
                  placeholder="Describe the high-level goals and expected outcomes of this trustless engagement..." 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3b3df2] focus:border-transparent transition-all placeholder-gray-400 text-gray-900 resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Trust Settings Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Trust Settings</h3>
              <ShieldCheck className="w-6 h-6 text-gray-400" />
            </div>

            <div className="space-y-6">
              {/* Setting 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5 text-[#3b3df2]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">Enable Dispute Resolution</h4>
                  <p className="text-sm text-gray-500 mt-1">Kleros or UMA protocol will act as a third-party arbitrator.</p>
                </div>
                <div className="mt-2">
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-[#3b3df2] border-gray-300 focus:ring-[#3b3df2]" />
                </div>
              </div>

              {/* Setting 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 mt-1">
                  <Settings2 className="w-5 h-5 text-gray-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">Auto-Release Milestones</h4>
                  <p className="text-sm text-gray-500 mt-1">Funds release automatically after 72 hours of work submission if no objection.</p>
                </div>
                <div className="mt-2">
                  <input type="checkbox" className="w-5 h-5 rounded text-[#3b3df2] border-gray-300 focus:ring-[#3b3df2]" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Info Cards) */}
        <div className="space-y-6">
          
          {/* Why Upcrypt */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-gray-400" />
              <h3 className="font-bold text-gray-900">Why Upcrypt?</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b3df2] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium leading-tight">Non-custodial escrow ensures funds are only released upon approval.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b3df2] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium leading-tight">Immutable proof of work stored via IPFS metadata links.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b3df2] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium leading-tight">Automated tax reporting for crypto-native businesses.</span>
              </li>
            </ul>
          </div>

          {/* Trustless Work Primitives */}
          <div className="bg-gradient-to-br from-[#4f51f4] to-[#3032c2] rounded-2xl p-6 text-white shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Trustless Work Primitives</h3>
            <p className="text-blue-50 text-sm leading-relaxed opacity-90">
              You are initiating a smart contract on the Polygon Network. Ensure your wallet has sufficient USDC and MATIC for gas.
            </p>
          </div>

          {/* Attach PDF Upload */}
          <button className="w-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-8 hover:bg-gray-100 hover:border-gray-300 transition-colors flex flex-col items-center justify-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <UploadCloud className="w-6 h-6 text-gray-500" />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900 text-sm">Attach Service Agreement (PDF)</h4>
              <p className="text-xs text-gray-500 mt-1">Optional, for legal redundancy</p>
            </div>
          </button>

        </div>

      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 pb-12">
        <button className="w-full sm:w-auto px-8 py-3.5 bg-white border-2 border-[#3b3df2] text-[#3b3df2] font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-sm">
          Save Draft
        </button>
        <button className="w-full sm:w-auto px-8 py-3.5 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white font-bold rounded-xl transition-colors shadow-sm">
          Next: Milestone Planning
        </button>
      </div>

    </div>
  );
};

export default CreateProjectView;

// Need to import HelpCircle at the top since I used it. Let me just inline it in the write command.
