// import React, { useEffect, useState } from 'react';
// import ProductCard from '../components/ProductCard';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch('/api/products');
//         const data = await res.json();
//         setProducts(data.slice(0, 4)); // Featured products
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="home-container">
//       <div className="hero-banner">
//         <h1>Welcome to Eshop-Mern</h1>
//         <p>Discover the best products at unbeatable prices.</p>
//       </div>
//       <h2>Featured Products</h2>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="product-grid">
//           {products.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-400 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 items-center gap-10">

            {/* Left */}
            <div>

              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                🛍️ Trusted Online Shopping
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
                Shop Smarter,
                <br />
                Live Better.
              </h1>

              <p className="mt-6 text-lg text-orange-100 max-w-xl">
                Discover thousands of premium products with amazing discounts,
                secure payments, and fast delivery across India.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <Link
                  to="/shop"
                  className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center gap-2"
                >
                  Shop Now
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/about"
                  className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-orange-500 transition"
                >
                  Learn More
                </Link>

              </div>

            </div>

            {/* Right */}
            <div className="flex justify-center">
              <img
                src="/hero-shopping.png"
                alt="Shopping"
                className="w-full max-w-lg drop-shadow-2xl"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition text-center">
            <Truck className="mx-auto text-orange-500 mb-4" size={40} />
            <h3 className="font-bold text-lg">Free Shipping</h3>
            <p className="text-gray-600 mt-2">
              Free delivery on eligible orders.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition text-center">
            <ShieldCheck className="mx-auto text-orange-500 mb-4" size={40} />
            <h3 className="font-bold text-lg">Secure Payment</h3>
            <p className="text-gray-600 mt-2">
              100% secure online payment.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition text-center">
            <ShoppingBag className="mx-auto text-orange-500 mb-4" size={40} />
            <h3 className="font-bold text-lg">Premium Products</h3>
            <p className="text-gray-600 mt-2">
              Carefully selected quality products.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition text-center">
            <Headphones className="mx-auto text-orange-500 mb-4" size={40} />
            <h3 className="font-bold text-lg">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Friendly customer support anytime.
            </p>
          </div>

        </div>

      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-4xl font-bold text-gray-800">
            Featured Products
          </h2>

          <Link
            to="/shop"
            className="text-orange-500 font-semibold hover:underline"
          >
            View All →
          </Link>

        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        )}

      </section>

      {/* Call To Action */}
      <section className="bg-orange-500 text-white py-16">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Start Shopping?
          </h2>

          <p className="mt-4 text-lg text-orange-100">
            Explore thousands of products with exciting deals and fast delivery.
          </p>

          <Link
            to="/shop"
            className="inline-block mt-8 bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Explore Products
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Home;