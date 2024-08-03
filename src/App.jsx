// import "./App.css";
import Home from "./Components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Login from "./Components/Login";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import Navbar from "./Components/ui/Navbar";
import SignInUpForm from "./Components/SignInUpForm";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile" element={<Profile />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signInUpForm" element={<SignInUpForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
