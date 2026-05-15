export default function LearningCta({ onNavigate }) {
  return (
    <section className="rounded-2xl bg-indigo-500 px-6 py-10 text-center text-white shadow-lg sm:px-10">
      <h2 className="text-3xl font-bold">Ready to get started?</h2>
      <p className="mt-4 text-sm text-indigo-50 sm:text-base">
        Join thousands of professionals already working on the future of finance.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <button 
          onClick={() => onNavigate?.("createaccount")}
          className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-indigo-600 shadow-sm"
        >
          Create Account
        </button>
        <button 
          onClick={() => onNavigate?.("login")}
          className="rounded-full bg-indigo-700/55 px-10 py-4 text-sm font-semibold text-white"
        >
          Browse Jobs
        </button>
      </div>
    </section>
  );
}
