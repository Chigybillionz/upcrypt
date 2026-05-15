export default function CreateAccountFooter() {
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
            © 2024 Upcrypt. Decentralized Work for a Global Future.
          </p>

          {/* Right - Links and Social */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Cookie Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Support
            </a>
            <div className="flex items-center gap-3 ml-4 border-l border-gray-200 pl-4">
              <button className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20v-7.21H5.93v-2.94h2.36V7.94c0-2.33 1.43-3.61 3.51-3.61 1 0 1.86.07 2.11.1v2.44h-1.44c-1.13 0-1.35.54-1.35 1.32v1.73h2.71l-.35 2.94h-2.36V20H8.29z" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
