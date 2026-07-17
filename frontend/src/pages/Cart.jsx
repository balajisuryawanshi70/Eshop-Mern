// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { removeFromCart, addToCart } from '../redux/cartSlice';

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleUpdateQty = (item, qty) => {
//     if (qty > 0) {
//       dispatch(addToCart({ ...item, qty }));
//     }
//   };

//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

//   return (
//     <div className="cart-container">
//       <h2>Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty. <Link to="/shop">Go Shopping</Link></p>
//       ) : (
//         <div className="cart-layout">
//           <div className="cart-items">
//             {cartItems.map((item) => (
//               <div key={item.productId} className="cart-item">
//                 <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <h4>{item.name}</h4>
//                   <p>₹{item.price}</p>
//                   <div className="qty-controls">
//                     <button onClick={() => handleUpdateQty(item, item.qty - 1)}>-</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => handleUpdateQty(item, item.qty + 1)}>+</button>
//                   </div>
//                   <button onClick={() => handleRemove(item.productId)} className="btn-remove">Remove</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="cart-summary">
//             <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
//             <button onClick={() => navigate('/checkout')} className="btn btn-checkout">Proceed to Checkout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, addToCart } from "../redux/cartSlice";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQty = (item, qty) => {
    if (qty > 0) {
      dispatch(addToCart({ ...item, qty }));
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="text-orange-500" size={32} />
          <h1 className="text-3xl font-bold text-gray-800">
            Shopping Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <ShoppingCart
              className="mx-auto text-gray-400 mb-5"
              size={70}
            />

            <h2 className="text-2xl font-bold text-gray-700">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Looks like you haven't added anything yet.
            </p>

            <Link
              to="/shop"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (
                <div
                  key={item.productId}
                  className="bg-white rounded-2xl shadow-md p-5 flex flex-col sm:flex-row gap-6"
                >
                  {/* Image */}
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full sm:w-40 h-40 object-cover rounded-xl"
                  />

                  {/* Details */}
                  <div className="flex-1">

                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>

                    <p className="text-orange-500 text-2xl font-bold mt-2">
                      ₹{item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-5">

                      <button
                        onClick={() =>
                          handleUpdateQty(item, item.qty - 1)
                        }
                        className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-orange-500 hover:text-white transition flex items-center justify-center"
                      >
                        <Minus size={18} />
                      </button>

                      <span className="text-lg font-semibold w-8 text-center">
                        {item.qty}
                      </span>

                      <button
                        onClick={() =>
                          handleUpdateQty(item, item.qty + 1)
                        }
                        className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-orange-500 hover:text-white transition flex items-center justify-center"
                      >
                        <Plus size={18} />
                      </button>

                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => handleRemove(item.productId)}
                      className="flex items-center gap-2 mt-6 text-red-500 hover:text-red-600 font-medium"
                    >
                      <Trash2 size={18} />
                      Remove
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      Subtotal
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800">
                      ₹{(item.price * item.qty).toFixed(2)}
                    </h3>
                  </div>
                </div>
              ))}

            </div>

            {/* Order Summary */}
            <div>

              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

                <h2 className="text-2xl font-bold mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4">

                  <div className="flex justify-between">
                    <span>Items</span>
                    <span>{cartItems.length}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">
                      Free
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>Included</span>
                  </div>

                  <hr />

                  <div className="flex justify-between text-2xl font-bold">
                    <span>Total</span>
                    <span className="text-orange-500">
                      ₹{totalPrice.toFixed(2)}
                    </span>
                  </div>

                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold transition"
                >
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </button>

                <Link
                  to="/shop"
                  className="block text-center mt-4 text-orange-500 hover:underline"
                >
                  Continue Shopping
                </Link>

              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;