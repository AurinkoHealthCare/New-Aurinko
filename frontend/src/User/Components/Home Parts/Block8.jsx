import { useState, useEffect } from "react";
import { block8Data } from "../../Data/data";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Block8 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    block8Data.forEach((item) => {
      const img = new Image();
      img.src = item.hoverImage;
    });
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-400" />);
    }

    return stars;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-6 px-4">
      {block8Data.map((item, index) => (
        <div
          key={item.id}
          className="w-full max-w-xs md:max-w-sm h-[28rem] flex flex-col justify-between bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="h-[75%] relative hover:h-full">
            <img
              src={hoveredIndex === index ? item.hoverImage : item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
          </div>
          <div
            className={`text-center h-[25%] flex flex-col justify-center bg-gray-50 p-3 rounded-b-xl transition-opacity duration-300 ${
              hoveredIndex === index ? "opacity-0" : "opacity-100"
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <div className="flex justify-center mt-1">{renderStars(item.rating)}</div>
            <span className="mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
              {item.segment}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block8;
