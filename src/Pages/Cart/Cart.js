import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const [animationData, setAnimationData] = useState(null);
  const [notified, setNotified] = useState(false);
  const { t } = useTranslation(); // Import translation hook

  useEffect(() => {
    fetch("https://assets6.lottiefiles.com/packages/lf20_jcikwtux.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation", err));
  }, []);

  const handleNotifyClick = () => {
    setNotified(true);
    setTimeout(() => setNotified(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-[#f8f8f8] to-white flex items-center justify-center px-4 py-28 font-fahkwang">
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12 p-6 md:p-12 transition-all duration-300">

        {/* Left: Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            {t("cart.empty")}
          </h1>
          <p className="text-lg text-gray-600 mb-3">
            {t("cart.staytuned")}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            {t("cart.notifytext")}
          </p>

          <button
            onClick={handleNotifyClick}
            className="bg-black/80 hover:bg-black text-white px-6 py-3 rounded-full backdrop-blur-sm transition-all shadow-md"
          >
            {t("cart.notifybutton")}
          </button>

          {notified && (
            <div className="mt-5 text-green-600 font-medium animate-pulse">
              {t("cart.notifysuccess")}
            </div>
          )}
        </div>

        {/* Right: Animation */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="p-2 rounded-full border-4 border-gray-300 shadow-inner">
            {animationData ? (
              <Lottie animationData={animationData} className="w-72 h-72 md:w-80 md:h-80" />
            ) : (
              <p className="text-gray-400">{t("loading")}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
