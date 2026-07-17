import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '50px 30px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 py-10 text-center">

          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-white mt-6">
            Payment Successful!
          </h1>

          <p className="text-green-100 mt-3 text-lg">
            Your order has been placed successfully.
          </p>

        </div>

        {/* Body */}
        <div className="p-10">

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">

            <p className="text-gray-700 text-lg leading-8">
              🎉 Thank you for shopping with{" "}
              <span className="font-semibold text-green-600">
                Eshop-MERN
              </span>.
            </p>

            <p className="text-gray-600 mt-4">
              We have securely received your payment and your order is now being
              processed. You will receive an email confirmation shortly with your
              order details and tracking information.
            </p>

          </div>

          {/* Order Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">📦</div>
              <h3 className="font-semibold text-gray-800">
                Order Confirmed
              </h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-semibold text-gray-800">
                Preparing Shipment
              </h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-semibold text-gray-800">
                Delivery Soon
              </h3>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            <Link
              to="/shop"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 text-center"
            >
              Continue Shopping
            </Link>

            <Link
              to="/profile"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition duration-300 text-center"
            >
              View Profile
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;
