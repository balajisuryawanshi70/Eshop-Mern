import React from "react";
import {
  FaGlobe,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { Globe, Mail, ShoppingBag } from 'lucide-react';
// import { assets } from "../assets/Profile.png";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Cover */}
          <div className="h-56 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400"></div>

          {/* Profile */}
          <div className="relative px-8 pb-10">

            {/* <div className="-mt-20 flex justify-center">
              <img
                src={assets.Profile.png}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-8 border-white shadow-xl"
              />
            </div> */}

            <div className="text-center mt-6">

              <h1 className="text-4xl font-bold text-gray-900">
                Eshop-MERN
              </h1>

              <p className="text-orange-500 font-semibold text-lg mt-2">
                Premium E-Commerce Platform
              </p>

              <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8">
                Welcome to <span className="font-semibold">Eshop-MERN</span>,
                your trusted online shopping destination. We are committed to
                providing high-quality products, secure payments, fast delivery,
                and an excellent shopping experience for our customers.
              </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <h2 className="text-3xl font-bold text-orange-500">500+</h2>
                <p className="text-gray-600 mt-2">Products</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <h2 className="text-3xl font-bold text-orange-500">1000+</h2>
                <p className="text-gray-600 mt-2">Customers</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <h2 className="text-3xl font-bold text-orange-500">24/7</h2>
                <p className="text-gray-600 mt-2">Support</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <h2 className="text-3xl font-bold text-orange-500">100%</h2>
                <p className="text-gray-600 mt-2">Secure Payment</p>
              </div>

            </div>

            {/* Features */}
            <div className="mt-14">

              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Why Choose Us?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition">
                  <ShoppingBag className="mx-auto text-orange-500 mb-4" size={40} />
                  <h3 className="text-xl font-semibold mb-3">
                    Premium Products
                  </h3>
                  <p className="text-gray-600">
                    Carefully selected quality products at affordable prices.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition">
                  <Mail className="mx-auto text-orange-500 mb-4" size={40} />
                  <h3 className="text-xl font-semibold mb-3">
                    Customer Support
                  </h3>
                  <p className="text-gray-600">
                    Dedicated support team available whenever you need help.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition">
                  <Globe className="mx-auto text-orange-500 mb-4" size={40} />
                  <h3 className="text-xl font-semibold mb-3">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-600">
                    Reliable and quick shipping across multiple locations.
                  </p>
                </div>

              </div>

            </div>

            {/* Social Links */}
            <div className="mt-14">

              <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                Connect With Us
              </h2>

              <div className="flex flex-wrap justify-center gap-5">

                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border hover:bg-orange-500 hover:text-white transition shadow"
                >
                  <FaGlobe size={20} />
                  Website
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border hover:bg-gray-900 hover:text-white transition shadow"
                >
                  <FaGithub size={20} />
                  GitHub
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border hover:bg-blue-600 hover:text-white transition shadow"
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border hover:bg-pink-600 hover:text-white transition shadow"
                >
                  <FaInstagram size={20} />
                  Instagram
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;