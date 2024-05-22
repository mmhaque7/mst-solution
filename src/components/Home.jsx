import React, { Fragment, useEffect } from 'react'
import Hero from './HomeHelpers/Hero'
import Aos from 'aos'

const Home = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <Fragment className="w-full h-full">
            <Hero />
            <div class="my-8 flex justify-center">
                <hr class="w-1/2 border-t-4 border-indigo-500 rounded-lg shadow-lg" />
            </div>
            <div className="md:flex md:w-3/4 md:justify-center p-10 w-fit md:p-1 sm:h-30" >
                <div className="md:invisible">
                    <img src="src\assets\website.svg" alt="Laptop with lady" className='bottom-1' />
                </div>
                <div className="md:w-1/3 flex items-center justify-center content-center bg-purple-100 border-b-2 border-indigo-500 border-r-2  ">
                    <span className='text-xl md:text-2xl' data-aos="fade-right" data-aos-delay="800">Smart Digital Solutions:</span>
                    <h2 className="text-3xl md:text-4xl" data-aos="fade-right" data-aos-delay="900">For The Real World</h2>
                </div>
                <div className='md:pl-4 md:pt-0 md:w-2/4'>
                    <p>Step into the dynamic world of digital innovation, where creativity knows no bounds! From mesmerizing web design to groundbreaking marketing strategies, we're your gateway to online triumph. Let's ignite your digital journey!</p>
                </div>
            </div>

        </Fragment>
    )
}
export default Home