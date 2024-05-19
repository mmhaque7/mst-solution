import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";

import "aos/dist/aos.css";

import myVideo from "../../assets/video/earth.mp4";
import Container from "./Container";

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Fragment>
      <div className="w-full h-[50svh] sm:h-[50svh] ">
        <video
          src={myVideo}
          autoPlay
          loop
          muted
          className="object-none hidden md:block md:w-full md:h-[50svh] opacity-85"
        />
        <div className=" absolute w-full  h-2/3 md:h-full top-0 flex flex-col items-start justify-center text-red-400">
          <h1 className="text-4xl sm:text-2xl  pl-5 pb-8 font-bold font-lato">
            <span data-aos="fade-up" data-aos-delay="100">
              Digital Mastery <span className="md:no-underline underline decoration-indigo-500 ">Unleashed.</span>
            </span>
          </h1>
          <p className="text-3xl sm:text-2xl  sm:flex flex-wrap ellipsis-p text-pretty sm:text-pretty font-lato pl-5 font-extralight whitespace-pre-line md:w-1/2">
            <span data-aos="fade-up" data-aos-delay="800">
              Embark on a journey of digital empowerment with us.
            </span>
            <span data-aos="fade-up" data-aos-delay="850">
              Unlock the potential of your online presence today.
            </span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Hero;
