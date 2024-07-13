import React, { useState } from "react";
// import SignUp from "./SignUp";
import Login from "./Login";
import googleLoginBtn from "/google-signin-btn.webp";
import { Link } from "react-router-dom";

import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import SignUp from "./SignUp";

export default function Home() {
  const [showLogin, setShowLogin] = useState(true);

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // .then((result) => {
    //   setUser(result.user);
    // })
    // .catch((error) => {
    //   console.error("Error during login: ", error);
    // });
  };

  const toLogIn = () => {
    setShowLogin(true);
  };
  const toSignUp = () => {
    setShowLogin(false);
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className=" bg-slate-400 w-full size-auto p-4 gap-2 flex flex-col justify-start items-center rounded-md">
        <div className=" w-full h-max p-2 flex flex-col justify-between items-center gap-4">
          <h2 className=" text-blue-black text-3xl ">Login Form</h2>

          <div className=" w-max h-max flex rounded-md gap-2">
            <button
              onClick={toLogIn}
              className="bg-gray-300 w-40 p-2 rounded-2xl text-black"
            >
              Login
            </button>
            <button
              onClick={toSignUp}
              className="bg-gray-300 w-40 p-2 rounded-2xl text-black"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* ***** LOGIN and SIGNUP COMPONENT **** */}
        {showLogin ? <Login /> : <SignUp />}

        <p>------- or -------</p>

        <Link to="/userProfile">
          <div onClick={googleLogin} className=" w-max h-max cursor-pointer">
            <img src={googleLoginBtn} className=" w-80 h-14 rounded-md" />
          </div>
        </Link>
      </div>
    </div>
  );
}
