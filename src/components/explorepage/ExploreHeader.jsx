export default function ExploreHeader() {
  return (
    <div className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8 mb-2 sm:mb-4">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-0">
        Explore
      </h1>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
        Opportunities
      </h2>
      <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6">
        Find jobs or hire talent with secure escrow payments on the most trusted
        Web3 freelance network.
      </p>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors text-xs sm:text-sm flex items-center justify-center gap-2">
          📄 Find Jobs
        </button>
        <button className="px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors text-xs sm:text-sm flex items-center justify-center gap-2">
          👥 Find Talent
        </button>
      </div>
    </div>
  );
}
