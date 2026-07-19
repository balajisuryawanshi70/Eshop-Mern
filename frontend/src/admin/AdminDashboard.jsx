import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  FiShoppingBag,
  FiUsers,
  FiBox,
  FiDollarSign,
  FiPlusCircle,
  FiPackage,
  FiTruck,
  FiUser,
  FiArrowRight,
} from "react-icons/fi";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
      return;
    }

    const fetchStats = async () => {
      try {
        const res = await fetch("/api/analytics", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setStats(data);
        } else {
          if (res.status === 401) {
            navigate("/login");
          }

          setStats({
            totalOrders: 0,
            totalProducts: 0,
            totalUsers: 0,
            totalRevenue: 0,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchStats();
  }, [user, navigate]);

  const cards = [
    {
      title: "Total Orders",
      value: stats?.totalOrders || 0,
      icon: <FiShoppingBag size={28} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Products",
      value: stats?.totalProducts || 0,
      icon: <FiBox size={28} />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Users",
      value: stats?.totalUsers || 0,
      icon: <FiUsers size={28} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Revenue",
      value: `₹${stats?.totalRevenue?.toFixed(2) || "0.00"}`,
      icon: <FiDollarSign size={28} />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 shadow-xl">

          <div className="flex items-center gap-5">

            <img
              src="/ShopNestLogo.png"
              alt="logo"
              className="w-16 h-16 rounded-xl shadow-lg"
            />

            <div>
              <h1 className="text-3xl font-bold">
                Admin Dashboard
              </h1>

              <p className="text-gray-400 mt-2">
                Welcome back,
                <span className="text-orange-400 font-semibold">
                  {" "}
                  {user?.name}
                </span>
              </p>
            </div>

          </div>

          <button
            onClick={() => navigate("/")}
            className="mt-6 md:mt-0 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition"
          >
            Visit Store
          </button>
        </div>

        {/* Statistics */}

        {stats ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 hover:shadow-orange-500/20 hover:shadow-xl"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-5`}
                >
                  {card.icon}
                </div>

                <h3 className="text-gray-400">
                  {card.title}
                </h3>

                <h1 className="text-4xl font-bold mt-2">
                  {card.value}
                </h1>
              </div>
            ))}

          </div>
        ) : (
          <div className="flex justify-center py-20">

            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

          </div>
        )}

        {/* Quick Actions */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Add Product */}

            <div
              onClick={() => navigate("/admin/add-product")}
              className="cursor-pointer rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-6 hover:scale-105 transition"
            >
              <FiPlusCircle size={40} />

              <h3 className="text-xl font-bold mt-5">
                Add Product
              </h3>

              <p className="text-orange-100 mt-2">
                Upload a new product to your shop.
              </p>

              <FiArrowRight className="mt-6" size={24} />
            </div>

            {/* Products */}

            <div
              onClick={() => navigate("/admin/products")}
              className="cursor-pointer rounded-2xl bg-gray-900 border border-gray-800 p-6 hover:border-orange-500 transition"
            >
              <FiPackage
                className="text-orange-500"
                size={40}
              />

              <h3 className="text-xl font-bold mt-5">
                Manage Products
              </h3>

              <p className="text-gray-400 mt-2">
                Edit or remove products.
              </p>
            </div>

            {/* Orders */}

            <div
              onClick={() => navigate("/admin/orders")}
              className="cursor-pointer rounded-2xl bg-gray-900 border border-gray-800 p-6 hover:border-orange-500 transition"
            >
              <FiTruck
                className="text-orange-500"
                size={40}
              />

              <h3 className="text-xl font-bold mt-5">
                Orders
              </h3>

              <p className="text-gray-400 mt-2">
                Track customer orders.
              </p>
            </div>

            {/* Users */}

            <div
              onClick={() => navigate("/admin/users")}
              className="cursor-pointer rounded-2xl bg-gray-900 border border-gray-800 p-6 hover:border-orange-500 transition"
            >
              <FiUser
                className="text-orange-500"
                size={40}
              />

              <h3 className="text-xl font-bold mt-5">
                Users
              </h3>

              <p className="text-gray-400 mt-2">
                Manage customer accounts.
              </p>
            </div>

          </div>
        </div>

        {/* Dashboard Summary */}

        <div className="mt-12 bg-gray-900 border border-gray-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-4">
            Dashboard Summary
          </h2>

          <p className="text-gray-400 leading-8">
            Monitor your store performance from one place. Track orders,
            manage inventory, view customer information, and analyze
            revenue. Use the quick actions above to efficiently manage
            your ecommerce platform.
          </p>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;