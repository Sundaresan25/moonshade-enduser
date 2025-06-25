import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Components/Footer"; 

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
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";

const App = () => (
   <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/reset-passeord" element={<ResetPassword/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/imprint-legal-information" element={<Imprint />} />
      <Route path="*" element={<Home />} />
    </Routes>
    <Footer /> 
  </div>
);

export default App;