import React from "react";
import slides from "../../utils/carouselData.json";

export default function Carousel() {
  const allImages = Object.keys(slides)[0];
  const singleImage = slides[allImages];
  //   console.log(singleImage);

  return (
    <div className=" w-full h-[90vh] flex justify-center items-center">
      <div className=" m-auto flex flex-col bg-red-400 w-3/4 h-3/4 overflow-hidden border-4 border-black rounded-lg justify-center items-center">
        {singleImage.map((item, index) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={index}
              className=" m-auto w-[100vw] h-[100vh] object-cover"
            />
          );
        })}
      </div>
    </div>
  );
}
