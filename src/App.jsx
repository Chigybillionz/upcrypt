import { useState } from "react";
import Navbar from "./components/landing page/Navbar";
import Hero from "./components/landing page/Hero";
import Features from "./components/landing page/Features";
import Services from "./components/landing page/Services";
import Stats from "./components/landing page/Stats";
import CTA from "./components/landing page/CTA";
import Footer from "./components/landing page/Footer";
import Explore from "./components/explorepage/Explore";
import Waitlist from "./components/walitlispage/Waitlist";
import Resources from "./components/resourcespage/Resources";
import StartLearning from "./components/startlearning/StartLearning";
import LoginPage from "./components/loginpage/LoginPage";
import CreateAccount from "./components/createaccount/CreateAccount";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import ClientDashboard from "./components/clientdashboard/ClientDashboard";
import ConnectWalletModal from "./components/connnectwalletdrop-not-login/ConnectWalletModal";

export default function App() {
  // Temporarily set to 'dashboard' so you can view it immediately!
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const openConnectModal = () => setIsConnectModalOpen(true);

  return (
    <div className="min-h-screen bg-white">
      <ConnectWalletModal 
        isOpen={isConnectModalOpen} 
        onClose={() => setIsConnectModalOpen(false)} 
        onNavigate={setCurrentPage} 
      />

      {currentPage !== "dashboard" && (
        <Navbar onNavigate={setCurrentPage} onOpenConnectModal={openConnectModal} />
      )}

      {currentPage === "dashboard" ? (
        <ClientDashboard onNavigate={setCurrentPage} onOpenConnectModal={openConnectModal} />
      ) : currentPage === "login" ? (
        <LoginPage onNavigate={setCurrentPage} onOpenConnectModal={openConnectModal} />
      ) : currentPage === "forgotpassword" ? (
        <ForgotPassword onNavigate={setCurrentPage} onOpenConnectModal={openConnectModal} />
      ) : currentPage === "createaccount" ? (
        <CreateAccount onNavigate={setCurrentPage} onOpenConnectModal={openConnectModal} />
      ) : currentPage === "waitlist" ? (
        <Waitlist onNavigate={setCurrentPage} onOpenConnectModal={openConnectModal} />
      ) : currentPage === "resources" ? (
        <Resources onNavigate={setCurrentPage} onOpenConnectModal={openConnectModal} />
      ) : currentPage === "startlearning" ? (
        <StartLearning onNavigate={setCurrentPage} onOpenConnectModal={openConnectModal} />
      ) : currentPage === "landing" ? (
        <>
          <Hero onNavigate={setCurrentPage} onOpenConnectModal={openConnectModal} />
          <Features />
          <Services />
          <Stats />
          <CTA onNavigate={setCurrentPage} />
          <Footer />
        </>
      ) : currentPage === "explore" ? (
        <>
          <Explore onNavigate={setCurrentPage} onOpenConnectModal={openConnectModal} />
          <Footer />
        </>
      ) : null}
    </div>
  );
}
