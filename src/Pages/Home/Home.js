import React from "react";

const perfumes = [
  {
    name: "Elegance Eau de Parfum",
    image: "https://via.placeholder.com/300x400?text=Elegance+Perfume",
    description: "A classic scent with floral and woody notes.",
  },
  {
    name: "Mystique Noir",
    image: "https://via.placeholder.com/300x400?text=Mystique+Noir",
    description: "Dark, mysterious, and captivating fragrance.",
  },
  {
    name: "Citrus Bloom",
    image: "https://via.placeholder.com/300x400?text=Citrus+Bloom",
    description: "Fresh and vibrant with a citrus twist.",
  },
];

function Home() {
  return (
    <div className="bg-gray-300 bg-opacity-80 text-gray-800 text-center min-h-screen p-8">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {perfumes.map((perfume, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-purple-700 text-2xl font-semibold mb-2">
              {perfume.name}
            </h2>
            <p className="text-gray-700 text-lg">{perfume.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
