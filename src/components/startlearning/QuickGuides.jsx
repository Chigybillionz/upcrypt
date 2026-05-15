import LearningIcon from "./LearningIcon";

const guides = [
  {
    title: "Connecting Your Wallet",
    readTime: "2 min read",
    icon: "wallet",
  },
  {
    title: "How Escrow Works",
    readTime: "5 min read",
    icon: "shield",
  },
  {
    title: "Gas Fees & XLM",
    readTime: "3 min read",
    icon: "coin",
  },
  {
    title: "Dispute Resolution",
    readTime: "4 min read",
    icon: "gavel",
  },
];

export default function QuickGuides() {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-semibold text-slate-950">Quick Guides</h2>
      <div className="space-y-4">
        {guides.map((guide) => (
          <article
            key={guide.title}
            className="flex items-center gap-4 rounded-xl border border-indigo-100 bg-indigo-50/60 p-4"
          >
            <LearningIcon type={guide.icon} tone="white" />
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-base text-slate-950">{guide.title}</h3>
              <p className="text-xs text-slate-700">{guide.readTime}</p>
            </div>
            <span className="text-2xl text-slate-700">&gt;</span>
          </article>
        ))}
      </div>
    </section>
  );
}
