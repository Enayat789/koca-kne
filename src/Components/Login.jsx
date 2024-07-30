import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [displayName, setDisplayName] = useState("");

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials);

      if (userCredentials.user.providerData[0]) {
        navigate("/userProfile");
      } 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full h-max  flex flex-col justify-between p-2 gap-4">
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
          onClick={signIn}
          className=" bg-gray-300 w-full p-2 text-lg border-none text-black rounded-md "
        >
          Login
        </button>
      </Link>
    </div>
  );
}
