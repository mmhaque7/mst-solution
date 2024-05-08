import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Fragment } from "react";

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Fragment>
      <div className="  bg-amber-200 w-full h-screen sm:h-screen lg:h-screen bg-asset pb-10 sm:pb-12 overflow-hidden pt-[53px] sm:pt-0 not-home">
        <div className=" text-container absolute w-2/3 text-black h-full top-1 left-0 flex lg:flex-row flex-col lg:items-center lg:justify-start">
          <div className="max-w-wrapper mx-auto px-5 w-full pb-14 pt-10 xs:py-12 sm:py-20 lg:py-0 my-16 h-full lg:h-auto lg:block flex flex-col sm:justify-center justify-between">
            <div className="h-auto">
              <h1 className="pb-5 sm:w-auto flex flex-wrap lg:text-heading lg:leading-tight xl:leading-tighter
            sm:text-5xl sm:leading-tight text-3xl text-2xl sm:max-w-header w-64 font-bold">
                <span className="lg:w-full" data-aos="fade-up" data-aos-delay="100">Digital Mastery Unleashed.</span>
              </h1>
              <div className="pb-5 max-w-header mb-2 sm:mb-5">
                <p className="text-xl sm:text-2xl lg:text-3xl font-light sm:flex flex-wrap ellipsis-p text-pretty sm:text-pretty ">
                  <span className="inline lg:block" data-aos="fade-up" data-aos-delay="800">Embark on a journey of digital empowerment with us.</span>
                  <span className="inline lg:block" data-aos="fade-up" data-aos-delay="850">Unlock the potential of your online presence today.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </Fragment>
  );
}

export default Hero;
