import CreateAccountIllustration from "./CreateAccountIllustration";
import CreateAccountForm from "./CreateAccountForm";
import CreateAccountFooter from "./CreateAccountFooter";

export default function CreateAccount({ onNavigate, onOpenConnectModal }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Side - Illustration */}
        <CreateAccountIllustration />

        {/* Right Side - Form */}
        <CreateAccountForm onNavigate={onNavigate} onOpenConnectModal={onOpenConnectModal} />
      </div>

      {/* Footer */}
      <CreateAccountFooter />
    </div>
  );
}
