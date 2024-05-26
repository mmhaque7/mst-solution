import React, { Fragment, useEffect } from 'react'
import Hero from './HomeHelpers/Hero'
import { Button, Link } from "@nextui-org/react";

import Aos from 'aos'
import laptopImg from '../assets/website.svg'
import arrowImg from '../assets/arrow.svg'

const Home = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <Fragment className="w-full h-full">
            <Hero />
            <div class="my-8 flex justify-center">
                <hr class="xl:w-2/3 md:w-2/4  border-t-4 border-indigo-500 rounded-lg shadow-lg" />
            </div>
            <div className="md:hidden">
                <img src={laptopImg} alt="Laptop with lady" className='bottom-1' />
            </div>
            <div className="md:flex md:w-full  xl:w-full md:justify-center p-5 w-fit md:p-3 sm:h-30 sm:p-2 xl:pl-[10rem]" >

                <div className="md:w-min-fit md:h-[10rem] md:p-2 md:flex items-center justify-center content-center bg-purple-100 border-b-2 border-indigo-500 border-r-2  ">
                    <span className='text-xl md:text-2xl font-lato' data-aos="fade-up" data-aos-delay="300 ">Smart Digital Solutions:</span>
                    <h2 className="text-3xl md:text-4xl font-lato" data-aos="fade-up" data-aos-delay="400">For The Real World</h2>
                </div>
                <div className='xl:pl-4 md:pt-0 md:w-fit pt-4 text-pretty font-lato text-base lg:text-lg '>
                    <p>Step into the dynamic world of digital innovation, where creativity knows no bounds! From mesmerizing web design to groundbreaking marketing strategies, we're your gateway to online triumph. Let's ignite your digital journey!</p>
                    <span><Button as={Link} href='/services' className='border-none bg-inherit pt-2 md:pt-4 md:text-xl md:pl-0 underline decoration-[#FD6C7E] hover:decoration-indigo-500 font-semibold'>Learn more about our services </Button></span>
                </div>
            </div>
            <div className="">
                <h2><span>Digital Work That</span>
                    <span> Truly Makes A Difference.</span>
                </h2>
            </div>

        </Fragment>
    )
}
export default Home