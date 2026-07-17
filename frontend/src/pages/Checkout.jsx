import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { clearCart } from '../redux/cartSlice';

const Checkout = () => {
  // State
  const { user } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullName: '', street: '', city: '', postalCode: '', country: ''
  });

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handlePayment = async () => {
    try {
      const orderRes = await fetch('/api/payment/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalPrice })
      });
      const orderData = await orderRes.json();

      if (!orderRes.ok) {
        // Razorpay unconfigured exception handler
        const fallback = window.confirm("Razorpay keys unconfigured on backend. Use Student Bypass Mode to place test order?");
        if (fallback) {
          return bypassPayment();
        } else {
          return alert("Payment failed to initialize");
        }
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_TDSTBlHo9tCMIX', // Student dummy fallback
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Eshop-Mern',
        description: 'Test Transaction',
        order_id: orderData.id,
        handler: async function (response) {
          const verifyRes = await fetch('/api/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response)
          });
          if (verifyRes.ok) {
            const saveOrderRes = await fetch('/api/orders', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
              },
              body: JSON.stringify({
                items: cartItems,
                totalAmount: totalPrice,
                address,
                paymentId: response.razorpay_payment_id
              })
            });

            if (saveOrderRes.ok) {
              dispatch(clearCart());
              navigate('/ordersuccess');
            } else {
              alert('Order saving failed');
            }
          } else {
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: address.fullName,
          email: user?.email,
          contact: '9999999999'
        },
        theme: {
          color: '#f97316'
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error(error);
    }
  };

  const bypassPayment = async () => {
    const saveOrderRes = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        items: cartItems,
        totalAmount: totalPrice,
        address,
        paymentId: 'bypass_txn_' + Date.now()
      })
    });
    if (saveOrderRes.ok) {
      dispatch(clearCart());
      navigate('/ordersuccess');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    handlePayment();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Checkout
          </h1>
          <p className="text-gray-500 mt-2">
            Complete your shipping details and payment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Shipping Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">
                Shipping Address
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        fullName: e.target.value,
                      })
                    }
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                {/* Street */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>

                  <input
                    type="text"
                    required
                    value={address.street}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        street: e.target.value,
                      })
                    }
                    placeholder="123 Main Street"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>

                  <input
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        city: e.target.value,
                      })
                    }
                    placeholder="Mumbai"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                {/* Postal Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postal Code
                  </label>

                  <input
                    type="text"
                    required
                    value={address.postalCode}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        postalCode: e.target.value,
                      })
                    }
                    placeholder="400001"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                {/* Country */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>

                  <input
                    type="text"
                    required
                    value={address.country}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        country: e.target.value,
                      })
                    }
                    placeholder="India"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">

                {cartItems.map((item) => (
                  <div
                    key={item.productId}
                    className="flex justify-between items-center border-b pb-4"
                  >
                    <div className="flex items-center gap-3">

                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-14 h-14 rounded-lg object-cover"
                      />

                      <div>
                        <h4 className="font-medium text-gray-800">
                          {item.name}
                        </h4>

                        <p className="text-sm text-gray-500">
                          Qty: {item.qty}
                        </p>
                      </div>

                    </div>

                    <span className="font-semibold text-gray-700">
                      ₹{(item.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                ))}

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Shipping
                  </span>

                  <span className="text-green-600 font-semibold">
                    FREE
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Tax
                  </span>

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
                onClick={handleSubmit}
                className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-lg font-semibold transition duration-300"
              >
                Pay Now
              </button>

              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-green-700 text-sm text-center">
                  🔒 Secure payment powered by Razorpay
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;