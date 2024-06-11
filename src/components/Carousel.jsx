import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const categories = [
  { id: 1, name: "Pizza", imageUrl: "https://via.placeholder.com/150" },
  { id: 2, name: "Sushi", imageUrl: "https://via.placeholder.com/150" },
  { id: 3, name: "Burgers", imageUrl: "https://via.placeholder.com/150" },
  { id: 4, name: "Salads", imageUrl: "https://via.placeholder.com/150" },
  { id: 5, name: "Desserts", imageUrl: "https://via.placeholder.com/150" },
  { id: 6, name: "Steaks", imageUrl: "https://via.placeholder.com/150" },
  { id: 7, name: "Pasta", imageUrl: "https://via.placeholder.com/150" },
  { id: 8, name: "Tacos", imageUrl: "https://via.placeholder.com/150" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + categories.length) % categories.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % categories.length;
    setCurrentIndex(newIndex);
  };

  const visibleItems = 6;

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-10">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
          }}
        >
          {categories.map((category, index) => (
            <div key={category.id} className="w-1/6 flex-shrink-0">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-40 object-cover"
              />
              <div className="bg-gray-800 bg-opacity-50 text-white text-center py-2">
                <h2 className="text-lg font-semibold">{category.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
