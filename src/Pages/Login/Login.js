import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
    } else {
      setError("");
      alert("Login successful!");
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://media.gettyimages.com/id/812718952/video/4k-abstract-bokeh-background-loop.jpg?s=640x640&k=20&c=ujDn2-KaU1qZFE6pEro-hnrIJOIzp1HunJYIdS8auvA=")',
      }}
    >
      {/* MOONSHADE text in top-left corner */}
      <h1 className="absolute top-14 left-8 text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
        MOON
        <span className="text-cyan-400">SHADE</span>
      </h1>

      <div className="max-w-md w-full p-6 border border-gray-300 rounded-lg text-center bg-white bg-opacity-90 shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && (
            <p className="text-red-600 font-semibold text-sm">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")} // Navigate to Forgot Password page
            className="text-blue-600 hover:underline bg-transparent border-none p-0 m-0 cursor-pointer"
          >
            Forgot Password?
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
