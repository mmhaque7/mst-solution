import React, { Fragment, useEffect } from "react";
import Hero from "./HomeHelpers/Hero";
import { Button, Link } from "@nextui-org/react";

import Aos from "aos";
import laptopImg from "../assets/website.svg";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Fragment >
      <Hero />
      <div className="my-8 flex justify-center">
        <hr className="xl:w-2/3 md:w-2/4  border-t-4 border-indigo-500 rounded-lg shadow-lg" />
      </div>
      <div className="md:hidden">
        <img src={laptopImg} alt="Laptop with lady" className="bottom-1" />
      </div>
      <div className="md:flex md:w-full  xl:w-full md:justify-center p-5 w-fit md:p-3 sm:h-30 sm:p-2 xl:pl-[10rem]">
        <div className="md:w-min-fit md:h-[10rem] md:p-2 md:flex items-center justify-center content-center bg-purple-100 border-b-2 border-indigo-500 border-r-2  ">
          <span
            className="text-xl md:text-2xl font-lato"
            data-aos="fade-up"
            data-aos-delay="300 "
          >
            Smart Digital Solutions:
          </span>
          <h2
            className="text-3xl md:text-4xl font-lato"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            For The Real World
          </h2>
        </div>
        <div className="xl:pl-4 md:pt-0 md:w-fit pt-4 text-pretty font-lato text-base lg:text-lg ">
          <p className="line-clamp-3 md:w-2/3">
            Step into the dynamic world of digital innovation, where creativity
            knows no bounds! From mesmerizing web design to groundbreaking
            marketing strategies, we're your gateway to online triumph. Let's
            ignite your digital journey!
          </p>
          <span>
            <Button
              as={Link}
              href="/services"
              className="border-none bg-inherit pt-2 md:pt-4 md:text-xl md:pl-0 underline decoration-[#FD6C7E] hover:decoration-indigo-500 font-semibold"
            >
              Learn more about our services{" "}
            </Button>
          </span>
        </div>
      </div>
      <div className="w-2/3 mt-[4rem] md:flex md:flex-col" data-aos="fade-up" data-aos-offset="50">
        <h2 className="md:flex md:flex-col font-lato text-3xl md:pl-[10rem] pl-5">
          <span className="" >Digital Work That</span>
          <span className="text-4xl text-[#FD6C7E]">
            Truly Makes A Difference.
          </span>
        </h2>
        <p className="font-lato md:pl-[10rem] md:pt-5 md:pb-4 pl-5 w-2/4 line-clamp-3 ">Let's build a strong and successful partnership to transform our dreams into reality. By working together, we can achieve great things and bring your vision to life. </p>
        <ul className="list-image-checkmark md:pl-[11rem] columns-2 ">
          <li>Increase Lead and Sales</li>
          <li>Drive eCommmerce growth</li>
          <li>Optimize your website</li>
          <li>Maximize engagement</li>
          <li>Boost social media presence</li>
          <li>Increase brand awareness</li>
        </ul>
      </div>
    </Fragment >
  );
};
export default Home;
