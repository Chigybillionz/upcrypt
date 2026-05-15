export default function WaitlistForm({
  formData,
  onInputChange,
  onUserTypeChange,
  onSubmit,
}) {
  return (
    <div className="relative z-10">
      {/* Early Access Badge */}
      <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
        <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
          ◆ EARLY ACCESS
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-2 leading-tight">
        Join the Future of
      </h1>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent bg-clip-text mb-6">
        Freelance Payments
      </h2>

      {/* Description */}
      <p className="text-center text-gray-600 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed">
        Be the first to experience secure crypto escrow freelancing. We're
        building the infrastructure for trustless global collaboration.
      </p>

      {/* Avatar Group */}
      <div className="flex justify-center items-center mb-3 sm:mb-4">
        <div className="flex -space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white flex items-center justify-center text-white text-sm font-bold">
            A
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-sm font-bold">
            B
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center text-white text-sm font-bold">
            C
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-white text-sm font-bold">
            +9
          </div>
        </div>
      </div>

      {/* Users Count */}
      <p className="text-center text-gray-600 text-sm mb-8 sm:mb-10">
        Join <span className="font-bold text-gray-900">1,200+ users</span>{" "}
        already on the list
      </p>

      {/* Form */}
      <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">
        {/* Full Name Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={onInputChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-900 placeholder-gray-400"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-900 placeholder-gray-400"
          />
        </div>

        {/* User Type Toggle */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            I am a...
          </label>
          <div className="flex gap-3 p-1 bg-gray-100 rounded-lg">
            <button
              type="button"
              onClick={() => onUserTypeChange("Freelancer")}
              className={`flex-1 py-3 px-4 rounded-md font-semibold text-sm transition-all ${
                formData.userType === "Freelancer"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Freelancer
            </button>
            <button
              type="button"
              onClick={() => onUserTypeChange("Client")}
              className={`flex-1 py-3 px-4 rounded-md font-semibold text-sm transition-all ${
                formData.userType === "Client"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Client
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-all mt-8"
        >
          Join Waitlist
          <span>→</span>
        </button>

        {/* Privacy Text */}
        <p className="text-xs text-center text-gray-500 mt-5">
          By joining, you agree to our{" "}
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            Privacy Policy
          </a>{" "}
          and will receive occasional product updates.
        </p>
      </form>
    </div>
  );
}
