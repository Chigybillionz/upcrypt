export default function CTA({ onNavigate }) {
  return (
    <section className="px-4 sm:px-8 py-12 sm:py-16 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Start using Upcrypt today
          </h2>
          <p className="text-blue-100 mb-8 text-sm sm:text-base md:text-lg">
            Join the world's first protocol-secured freelance marketplace. High
            trust, low fees, zero friction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate?.("login")}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-sm sm:text-base"
            >
              Hire Talent
            </button>
            <button
              onClick={() => onNavigate?.("login")}
              className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-lg font-semibold text-sm sm:text-base"
            >
              Start Earning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
