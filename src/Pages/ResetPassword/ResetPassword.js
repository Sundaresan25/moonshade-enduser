import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaLock, FaUserShield, FaCheckDouble } from "react-icons/fa";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [formData, setFormData] = useState({
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // Timer logic
  useEffect(() => {
    let countdown;
    if (isResendDisabled && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendDisabled(false);
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [isResendDisabled, timer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.otp || !formData.newPassword || !formData.confirmPassword) {
      setMessage("Please fill in all fields.");
    } else if (formData.newPassword !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
    } else {
      setMessage("Password reset successful!");
      setTimeout(() => navigate("/"), 2000);
    }
  };

  const handleResendOtp = () => {
    setIsResendDisabled(true);
    setTimer(30);
    setMessage("OTP has been resent to your email.");
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
        <h2 className="text-3xl text-center font-semibold text-gray-800">
          Reset Password
        </h2>
        <p className="text-center text-gray-600">For: {email}</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* OTP Input */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
            <FaUserShield className="text-gray-500 mr-2" />
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              onChange={handleChange}
              required
              className="bg-transparent text-black w-full outline-none font-fahkwang"
            />
          </div>

          {/* Resend OTP */}
          <div className="flex justify-between items-center text-sm">
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={isResendDisabled}
              className={`text-blue-600 hover:text-blue-800 transition ${
                isResendDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Resend OTP
            </button>
            {isResendDisabled && (
              <span className="text-gray-500">{timer} sec</span>
            )}
          </div>

          {/* New Password */}
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

          {/* Confirm Password */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
            <FaCheckDouble className="text-gray-500 mr-2" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              onChange={handleChange}
              required
              className="bg-transparent text-black w-full outline-none font-fahkwang"
            />
          </div>

          {/* Message */}
          {message && (
            <p className="text-green-600 font-semibold text-sm text-center">
              {message}
            </p>
          )}

          {/* Submit Button */}
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

export default ResetPassword;
