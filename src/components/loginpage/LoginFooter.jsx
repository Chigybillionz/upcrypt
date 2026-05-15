export default function LoginFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 sm:px-8 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Upcrypt</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The protocol for institutional-grade digital asset management.
            </p>
          </div>

          {/* Protocol Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
              Protocol
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium"
                >
                  Platform
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2024 Upcrypt Protocol. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">
              <span className="text-xl">🔗</span>
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <span className="text-xl">🌐</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
