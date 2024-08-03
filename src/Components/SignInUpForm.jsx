import React, { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import GloginBtn from "./GloginBtn";

export default function SignInUpForm() {
  const [showLogin, setShowLogin] = useState(true);

  const toLogIn = () => {
    setShowLogin(true);
  };
  const toSignUp = () => {
    setShowLogin(false);
  };

  return (
    <div className="w-[100vw] h-5/6 flex justify-center items-center">
      <div className=" bg-slate-400 w-min h-auto p-4 gap-2 flex flex-col justify-start items-center rounded-md">
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
          <GloginBtn />
        </Link>
      </div>
    </div>
  );
}
