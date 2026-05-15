import ResourceIcon from "./ResourceIcon";

const articles = [
  {
    title: "Setting up your Stellar Wallet",
    icon: "wallet",
    tone: "indigo",
  },
  {
    title: "2FA & Account Security",
    icon: "shield",
    tone: "blue",
  },
  {
    title: "Understanding Gas Fees",
    icon: "cash",
    tone: "amber",
  },
  {
    title: "Tax Reporting Guide",
    icon: "receipt",
    tone: "red",
  },
];

export default function PopularArticles() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold text-slate-950">Popular Articles</h2>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {articles.map((article) => (
          <article
            key={article.title}
            className="flex min-h-72 flex-col justify-between rounded-xl border border-indigo-50 bg-white p-7 shadow-sm"
          >
            <ResourceIcon type={article.icon} tone={article.tone} />
            <h3 className="max-w-64 text-2xl leading-tight text-slate-950">
              {article.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
