import React from 'react';

const Options = ({ onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full px-4 py-4">
      <input
        type="text"
        name="search"
        placeholder="Search products..."
        onChange={handleChange}
        className="w-full sm:w-3/4 lg:w-2/2 mx-auto block px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black text-lg"
      />
    </div>
  );
};

export default Options;