// import React from 'react';

// const About = () => {
//   const containerStyle = {
//     maxWidth: '900px',
//     margin: '0 auto',
//     padding: '40px',
//     background: '#18181b',
//     borderRadius: '16px',
//     border: '1px solid rgba(255, 255, 255, 0.05)',
//     boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
//     textAlign: 'center'
//   };

//   const socialBtnStyle = {
//     display: 'inline-block',
//     margin: '10px',
//     padding: '10px 20px',
//     background: '#27272a',
//     color: '#fff',
//     borderRadius: '8px',
//     textDecoration: 'none',
//     transition: 'all 0.3s ease',
//     border: '1px solid rgba(255, 255, 255, 0.1)'
//   };

//   return (
//     <div style={containerStyle}>
//       <img
//         src="/dp.jpg"
//         alt="@suryawanshibalaji_70"
//         style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #f97316', marginBottom: '20px', boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)' }}
//       />
//       <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff' }}>About Me</h2>
//       <h3 style={{ fontSize: '1.5rem', color: '#f97316', marginBottom: '15px' }}>Shivansh Vasu (@theshivanshvasu)</h3>

//       <p style={{ color: '#a1a1aa', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 30px auto' }}>
//         <strong>Join the community and grow together!</strong> Welcome to my platform where we build, deploy, and scale highly engineered systems.
//       </p>

//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
//         <a href="https://theshivanshvasu.com" target="_blank" rel="noreferrer" style={socialBtnStyle}>🌐 Website</a>
//         <a href="https://youtube.com/@shivanshvasu" target="_blank" rel="noreferrer" style={{ ...socialBtnStyle, background: 'rgba(239, 68, 68, 0.2)', borderColor: '#ef4444', color: '#ef4444' }}>📺 YouTube</a>
//         <a href="https://instagram.com/theshivanshvasuofficial" target="_blank" rel="noreferrer" style={{ ...socialBtnStyle, background: 'rgba(236, 72, 153, 0.2)', borderColor: '#ec4899', color: '#ec4899' }}>📸 Instagram</a>
//         <a href="https://www.linkedin.com/in/theshivanshvasu" target="_blank" rel="noreferrer" style={{ ...socialBtnStyle, background: 'rgba(59, 130, 246, 0.2)', borderColor: '#3b82f6', color: '#3b82f6' }}>💼 LinkedIn</a>
//         <a href="https://x.com/theshivanshvasu" target="_blank" rel="noreferrer" style={socialBtnStyle}>✖️ X (Twitter)</a>
//         <a href="https://whatsapp.com/channel/0029VbAWGE5ICVfcjjKTAS0B" target="_blank" rel="noreferrer" style={{ ...socialBtnStyle, background: 'rgba(16, 185, 129, 0.2)', borderColor: '#10b981', color: '#10b981' }}>💬 WhatsApp</a>
//         <a href="https://linktr.ee/shivanshvasu" target="_blank" rel="noreferrer" style={socialBtnStyle}>🔗 Linktree</a>
//       </div>
//     </div>
//   );
// };

// export default About;

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