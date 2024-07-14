import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const signUp = async (e) => {
    e.preventDefault();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, {
        displayName: displayName,
      });

      if (user.providerData[0]) {
        navigate("/userProfile");
      }
    } catch (error) {
      console.log("error in user register :", error);
    }
  };

  return (
    <div className=" w-full h-max  flex flex-col justify-between p-2 gap-4">
      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        type="text"
        placeholder="Name"
        className=" w-full p-2 text-lg border-none outline-none rounded-md"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email Address"
        className=" w-full p-2 text-lg border-none outline-none rounded-md"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="pass"
        placeholder="Password"
        className=" w-full p-2 text-lg border-none outline-none rounded-md"
      />
      {/* <label htmlFor="pass">Forget Password?</label> */}

      <Link to="/userProfile">
        <button
          onClick={signUp}
          className=" bg-gray-300 w-full p-2 text-lg text-black rounded-md "
        >
          SignUp
        </button>
      </Link>
    </div>
  );
}
