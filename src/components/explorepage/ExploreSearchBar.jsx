export default function ExploreSearchBar() {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-gray-100 shadow-sm">
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Search Input */}
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-gray-400 text-lg">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search jobs, skills, or projects..."
            className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {/* Quick Action Buttons - Mobile Only */}
        <div className="lg:hidden flex flex-col sm:flex-row gap-2">
          <button className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-xs sm:text-sm text-gray-700 rounded-lg transition-colors font-medium">
            All Filters
          </button>
          <button className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm text-white rounded-lg transition-colors font-medium">
            Search Jobs
          </button>
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2">
          <button className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-xs text-gray-700 rounded-full transition-colors font-medium">
            Rust +
          </button>
          <button className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-xs text-gray-700 rounded-full transition-colors font-medium">
            Solidity +
          </button>
          <button className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-xs text-gray-700 rounded-full transition-colors font-medium">
            Stellar +
          </button>
        </div>

        {/* Quick Filters Section - Mobile */}
        <div className="lg:hidden border-t border-gray-100 pt-3">
          <p className="text-xs font-bold text-gray-600 uppercase mb-2 pl-1">
            Quick Filters:
          </p>
          <div className="flex flex-wrap gap-2">
            <button className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-xs text-gray-700 rounded transition-colors">
              USDC Payment
            </button>
            <button className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-xs text-gray-700 rounded transition-colors">
              Budget $100+
            </button>
            <button className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-xs text-gray-700 rounded transition-colors">
              Full-Time
            </button>
            <button className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-xs text-gray-700 rounded transition-colors">
              Intermediate
            </button>
          </div>
        </div>

        {/* Filter Dropdowns - Desktop Only */}
        <div className="hidden lg:flex lg:flex-wrap lg:gap-2 lg:pt-2 lg:border-t lg:border-gray-100">
          <select className="px-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white font-medium">
            <option>Budget: Any</option>
            <option>Under $500</option>
            <option>$500 - $2,000</option>
            <option>Over $2,000</option>
          </select>
          <select className="px-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white font-medium">
            <option>Experience: All</option>
            <option>Entry Level</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
          <select className="px-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white font-medium">
            <option>Payment: USDC</option>
            <option>USDT</option>
            <option>ETH</option>
          </select>
        </div>
      </div>
    </div>
  );
}
