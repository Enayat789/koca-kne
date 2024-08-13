import React, { useState } from "react";
import slides from "../../utils/carouselData.json";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

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
    <div className=" w-full h-[50vh] mt-1 md:h-[60vh] lg:h-[80vh] flex justify-evenly items-center relative">
      <FaChevronCircleLeft
        size={40}
        className=" text-gray-500 bg-white rounded-full cursor-pointer flex absolute z-10 left-4 md:static md:left-0  "
        onClick={handlePrevious}
      />

      <div className="flex w-[99%] rounded h-full md:w-4/5  md:h-5/6 md:border-4 overflow-hidden border-gray-400 md:rounded-lg relative justify-center">
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
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
        <span className="flex absolute bottom-2 gap-1">
          {singleImage.map((_, indx) => {
            return (
              <div
                key={indx}
                onClick={() => setCurrentImageIndex(indx)}
                className={`bg-white w-3 h-3 p-0 md:w-4 md:h-4 border-2 border-none rounded-full outline-none cursor-pointer ${
                  currentImageIndex === indx ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </span>
      </div>

      <FaChevronCircleRight
        size={40}
        className=" text-gray-500 bg-white rounded-full  cursor-pointer flex absolute z-10 right-4 md:static md:right-0"
        onClick={handleNext}
      />
    </div>
  );
}
