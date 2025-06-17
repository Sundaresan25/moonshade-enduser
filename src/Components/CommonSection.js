import React from 'react';

const CommonSection = ({ title = "", subTitle = "", backgroundImage = "", highlightWord }) => {
  const highlightTitle = () => {
    if (highlightWord && title.includes(highlightWord)) {
      const parts = title.split(highlightWord);
      return (
        <>
          {parts[0]}
          <span className="text-cyan-400">{highlightWord}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <div
      className="w-full h-[600px] md:h-[600px] sm:h-[500px] bg-cover bg-center flex items-start justify-start px-10 sm:px-10 md:pl-52 pt-[140px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-white max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          {highlightTitle()}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light text-pink-600 leading-snug">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default CommonSection;