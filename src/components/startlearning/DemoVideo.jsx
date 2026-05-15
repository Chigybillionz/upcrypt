export default function DemoVideo() {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-semibold text-slate-950">
        See Upcrypt in Action
      </h2>

      <div className="relative min-h-[330px] overflow-hidden rounded-xl bg-slate-950 shadow-lg sm:min-h-[520px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(12,173,182,0.35),_rgba(0,0,0,0.96)_62%)]" />
        <div className="absolute inset-0 bg-slate-950/35" />

        <div className="absolute -left-2 top-8 h-[85%] w-1/3 rotate-[-4deg] rounded-lg border border-cyan-300/20 bg-cyan-300/5 p-6 opacity-70">
          <div className="mb-8 h-3 w-28 rounded bg-cyan-200/25" />
          <div className="mb-4 h-16 rounded border border-cyan-200/20" />
          <div className="mb-4 h-20 rounded border border-cyan-200/20" />
          <div className="mt-12 h-16 rounded border border-cyan-200/20" />
        </div>

        <div className="absolute left-1/2 top-1/2 h-[110%] w-[38%] min-w-64 -translate-x-1/2 -translate-y-1/2 rotate-[2deg] rounded-xl border border-cyan-300/25 bg-cyan-200/10 shadow-2xl">
          <div className="mx-auto mt-12 h-4 w-36 rounded bg-cyan-100/25" />
          <div className="mx-auto mt-10 flex h-44 w-44 items-center justify-center rounded-full border-[10px] border-cyan-400/35">
            <button
              className="flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/20 text-white shadow-lg backdrop-blur"
              aria-label="Play Upcrypt platform tour"
            >
              <span className="ml-1 h-0 w-0 border-y-[16px] border-l-[24px] border-y-transparent border-l-white" />
            </button>
          </div>
          <div className="mx-auto mt-10 h-2 w-52 rounded bg-white/50" />
          <div className="mx-auto mt-8 grid w-64 grid-cols-5 gap-4">
            {[0, 1, 2, 3, 4].map((item) => (
              <span
                key={item}
                className="h-9 rounded-full border border-cyan-100/25 bg-white/10"
              />
            ))}
          </div>
        </div>

        <div className="absolute -right-6 top-10 h-[82%] w-1/3 rotate-[4deg] rounded-lg border border-cyan-300/20 bg-cyan-300/5 p-6 opacity-70">
          <div className="mb-8 h-3 w-24 rounded bg-cyan-200/25" />
          <div className="mb-4 h-20 rounded border border-cyan-200/20" />
          <div className="mb-4 h-28 rounded border border-cyan-200/20" />
          <div className="mt-12 h-12 rounded border border-cyan-200/20" />
        </div>

        <p className="absolute bottom-5 left-5 text-sm font-medium text-white sm:text-base">
          Upcrypt Platform Tour (3:45)
        </p>
      </div>
    </section>
  );
}
