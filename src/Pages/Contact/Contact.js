import React, { useState } from "react";
import axios from "axios";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CommonPage from "../../Components/CommonPage";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name must contain only letters and spaces.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name must contain only letters and spaces.";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
          service_id: "service_eazu8ge",
          template_id: "template_z2qsn7i",
          user_id: "qUQ87ud5_KyPb3esF",
          template_params: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            message: formData.message,
          },
        });

        if (response.status === 200) {
          const result = {
            status: 200,
            text: "OK",
            __proto__: Object.prototype,
          };
          console.log("Email sent successfully!", result);

          setSubmitted(true);
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
          setErrors({});
        } else {
          console.error("Email sending failed:", response);
          setSubmitted(false);
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setSubmitted(false);
      }
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="font-fahkwang bg-white pb-12">
      <CommonPage
        title="Contact Us"
        subTitle="Every scent begins with a story, the essence of luxury is just a message away, let yours begin with us."
        backgroundImage="https://wallpapers.com/images/hd/plain-black-background-image-p7zyn3zjoo0toue5.jpg"
        highlightWord="Us"
      />

      <div className="max-w-3xl mx-auto my-10 px-4 py-10 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6 space-y-3">
          <h2 className="text-3xl font-bold text-gray-800">Send Us a Message</h2>
          <div className="flex justify-center items-center gap-6 text-gray-700">
            <a href="mailto:support@moonshade.com" className="text-blue-600 hover:underline">
              📧 support@moonshade.com
            </a>
            <div className="flex gap-4 text-xl text-blue-600">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black-800">
                <FaXTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-800">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {submitted ? (
          <p className="text-green-600 font-medium text-center">
            Thank you for reaching out! We'll respond shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:ring-2 focus:ring-blue-400`}
                />
                <div className="min-h-[20px]">
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
              </div>

              <div className="flex-1 space-y-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:ring-2 focus:ring-blue-400`}
                />
                <div className="min-h-[20px]">
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-1">
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
              <div className="min-h-[20px]">
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-1">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
              <div className="min-h-[20px]">
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
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
  );
};

export default Contact;
