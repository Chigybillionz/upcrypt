export default function LoginIllustration() {
  return (
    <div className="hidden lg:flex flex-col justify-center px-12 py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Illustration */}
      <div className="mb-8">
        <img
          src="/login-illustration.svg"
          alt="Upcrypt Illustration"
          className="w-full max-w-md"
        />
      </div>

      {/* Text Content */}
      <div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Decentralized Finance.
        </h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Centralized Simplicity.
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Access the next generation of financial protocols with a secure,
          unified interface designed for global scale.
        </p>
      </div>
    </div>
  );
}
