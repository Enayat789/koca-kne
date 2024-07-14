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
    <div onClick={googleLogin} className=" w-max h-max cursor-pointer">
      <img src={googleLoginBtn} className=" w-80 h-16 rounded-md" />
    </div>
  );
}
