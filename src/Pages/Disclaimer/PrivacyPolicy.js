import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-8 lg:px-16 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-10 mt-16">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-3 text-base md:text-lg font-semibold text-cyan-700 hover:text-cyan-500 transition-transform duration-200 hover:scale-105 bg-cyan-100 px-4 py-2 rounded-full shadow-sm"
        >
          <FaArrowLeft className="text-xl" />
          Back to Previous Page
        </button>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
          Privacy Policy
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-black">MOONSHADE Perfumes</span>, we value your privacy and are committed to protecting your personal data.
          This policy outlines how we collect, use, and safeguard your information when you visit our website or engage with our services.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Your information is never shared with third parties unless required by law or with your explicit consent.
          We implement robust security measures to protect your data from unauthorized access or misuse.
        </p>

        <p className="text-sm text-gray-500 pt-8">Last updated: June 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
