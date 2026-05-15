export default function CreateAccountIllustration() {
  return (
    <div className="hidden lg:flex flex-col justify-center px-12 py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Illustration */}
      <div className="mb-12">
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
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-indigo-600">Centralized Simplicity.</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Join the global ecosystem of trustless collaboration. Secure your next
          milestone with institutional-grade smart contracts and decentralized
          payroll.
        </p>
      </div>
    </div>
  );
}
