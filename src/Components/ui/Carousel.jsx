import React, { useState } from "react";
import slides from "../../utils/carouselData.json";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = Object.keys(slides)[0];
  const singleImage = slides[allImages];
  // console.log(singleImage.length - 1);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === singleImage.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? singleImage.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" w-full h-[80vh] flex justify-evenly items-center">
      <FaLessThan
        size={40}
        className=" cursor-pointer"
        onClick={handlePrevious}
      />

      <div className="flex w-4/5 h-5/6 border-4 overflow-hidden border-gray-400 rounded-lg relative">
        {singleImage.map((item, index) => {
          return (
            <div
              key={item.id}
              className={` flex flex-col w-full h-full ${
                index === currentImageIndex ? "block" : "hidden"
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                key={index}
                className="w-[100vw] h-[100vh] object-cover"
              />
            </div>
          );
        })}
      </div>
      <FaGreaterThan
        size={40}
        className=" cursor-pointer"
        onClick={handleNext}
      />
    </div>
  );
}
