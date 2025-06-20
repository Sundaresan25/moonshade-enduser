import React, { useState } from 'react';
import Options from '../../Components/Options';
import Button from '../../Components/Button';
import CommonPage from '../../Components/CommonPage';

const rawProducts = [ { name: "Signature Perfume", description: "Day & night exclusive scents.", price: "$50", image: "https://th.bing.com/th/id/OIP.vQ-FnprzqcOEhJduAhYlvwHaE8?w=294&h=196&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Custom Blend", description: "A fragrance tailored to you.", price: "$75", image: "https://th.bing.com/th/id/OIF.r9AwOVljjspLlRYFWVas9A?w=270&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Seasonal Collection", description: "Inspired by seasonal magic.", price: "$60", image: "https://th.bing.com/th/id/OIP.aumddiaYioAcktjUXavjlwHaE7?w=294&h=196&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Gift Sets", description: "Ideal for special occasions.", price: "$80", image: "https://th.bing.com/th/id/OIF.CHEuskN2qo1c4luwqVMsOg?w=230&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Luxury Aroma", description: "Premium scents for elegance.", price: "$90", image: "https://th.bing.com/th?id=OIF.%2fWfWKGisiERorxHVVBi2Wg&w=190&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Classic Musk", description: "Rich and long-lasting aroma.", price: "$65", image: "https://tse2.mm.bing.net/th/id/OIP.dX42_EhwjYizXrFia4m88AHaG8?rs=1&pid=ImgDetMain" },
  { name: "Fresh Citrus", description: "Bright and refreshing blend.", price: "$55", image: "https://th.bing.com/th/id/OIP._NEXvSUG5PbovsF5w2nwHgHaEK?w=333&h=187&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Mystic Woods", description: "A deep and woody fragrance.", price: "$70", image: "https://th.bing.com/th/id/OIP.g1x4fNJ-AscKRWpGg_9aFwAAAA?w=207&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Ocean Breeze", description: "Cool and soothing essence.", price: "$58", image: "https://th.bing.com/th/id/OIP.VPckbxMdH6TljQQ3nPU4WAHaHa?w=188&h=188&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Floral Bouquet", description: "A mix of fresh flower scents.", price: "$62", image: "https://th.bing.com/th/id/OIP.Hu1K5epoED8jpay05JHOwQHaHa?w=192&h=192&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Signature Perfume", description: "Day & night exclusive scents.", price: "$50", image: "https://th.bing.com/th/id/OIP.ziR-H8Rkn0jRJ5iPiVh-NwHaIF?w=177&h=194&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Custom Blend", description: "A fragrance tailored to you.", price: "$75", image: "https://th.bing.com/th?q=Perfume+Landscape+Wallpaper+HD&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
  { name: "Seasonal Collection", description: "Inspired by seasonal magic.", price: "$60", image: "https://th.bing.com/th/id/OIP.Vkzj5jDPPbJkuUbP3IlH0wHaE8?w=238&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Gift Sets", description: "Ideal for special occasions.", price: "$80", image: "https://th.bing.com/th/id/OIP.iNdGouhFiEJ5iMlN7JiB-gHaEo?w=226&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Luxury Aroma", description: "Premium scents for elegance.", price: "$90", image: "https://th.bing.com/th/id/OIP.nmH6gcU8rqIERbJFll55nAHaKp?w=146&h=210&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Classic Musk", description: "Rich and long-lasting aroma.", price: "$65", image: "https://th.bing.com/th/id/OIP.Q0Erg2UKl6G7hNq-xrqtJQHaFj?w=272&h=204&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Fresh Citrus", description: "Bright and refreshing blend.", price: "$55", image: "https://th.bing.com/th?id=OIF.aR%2fh%2fO0N%2fLAedKhhOt1GXA&w=300&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Mystic Woods", description: "A deep and woody fragrance.", price: "$70", image: "https://th.bing.com/th?id=OIF.4F0%2fg6bM2%2fOUB40CKE6Ajw&w=128&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Ocean Breeze", description: "Cool and soothing essence.", price: "$58", image: "https://ts2.mm.bing.net/th?id=OIP.defeWv3xJ4LAm_ERKgYVaQHaHa&pid=15.1" },
  { name: "Floral Bouquet", description: "A mix of fresh flower scents.", price: "$62", image: "https://th.bing.com/th/id/OIP.G_aITUb7Pb9pGNUq_3QpMAHaHa?w=196&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Floral Bouquet", description: "A mix of fresh flower scents.", price: "$62", image: "https://th.bing.com/th/id/OIP.YzEqX5eH709vjV7JudwrdgHaFj?w=181&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Floral Bouquet", description: "A mix of fresh flower scents.", price: "$62", image: "https://th.bing.com/th/id/OIP.aZ42HVsixaO7PHkF6Y6UxAHaHa?w=124&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Floral Bouquet", description: "A mix of fresh flower scents.", price: "$62", image: "https://th.bing.com/th/id/OIP.7CYxmzc7SXc9OW1RfpgAAQHaE7?w=260&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Floral Bouquet", description: "A mix of fresh flower scents.", price: "$62", image: "https://img.freepik.com/premium-photo/packaging-luxury-aroma-perfume-decorations-product-concept-with-flower-background_41969-23875.jpg" },
];
 

const parsePrice = (price) => parseFloat(price.replace('$', ''));

const Products = () => {
  const [filters, setFilters] = useState({ search: '', sort: '', filter: '' });

  const filteredProducts = rawProducts
    .filter((p) =>
      p.name.toLowerCase().includes(filters.search.toLowerCase())
    )
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
    console.log('Added to cart:', product);
    alert(`${product.name} added to cart.`);
  };

  return (
    <div className="font-sans bg-gray-100 pb-12">
      <CommonPage
        title="MOONSHADE"
        subTitle="A creator of fragrances."
        backgroundImage="https://img.freepik.com/premium-photo/colorful-bottle-perfume-with-rainbow-colored-smoke-coming-out-it_732812-1754.jpg?ga=GA1.1.379859239.1749710562&semt=ais_hybrid&w=740"
        highlightWord="SHADE"
      />

      <Options onChange={setFilters} />

      <div className="grid gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product, index) => (
          <div
            className="bg-white rounded-xl shadow-md p-4 flex flex-col hover:shadow-lg hover:-translate-y-1 transition"
            key={index}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <span className="text-blue-600 font-bold mt-auto">{product.price}</span>
            <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
