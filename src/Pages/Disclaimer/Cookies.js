import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Cookies = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-8 lg:px-16 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-10 mt-16">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-3 text-base md:text-lg font-semibold text-cyan-700 hover:text-cyan-500 transition-transform duration-200 hover:scale-105 bg-cyan-100 px-4 py-2 rounded-full shadow-sm"
        >
          <FaArrowLeft className="text-xl" />
          Back to Previous Page
        </button>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
          Cookie Policy
        </h1>

        {/* Paragraphs */}
        <p className="text-lg leading-relaxed text-gray-700">
          At <span className="font-semibold text-black">MOONSHADE</span>, we use cookies to improve your browsing experience,
          enhance website functionality, and provide personalized services.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-black">What Are Cookies?</h2>
          <p className="text-lg text-gray-700">
            Cookies are small files stored on your device that help websites remember your activity,
            preferences, and other settings. They help us deliver a seamless experience.
          </p>

          <h2 className="text-2xl font-bold text-black">How We Use Them</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>To analyze website traffic and usage</li>
            <li>To store user preferences and login status</li>
            <li>To personalize your experience</li>
            <li>To provide secure and efficient site performance</li>
          </ul>

          <h2 className="text-2xl font-bold text-black">How to Manage Cookies</h2>
          <p className="text-lg text-gray-700">
            You can adjust your browser settings to block or delete cookies. However,
            disabling cookies may affect your ability to fully experience our website.
          </p>
        </div>

        <p className="text-sm text-gray-500 pt-8">Last updated: June 2025</p>
      </div>
    </div>
  );
};

export default Cookies;
