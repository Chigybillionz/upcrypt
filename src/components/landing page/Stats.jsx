export default function Stats() {
  const stats = [
    { number: "50k+", label: "Files Accessed" },
    { number: "12k+", label: "Jobs Completed" },
    { number: "$85M+", label: "Escrow Volume" },
    { number: "140+", label: "Countries" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center text-white">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
