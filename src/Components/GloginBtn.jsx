import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
import googleLoginBtn from "/google-signin-btn.webp";

export default function GloginBtn({ setUser }) {
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div onClick={googleLogin} className="w-full flex h-16 cursor-pointer  px-2">
      <img src={googleLoginBtn} className=" w-96 rounded-md object-fill" />
    </div>
  );
}
