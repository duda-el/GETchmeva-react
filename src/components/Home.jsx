import React from "react";
import iphone from "../assets/iPhone.svg"
import appstore from "../assets/AppSotore.svg"
import android from "../assets/Android.svg"

export default function Home(){
  return(
    <div className="main">
      <div className="hero">
        <div className="md:px-20">
          <h1 className="custom-heading " ><span className="text-primary">GETchmeva</span> your personal <br  /> grocery assistant</h1>
          <p className="mt-5 text-1.5xl">Available soon on these platforms!</p>
          <div className="download">
            <img src={appstore} alt="" className="md:w-44 md:h-auto sm:w-40 sm:h-auto" />
            <img src={android} alt="" className="md:w-44 md:h-auto sm:w-40 sm:h-auto" />
          </div>
        </div>
        <img src={iphone} alt="" className="levitating-img w-72 h-auto mt-4 mr-32" />
      </div>
    </div>
  );
}

