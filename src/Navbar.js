import React from "react";
import { Link } from "react-router"; 
import { FaHome, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex flex-wrap justify-between items-center text-white text-xl">
        <li className="m-2">
          <Link to="/" className="hover:text-blue-400 flex items-center gap-1">
            <FaHome />
          </Link>
        </li>
        <li className="m-2">
          <Link to="/products" className="hover:text-blue-400">Products</Link>
        </li>
        <li className="m-2">
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </li>
        <li className="m-2">
          <Link to="/login" className="hover:text-blue-400">Login</Link>
        </li>
        <li className="m-2">
          <Link to="/register" className="hover:text-blue-400">Register</Link>
        </li>
        <li className="m-2">
          <Link to="/cart" className="hover:text-blue-400 flex items-center gap-1">
            <FaShoppingCart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
