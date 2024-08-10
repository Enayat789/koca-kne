import React, { useState } from "react";
// import products from "../../utils/products.json";
import products2 from "../../utils/products2.json";
import { useEffect } from "react";
import Loader from "../ui/Loader";

export default function Products() {
  const [visible, setVisible] = useState(6);
  const [isLoading, setLoading] = useState(true);

  const productsLength = products2.length;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const showMore = () => {
    setVisible((perValue) => perValue + 6);
  };

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <section
      id="products"
      className="w-full h-full flex flex-col flex-wrap items-center p-4 gap-6"
    >
      <h1>Products</h1>

      {isLoading ? (
        <Loader />
      ) : (
        <div className=" w-full h-full flex flex-row flex-wrap justify-evenly items-center gap-4">
          {products2.slice(0, visible).map((item, index) => {
            return (
              <div
                key={index}
                className=" bg-white w-full  md:w-[25%] h-96 p-4 flex flex-col justify-evenly items-center shadow-2xl rounded-lg cursor-pointer"
              >
                <div className="w-full h-3/4 flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" w-full h-full object-contain"
                  />
                </div>

                <div className="w-full px-4">
                  <p className=" line-clamp-1">{item.title}</p>
                  <p>Price: {item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div>
        {visible >= productsLength ? (
          "no more products..."
        ) : (
          <button onClick={showMore} className="shadow-2xl border-gray-300">
            Show More
          </button>
        )}
      </div>
    </section>
  );
}
