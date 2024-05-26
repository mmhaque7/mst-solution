import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import { Button, Link } from "@nextui-org/react";

import "aos/dist/aos.css";

import myVideo from "../../assets/video/earth.mp4";

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Fragment>
      <div className="w-full h-[30svh] sm:h-[50svh] md:h-[75vh] mb-20 md:mb-0">
        <video
          src={myVideo}
          autoPlay
          loop
          muted
          className="object-none hidden md:block  md:w-full md:h-full opacity-80"
        />
        <div className=" absolute w-full  top-[10svh] h-full md:h-full flex flex-col flex-wrap ellipsis-p text-pretty items-start justify-start md:justify-center text-red-400">
          <h1 className="text-xl sm:text-4xl pl-5 pb-5 font-bold font-lato text-pretty ">
            <span data-aos="fade-up" data-aos-delay="750" >
              Digital Mastery <span className="md:no-underline underline decoration-indigo-500 ">Unleashed.</span>
            </span>
          </h1>
          <p className="text-xl sm:text-2xl  sm:flex flex-wrap ellipsis-p text-pretty sm:text-pretty font-lato pl-5 font-extralight whitespace-pre-line md:w-1/2">
            <span data-aos="fade-up" data-aos-delay="800">
              Embark on a journey of digital empowerment with us.
            </span>
            <span data-aos="fade-up" data-aos-delay="850" >
              Unlock the potential of your online presence today.
            </span>
          </p>
          <div className="flex justify-center items-center pt-10 pl-5 " data-aos="fade-right" data-aos-delay="1000">
            <Button as={Link} href="/contact" auto className="bg-red-500 text-white py-2 px-6 rounded shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95">Get in Touch</Button>


          </div>
          <div>

          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default Hero;
