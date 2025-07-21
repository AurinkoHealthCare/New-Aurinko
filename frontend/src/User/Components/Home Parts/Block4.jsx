import React from "react";
import { productTypes } from "../../Data/data";

const Block4 = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-12 px-4 md:px-8 lg:px-16 xl:px-24">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-green-800">
        PRODUCT <span className="text-orange-600">TYPES</span>
      </h1>
      <div
        className="h-1 w-48 md:w-56 lg:w-64 xl:w-72 rounded"
        style={{ background: "linear-gradient(to right, #ea580c, #15803d)" }}
      ></div>

      <div className="w-full flex flex-col items-center justify-center mt-10 gap-y-12">
        {productTypes.map((product, index) => (
          <div
            key={index}
            className={`w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 px-4 md:px-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2
                className={`text-xl sm:text-2xl md:text-3xl font-bold transition-transform duration-300 hover:scale-110 ${
                  index % 2 === 0 ? "text-green-900" : "text-orange-600"
                }`}
              >
                {product.title}
              </h2>
              <p className="text-gray-700 mt-2">{product.description}</p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Block4;
