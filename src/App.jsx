import "./App.css";
import Home from "./Components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Login from "./Components/Login";
import GoogleLogin from "./Components/GoogleLogin";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

// import { useState, useEffect } from "react";
// import { auth } from "./firebase/firebase";
// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   onAuthStateChanged,
// } from "firebase/auth";

export default function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  // const googleLogin = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       setUser(result.user);
  //     })
  //     .catch((error) => {
  //       console.error("Error during login: ", error);
  //     });
  // };

  // const googleLogout = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       setUser(null);
  //     })
  //     .catch((error) => {
  //       console.error("Error during logout: ", error);
  //     });
  // };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile" element={<GoogleLogin />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

      {/* {!user ? (
        <button onClick={googleLogin}>Continue With Google</button>
      ) : (
        <div className=" bg-gray-400 size-72 flex flex-col justify-evenly items-center rounded-lg">
          <h2 className=" text-2xl">User Details</h2>
          <img src={user.photoURL} alt="User Avatar" />
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <button onClick={googleLogout}>Logout</button>
        </div>
      )} */}
    </>
  );
}
