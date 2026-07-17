import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        productId: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        qty: 1
      }));
      alert('Successfully added to your cart!');
    }
  };

  if (loading) return <div style={{ textAlign: 'center', margin: '100px', color: '#f97316' }}>Loading Product...</div>;
  if (!product) return <div style={{ textAlign: 'center', margin: '100px', color: '#ef4444' }}>Product Not Found</div>;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-14 h-14 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-red-500">
          Product Not Found
        </h2>

        <Link
          to="/shop"
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-5">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <Link
            to="/"
            className="hover:text-orange-500"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link
            to="/shop"
            className="hover:text-orange-500"
          >
            Shop
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-700">
            {product.category}
          </span>

          <span className="mx-2">/</span>

          <span className="font-semibold text-gray-900">
            {product.name}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Product Image */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex justify-center">

            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full max-w-md h-[500px] object-contain hover:scale-105 transition duration-500"
            />

          </div>

          {/* Product Info */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            {/* Category */}
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
              {product.category}
            </span>

            {/* Name */}
            <h1 className="text-4xl font-bold text-gray-800 mt-5">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">

              <div className="text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <span className="text-gray-500">
                (4.8 Reviews)
              </span>

            </div>

            {/* Price */}
            <div className="mt-8">

              <p className="text-5xl font-bold text-orange-500">
                ₹{product.price.toFixed(2)}
              </p>

              <p className="text-green-600 mt-2 font-medium">
                Inclusive of all taxes
              </p>

            </div>

            {/* Description */}
            <div className="mt-8">

              <h2 className="text-xl font-semibold mb-3">
                Product Description
              </h2>

              <p className="text-gray-600 leading-8">
                {product.description}
              </p>

            </div>

            {/* Stock */}
            <div className="mt-8">

              {product.stock > 0 ? (
                <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                  ✅ In Stock ({product.stock} available)
                </span>
              ) : (
                <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium">
                  ❌ Out of Stock
                </span>
              )}

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 py-4 rounded-xl text-lg font-semibold transition ${product.stock > 0
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-gray-300 cursor-not-allowed text-gray-500"
                  }`}
              >
                Add to Cart
              </button>

              <Link
                to="/cart"
                className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-4 rounded-xl text-lg font-semibold text-center transition"
              >
                View Cart
              </Link>

            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-3xl">🚚</div>
                <p className="text-sm mt-2 font-medium">
                  Free Delivery
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-3xl">🔒</div>
                <p className="text-sm mt-2 font-medium">
                  Secure Payment
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-3xl">↩️</div>
                <p className="text-sm mt-2 font-medium">
                  Easy Returns
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetail;
