import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    type: 'image',
    src: 'https://media.istockphoto.com/id/137993375/photo/perfume.jpg?s=612x612&w=0&k=20&c=vzZKbsfXLWL3tYGFP_Gh97jCs-5uSA3UtcsNzUgNmms=',
  },
  {
    type: 'video',
    src: 'https://cdn.create.vista.com/api/media/medium/466207102/stock-video-slow-motion-hand-using-alcohol-spray?token=',
  },
  {
    type: 'image',
    src: 'https://media.istockphoto.com/id/157609737/photo/old-fashioned-perfume-bottle-with-pink-decanter.jpg?s=612x612&w=0&k=20&c=k1lhvpb9nKpSv30mHZivhozMfpYChgmX5AAQz5JB00o=',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderMedia = () => {
    const current = slides[currentIndex];
    if (!current) return null;

    return current.type === 'video' ? (
      <video
        src={current.src}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-contain z-0 bg-black"
      />
    ) : (
      <img
        src={current.src}
        alt="carousel slide"
        className="absolute inset-0 max-w-[5000px] h-full object-contain object-center z-0 bg-black"
      />
    );
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div className="w-full bg-black">
      <div className="relative h-[110vh] max-w-[2000px] mx-auto overflow-hidden">
        {renderMedia()}

        {/* Overlay Text and Button */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 bg-black/40 z-10 font-fahkwang">
          <h1 className="text-3xl md:text-6xl font-bold font-fahkwang mb-4">
            Welcome to <span className="text-cyan-400 font-fahkwang">MOONSHADE</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-light mb-8 max-w-2xl font-fahkwang">
            Where timeless elegance meets modern fragrance artistry. Discover your next signature scent with us.
          </p>

          <button
            onClick={() => navigate('/register')}
            className="border border-white px-10 py-3 text-base md:text-lg rounded hover:bg-cyan-600 hover:text-black transition font-fahkwang"
          >
            Register
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-20"
        >
          &#8249;
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-20"
        >
          &#8250;
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === i ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
