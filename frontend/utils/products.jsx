import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const StarRating = ({ rating }) => {
  // rating is number 1-5
  // show filled stars for rating, empty stars for rest
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 inline-block ${
          i <= rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.961c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.37 2.448c-.785.57-1.84-.196-1.54-1.118l1.287-3.961a1 1 0 00-.364-1.118L3.642 9.39c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.286-3.962z" />
      </svg>
    );
  }
  return <div>{stars}</div>;
};

const ProductsList = ({ category, limit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/products/get");

      let filtered = category
        ? data.filter((p) => p.category === category)
        : data;

      if (limit) filtered = filtered.slice(0, limit);

      setProducts(filtered);
    } catch (err) {
      console.error("❌ Error fetching products:", err);
    }
  };

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No products found {category ? `in ${category}` : ""}.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="border rounded-lg shadow hover:shadow-lg transition p-4 bg-white"
        >
          <div className="relative overflow-hidden rounded mb-3 cursor-pointer group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="font-bold text-lg">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.category}</p>
          <p className="text-gray-700 mt-2 text-sm">{product.details}</p>

          <div className="mt-3 flex items-center gap-2">
            {product.rating ? (
              <>
                <StarRating rating={product.rating} />
                <span className="text-yellow-600 font-semibold text-sm">
                  {product.rating}/5
                </span>
              </>
            ) : (
              <span className="text-gray-400 italic text-sm">No rating</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
