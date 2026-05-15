import ExploreHeader from "./ExploreHeader";
import ExploreSidebar from "./ExploreSidebar";
import ExploreSearchBar from "./ExploreSearchBar";
import JobCard from "./JobCard";
import TrendingSkills from "./TrendingSkills";
import VerifiedProCard from "./VerifiedProCard";

export default function Explore({ onNavigate }) {
  const jobs = [
    {
      ecosystem: "STELLAR ECOSYSTEM",
      posted: "2h ago",
      budget: "8,500 USDC",
      title: "Senior Smart Contract Engineer for DeFi Protocol",
      description:
        "We are looking for an experienced Rust developer to build core...",
      rating: 4.9,
      reviews: 24,
      milestones: "5 Milestones",
      protection: "Escrow Protection",
    },
    {
      ecosystem: "SOLANA ECOSYSTEM",
      posted: "5h ago",
      budget: "3,200 USDC",
      title: "Full-Stack Web3 Designer (UI/UX)",
      description:
        "Seeking a world-class designer to revamp our NFT marketplace...",
      rating: 5.0,
      reviews: 12,
      milestones: "3 Milestones",
      protection: "Verified Client",
    },
    {
      ecosystem: "ETHEREUM ECOSYSTEM",
      posted: "8h ago",
      budget: "5,000 USDC",
      title: "Smart Contract Auditor - Security Focused",
      description:
        "Looking for security expert to audit our new token contract...",
      rating: 4.8,
      reviews: 18,
      milestones: "2 Milestones",
      protection: "Escrow Protection",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <ExploreHeader />

      {/* Main Content - Responsive Grid */}
      <div className="px-4 sm:px-6 lg:px-12 py-6 lg:py-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* Left Sidebar - Categories (Hidden on mobile, shown on desktop) */}
          <div className="hidden lg:block lg:col-span-2">
            <ExploreSidebar />
          </div>

          {/* Center Content - Search & Jobs (Full width on mobile) */}
          <div className="col-span-1 lg:col-span-6">
            <ExploreSearchBar />

            {/* Mobile: Show Pro Card and Trending between search and jobs */}
            <div className="lg:hidden space-y-4 mb-6">
              <VerifiedProCard onNavigate={onNavigate} />
              <TrendingSkills />
            </div>

            {/* Job Cards */}
            <div className="space-y-4 mb-6">
              {jobs.map((job, index) => (
                <JobCard key={index} job={job} onNavigate={onNavigate} />
              ))}
            </div>

            {/* Load More Jobs Button */}
            <button
              onClick={() => onNavigate?.("login")}
              className="w-full py-3 px-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Load More Jobs
            </button>
          </div>

          {/* Right Sidebar - Pro Card & Trending (Hidden on mobile, shown on desktop) */}
          <div className="hidden lg:block lg:col-span-4 space-y-6">
            <VerifiedProCard onNavigate={onNavigate} />
            <TrendingSkills />
          </div>
        </div>
      </div>
    </div>
  );
}
