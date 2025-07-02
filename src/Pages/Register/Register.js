import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      alert("Registration successful!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 font-fahkwang"
      style={{
        backgroundImage:
          "url('https://wallup.net/wp-content/uploads/2017/03/27/228688-minimalism-digital_art-black_background-748x421.jpg')",
      }}
    >
      <div className="bg-white/90 shadow-2xl p-8 sm:p-10 w-full max-w-md space-y-6">
        <h2
          className="text-black text-4xl font-semibold text-center"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent text-black w-full outline-none font-fahkwang"
              required
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent text-black w-full outline-none font-fahkwang"
              required
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-transparent text-black w-full outline-none font-fahkwang"
              required
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-transparent text-black w-full outline-none font-fahkwang"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center font-medium">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-2 rounded-lg font-bold transition"
          >
            REGISTER
          </button>

          <p className="text-sm text-center text-gray-700 mt-2">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
