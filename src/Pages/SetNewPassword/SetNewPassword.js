import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaLock, FaCheckDouble, FaKey } from "react-icons/fa"; 

const SetNewPassword = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email || "";

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { newPassword, confirmPassword } = formData;
    if (!newPassword || !confirmPassword) {
      return setMessage("Please fill in all fields.");
    }
    if (newPassword !== confirmPassword) {
      return setMessage("Passwords do not match.");
    }
    setMessage("Password reset successful!");
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 bg-cover bg-center font-fahkwang"
      style={{
        backgroundImage:
          "url('https://wallup.net/wp-content/uploads/2017/03/27/228688-minimalism-digital_art-black_background-748x421.jpg')",
      }}
    >
      <div className="max-w-md w-full p-8 sm:p-10 bg-white/90 shadow-2xl space-y-6">
        <div className="flex items-center justify-center space-x-2">
          <FaKey className="text-2xl text-black" />
          <h2 className="text-3xl font-semibold text-center text-gray-800 font-fahkwang">
            Set New Password
          </h2>
        </div>

        <p className="text-center text-gray-600">For: {email}</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              onChange={handleChange}
              required
              className="bg-transparent text-black w-full outline-none font-fahkwang"
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
            <FaCheckDouble className="text-gray-500 mr-2" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              onChange={handleChange}
              required
              className="bg-transparent text-black w-full outline-none font-fahkwang"
            />
          </div>
          {message && (
            <p className="text-sm text-center text-green-600 font-semibold">
              {message}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-2 rounded-lg font-bold transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetNewPassword;
