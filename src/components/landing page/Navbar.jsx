import { useState } from "react";

export default function Navbar({ onNavigate, onOpenConnectModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <nav className="sticky top-0 z-[100] w-full flex items-center justify-between bg-white px-4 py-4 shadow-sm sm:px-8 transition-all">
      {/* Logo */}
      <div
        className="flex flex-shrink-0 cursor-pointer items-center"
        onClick={() => handleNavClick("landing")}
      >
        <img src="/logo.png" alt="Upcrypt Logo" className="h-20 sm:h-28 lg:h-32 w-auto object-contain scale-110" />
      </div>

      {/* Nav Links - Desktop */}
      <div className="ml-16 hidden flex-1 items-center gap-12 lg:flex">
        <button
          onClick={() => handleNavClick("explore")}
          className="text-base font-bold text-gray-700 hover:text-gray-900"
        >
          Explore
        </button>
        <button
          onClick={() => handleNavClick("resources")}
          className="text-base font-bold text-gray-700 hover:text-gray-900"
        >
          Resources
        </button>
        <button
          onClick={() => handleNavClick("startlearning")}
          className="text-base font-bold text-gray-700 hover:text-gray-900"
        >
          Start Learning
        </button>
        <button
          onClick={() => handleNavClick("waitlist")}
          className="text-base font-bold text-gray-700 hover:text-gray-900"
        >
          Waitlist
        </button>
      </div>

      {/* Right Actions - Desktop */}
      <div className="hidden flex-shrink-0 items-center gap-6 lg:flex">
        <button
          onClick={() => handleNavClick("login")}
          className="text-base font-bold text-gray-700 hover:text-gray-900"
        >
          Log In
        </button>
        <button 
          onClick={onOpenConnectModal}
          className="rounded-lg bg-blue-600 px-6 py-2 text-base font-bold text-white hover:bg-blue-700"
        >
          Connect Wallet
        </button>
      </div>

      {/* Right Actions + Menu Button - Mobile */}
      <div className="flex flex-shrink-0 items-center gap-3 lg:hidden">
        <button
          onClick={() => handleNavClick("login")}
          className="hidden text-sm font-semibold text-gray-700 hover:text-gray-900 sm:inline-flex"
        >
          Log In
        </button>
        <button 
          onClick={onOpenConnectModal}
          className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 sm:px-4 sm:text-sm"
        >
          Connect
        </button>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <span className="text-2xl leading-none">X</span>
          ) : (
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="block h-0.5 w-5 rounded bg-current" />
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 flex flex-col border-t bg-white shadow-lg lg:hidden">
          <button
            onClick={() => handleNavClick("explore")}
            className="border-b px-4 py-3 text-left font-semibold text-gray-700 hover:text-gray-900 sm:px-8"
          >
            Explore
          </button>
          <button
            onClick={() => handleNavClick("resources")}
            className="border-b px-4 py-3 text-left font-semibold text-gray-700 hover:text-gray-900 sm:px-8"
          >
            Resources
          </button>
          <button
            onClick={() => handleNavClick("startlearning")}
            className="border-b px-4 py-3 text-left font-semibold text-gray-700 hover:text-gray-900 sm:px-8"
          >
            Start Learning
          </button>
          <button
            onClick={() => handleNavClick("waitlist")}
            className="px-4 py-3 text-left font-semibold text-gray-700 hover:text-gray-900 sm:px-8"
          >
            Waitlist
          </button>
        </div>
      )}
    </nav>
  );
}
