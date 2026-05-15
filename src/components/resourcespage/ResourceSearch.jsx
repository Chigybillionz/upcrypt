export default function ResourceSearch() {
  return (
    <div className="relative max-w-3xl">
      <span className="absolute left-6 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-slate-500" />
      <span className="absolute left-[38px] top-[55%] h-2 w-0.5 -rotate-45 rounded bg-slate-500" />
      <input
        type="search"
        placeholder="Search help topics..."
        className="h-16 w-full rounded-2xl bg-indigo-50/70 pl-16 pr-5 text-lg text-slate-700 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-200"
      />
    </div>
  );
}
