import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import CommonPage from "../../Components/CommonPage";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters and spaces.";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be under 100 characters.";
    }

  
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

  
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length > 500) {
      newErrors.message = "Message must be under 500 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="font-sans bg-white pb-12">
      <CommonPage
        title="Contact Us"
        subTitle="Contact Us page is simple, easy to read, and broken out into helpful sections. It also lists out its office locations and email addresses for additional ways to get in touch."
        backgroundImage="https://img.freepik.com/premium-vector/abstract-futuristic-location-point-gps-pin-digital-map-concept-dark-blue-background-design_618588-1172.jpg"
        highlightWord="Us"
      />

      <div className="max-w-6xl mx-auto px-4 py-10 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:support@perfumedesign.com" className="text-blue-600 hover:underline">
                support@moonshade.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-4 text-xl text-blue-600">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
    <FaFacebookF />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
    <FaTwitter />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
    <FaInstagram />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
    <FaYoutube />
  </a>
</div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
  
          <div className="md:w-2/2 w-full">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">📍 Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-md h-80 w-full">
              <iframe
                title="Google Map"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019091715606!2d-122.4206790846823!3d37.7785196797586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c869ab6b1%3A0x2f035b870ec7bc65!2s123%20Fragrance%20Lane%2C%20Aroma%20City%2C%20USA!5e0!3m2!1sen!2sus!4v1684028437435!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

        
          <div className="md:w-2/2 w-full">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">📬 Send Us a Message</h3>
            {submitted ? (
              <p className="text-green-600 font-medium">
                Thank you for reaching out! We'll respond shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
