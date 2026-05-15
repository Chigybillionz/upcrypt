export default function Services() {
  return (
    <section className="px-4 sm:px-8 py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image Placeholder */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-64 sm:h-80 md:h-96 order-2 md:order-1"></div>

          {/* Right Content */}
          <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">
                    Multi-Crypto Payments
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Support for USDC, USDT, ETH and major stables assets for
                    global instant settlements.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🔐</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">
                    Milestone Escrow Protection
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Every dollar is protected by the protocol. Recover worry
                    about payment delays or project abandonment again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
