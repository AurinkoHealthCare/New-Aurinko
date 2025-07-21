import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "../../Data/data";
import { Link } from "react-router-dom";

const Block10 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 md:px-8 lg:px-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-800">
          Review <span className="text-orange-600">And Feedback</span>
        </h1>
        <div className="h-1 w-52 md:w-64 lg:w-72 xl:w-96 rounded-full mt-2 bg-gradient-to-r from-orange-600 to-green-800"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-4 p-8 relative overflow-hidden">
        <div className="text-center lg:text-left">
          <div>
            <img src="/Assets/Aurinko Logo.png" alt="Aurinko Logo" className="h-32 mx-auto lg:mx-0"/>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Aurinko Health Care Pvt. Ltd
            </h2>
          </div>
          <Link to={"https://www.google.com/maps/place/Aurinko+Healthcare+Private+Limited/@28.3499754,77.3424805,17z/data=!4m8!3m7!1s0x390cdb9766d62aab:0x499dcf82d3074077!8m2!3d28.3499707!4d77.3450554!9m1!1b1!16s%2Fg%2F11shjs9rvx?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"}><button className="mt-4 px-6 py-3 bg-orange-600 text-white text-lg font-medium rounded-full shadow-lg hover:bg-green-700 transition-all duration-300">
            Go Review
          </button></Link>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative w-80 h-96 flex flex-col items-center justify-center bg-opacity-80 backdrop-blur-lg  rounded-2xl p-6 text-center"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={reviews[currentIndex].image}
              alt="User Review"
              className="w-24 h-24 rounded-full border-4 mb-4 shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-gray-800 text-lg italic">
              "{reviews[currentIndex].text}"
            </p>
            <h3 className="mt-3 text-xl font-semibold text-gray-900">
              {reviews[currentIndex].name}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Block10;
