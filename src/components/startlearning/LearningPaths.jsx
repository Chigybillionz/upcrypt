import LearningIcon from "./LearningIcon";

const paths = [
  {
    title: "Getting Started",
    text: "New to Web3? Master the basics of wallets, Stellar assets, and account security.",
    modules: "8 Modules",
    icon: "rocket",
    tone: "indigo",
    accent: "text-indigo-600",
  },
  {
    title: "For Freelancers",
    text: "Optimizing your profile, managing escrow milestones, and low-fee withdrawals.",
    modules: "12 Modules",
    icon: "briefcase",
    tone: "blue",
    accent: "text-indigo-600",
  },
  {
    title: "For Clients",
    text: "Hiring top talent, funding smart-contract escrows, and dispute resolution basics.",
    modules: "6 Modules",
    icon: "users",
    tone: "peach",
    accent: "text-orange-700",
  },
];

export default function LearningPaths() {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-semibold text-slate-950">Learning Paths</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {paths.map((path) => (
          <article
            key={path.title}
            className="rounded-xl border border-slate-300 bg-white p-6 shadow-sm"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <LearningIcon type={path.icon} tone={path.tone} />
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                {path.modules}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-950">{path.title}</h3>
            <p className="mt-3 min-h-14 text-sm leading-relaxed text-slate-700">
              {path.text}
            </p>
            <div className="mt-5 border-t border-indigo-100 pt-3">
              <button className={`flex w-full items-center justify-between text-sm ${path.accent}`}>
                <span>Start Path</span>
                <span className="text-2xl leading-none">-&gt;</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
