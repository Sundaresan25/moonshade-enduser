import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-black text-white scroll-smooth">
      <Carousel />

     
      <section id="about" className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-5xl font-bold mb-9 text-black text-center">About Us</h2>
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-600">
              100% of Our Customers
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black">
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
              <p className="text-xl leading-relaxed text-gray-800 mb-4">
                Discover the essence of luxury at <span className="font-semibold text-black">MOONSHADE Perfumes</span>.
                Our carefully crafted scents are designed to captivate your senses and leave a lasting impression.
                With limited-edition creations and bespoke formulations, we invite you into a realm where sophistication meets artistry, ensuring that your scent remains uniquely yours.
              </p>
              <p className="text-xl leading-relaxed text-gray-800">
                We are curators of rare and exclusive fragrances, dedicated to redefining luxury through the art of fine perfumery.
                Each bottle we curate embodies sophistication, exclusivity, and timeless allure, ensuring that your signature scent remains unmistakably yours.
              </p>
              <div className="mt-6 text-black font-bold text-lg">
                MOONSHADE Team <span className="font-normal text-gray-600">| Artisans of Fragrance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section
        id="what"
        className="bg-white text-black px-12 py-24 max-w-8xl mx-auto"
        data-aos="zoom-in"
      >
        <h2 className="text-5xl font-bold mb-9 text-center bg-white text-black pb-8">
          What We Do
        </h2>
        <div className="text-xl leading-relaxed">
          <p className="border-l-4 border-cyan-800 pl-6">
            At <span className="text-black font-semibold">MOONSHADE</span>, we go beyond scent—we craft immersive olfactory journeys that awaken memory, emotion, and identity.
            Our team of artisan perfumers blends tradition with innovation, using rare ingredients sourced from around the world to compose signature fragrances that embody timeless elegance.
            From everyday refinement to rare collectibles, each creation is designed to elevate your presence with subtlety and power.
          </p>
        </div>
      </section>

      
      <h2 className="text-5xl font-bold mb-9 text-center bg-white text-black pb-8" data-aos="zoom-in">
        Explore Our Scents
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-3 text-white text-center">
        
        <div className="relative h-[700px] overflow-hidden" data-aos="zoom-in-up">
          <img
            src="https://media.istockphoto.com/id/893005976/photo/perfume-with-a-strong-smell.jpg?s=612x612&w=0&k=20&c=qvDF7igjfzsNZBINSwZsEt7UiKquxm_gbqp2OCZQ4xo="
            alt="Signature Scents"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 flex flex-col justify-end pb-20 items-center px-4">
            <h3 className="text-2xl font-bold font-lampard uppercase mb-4">Signature Scents</h3>
            <p className="text-lg tracking-wide max-w-xs leading-relaxed mb-44">
              Indulge in the allure of our signature scents, each created with a unique blend of rare ingredients to evoke elegance and sophistication.
            </p>
          </div>
        </div>

        
        <div className="relative h-[700px] overflow-hidden" data-aos="zoom-in-up" data-aos-delay="100">
          <img
            src="https://cdn.pixabay.com/photo/2022/12/06/18/30/perfume-7639482_1280.jpg"
            alt="Limited Edition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 flex flex-col justify-end pb-20 items-center px-4">
            <h3 className="text-2xl font-bold uppercase font-extrabold mb-4">Limited Edition</h3>
            <p className="text-lg tracking-wide max-w-xs leading-relaxed mb-44">
              Experience exclusivity with our limited edition perfumes, meticulously formulated to offer a sense of individuality and refinement.
            </p>
          </div>
        </div>

        
        <div className="relative h-[700px] overflow-hidden" data-aos="zoom-in-up" data-aos-delay="200">
          <img
            src="https://media.istockphoto.com/id/893005976/photo/perfume-with-a-strong-smell.jpg?s=612x612&w=0&k=20&c=qvDF7igjfzsNZBINSwZsEt7UiKquxm_gbqp2OCZQ4xo="
            alt="Ultra-Rare Edition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 flex flex-col justify-end pb-20 items-center px-4">
            <h3 className="text-2xl font-bold uppercase font-revivalisem mb-4">Ultra-Rare Edition</h3>
            <p className="text-lg tracking-wide max-w-xs leading-relaxed mb-44">
              Each scent is a unique masterpiece, with limited production, ensuring you own something truly special for those who cherish the beauty of fragrance.
            </p>
          </div>
        </div>
      </section>

      
      <section id="new" className="bg-white">
        <div className="py-40 text-center px-4" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-black mb-4 tracking-wide">
            New Collections
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Launching Soon...
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
