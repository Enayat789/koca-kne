import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/profile icon.webp";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => checkUser();
  }, []);

  return (
    <div className="flex flex-row flex-wrap w-[100vw] p-3 bg-gray-400 px-4 justify-between items-center sticky top-0">
      <Link to={"/"}>
        <div className=" text-xl text-black p-2 md:text-2xl">Logo</div>
      </Link>

      <div className="flex-row w-1/3 p-2 list-none justify-evenly items-center hidden sm:flex">
        <Link to="/">
          <li className=" cursor-pointer hover:text-gray-300 text-black">
            Home
          </li>
        </Link>
        <li className=" cursor-pointer  hover:text-gray-300 text-black">
          About
        </li>
        <li className=" cursor-pointer  hover:text-gray-300 text-black">
          Contact
        </li>
      </div>

      <div>
        {!user ? (
          <Link to="/signInUpForm">
            <button className=" bg-gray-300 text-black rounded-full hover:bg-white ">
              Signin / Signup
            </button>
          </Link>
        ) : (
          <Link to="/userProfile">
            <img
              src={user.photoURL || profileIcon}
              alt="profile icon"
              className=" w-12 rounded-full"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
