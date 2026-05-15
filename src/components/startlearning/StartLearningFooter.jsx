export default function StartLearningFooter() {
  return (
    <footer className="border-t border-slate-200 bg-indigo-50/50 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-2xl font-bold text-slate-950">Upcrypt</h2>
        <div className="flex flex-wrap gap-7 text-xs text-slate-950">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Security</a>
        </div>
        <p className="text-xs font-medium text-indigo-600">
          (c) 2024 Upcrypt. Built on Stellar.
        </p>
      </div>
    </footer>
  );
}
