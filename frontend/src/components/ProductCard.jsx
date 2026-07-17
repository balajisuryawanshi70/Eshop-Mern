// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.imageUrl} alt={product.name} className="product-image" />
//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p className="price">₹{product.price}</p>
//         <Link to={`/product/${product._id}`} className="btn">View Details</Link>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";
import { Star, Eye } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Stock Badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${product.stock > 0 ? "bg-green-500" : "bg-red-500"
            }`}
        >
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-5">

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[56px]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="text-sm text-gray-600">
            {product.rating || 4.5}
          </span>

          <span className="text-gray-400 text-sm">
            ({product.reviews || 120})
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-orange-500">
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span className="text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        {/* Button */}
        <Link
          to={`/product/${product._id}`}
          className="mt-5 flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300"
        >
          <Eye size={18} />
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
