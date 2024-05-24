import React, { Fragment, useEffect } from 'react'
import Hero from './HomeHelpers/Hero'
import Aos from 'aos'
import laptopImg from '../assets/website.svg'

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
            <div className="md:flex md:w-full xl:w-2/3 md:justify-center p-10 w-fit md:p-3 sm:h-30 sm:p-2 xl:pl-[20rem]" >

                <div className="md:w-[55rem] md:h-[10rem] md:flex items-center justify-center content-center bg-purple-100 border-b-2 border-indigo-500 border-r-2  ">
                    <span className='text-xl md:text-2xl' data-aos="fade-right" data-aos-delay="300 ">Smart Digital Solutions:</span>
                    <h2 className="text-3xl md:text-4xl" data-aos="fade-right" data-aos-delay="400">For The Real World</h2>
                </div>
                <div className='xl:pl-4 md:pt-0 md:w-fit pt-4 text-pretty font '>
                    <p>Step into the dynamic world of digital innovation, where creativity knows no bounds! From mesmerizing web design to groundbreaking marketing strategies, we're your gateway to online triumph. Let's ignite your digital journey!</p>
                </div>
            </div>

        </Fragment>
    )
}
export default Home