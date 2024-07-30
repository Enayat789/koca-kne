import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-row flex-wrap w-[100vw] bg-gray-400 px-4 justify-between items-center sticky top-0">
      <div className=" text-xl p-4">Logo</div>
      <div className="flex flex-row w-1/3 p-4 list-none justify-evenly items-center">
        <li className=" cursor-pointer  hover:text-gray-400">Home</li>
        <li className=" cursor-pointer  hover:text-gray-400">About</li>
        <li className=" cursor-pointer  hover:text-gray-400">Contact</li>
      </div>
      <div>
        <button className=" bg-gray-300 rounded-full">Signin / Signup</button>
      </div>
    </div>
  );
}
