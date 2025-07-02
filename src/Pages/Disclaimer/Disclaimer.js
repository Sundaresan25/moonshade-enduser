import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Disclaimer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-8 lg:px-16 text-gray-800 font-fahkwang">
      <div className="max-w-5xl mx-auto space-y-10 mt-16">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-3 text-base md:text-lg font-semibold text-cyan-700 hover:text-cyan-500 transition-transform duration-200 hover:scale-105 bg-cyan-100 px-4 py-2 rounded-full shadow-sm font-fahkwang"
        >
          <FaArrowLeft className="text-xl font-fahkwang" />
          <span className="font-fahkwang">Back to Previous Page</span>
        </button>

        <h1 className="text-4xl lg:text-5xl font-extrabold text-black tracking-tight font-bodoni">
          Website Disclaimer
        </h1>

        <p className="text-lg leading-relaxed text-gray-700">
          The information provided by <span className="font-semibold text-black">MOONSHADE</span> is for general informational purposes only. While we strive for accuracy, we make no guarantees about the completeness or reliability of the information.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-black font-bodoni">External Links Disclaimer</h2>
          <p className="text-lg text-gray-700">
            Our site may contain links to third-party websites. These sites are not under our control, and we are not responsible for their content or privacy practices.
          </p>

          <h2 className="text-2xl font-bold text-black font-bodoni">No Professional Advice</h2>
          <p className="text-lg text-gray-700">
            The content on our website is not intended to substitute for professional advice. You should consult relevant experts for specific concerns.
          </p>

          <h2 className="text-2xl font-bold text-black font-bodoni">Limitation of Liability</h2>
          <p className="text-lg text-gray-700">
            We are not liable for any damages arising from your use of this website or the reliance on any information provided.
          </p>
        </div>

        <p className="text-sm text-gray-500 pt-8">Last updated: June 2025</p>
      </div>
    </div>
  );
};

export default Disclaimer;