import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  FiUploadCloud,
  FiPackage,
  FiTag,
  FiDollarSign,
  FiLayers,
  FiBox,
} from "react-icons/fi";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      return alert("Please select an image");
    }

    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("stock", formData.stock);
    data.append("image", image);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: data,
      });

      const responseData = await res.json();

      if (res.ok) {
        alert("Product created successfully!");
        navigate("/shop");
      } else {
        alert(responseData.message || "Error creating product");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Card */}
        <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FiPackage className="text-4xl" />
              Add New Product
            </h1>

            <p className="text-orange-100 mt-2">
              Create a new product and upload it to your store.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 grid md:grid-cols-2 gap-6"
          >
            {/* Product Name */}
            <div>
              <label className="text-gray-300 text-sm mb-2 block">
                Product Name
              </label>

              <div className="relative">
                <FiPackage className="absolute left-4 top-4 text-gray-500" />

                <input
                  type="text"
                  required
                  placeholder="Enter product name"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="text-gray-300 text-sm mb-2 block">
                Category
              </label>

              <div className="relative">
                <FiTag className="absolute left-4 top-4 text-gray-500" />

                <input
                  type="text"
                  required
                  placeholder="Electronics"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="text-gray-300 text-sm mb-2 block">
                Price
              </label>

              <div className="relative">
                <FiDollarSign className="absolute left-4 top-4 text-gray-500" />

                <input
                  type="number"
                  required
                  placeholder="999"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Stock */}
            <div>
              <label className="text-gray-300 text-sm mb-2 block">
                Stock
              </label>

              <div className="relative">
                <FiBox className="absolute left-4 top-4 text-gray-500" />

                <input
                  type="number"
                  required
                  placeholder="100"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      stock: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="text-gray-300 text-sm mb-2 block">
                Description
              </label>

              <textarea
                rows="5"
                required
                placeholder="Write product description..."
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition resize-none"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
              />
            </div>

            {/* Image Upload */}
            <div className="md:col-span-2">

              <label className="text-gray-300 text-sm mb-3 block">
                Product Image
              </label>

              <label className="cursor-pointer border-2 border-dashed border-orange-500 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-orange-500/10 transition">

                <FiUploadCloud className="text-6xl text-orange-500 mb-3" />

                <p className="text-white font-medium">
                  Click to Upload
                </p>

                <span className="text-gray-400 text-sm mt-1">
                  PNG, JPG, JPEG
                </span>

                {image && (
                  <p className="mt-4 text-green-400 text-sm">
                    Selected: {image.name}
                  </p>
                )}

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            </div>

            {/* Button */}
            <div className="md:col-span-2">

              <button
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white font-semibold text-lg transition flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Uploading...
                  </>
                ) : (
                  <>
                    <FiLayers />
                    Publish Product
                  </>
                )}
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;