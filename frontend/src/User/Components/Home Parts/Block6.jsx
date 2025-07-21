import React, { useState } from "react";
import { speciesData } from "../../Data/data";
import { useNavigate } from "react-router-dom";

const Block6 = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();

  const speciesPaths = {
    Livestock: "/livestock",
    Poultry: "/poultry",
    Aqua: "/aqua",
    Swine: "/swine",
    Pet: "/pet",
    Equine: "/equine",
    "Feed & Grain": "/feed-grain",
  };

  const handleClick = (e, speciesTitle) => {
    e.preventDefault();
    const path = speciesPaths[speciesTitle];
    if (path) {
      window.location.href = path;
    }
  };

  return (
    <div className="relative flex justify-center py-8 px-4 md:px-8 lg:px-12 min-h-48">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {speciesData.map((species, index) => (
          <div
            key={index}
            className={`relative w-36 h-36 md:w-44 lg:w-44 flex flex-col items-center bg-white rounded-lg shadow-lg cursor-pointer border-2 border-transparent transition-transform duration-300 ${
              expandedIndex === index ? "scale-105" : ""
            }`}
            onMouseEnter={() => setExpandedIndex(index)}
            onMouseLeave={() => setExpandedIndex(null)}
            onClick={(e) => handleClick(e, species.title)}
          >
            <img
              src={species.image}
              alt={species.title}
              className="w-full h-[70%] object-cover rounded-t-lg"
            />
            <h1 className="text-sm sm:text-md font-bold text-center mt-2 text-green-800">
              {species.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Block6;
