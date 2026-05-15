const topics = ["All Topics", "Wallets", "Staking", "Security", "Taxation", "Nodes", "Liquidity"];

export default function TopicTabs() {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4">
      {topics.map((topic, index) => (
        <button
          key={topic}
          className={`rounded-full px-7 py-3 text-base sm:text-lg ${
            index === 0
              ? "bg-indigo-600 text-white shadow-sm"
              : "bg-indigo-100 text-slate-800"
          }`}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}
