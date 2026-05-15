import React from 'react';
import { 
  Search, 
  Rocket, 
  Wallet, 
  Scale, 
  ShieldCheck, 
  UserCircle,
  FileText,
  Lock,
  ChevronRight,
  Bot,
  Mail,
  MessageSquare,
  BookOpen,
  ExternalLink
} from 'lucide-react';

const SupportView = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-12">
      
      {/* Hero Search Section */}
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-[#f0f2fe] to-[#e6e8fc] border border-white/60 shadow-sm py-20 px-6 text-center">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-[#3b3df2]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3b3df2] mb-4">How can we help?</h1>
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Search our knowledge base for instant answers about Upcrypt, smart contracts, and escrow management.
          </p>

          <div className="bg-white p-2 rounded-2xl shadow-lg flex items-center max-w-2xl mx-auto">
            <div className="pl-4 pr-2 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Search for 'how to release payment', 'dispute process'..." 
              className="flex-1 py-3 px-2 focus:outline-none text-gray-700 bg-transparent"
            />
            <button className="bg-[#3b3df2] hover:bg-[#2b2dd2] text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-sm">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { icon: Rocket, label: 'Getting Started' },
          { icon: Wallet, label: 'Escrow & Payments' },
          { icon: Scale, label: 'Dispute Resolution' },
          { icon: ShieldCheck, label: 'Security' },
          { icon: UserCircle, label: 'Account Management' }
        ].map((category, idx) => (
          <button key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex flex-col items-center justify-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <category.icon className="w-6 h-6 text-[#3b3df2]" />
            </div>
            <span className="font-bold text-gray-900 text-sm text-center leading-tight">
              {category.label}
            </span>
          </button>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Featured Articles */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#3b3df2]">Featured Articles</h3>
            <button className="text-[#3b3df2] font-semibold text-sm hover:text-[#2b2dd2]">View all</button>
          </div>

          <div className="space-y-4">
            {/* Article 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-5 group">
              <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#3b3df2] transition-colors">How to release milestones?</h4>
                <p className="text-sm text-gray-500">Learn the process of approving work and triggering on-chain payments.</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#3b3df2]" />
            </div>

            {/* Article 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-5 group">
              <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#3b3df2] transition-colors">Setting up 2FA</h4>
                <p className="text-sm text-gray-500">Enhance your account security using authenticator apps.</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#3b3df2]" />
            </div>

            {/* Article 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-5 group">
              <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#3b3df2] transition-colors">Understanding Kleros Arbitration</h4>
                <p className="text-sm text-gray-500">How decentralized justice handles disputes on Upcrypt.</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#3b3df2]" />
            </div>
          </div>
        </div>

        {/* Right Column: Support & Community */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#3b3df2]">Support</h3>
          
          <div className="bg-[#4f51f4] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-lg">Chat with AI Support</h4>
            </div>
            
            <p className="text-blue-100 text-sm mb-6 relative z-10 leading-relaxed">
              Instant answers from our protocol assistant. Available 24/7 for technical queries.
            </p>
            
            <button className="w-full bg-white text-[#3b3df2] hover:bg-blue-50 font-bold py-3 rounded-xl transition-colors shadow-sm relative z-10">
              Start Chat
            </button>
          </div>

          <button className="w-full bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 font-bold py-4 rounded-2xl transition-colors shadow-sm flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            Submit a Ticket
          </button>

          <div className="pt-6">
            <h3 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-4">Community</h3>
            
            <div className="space-y-3">
              <button className="w-full bg-[#f0f2fe] hover:bg-[#e0e2ff] text-[#3b3df2] p-4 rounded-xl transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3b3df2] text-white flex items-center justify-center shadow-sm">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-gray-900 group-hover:text-[#3b3df2] transition-colors">Join Discord</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#3b3df2]" />
              </button>

              <button className="w-full bg-[#f0f2fe] hover:bg-[#e0e2ff] text-[#3b3df2] p-4 rounded-xl transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-200 text-gray-600 flex items-center justify-center shadow-sm">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-gray-900 group-hover:text-[#3b3df2] transition-colors">Documentation</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#3b3df2]" />
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Footer Text */}
      <div className="pt-12 text-center">
        <p className="text-gray-500 text-sm">
          Can't find what you're looking for? <button className="text-[#3b3df2] font-semibold hover:underline">Reach out to our team</button> or check the <button className="text-[#3b3df2] font-semibold hover:underline">Status Page</button>.
        </p>
      </div>

    </div>
  );
};

export default SupportView;
