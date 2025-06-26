import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
      // Simulate OTP validation here if needed
      setMessage("Password reset successful!");
      setTimeout(() => navigate("/"), 2000);
    }
  };

  const handleResendOtp = () => {
    setIsResendDisabled(true);
    setTimer(30);
    // You can trigger your API to resend OTP here
    setMessage("OTP has been resent to your email.");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <div className="max-w-md w-full mx-8 p-6 border border-gray-300 rounded-lg bg-white bg-opacity-90 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Reset Password
        </h2>
        <p className="mb-4 text-center text-gray-600">For: {email}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={isResendDisabled}
              className={`text-blue-600 hover:text-blue-800 text-sm ${isResendDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Resend OTP
            </button>
            {isResendDisabled && (
              <span className="text-gray-500 text-sm">{timer} sec</span>
            )}
          </div>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {message && (
            <p className="text-green-600 font-semibold text-sm text-center">{message}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
