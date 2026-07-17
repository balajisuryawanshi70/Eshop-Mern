import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-400 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <h1 className="text-4xl md:text-5xl font-bold">
            Shop Our Products
          </h1>

          <p className="mt-4 text-lg text-orange-100 max-w-2xl">
            Discover premium quality products at the best prices with secure
            shopping and fast delivery.
          </p>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Search & Count */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Search */}
            <div className="relative w-full md:max-w-md">

              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.3-4.3m1.3-5.2a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />

            </div>

            {/* Product Count */}
            <div>
              <span className="bg-orange-100 text-orange-600 px-5 py-3 rounded-full font-semibold">
                {filteredProducts.length} Products Found
              </span>
            </div>

          </div>

        </div>

        {/* Loading */}
        {loading ? (

          <div className="flex justify-center py-24">
            <div className="w-14 h-14 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>

        ) : filteredProducts.length === 0 ? (

          /* Empty State */
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">

            <div className="text-7xl mb-5">
              🔍
            </div>

            <h2 className="text-3xl font-bold text-gray-700">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try searching with a different keyword.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Clear Search
            </button>

          </div>

        ) : (

          <>
            {/* Section Heading */}
            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold text-gray-800">
                Latest Products
              </h2>

              <p className="text-gray-500">
                Showing {filteredProducts.length} items
              </p>

            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              ))}

            </div>
          </>

        )}

      </div>
    </div>
  );
};

export default Shop;
