import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    const fetchMyOrders = async () => {
      try {
        const res = await fetch('/api/orders/myorders', {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        const data = await res.json();
        if (res.ok) {
          setOrders(Array.isArray(data) ? data : []);
        } else {
          // Token obsolete or 401: clear and bounce
          if (res.status === 401) {
            logout();
            navigate('/login');
          }
          setOrders([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyOrders();
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const containerStyle = { maxWidth: '1000px', margin: '40px auto', padding: '30px', background: '#18181b', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', color: '#fafafa' };
  const badgeStyle = { background: 'rgba(249,115,22,0.1)', color: '#f97316', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold', display: 'inline-block' };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8">

          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-400 p-8 text-white">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

              <div className="flex items-center gap-5">

                <div className="w-24 h-24 rounded-full bg-white text-orange-500 flex items-center justify-center text-4xl font-bold shadow-lg">
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h1 className="text-3xl font-bold">
                    {user.name}
                  </h1>

                  <p className="text-orange-100 mt-1">
                    {user.email}
                  </p>

                  <span className="inline-block mt-4 bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                    {user.role.toUpperCase()}
                  </span>
                </div>

              </div>

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold transition"
              >
                Logout
              </button>

            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">

            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-orange-500">
                {orders.length}
              </h3>
              <p className="text-gray-600 mt-2">
                Orders
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-green-600">
                ₹
                {orders
                  .reduce((acc, item) => acc + item.totalAmount, 0)
                  .toFixed(2)}
              </h3>

              <p className="text-gray-600 mt-2">
                Total Spent
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                {orders.filter((o) => o.status === "Delivered").length}
              </h3>

              <p className="text-gray-600 mt-2">
                Delivered
              </p>
            </div>

          </div>

        </div>

        {/* Order History */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Order History
            </h2>

            <Link
              to="/shop"
              className="text-orange-500 font-semibold hover:underline"
            >
              Continue Shopping →
            </Link>

          </div>

          {loading ? (

            <div className="flex justify-center py-16">
              <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>

          ) : orders.length === 0 ? (

            <div className="text-center py-20">

              <div className="text-7xl mb-4">
                🛍️
              </div>

              <h3 className="text-2xl font-semibold text-gray-700">
                No Orders Yet
              </h3>

              <p className="text-gray-500 mt-3">
                Start shopping to see your orders here.
              </p>

              <Link
                to="/shop"
                className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition"
              >
                Shop Now
              </Link>

            </div>

          ) : (

            <div className="space-y-6">

              {orders.map((order) => (

                <div
                  key={order._id}
                  className="border rounded-2xl p-6 hover:shadow-lg transition bg-gray-50"
                >

                  <div className="flex flex-col lg:flex-row justify-between gap-6">

                    <div>

                      <p className="text-sm text-gray-500">
                        Order ID
                      </p>

                      <p className="font-semibold break-all">
                        {order._id}
                      </p>

                      <p className="mt-4 text-sm text-gray-500">
                        Order Date
                      </p>

                      <p className="font-medium">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Total Amount
                      </p>

                      <p className="text-2xl font-bold text-green-600">
                        ₹{order.totalAmount.toFixed(2)}
                      </p>

                    </div>

                    <div>

                      <p className="text-sm text-gray-500 mb-2">
                        Status
                      </p>

                      <span
                        className={`px-5 py-2 rounded-full text-sm font-semibold ${order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-700"
                            : order.status === "Cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                      >
                        {order.status}
                      </span>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>
    </div>
  );
};

export default Profile;
