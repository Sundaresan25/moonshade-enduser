import React from "react";
import { useLocation, Link } from "react-router-dom";

const pages = [
  { name: "Home",     path: "/" },
  { name: "Products", path: "/products" },
  { name: "Contact",  path: "/contact" },
  { name: "Login",    path: "/login" },
  { name: "Register", path: "/register" },
  { name: "Cart",     path: "/cart" },
  { name: "Disclaimer", path: "/disclaimer" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Cookies",  path: "/cookies" },
  { name: "Imprint / Legal Information", path: "/imprint-legal-information" },
];

const products = [
  { name: "Classic Musk", path: "/products/classic-musk" },
  { name: "Royal Oud",    path: "/products/royal-oud" },
  { name: "Amber Nights", path: "/products/amber-nights" },
  { name: "Vanilla Ember",path: "/products/vanilla-ember" },
];

const norm = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]/gi, " ").replace(/\s+/g, " ").trim();

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get("query") || "";
  const q = norm(query);

  const pageHits    = pages.filter((p)    => norm(p.name).includes(q));
  const productHits = products.filter((p) => norm(p.name).includes(q));

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-10">
        Results for <span className="text-cyan-600">“{query || "-"}”</span>
      </h1>

      {pageHits.length + productHits.length ? (
        <>
          {productHits.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Products</h2>
              <ul className="space-y-3">
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
              <ul className="space-y-3">
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
