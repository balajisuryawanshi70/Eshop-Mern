import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

import {
  FiPackage,
  FiPlus,
  FiSearch,
  FiEdit,
  FiTrash2,
  FiBox,
} from "react-icons/fi";

const AdminProducts = () => {
  const { user } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (res.ok) {
      setProducts((prev) => prev.filter((p) => p._id !== id));
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

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

        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 shadow-xl flex flex-col md:flex-row justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FiPackage />
              Manage Products
            </h1>

            <p className="text-orange-100 mt-2">
              Manage your inventory and products.
            </p>

          </div>

          <Link
            to="/admin/add-product"
            className="mt-6 md:mt-0 flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-100 transition"
          >
            <FiPlus />
            Add Product
          </Link>

        </div>

        {/* Search + Total */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-8">

          <div className="relative w-full md:w-96">

            <FiSearch className="absolute left-4 top-4 text-gray-500" />

            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl px-6 py-4">

            <p className="text-gray-400 text-sm">
              Total Products
            </p>

            <h2 className="text-3xl font-bold text-orange-400">
              {filteredProducts.length}
            </h2>

          </div>

        </div>

        {/* Table */}

        <div className="mt-8 bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden shadow-xl">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-800">

                <tr className="text-gray-300 uppercase text-sm">

                  <th className="px-6 py-4 text-left">
                    Product
                  </th>

                  <th className="px-6 py-4 text-left">
                    Price
                  </th>

                  <th className="px-6 py-4 text-left">
                    Category
                  </th>

                  <th className="px-6 py-4 text-left">
                    Stock
                  </th>

                  <th className="px-6 py-4 text-center">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (

                    <tr
                      key={product._id}
                      className="border-b border-gray-800 hover:bg-gray-800/50 transition"
                    >

                      {/* Product */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <img
                            src={
                              product.image ||
                              "https://via.placeholder.com/70"
                            }
                            alt={product.name}
                            className="w-16 h-16 rounded-xl object-cover"
                          />

                          <div>

                            <h3 className="font-semibold">
                              {product.name}
                            </h3>

                            <p className="text-gray-500 text-sm">
                              #{product._id.substring(0, 8)}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* Price */}

                      <td className="px-6 py-5 font-semibold text-green-400">
                        ₹{product.price.toFixed(2)}
                      </td>

                      {/* Category */}

                      <td className="px-6 py-5">
                        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                          {product.category}
                        </span>
                      </td>

                      {/* Stock */}

                      <td className="px-6 py-5">

                        <span
                          className={`px-3 py-1 rounded-full text-sm ${product.stock > 10
                              ? "bg-green-500/20 text-green-400"
                              : product.stock > 0
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                        >
                          {product.stock} in stock
                        </span>

                      </td>

                      {/* Actions */}

                      <td className="px-6 py-5">

                        <div className="flex justify-center gap-3">

                          <Link
                            to={`/admin/edit-product/${product._id}`}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                          >
                            <FiEdit />
                            Edit
                          </Link>

                          <button
                            onClick={() =>
                              handleDelete(product._id)
                            }
                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
                          >
                            <FiTrash2 />
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))
                ) : (
                  <tr>

                    <td
                      colSpan="5"
                      className="py-20 text-center"
                    >

                      <FiBox
                        size={60}
                        className="mx-auto text-gray-600"
                      />

                      <h2 className="text-2xl font-bold mt-4">
                        No Products Found
                      </h2>

                      <p className="text-gray-500 mt-2">
                        Start by adding your first product.
                      </p>

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

export default AdminProducts;