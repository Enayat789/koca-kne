import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import GloginBtn from "./GloginBtn";

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

  console.log(user);

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
          {/* ******* GoogleLogin button compnt ******8 */}
          <GloginBtn setUser={setUser} />
          <Link to="/">
            <button className=" w-full bg-gray-300">Go to Home</button>
          </Link>
        </div>
      ) : (
        <div className=" bg-gray-400 size-72 flex flex-col justify-evenly items-center rounded-lg">
          <h2 className=" text-2xl">User Details</h2>
          <img src={user.photoURL ||"https://imgs.search.brave.com/ese4Otz9fZj_SIrJ1e_76oRSVVyE4DssQozYi9JW8tc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbWFuLTYvNDgv/bWFuLTAzLTEyOC5w/bmc"} alt="User Avatar" />
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <button onClick={googleLogout}>Logout</button>
        </div>
      )}
    </>
  );
}
