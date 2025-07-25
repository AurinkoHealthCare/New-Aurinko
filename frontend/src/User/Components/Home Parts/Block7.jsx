import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "../../Data/data";
import { Link } from "react-router-dom";

const Block7 = () => {
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
   <></>
  );
};

export default Block7;
