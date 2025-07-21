import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const images = [
    {
      src: "/Assets/banner/Nanophosphosom.webp",
      path: "/nanophosphosom",
    },
    {
      src: "/Assets/banner/Neuna particle.webp",
      path: "/neuna-particle",
    },
    {
      src: "/Assets/banner/Nunamin.webp",
      path: "/nunamin",
    },
    {
      src: "/Assets/banner/Auribery Plus.webp",
      path: "/auribery-plus",
    },
    {
      src: "/Assets/banner/Reintoni.webp",
      path: "/reintoni",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative w-full mx-auto">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full transition-transform duration-500 ease-in-out"
          loading="eager"
        />
      </div>

      {/* Left Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900/50 text-white p-2 rounded-full hover:bg-gray-800 z-10"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>

      {/* Right Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900/50 text-white p-2 rounded-full hover:bg-gray-800 z-10"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      {/* Know More Button */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <button
          className="bg-orange-600 text-white text-[10px] px-3 py-[2px] lg:text-lg md:px-4 md:py-1 rounded-full hover:bg-green-700 transition duration-300"
          onClick={() => navigate(images[currentIndex].path)}
        >
          Know More
        </button>
      </div>
    </div>
  );
}
