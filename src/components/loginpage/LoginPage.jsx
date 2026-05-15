import LoginIllustration from "./LoginIllustration";
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";

export default function LoginPage({ onNavigate, onOpenConnectModal }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Side - Illustration */}
        <LoginIllustration />

        {/* Right Side - Form */}
        <LoginForm onNavigate={onNavigate} onOpenConnectModal={onOpenConnectModal} />
      </div>

      {/* Footer */}
      <LoginFooter />
    </div>
  );
}
