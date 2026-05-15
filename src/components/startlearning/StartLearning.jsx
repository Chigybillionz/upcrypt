
import LearningPaths from "./LearningPaths";
import QuickGuides from "./QuickGuides";
import DemoVideo from "./DemoVideo";
import CommonQuestions from "./CommonQuestions";
import LearningCta from "./LearningCta";
import StartLearningFooter from "./StartLearningFooter";
import ExploreSidebar from "../explorepage/ExploreSidebar";

export default function StartLearning({ onNavigate, onOpenConnectModal }) {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header - Same as Explore */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8 mb-2 sm:mb-4">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-0">
          Start Learning
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
          Guides & Resources
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6">
          Learn how to earn, hire, and get paid securely with crypto escrow on
          the most trusted Web3 freelance network.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors text-xs sm:text-sm flex items-center justify-center gap-2">
            📚 View Guides
          </button>
          <button 
            onClick={() => onNavigate?.("login")}
            className="px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            🎓 Browse Resources
          </button>
        </div>
      </div>

      {/* Main Content - Responsive Grid */}
      <div className="px-4 sm:px-6 lg:px-12 py-6 lg:py-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* Left Sidebar - Same as Explore (Hidden on mobile, shown on desktop) */}
          <div className="hidden lg:block lg:col-span-2">
            <ExploreSidebar />
          </div>

          {/* Center Content - Main Learning Paths (Full width on mobile) */}
          <div className="col-span-1 lg:col-span-6">
            {/* Mobile: Show QuickGuides and DemoVideo between header and paths */}
            <div className="lg:hidden space-y-6 mb-8">
              <QuickGuides />
              <DemoVideo />
            </div>

            {/* Learning Paths */}
            <LearningPaths />

            {/* Common Questions */}
            <div className="mt-8">
              <CommonQuestions />
            </div>

            {/* Learning CTA */}
            <div className="mt-8">
              <LearningCta onNavigate={onNavigate} />
            </div>
          </div>

          {/* Right Sidebar - Quick Guides & Demo (Hidden on mobile, shown on desktop) */}
          <div className="hidden lg:block lg:col-span-4 space-y-6">
            <QuickGuides />
            <DemoVideo />
          </div>
        </div>
      </div>

      <StartLearningFooter />
    </div>
  );
}
