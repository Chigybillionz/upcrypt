import ForgotPasswordIllustration from "./ForgotPasswordIllustration";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ForgotPasswordFooter from "./ForgotPasswordFooter";

export default function ForgotPassword({ onNavigate, onOpenConnectModal }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Side - Illustration */}
        <ForgotPasswordIllustration />

        {/* Right Side - Form */}
        <ForgotPasswordForm onNavigate={onNavigate} />
      </div>

      {/* Footer */}
      <ForgotPasswordFooter />
    </div>
  );
}
