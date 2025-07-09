import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUserShield, FaShieldAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const VerifyOtp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let countdown;
    if (isResendDisabled && timer > 0) {
      countdown = setInterval(() => setTimer((t) => t - 1), 1000);
    } else if (timer === 0) {
      setIsResendDisabled(false);
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [isResendDisabled, timer]);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!otp) return setMessage(t("pleaseEnterOtp"));
    if (otp.length !== 6) return setMessage(t("otpMustBeSixDigits"));

    if (otp === "123456") {
      navigate("/set-new-password", { state: { email } });
    } else {
      setMessage(t("invalidOtp"));
    }
  };

  const handleResendOtp = () => {
    setIsResendDisabled(true);
    setTimer(30);
    setMessage(t("otpResent"));
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
          <FaShieldAlt className="text-2xl text-black" />
          <h2 className="text-3xl font-semibold text-gray-800 text-center font-fahkwang">
            {t("verifyOtp")}
          </h2>
        </div>

        <p className="text-center text-gray-600">{t("forEmail")} {email}</p>

        <form onSubmit={handleVerify} className="space-y-5">
          <div className="flex flex-col">
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
              <FaUserShield className="text-gray-500 mr-2" />
              <input
                type="text"
                name="otp"
                maxLength="6"
                placeholder={t("enterOtp")}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="bg-transparent w-full outline-none text-black font-fahkwang"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1 ml-1">
              {t("otpInstruction")}
            </p>
          </div>

          <div className="flex justify-between items-center text-sm">
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={isResendDisabled}
              className={`text-blue-600 hover:text-blue-800 transition ${isResendDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {t("resendOtp")}
            </button>
            {isResendDisabled && (
              <span className="text-gray-500">{timer} {t("seconds")}</span>
            )}
          </div>

          {message && (
            <p className="text-sm text-center text-red-600 font-semibold">
              {message}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-2 rounded-lg font-bold transition"
          >
            {t("verifyOtp")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
