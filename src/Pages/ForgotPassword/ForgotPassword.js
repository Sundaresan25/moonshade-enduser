import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaKey } from "react-icons/fa"; 

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
      navigate("/verify-otp", { state: { email } });
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4 font-fahkwang"
      style={{
        backgroundImage:
          "url('https://wallup.net/wp-content/uploads/2017/03/27/228688-minimalism-digital_art-black_background-748x421.jpg')",
      }}
    >
      <div className="max-w-md w-full mx-4 p-8 sm:p-10 bg-white/90 shadow-2xl space-y-6">
        <div className="flex items-center justify-center space-x-2">
          <FaKey className="text-2xl text-black" />
          <h2 className="text-3xl font-semibold text-gray-800 text-center font-fahkwang">
            Forgot Password
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent text-black w-full outline-none font-fahkwang"
            />
          </div>

          {message && (
            <p className="text-red-600 text-sm text-center font-medium">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-2 rounded-lg font-bold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
