import React, { useState, useEffect } from 'react';
import Options from '../../Components/Options';
import CommonPage from '../../Components/CommonPage';
import Lottie from 'lottie-react';
import { useTranslation } from 'react-i18next';

const rawProducts = [
  {
    name: "Signature Perfume",
    description: "Day & night exclusive scents.",
    price: "$50",
    image: "https://th.bing.com/th/id/OIP.vQ-FnprzqcOEhJduAhYlvwHaE8?w=294&h=196&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    name: "Custom Blend",
    description: "A fragrance tailored to you.",
    price: "$75",
    image: "https://th.bing.com/th/id/OIF.r9AwOVljjspLlRYFWVas9A?w=270&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    name: "Seasonal Collection",
    description: "Inspired by seasonal magic.",
    price: "$60",
    image: "https://th.bing.com/th/id/OIP.aumddiaYioAcktjUXavjlwHaE7?w=294&h=196&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    name: "Gift Sets",
    description: "Ideal for special occasions.",
    price: "$80",
    image: "https://th.bing.com/th/id/OIF.CHEuskN2qo1c4luwqVMsOg?w=230&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  }
];

const parsePrice = (price) => parseFloat(price.replace('$', ''));

const Products = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({ search: '', sort: '', filter: '' });
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://assets6.lottiefiles.com/packages/lf20_jcikwtux.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load animation', err));
  }, []);

  const filteredProducts = rawProducts
    .filter((p) => p.name.toLowerCase().includes(filters.search.toLowerCase()))
    .filter((p) => {
      const price = parsePrice(p.price);
      if (filters.filter === '0-60') return price <= 60;
      if (filters.filter === '61-80') return price > 60 && price <= 80;
      if (filters.filter === '81+') return price > 80;
      return true;
    })
    .sort((a, b) => {
      const priceA = parsePrice(a.price);
      const priceB = parsePrice(b.price);
      if (filters.sort === 'low') return priceA - priceB;
      if (filters.sort === 'high') return priceB - priceA;
      return 0;
    });

  const handleAddToCart = (product) => {
    alert(`${product.name} ${t('products.addedToCart')}`);
  };

  return (
    <div className="font-sans bg-gray-100 pb-12">
      {/* Banner */}
      <CommonPage
        title={t('products.title')}
        subTitle={t('products.subtitle')}
        backgroundImage="https://img.pikbest.com/ai/illus_our/20230427/655d364dbe855341d5ed98aec55f14e3.jpg!w700wp"
        highlightWord={t('products.highlightWord')}
      />

      {/* Filters */}
      <Options onChange={setFilters} />

      {/* New Collections */}
      <section id="new" className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">

          {/* Heading with lines */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow border-t border-gray-300"></div>
            <h2 className="text-5xl font-bold text-black mb-4 tracking-wide font-[Playfair Display] italic">
              {t('products.newCollections')}
            </h2>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Animation */}
          <div className="flex justify-center mb-6">
            {animationData ? (
              <Lottie animationData={animationData} loop className="w-60 h-60" />
            ) : (
              <p className="text-gray-500">{t('products.loadingAnimation')}</p>
            )}
          </div>

          {/* Subtext */}
          <p className="text-xl text-black-200 font-medium mt-4">{t('products.launchingSoon')}</p>
        </div>
      </section>
    </div>
  );
};

export default Products;
