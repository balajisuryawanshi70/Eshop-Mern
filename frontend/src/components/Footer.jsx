// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer style={{
//       background: '#09090b',
//       borderTop: '1px solid rgba(255, 255, 255, 0.05)',
//       padding: '40px 20px',
//       marginTop: 'auto'
//     }}>
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         gap: '20px'
//       }}>
//         <div>
//           <h3 style={{ color: '#f97316', marginBottom: '10px' }}>Eshop-Mern</h3>
//           <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Premium E-Commerce Platform.</p>
//         </div>

//         <div style={{ display: 'flex', gap: '20px' }}>
//           <Link to="/about" style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>About Us</Link>
//           <Link to="/return" style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Return Policy</Link>
//           <Link to="/disclaimer" style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Disclaimer</Link>
//         </div>

//         <div style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>
//           &copy; {new Date().getFullYear()} Eshop-Mern. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MapPin, Phone, Mail, ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag size={32} color="#F97316" />
              <h2 className="text-2xl font-bold text-orange-500">
                Eshop-MERN
              </h2>
            </div>

            <p className="text-gray-400 leading-7">
              Premium online shopping platform offering quality products,
              secure payments, and fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="hover:text-orange-500 transition"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Customer Service
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/return"
                  className="hover:text-orange-500 transition"
                >
                  Return Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="hover:text-orange-500 transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="hover:text-orange-500 transition"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/disclaimer"
                  className="hover:text-orange-500 transition"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="text-orange-500"
                />
                <span>Pune, Maharashtra</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-orange-500"
                />
                <span>+91 99228 65349</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-orange-500"
                />
                <span>support@eshop.com</span>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">

                <a
                  href="#"
                  className="bg-zinc-900 hover:bg-orange-500 p-2 rounded-lg transition"
                >
                  <FaFacebook size={18} />
                </a>

                <a
                  href="#"
                  className="bg-zinc-900 hover:bg-orange-500 p-2 rounded-lg transition"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="#"
                  className="bg-zinc-900 hover:bg-orange-500 p-2 rounded-lg transition"
                >
                  <FaTwitter size={18} />
                </a>

                <a
                  href="#"
                  className="bg-zinc-900 hover:bg-orange-500 p-2 rounded-lg transition"
                >
                  <FaLinkedin size={18} />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">

          <p>
            © {new Date().getFullYear()} Eshop-MERN. All rights reserved.
          </p>

          <p>
            Designed with ❤️ using React, Tailwind CSS & Node.js
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
