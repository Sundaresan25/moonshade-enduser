import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Disclaimer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-8 lg:px-16 text-gray-800 font-fahkwang">
      <div className="max-w-5xl mx-auto space-y-10 mt-16">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-3 text-base md:text-lg font-semibold text-cyan-700 hover:text-cyan-500 transition-transform duration-200 hover:scale-105 bg-cyan-100 px-4 py-2 rounded-full shadow-sm font-fahkwang"
        >
          <FaArrowLeft className="text-xl font-fahkwang" />
          <span className="font-fahkwang">{t('backToPreviousPage')}</span>
        </button>

        <h1 className="text-4xl lg:text-5xl font-extrabold text-black tracking-tight font-bodoni">
          {t('websiteDisclaimer')}
        </h1>

        <p className="text-lg leading-relaxed text-gray-700">
          {t('disclaimerIntro.part1')} <span className="font-semibold text-black">MOONSHADE</span> {t('disclaimerIntro.part2')}
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-black font-bodoni">{t('externalLinksDisclaimer')}</h2>
          <p className="text-lg text-gray-700">{t('externalLinksDescription')}</p>

          <h2 className="text-2xl font-bold text-black font-bodoni">{t('noProfessionalAdvice')}</h2>
          <p className="text-lg text-gray-700">{t('noProfessionalAdviceDescription')}</p>

          <h2 className="text-2xl font-bold text-black font-bodoni">{t('limitationOfLiability')}</h2>
          <p className="text-lg text-gray-700">{t('limitationOfLiabilityDescription')}</p>
        </div>

        <p className="text-sm text-gray-500 pt-8">{t('lastUpdated')}: June 2025</p>
      </div>
    </div>
  );
};

export default Disclaimer;
