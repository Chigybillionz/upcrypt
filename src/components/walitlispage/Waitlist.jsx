import { useState } from "react";

import WaitlistForm from "./WaitlistForm";
import DecorativeTicket from "./DecorativeTicket";

export default function Waitlist({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "freelancer",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUserTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      userType: type,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/api/waitlist/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500">
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-4 py-8 sm:py-12 relative">
        {/* Decorative Tickets */}
        <DecorativeTicket position="left" />
        <DecorativeTicket position="right" />

        {/* Card */}
        <div className="w-full max-w-lg bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl relative z-10">
          <WaitlistForm
            formData={formData}
            onInputChange={handleInputChange}
            onUserTypeChange={handleUserTypeChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
