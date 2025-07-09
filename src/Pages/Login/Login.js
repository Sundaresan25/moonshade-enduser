import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError(t("pleaseFill"));
    } else {
      setError("");
      alert(t("loginSuccess"));
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
          <FaSignInAlt className="text-3xl text-black-600" />
          <h2
            className="text-black text-4xl font-semibold"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {t("login")}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="email"
              placeholder={t("username")}
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
              onChange={handleChange}
              className="bg-transparent text-black w-full outline-none font-fahkwang"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="accent-blue-600" />
              <span>{t("rememberMe")}</span>
            </label>
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-blue-600 hover:underline"
            >
              {t("forgotPassword")}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {t("login")}
          </button>
        </form>

        <p className="mt-4">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-blue-600 hover:underline bg-transparent border-none pt-6 m-0 cursor-pointer"
          >
            {t("forgotPassword")}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
