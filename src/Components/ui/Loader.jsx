import React from "react";
// import loader from "../../assets/loader3.gif";
import loader2 from "../../assets/loader.gif";

export default function Loader() {
  return (
    <div className=" w-full h-2/4 flex justify-cente items-centerr">
      <img className="m-auto w-auto md:w-1/4" src={loader2} alt="loader" />
    </div>
  );
}
