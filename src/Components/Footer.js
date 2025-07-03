import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const socialIcons = [
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaFacebookF, href: "https://facebook.com" },
    { icon: FaXTwitter, href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-black text-white font-fahkwang text-base">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:divide-x divide-gray-700">

        {/* Brand */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start px-2">
          <h3 className="text-3xl font-bold mb-4 font-playfair italic tracking-wide">
            MOONSHADE Perfumes
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6 text-center md:text-left">
            Committed to delivering a seamless and luxurious fragrance journey — from discovery to lasting memory.
          </p>
          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="border border-white p-2 rounded-full hover:bg-white hover:text-black transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center px-2">
          <h4 className="text-2xl font-bold mb-4 font-playfair italic">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-300">
            {[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: "Register", to: "/register" },
              { label: "Login", to: "/login" },
              { label: "Contact", to: "/contact" },
              { label: "Cart", to: "/cart" },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="hover:text-cyan-400 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div className="text-center px-2">
          <h4 className="text-2xl font-bold mb-4 font-playfair italic">
            Follow Us
          </h4>
          <ul className="space-y-3 text-gray-300">
            {[
              {
                label: "Facebook",
                icon: <FaFacebookF />,
                href: "https://facebook.com",
              },
              {
                label: "Instagram",
                icon: <FaInstagram />,
                href: "https://instagram.com",
              },
              {
                label: " Twitter",
                icon: <FaXTwitter />,
                href: "https://twitter.com",
              },
            ].map(({ label, icon, href }) => (
              <li key={label} className="flex items-center justify-center md:justify-center gap-3">
                {icon}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 text-gray-400 text-sm py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm md:text-base">
            © MOONSHADE 2025. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-center text-sm md:text-base">
            {[
              "Imprint / Legal Information",
              "Disclaimer",
              "Privacy Policy",
              "Cookies",
            ].map((item, idx) => (
              <React.Fragment key={item}>
                {idx > 0 && <span className="hidden md:inline">|</span>}
                <Link
                  to={`/${item.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="hover:text-cyan-400 transition"
                >
                  {item}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
