import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Fragment } from "react";
import myVideo from "../../assets/video/earth.mp4"


function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Fragment>
      <div className="w-full "></div>
      <video src={myVideo} autoPlay loop muted className="object-none h-28 w-screen" />


    </Fragment>
  );
}

export default Hero;
