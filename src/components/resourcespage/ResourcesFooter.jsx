export default function ResourcesFooter() {
  return (
    <footer className="border-t border-slate-200 bg-indigo-50/50 px-5 py-10 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-4xl font-bold text-indigo-600">Upcrypt</h2>
        <div className="flex flex-wrap gap-7 text-slate-950 underline">
          <a href="#">Documentation</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Support</a>
        </div>
        <p className="text-sm text-slate-950 sm:text-base">
          © 2024 Upcrypt Protocol. Secure Freelancing for the Decentralized Web.
        </p>
      </div>
    </footer>
  );
}
