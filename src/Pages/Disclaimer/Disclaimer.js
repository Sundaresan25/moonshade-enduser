import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Disclaimer = () => {
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
          Disclaimer
        </h1>

        {/* Body */}
        <p className="text-lg leading-relaxed text-gray-700">
          The information provided by <span className="font-semibold text-black">MOONSHADE Perfumes</span> is for general informational purposes only.
          All content is offered in good faith; however, we make no representation or warranty of any kind,
          express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or
          completeness of any information on this site.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred
          as a result of the use of the site or reliance on any information provided on the site.
          Your use of the site and your reliance on any information is solely at your own risk.
        </p>

        <p className="text-sm text-gray-500 pt-8">Last updated: June 2025</p>
      </div>
    </div>
  );
};

export default Disclaimer;
