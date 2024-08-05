import React from "react";
import products from "../../utils/products.json";

export default function Products() {
  //   const allDatas = Object.keys(products)[0];
  //   const data = products[allDatas];

  //   const allItems = Object.keys(data)[0];
  //   const item = data[allItems];

  //   console.log(item, typeof item);

  const allDatas = products.products.data.items;
  console.log(allDatas);

  return (
    <div>
      <h2>Products...</h2>
      <div className="bg-red-200 w-full h-full flex flex-row flex-wrap justify-between items-center gap-2">
        {allDatas.map((item, index) => {
          return (
            <div
              key={item.id}
              className="bg-green-300 w-44 h-36 flex flex-col justify-center p-4"
            >
              <p>{item.name}</p>
              <p>{item.price} </p>
              <p>{item.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
