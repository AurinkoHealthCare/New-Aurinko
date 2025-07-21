import React from "react";
import { Link } from 'react-router-dom';

const Block9 = () => {
  const reloadPage = (e, url) => {
    e.preventDefault();
    window.location.href = url;
  };
  
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 md:px-10 lg:px-16">
      <div className="text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-orange-600">
          GET IN <span className="text-green-800">TOUCH</span>
        </h1>
        <div
          className="h-1 w-32 md:w-40 lg:w-48 xl:w-56 rounded-full mx-auto mt-2"
          style={{ background: "linear-gradient(to right, #15803d, #ea580c)" }}
        ></div>
      </div>
      <p className="mt-6 text-gray-700 text-center max-w-2xl text-sm md:text-base lg:text-lg">
        Your health is our priority. We are dedicated to providing the best healthcare solutions
        to enhance your physical, mental, and social well-being. Join us on the journey to a
        healthier life.
      </p>
      <Link to="/contact-us"  onClick={(e) => reloadPage(e, "/contact-us")}>
        <button className="mt-8 bg-green-600 text-white text-sm md:text-base px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all">
          ENROLL NOW →
        </button>
      </Link>
    </div>
  );
};

export default Block9;
