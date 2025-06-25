import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaFacebookF, href: "https://facebook.com" },
    { icon: FaYoutube, href: "https://youtube.com" },
    { icon: FaTwitter, href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:divide-x divide-gray-700">
        
        <div className="md:pr-6">
          <h3 className="text-2xl font-bold mb-4">MOONSHADE Perfumes</h3>
          <p className="text-gray-300 leading-relaxed">
            We are committed to delivering a seamless and luxurious fragrance
            journey—from discovery to lasting memory.
          </p>
          <div className="flex gap-4 mt-6">
            {socialIcons.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="border border-white p-2 rounded-full hover:bg-black hover:text-cyan-400 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:px-6">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: "Contact Us", to: "/contact" },
              { label: "Login", to: "/login" },
              { label: "Register", to: "/register" },
              { label: "Cart", to: "/cart" },
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="hover:text-cyan-400 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:px-6">
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <ul className="space-y-3 text-gray-300">
            {[
              { label: "Facebook", icon: <FaFacebookF />, href: "https://facebook.com" },
              { label: "Instagram", icon: <FaInstagram />, href: "https://instagram.com" },
              { label: "YouTube", icon: <FaYoutube />, href: "https://youtube.com" },
              { label: "Twitter", icon: <FaTwitter />, href: "https://twitter.com" },
            ].map(({ label, icon, href }) => (
              <li key={label} className="flex items-center gap-3">
                {icon}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:pl-6">
          <h4 className="text-xl font-bold mb-4">Our Store</h4>
          <address className="not-italic leading-relaxed text-gray-300 space-y-4">
            <p>
              The Skyview‑10, Level 2<br />
              Hitech City Main Road<br />
              Madhapur, Hyderabad 500081<br />
              (Opp. IKEA)
            </p>
            <p>
              #01 JCMS Complex<br />
              8th Cross, TC Palya Main Rd<br />
              Ramamurthy Nagar, Bengaluru 560016
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-gray-700 text-gray-400 text-sm py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© MOONSHADE 2025. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4 justify-center text-center">
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
                  className="hover:text-cyan-400"
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
