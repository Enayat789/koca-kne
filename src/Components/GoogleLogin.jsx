import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import googleLoginBtn from "/google-signin-btn.webp";

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

export default function GoogleLogin() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Error during login: ", error);
      });
  };

  const googleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error during logout: ", error);
      });
  };

  return (
    <>
      {!user ? (
        <div className="  flex flex-col gap-4">
          <div onClick={googleLogin} className=" w-max h-max cursor-pointer">
            <img src={googleLoginBtn} className=" w-80 h-16 rounded-md" />
          </div>
          <Link to="/">
            <button className=" w-full bg-gray-300">Go to Home</button>
          </Link>
        </div>
      ) : (
        <div className=" bg-gray-400 size-72 flex flex-col justify-evenly items-center rounded-lg">
          <h2 className=" text-2xl">User Details</h2>
          <img src={user.photoURL} alt="User Avatar" />
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <button onClick={googleLogout}>Logout</button>
        </div>
      )}
    </>
  );
}
