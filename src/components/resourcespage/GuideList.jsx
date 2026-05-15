import ResourceIcon from "./ResourceIcon";

const guides = [
  {
    title: "Smart Contract Basics",
    meta: "5 MIN READ • BEGINNER",
    icon: "document",
  },
  {
    title: "Upcrypt Protocol Overview",
    meta: "12 MIN READ • INTERMEDIATE",
    icon: "cap",
  },
  {
    title: "How to Bridging Assets",
    meta: "8 MIN READ • ADVANCED",
    icon: "nodes",
  },
];

export default function GuideList() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-slate-950">All Guides</h2>
        <a href="#" className="text-lg text-indigo-600 hover:text-indigo-700">
          View All
        </a>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {guides.map((guide) => (
          <article
            key={guide.title}
            className="flex items-center gap-5 rounded-xl border border-slate-200 bg-white px-6 py-6 shadow-sm"
          >
            <ResourceIcon type={guide.icon} tone="indigo" />
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-xl text-slate-950">{guide.title}</h3>
              <p className="mt-1 text-xs font-medium tracking-[0.16em] text-slate-500">
                {guide.meta}
              </p>
            </div>
            <span className="text-4xl leading-none text-slate-500">›</span>
          </article>
        ))}
      </div>
    </section>
  );
}
