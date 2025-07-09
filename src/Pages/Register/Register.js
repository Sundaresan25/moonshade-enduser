import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
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
      setError(t("pleaseFill"));
    } else if (password !== confirmPassword) {
      setError(t("passwordMismatch"));
    } else {
      setError("");
      alert(t("registerSuccess"));
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

        <div className="flex items-center justify-center space-x-2">
          <FaUserPlus className="text-2xl text-black" />
          <h2
            className="text-black text-4xl font-semibold text-center"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {t("register")}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="name"
              placeholder={t("fullName")}
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
              placeholder={t("email")}
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
              placeholder={t("password")}
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
              placeholder={t("confirmPassword")}
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
            {t("register")}
          </button>

          <p className="text-sm text-center text-gray-700 mt-2">
            {t("alreadyAccount")}{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline"
            >
              {t("login")}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
