export default function ForgotPasswordIllustration() {
  return (
    <div className="hidden lg:flex flex-col justify-center px-12 py-16 bg-gray-50">
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
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Decentralized</h1>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Finance.</h1>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Centralized</h2>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Simplicity.</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          The future of wealth management, secured by protocol and designed for
          the modern workforce.
        </p>
      </div>
    </div>
  );
}
