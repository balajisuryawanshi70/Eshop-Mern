// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/">
//           <img src="/ShopNestLogo.png" alt="Eshop-Mern" style={{ height: '36px', width: '36px', borderRadius: '8px', objectFit: 'cover', filter: 'drop-shadow(0 2px 8px rgba(249, 115, 22, 0.35))' }} />
//           Eshop-Mern
//         </Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/shop">Shop</Link></li>
//         <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
//         {user ? (
//           <>
//             <li><Link to="/profile">Hi, {user.name}</Link></li>
//             {user.role === 'admin' && <li><Link to="/admin">Admin</Link></li>}
//             <li><button onClick={handleLogout} className="btn-logout">Logout</button></li>
//           </>
//         ) : (
//           <li><Link to="/login">Login</Link></li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux";
import { ShoppingCart, User, LogOut, ShieldCheck, ShoppingBagIcon } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-orange-500 hover:text-orange-600 transition"
          >
            <ShoppingBagIcon />
            <span>
              Eshop<span className="text-gray-900">-MERN</span>
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">

            <Link
              to="/shop"
              className="font-medium text-gray-700 hover:text-orange-500 transition"
            >
              Shop
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center gap-2 text-gray-700 hover:text-orange-500 transition"
            >
              <ShoppingCart size={22} />

              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}

              <span className="hidden sm:block font-medium">Cart</span>
            </Link>

            {user ? (
              <>
                {/* Profile */}
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-orange-50 transition"
                >
                  <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center">
                    <User size={18} />
                  </div>

                  <span className="hidden md:block font-medium text-gray-700">
                    {user.name}
                  </span>
                </Link>

                {/* Admin */}
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                  >
                    <ShieldCheck size={18} />
                    <span className="hidden md:block">Admin</span>
                  </Link>
                )}

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition shadow"
                >
                  <LogOut size={18} />
                  <span className="hidden md:block">Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;