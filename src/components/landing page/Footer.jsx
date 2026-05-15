export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12 border-b border-gray-800 pb-8 sm:pb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Upcrypt
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              The next generation freelance & escrow network powered by the
              Stellar blockchain and smart contracts.
            </p>
          </div>

          {/* Protocol */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Protocol
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Security Audit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Network Status
                </a>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Platform
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Talent Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Hire Specialists
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Support
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
          <p>© 2026 Upcrypt. Built in Stellar.</p>
          <div className="flex gap-4 text-xs sm:text-sm">
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Discord
            </a>
            <a href="#" className="hover:text-white">
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
