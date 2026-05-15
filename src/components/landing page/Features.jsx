export default function Features() {
  const features = [
    {
      icon: "📋",
      title: "Define Milestones",
      description:
        "Break up project into code, payouts tasks with deadlines and fixed price.",
    },
    {
      icon: "🏦",
      title: "Fund Escrow",
      description:
        "Client deposit USDC into a secure dollar smart contract before work begins.",
    },
    {
      icon: "✅",
      title: "Instant Release",
      description:
        "Once a project is approved, funds are released instantly to the freelancer.",
    },
  ];

  return (
    <section className="px-4 sm:px-8 py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Secure, Transparent
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Collaboration has never been this safe. Our automated protocol
            ensures fairness for both parties.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
