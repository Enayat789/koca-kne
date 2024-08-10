import React, { useState } from "react";
import slides from "../../utils/carouselData.json";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = Object.keys(slides)[0];
  const singleImage = slides[allImages];

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
    <div className=" w-full h-[50vh] mt-1 lg:h-[80vh] flex justify-evenly items-center">
      <FaLessThan
        size={40}
        className=" cursor-pointer hidden md:flex"
        onClick={handlePrevious}
      />

      <div className="flex w-[99%] rounded h-full md:w-4/5  md:h-5/6 md:border-4 overflow-hidden border-gray-400 md:rounded-lg relative">
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
        className=" cursor-pointer hidden md:flex"
        onClick={handleNext}
      />
    </div>
  );
}
