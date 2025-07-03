import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Imprint = () => {
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
          Imprint / Legal Information
        </h1>

        <p className="text-lg leading-relaxed text-gray-700">
          This page provides legal disclosures in accordance with applicable international regulations.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-black font-bodoni">Company Information</h2>
          <p className="text-lg text-gray-700">
            <strong>Company Name:</strong> MOONSHADE Fragrances Ltd.<br/>
            <strong>Address:</strong> 123 Essence Avenue, Aroma City, 10001<br/>
            <strong>Email:</strong> contact@moonshade.com
          </p>

          <h2 className="text-2xl font-bold text-black font-bodoni">Representatives</h2>
          <p className="text-lg text-gray-700">
            The company is legally represented by the Founder and Director: Jane Doe.
          </p>

          <h2 className="text-2xl font-bold text-black font-bodoni">Dispute Resolution</h2>
          <p className="text-lg text-gray-700">
            Consumers can submit complaints via the Online Dispute Resolution platform provided by the European Commission.
          </p>
        </div>

        <p className="text-sm text-gray-500 pt-8">Last updated: June 2025</p>
      </div>
    </div>
  );
};

export default Imprint;