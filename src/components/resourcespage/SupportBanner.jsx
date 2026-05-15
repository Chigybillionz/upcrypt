export default function SupportBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-indigo-500 px-8 py-12 text-white shadow-lg sm:px-14">
      <div className="relative z-10 max-w-xl">
        <h2 className="text-xl font-medium">Still need help?</h2>
        <p className="mt-7 text-xl leading-relaxed text-indigo-50">
          Our support team is available 24/7 for technical inquiries. We
          typically respond within minutes.
        </p>
        <button className="mt-7 rounded-full bg-white px-10 py-4 text-lg text-indigo-600 hover:bg-indigo-50">
          Contact Us
        </button>
      </div>

      <div className="absolute -bottom-20 right-0 hidden h-64 w-72 opacity-20 sm:block">
        <div className="absolute bottom-0 right-4 h-56 w-40 rounded-t-full border-[18px] border-white" />
        <div className="absolute bottom-6 right-24 h-28 w-24 rounded-br-[70px] rounded-tl-[70px] bg-white" />
        <div className="absolute bottom-6 right-1 h-28 w-24 rounded-bl-[70px] rounded-tr-[70px] bg-white" />
        <div className="absolute bottom-24 right-36 h-16 w-10 rounded-l-full bg-white" />
        <div className="absolute bottom-24 right-0 h-16 w-10 rounded-r-full bg-white" />
        <div className="absolute bottom-12 right-28 h-6 w-6 rounded-full bg-white" />
        <div className="absolute bottom-9 right-16 h-6 w-6 rounded-full bg-white" />
      </div>

      <button
        className="absolute bottom-8 right-8 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg"
        aria-label="Open chat"
      >
        <span className="relative h-6 w-7 rounded-sm border-2 border-current">
          <span className="absolute left-1 top-1.5 h-0.5 w-4 bg-current" />
          <span className="absolute left-1 top-3 h-0.5 w-3 bg-current" />
          <span className="absolute -bottom-1 left-1 h-2 w-2 rotate-45 border-b-2 border-r-2 border-current bg-blue-700" />
        </span>
      </button>
    </section>
  );
}
