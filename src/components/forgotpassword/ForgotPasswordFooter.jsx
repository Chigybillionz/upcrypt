export default function ForgotPasswordFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Upcrypt</h3>
          </div>

          {/* Center - Copyright */}
          <p className="text-sm text-gray-600">
            © 2024 Upcrypt Protocol. Built for the decentralized workforce.
          </p>

          {/* Right - Links and Social */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Governance
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Staking
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Security
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Documentation
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Whitepaper
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
