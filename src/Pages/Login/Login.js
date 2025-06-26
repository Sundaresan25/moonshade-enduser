import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <div className="max-w-md w-full mx-8 py-6 px-6 border border-gray-300 rounded-lg text-center bg-white bg-opacity-90 shadow-md">
        <h2 className="text-4xl font-bold mb-9">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-9 text-left">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            onClick={() => navigate("/forgot-password")}
            className="text-blue-600 hover:underline bg-transparent border-none pt-6 m-0 cursor-pointer"
          >
            Forgot Password?
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
