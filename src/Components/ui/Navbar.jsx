import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import profileIcon from "../../assets/profile icon.webp";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    <div className="flex flex-row flex-wrap w-[100vw] p-4 md:px-6 bg-gray-400 justify-between items-center sticky top-0 z-10">
      {/* <Link to={"/"}> */}
      <div
        className=" text-xl text-black p-2 md:text-2xl cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Logo
      </div>
      {/* </Link> */}

      <div className="flex-row w-1/3 p-2 list-none text-lg justify-evenly items-center hidden sm:flex">
        <Link to="/">
          <li className=" cursor-pointer hover:text-gray-300 text-black">
            Home
          </li>
        </Link>
        <li className=" cursor-pointer  hover:text-gray-300 text-black">
          About
        </li>
        <HashLink smooth to="/#products">
          <li className=" cursor-pointer hover:text-gray-300 text-black ">
            Products
          </li>
        </HashLink>
      </div>

      <div className=" flex w-auto 2xl:w-[10%] justify-center">
        {!user ? (
          <Link to="/signInUpForm">
            <button className="bg-gray-300 text-black rounded-full hover:bg-white ">
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
