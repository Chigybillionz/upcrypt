
import ResourceSearch from "./ResourceSearch";
import TopicTabs from "./TopicTabs";
import PopularArticles from "./PopularArticles";
import GuideList from "./GuideList";
import SupportBanner from "./SupportBanner";
import ResourcesFooter from "./ResourcesFooter";

export default function Resources({ onNavigate }) {
  return (
    <div className="min-h-screen bg-[#fbf9ff] text-slate-950">

      <main className="space-y-12 px-5 py-6 sm:px-8 lg:px-12">
        <ResourceSearch />
        <TopicTabs />
        <PopularArticles />
        <GuideList />
        <SupportBanner />
      </main>

      <ResourcesFooter />
    </div>
  );
}
