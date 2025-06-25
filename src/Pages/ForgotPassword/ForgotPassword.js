import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email.");
    } else {
      setMessage("");
      navigate("/reset-password", { state: { email } });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://media.gettyimages.com/id/812718952/video/4k-abstract-bokeh-background-loop.jpg?s=640x640&k=20&c=ujDn2-KaU1qZFE6pEro-hnrIJOIzp1HunJYIdS8auvA=")',
      }}
    > {/* MOONSHADE text in top-left corner */}
      <h1 className="absolute top-28 left-8 text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
        MOON
        <span className="text-cyan-400">SHADE</span>
      </h1>
      <div className="max-w-md w-full p-6 border border-gray-300 rounded-lg bg-white bg-opacity-90 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {message && (
            <p className="text-red-600 font-semibold text-sm">{message}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
