import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  FiShoppingBag,
  FiUser,
  FiCalendar,
  FiDollarSign,
} from "react-icons/fi";

const AdminOrders = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();

        setOrders(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  const updateStatus = async (id, status) => {
    const res = await fetch(`/api/orders/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ status }),
    });

    if (res.ok) {
      setOrders((prev) =>
        prev.map((order) =>
          order._id === id ? { ...order, status } : order
        )
      );
    }
  };

  const badgeColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500/20 text-yellow-400";

      case "Shipped":
        return "bg-blue-500/20 text-blue-400";

      case "Delivered":
        return "bg-green-500/20 text-green-400";

      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 flex justify-between items-center shadow-xl">

          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FiShoppingBag />
              Manage Orders
            </h1>

            <p className="text-orange-100 mt-2">
              View and update customer orders.
            </p>
          </div>

          <div className="hidden md:flex bg-white/10 px-6 py-4 rounded-2xl backdrop-blur">
            <div>
              <p className="text-sm text-orange-100">
                Total Orders
              </p>

              <h2 className="text-3xl font-bold">
                {orders.length}
              </h2>
            </div>
          </div>

        </div>

        {/* Table */}

        <div className="mt-10 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-lg">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-800 text-gray-300 uppercase text-sm">

                <tr>
                  <th className="px-6 py-4 text-left">
                    Order
                  </th>

                  <th className="px-6 py-4 text-left">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-left">
                    Date
                  </th>

                  <th className="px-6 py-4 text-left">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr
                      key={order._id}
                      className="border-b border-gray-800 hover:bg-gray-800/50 transition"
                    >
                      <td className="px-6 py-5">
                        <div className="font-semibold">
                          #{order._id.substring(0, 8)}
                        </div>

                        <div className="text-gray-500 text-sm">
                          Order ID
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">

                          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                            <FiUser />
                          </div>

                          <div>
                            <p className="font-medium">
                              {order.userId?.name ||
                                "Deleted User"}
                            </p>

                            <p className="text-sm text-gray-500">
                              Customer
                            </p>
                          </div>

                        </div>
                      </td>

                      <td className="px-6 py-5 font-semibold text-green-400">
                        ₹{order.totalAmount.toFixed(2)}
                      </td>

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-2 text-gray-300">

                          <FiCalendar />

                          {new Date(
                            order.createdAt
                          ).toLocaleDateString()}

                        </div>

                      </td>

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColor(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>

                          <select
                            value={order.status}
                            onChange={(e) =>
                              updateStatus(
                                order._id,
                                e.target.value
                              )
                            }
                            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                          >
                            <option value="Pending">
                              Pending
                            </option>

                            <option value="Shipped">
                              Shipped
                            </option>

                            <option value="Delivered">
                              Delivered
                            </option>
                          </select>

                        </div>

                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-12 text-gray-400"
                    >
                      No Orders Found
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminOrders;