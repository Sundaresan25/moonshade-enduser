import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import products from "./data/products";
import { useTranslation } from "react-i18next";

const pages = [
  { name: "home", path: "/" },
  { name: "products", path: "/products" },
  { name: "register", path: "/register" },
  { name: "login", path: "/login" },
  { name: "contact", path: "/contact" },
  { name: "disclaimer", path: "/disclaimer" },
  { name: "privacyPolicy", path: "/privacy-policy" },
  { name: "cookies", path: "/cookies" },
  { name: "imprintLegalInformation", path: "/imprint-legal-information" },
];

const searchIndex = [...pages, ...products];

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && setOverlayOpen(false);
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (overlayOpen) inputRef.current?.focus();
  }, [overlayOpen]);

  const suggestions = query.trim()
    ? searchIndex.filter((item) =>
        t(item.name).toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const goFullSearch = (q) => {
    setOverlayOpen(false);
    setQuery("");
    navigate(`/search?query=${encodeURIComponent(q)}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-extrabold">
          <span className="text-white font-bodoni">MOON</span>
          <span className="text-sky-400 font-bodoni">SHADE</span>
        </Link>

        <ul className="hidden md:flex gap-8 text-base font-medium">
          {["home", "products", "register", "login", "contact"].map((key) => {
            const { path } = pages.find((p) => p.name === key);
            return (
              <li key={key}>
                <Link to={path} className="text-white hover:text-cyan-400 transition">
                  {t(`navbar.${key}`)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-6 text-xl text-white">
          <button onClick={() => setOverlayOpen(true)} className="hover:text-cyan-400">
            <FaSearch />
          </button>
          <Link to="/cart" className="hover:text-cyan-400">
            <FaShoppingCart />
          </Link>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl text-white">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-6">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {["home", "products", "register", "login", "contact"].map((key) => {
              const { path } = pages.find((p) => p.name === key);
              return (
                <li key={key}>
                  <Link to={path} className="hover:text-cyan-400" onClick={() => setMenuOpen(false)}>
                    {t(`navbar.${key}`)}
                  </Link>
                </li>
              );
            })}
            <li className="flex gap-4 text-xl pt-2">
              <button onClick={() => { setOverlayOpen(true); setMenuOpen(false); }} className="hover:text-cyan-400">
                <FaSearch />
              </button>
              <Link to="/cart" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      )}

      {overlayOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center pt-24 px-4 z-[60]">
          <div className="w-full max-w-xl">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== "Enter" || !query.trim()) return;
                const hits = suggestions;
                if (hits.length === 1) {
                  setOverlayOpen(false);
                  setQuery("");
                  navigate(hits[0].path);
                } else {
                  goFullSearch(query.trim());
                }
              }}
              placeholder={t("navbar.searchPlaceholder")}
              className="w-full p-4 text-lg md:text-xl rounded-md text-gray-900"
            />
            {query && (
              <ul className="bg-white mt-2 rounded shadow-lg max-h-64 overflow-y-auto">
                {suggestions.length ? (
                  <>
                    {suggestions.slice(0, 8).map((s) => (
                      <li
                        key={s.path}
                        onClick={() => {
                          setOverlayOpen(false);
                          setQuery("");
                          navigate(s.path);
                        }}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                      >
                        {t(s.name)}
                      </li>
                    ))}
                    <li
                      onClick={() => goFullSearch(query.trim())}
                      className="px-4 py-3 text-cyan-700 hover:bg-gray-100 cursor-pointer font-medium"
                    >
                      {t("navbar.seeAllResults")}
                    </li>
                  </>
                ) : (
                  <li className="px-4 py-3 text-gray-500">{t("navbar.noMatchesFound")}</li>
                )}
              </ul>
            )}
          </div>

          <button
            onClick={() => setOverlayOpen(false)}
            className="absolute top-6 right-6 text-3xl text-white hover:text-cyan-400"
          >
            <FaTimes />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
