import React from "react";

const YeppuenCard = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-full max-h-full bg-white border overflow-hidden">
      <div className="md:w-1/3 w-full p-2 flex justify-center">
        <img
          src={product.Productimg}
          alt="Product Image"
          className="h-64 w-64 md:h-80 md:w-80 object-cover rounded-lg"
        />
      </div>
      <div className="md:w-2/3 w-full p-4 flex flex-col">
        {product.Productname && (
          <img
            src={product.Productname}
            alt="Product Thumbnail"
            className="h-22 w-64 rounded-lg mb-2 object-contain"
          />
        )}
        <h1 className="text-xl font-bold">{product.name}</h1>
        <h2 className="text-md text-gray-600 italic">{product.work || "No work details available"}</h2>
        <ul className="pl-5 text-gray-800">
          {product.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default YeppuenCard;
