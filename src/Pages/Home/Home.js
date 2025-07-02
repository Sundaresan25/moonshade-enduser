import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Lottie from 'lottie-react';
import 'aos/dist/aos.css';

import Carousel from '../../Components/Carousel';


const Home = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    fetch('https://assets6.lottiefiles.com/packages/lf20_jcikwtux.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load animation', err));
  }, []);


  return (
    <div className="bg-black text-white scroll-smooth">
      <Carousel />

      <section id="about" className="w-full bg-black py-16 px-4">
  <div className="max-w-7xl mx-auto px-4 md:px-12">
    <div className="mb-12" data-aos="fade-up">
      <h2 className="text-5xl font-bold mb-9 text-white text-center font-fahkwang">About Us</h2>
      <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 font-fahkwang">
        100% of Our Customers
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-white font-fahkwang">
        Trust Us as a Signature Fragrance Partner
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="w-full" data-aos="fade-right">
        <img
          src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D"
          alt="MOONSHADE Perfume"
          className="w-full h-[80vh] object-cover shadow-md"
        />
      </div>

      <div className="p-6 md:p-0" data-aos="fade-left">
        <p className="text-xl leading-relaxed text-gray-200 mb-4 font-fahkwang">
          Discover the essence of luxury at <span className="font-bold text-white">MOONSHADE Perfumes</span>.
          Our carefully crafted scents are designed to captivate your senses and leave a lasting impression.
          With limited-edition creations and bespoke formulations, we invite you into a realm where sophistication meets artistry, ensuring that your scent remains uniquely yours.
        </p>
        <p className="text-xl leading-relaxed text-gray-200 font-fahkwang">
          We are curators of rare and exclusive fragrances, dedicated to redefining luxury through the art of fine perfumery.
          Each bottle we curate embodies sophistication, exclusivity, and timeless allure, ensuring that your signature scent remains unmistakably yours.
        </p>
        <div className="mt-6 text-white font-bold text-lg font-fahkwang">
          MOONSHADE Team <span className="font-normal text-gray-200">| Artisans of Fragrance</span>
        </div>
      </div>
    </div>
  </div>
</section>
     
      <h2 className="text-5xl font-bold mb-9 text-center bg-black text-white pb-8 font-fahkwang" data-aos="zoom-in">
        Explore Our Scents
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-3 text-white text-center">
        
        <div className="relative h-[700px] overflow-hidden" data-aos="zoom-in-up">
          <img
            src="https://img5.goodfon.com/wallpaper/big/6/63/black-golden-luxury-canva-background-abstract-geometric-fon.jpg"
            alt="Signature Scents"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 flex flex-col justify-end pb-20 items-center px-4">
            <h3 className="text-3xl font-bold font-lampard mb-14 leading-[1.2] tracking-wide capitalize">Signature Scents</h3>
            <p className="text-lg tracking-wide max-w-xs leading-relaxed mb-36 uppercase font-fahkwang">
              Indulge in the allure of our signature scents, each created with a unique blend of rare ingredients to evoke elegance and sophistication.
            </p>
          </div>
        </div>
     
        <div className="relative h-[700px] overflow-hidden" data-aos="zoom-in-up" data-aos-delay="100">
          <img
            src="https://img.freepik.com/premium-photo/abstract-black-gold-background-with-lines-style-linear-simplicity_921860-152601.jpg"
            alt="Limited Edition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 flex flex-col justify-end pb-20 items-center px-4">
            <h3 className="text-5xl uppercase font-syne mb-12">Limited Edition</h3>
            <p className="text-lg tracking-wide max-w-xs leading-relaxed mb-36 uppercase font-fahkwang">
              Experience exclusivity with our limited edition perfumes, meticulously formulated to offer a sense of individuality and refinement.
            </p>
          </div>
        </div>
        
        <div className="relative h-[700px] overflow-hidden" data-aos="zoom-in-up" data-aos-delay="200">
          <img
            src="https://img5.goodfon.com/wallpaper/big/6/63/black-golden-luxury-canva-background-abstract-geometric-fon.jpg"
            alt="Ultra-Rare Edition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 flex flex-col justify-end pb-20 items-center px-4">
            <h3 className="text-5xl uppercase font-revivalisem mb-6">Ultra-Rare Edition</h3>
            <p className="text-lg tracking-wide max-w-xs leading-relaxed mb-36 uppercase font-fahkwang">
              Each scent is a unique masterpiece, with limited production, ensuring you own something truly special for those who cherish the beauty of fragrance.
            </p>
          </div>
        </div>
      </section>

      <section id="new" className="bg-black">
        <div className="py-40 text-center px-4" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-wide font-[Playfair Display] italic">New Collections</h2>
          <div className="flex justify-center">
            {animationData ? (
              <Lottie animationData={animationData} loop={true} className="w-80 h-80" />
            ) : (
              <p className="text-gray-500 font-fahkwang">Loading animation...</p>
            )}
          </div>
          <p className="text-xl text-white-200 font-medium mt-4 font-fahkwang">Launching Soon...</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
