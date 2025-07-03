import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import products from "../data/products";

const pages = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
  { name: "Cart", path: "/cart" },
  { name: "Disclaimer", path: "/disclaimer" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Cookies", path: "/cookies" },
  { name: "Imprint / Legal Information", path: "/imprint-legal-information" },
];

const norm = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]/gi, " ").replace(/\s+/g, " ").trim();

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";
  const q = norm(query);

  const [productHits, setProductHits] = useState([]);
  const [pageHits, setPageHits] = useState([]);

  useEffect(() => {
    const matchedProducts = products.filter((p) => norm(p.name).includes(q));
    const matchedPages = pages.filter((p) => norm(p.name).includes(q));
    setProductHits(matchedProducts);
    setPageHits(matchedPages);
  }, [q]);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-10">
        Results for <span className="text-cyan-600">“{query || "-"}”</span>
      </h1>

      {productHits.length + pageHits.length > 0 ? (
        <>
          {productHits.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Products</h2>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {productHits.map((p) => (
                  <li key={p.path}>
                    <Link
                      to={p.path}
                      className="block border border-gray-200 rounded-md px-4 py-3 text-lg hover:bg-gray-50 transition"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {pageHits.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Pages</h2>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pageHits.map((p) => (
                  <li key={p.path}>
                    <Link
                      to={p.path}
                      className="block border border-gray-200 rounded-md px-4 py-3 text-lg hover:bg-gray-50 transition"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      ) : (
        <p className="text-lg text-red-600">No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
