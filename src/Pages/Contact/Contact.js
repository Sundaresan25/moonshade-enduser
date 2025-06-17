import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg text-center bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="text-gray-700">
        Email:{" "}
        <a href="mailto:support@perfumedesign.com" className="text-blue-600 underline">
          support@perfumedesign.com
        </a>
      </p>
      <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
      <p className="text-gray-700 mb-4">Address: 123 Fragrance Lane, Aroma City, USA</p>

      <h3 className="text-xl font-semibold mb-2">Send Us a Message</h3>

      {submitted ? (
        <p className="text-green-600 font-semibold mt-4">
          Thank you for reaching out! We'll respond shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded resize-none h-32"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
