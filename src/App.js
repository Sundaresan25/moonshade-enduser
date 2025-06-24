import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";

import Disclaimer from "./Pages/Disclaimer/Disclaimer";
import PrivacyPolicy from "./Pages/Disclaimer/PrivacyPolicy";
import Cookies from "./Pages/Disclaimer/Cookies";
import Imprint from "./Pages/Disclaimer/Imprint";

import SearchResults from "./Components/SearchResults";

const App = () => (
  /* The extra classes guarantee the root never grows wider than the screen */
  <div className="APP w-full overflow-x-hidden">
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<SearchResults />} />

      {/* Legal pages */}
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/imprint-legal-information" element={<Imprint />} />

      {/* Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  </div>
);

export default App;
