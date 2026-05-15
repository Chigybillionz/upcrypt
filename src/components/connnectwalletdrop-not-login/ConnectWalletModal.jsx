import React from 'react';
import { Wallet, LogIn, UserPlus, ShieldCheck, X, ChevronRight } from 'lucide-react';

export default function ConnectWalletModal({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Connect to Upcrypt</h2>
          </div>

          {/* Connect Wallet Button */}
          <button 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
            onClick={() => {
              // Usually connects to metamask/etc.
              console.log("Connect Wallet Clicked");
            }}
          >
            <Wallet className="w-5 h-5" />
            Connect Wallet
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-100"></div>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              OR
            </span>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          {/* Navigation Options */}
          <div className="space-y-3">
            <button 
              onClick={() => {
                onClose();
                onNavigate("login");
              }}
              className="w-full bg-white border border-gray-200 hover:border-indigo-600 hover:shadow-sm text-gray-700 py-3.5 px-4 rounded-xl flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3">
                <LogIn className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                <span className="font-semibold group-hover:text-indigo-600 transition-colors">Log In</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-600 transition-colors" />
            </button>

            <button 
              onClick={() => {
                onClose();
                onNavigate("createaccount");
              }}
              className="w-full bg-white border border-gray-200 hover:border-indigo-600 hover:shadow-sm text-gray-700 py-3.5 px-4 rounded-xl flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3">
                <UserPlus className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                <span className="font-semibold group-hover:text-indigo-600 transition-colors">Create Account</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-600 transition-colors" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 border-t border-gray-100 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-gray-400" />
          <span className="text-xs font-medium text-gray-500">
            Secure & Decentralized
          </span>
        </div>
      </div>
    </div>
  );
}
