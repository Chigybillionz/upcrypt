export default function Hero({ onNavigate }) {
  return (
    <section className="px-4 sm:px-8 py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
              <span className="text-sm font-semibold">
                BUILT FOR THE NETWORK
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Secure your work with{" "}
              <span className="text-blue-600">Trustless Escrow</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg mb-8">
              The freelance economy requires for Web3. Post jobs, hire
              freelancers, and get paid instantly in USDC with automated smart
              contract security
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate?.("login")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-sm sm:text-base"
              >
                Post a Job
              </button>
              <button
                onClick={() => onNavigate?.("login")}
                className="border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 text-sm sm:text-base"
              >
                Find Work
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm text-gray-600">
                Joining +300k tech freelancers
              </span>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-xl mt-8 md:mt-0">
            <div className="text-xs sm:text-sm text-gray-600 mb-2">
              Escrow Action
            </div>
            <div className="text-gray-500 text-xs mb-6">Job ID: 847-6432</div>

            <div className="space-y-6 mb-8">
              {/* Featured Job */}
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-2">
                  Wordpress 3.0 Design System
                </div>
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">
                  5 Projects
                </div>
              </div>

              {/* Price */}
              <div className="text-3xl font-bold text-blue-600">2,500 USDC</div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Installed</span>
                  <span className="text-gray-900 font-semibold">
                    1,000 USDC
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Completion</span>
                  <span className="text-gray-900 font-semibold">45%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-full w-1/2"></div>
              </div>
            </div>

            {/* Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
              Approve Milestone Payment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
