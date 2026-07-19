import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiPackage,
  FiTag,
  FiDollarSign,
  FiBox,
  FiUploadCloud,
  FiSave,
} from "react-icons/fi";

const EditProduct = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();

        setFormData({
          name: data.name,
          description: data.description,
          price: data.price,
          category: data.category,
          stock: data.stock,
          image: data.image,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("stock", formData.stock);

    if (image) {
      data.append("image", image);
    }

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: data,
      });

      if (res.ok) {
        alert("Product Updated Successfully!");
        navigate("/admin/products");
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-10 px-5">

      <div className="max-w-4xl mx-auto">

        {/* Card */}

        <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">

          {/* Header */}

          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8">

            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FiPackage />
              Edit Product
            </h1>

            <p className="mt-2 text-orange-100">
              Update your product information and inventory.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6 p-8"
          >

            {/* Name */}

            <div>

              <label className="block mb-2 text-gray-300">
                Product Name
              </label>

              <div className="relative">

                <FiPackage className="absolute left-4 top-4 text-gray-500" />

                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />

              </div>

            </div>

            {/* Category */}

            <div>

              <label className="block mb-2 text-gray-300">
                Category
              </label>

              <div className="relative">

                <FiTag className="absolute left-4 top-4 text-gray-500" />

                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value,
                    })
                  }
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />

              </div>

            </div>

            {/* Price */}

            <div>

              <label className="block mb-2 text-gray-300">
                Price
              </label>

              <div className="relative">

                <FiDollarSign className="absolute left-4 top-4 text-gray-500" />

                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: e.target.value,
                    })
                  }
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />

              </div>

            </div>

            {/* Stock */}

            <div>

              <label className="block mb-2 text-gray-300">
                Stock
              </label>

              <div className="relative">

                <FiBox className="absolute left-4 top-4 text-gray-500" />

                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      stock: e.target.value,
                    })
                  }
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />

              </div>

            </div>

            {/* Description */}

            <div className="md:col-span-2">

              <label className="block mb-2 text-gray-300">
                Description
              </label>

              <textarea
                rows="5"
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
                className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 resize-none focus:ring-2 focus:ring-orange-500 outline-none"
              />

            </div>

            {/* Current Image */}

            <div className="md:col-span-2">

              <label className="block mb-3 text-gray-300">
                Current Image
              </label>

              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : formData.image || "https://via.placeholder.com/600"
                }
                alt="product"
                className="w-48 h-48 rounded-2xl object-cover border border-gray-700"
              />

            </div>

            {/* Upload */}

            <div className="md:col-span-2">

              <label className="block mb-3 text-gray-300">
                Replace Image
              </label>

              <label className="border-2 border-dashed border-orange-500 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-orange-500/10 transition">

                <FiUploadCloud
                  size={55}
                  className="text-orange-500 mb-3"
                />

                <p className="font-semibold">
                  Click to Upload New Image
                </p>

                <p className="text-gray-400 text-sm">
                  JPG, PNG, JPEG
                </p>

                {image && (
                  <p className="text-green-400 mt-3">
                    {image.name}
                  </p>
                )}

                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setImage(e.target.files[0])
                  }
                />

              </label>

            </div>

            {/* Button */}

            <div className="md:col-span-2">

              <button
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Updating...
                  </>
                ) : (
                  <>
                    <FiSave />
                    Update Product
                  </>
                )}
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default EditProduct;