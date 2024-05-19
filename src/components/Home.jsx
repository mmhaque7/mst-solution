import React, { Fragment } from 'react'
import Hero from './HomeHelpers/Hero'

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <hr></hr>
            <div className="">
                <div className="">
                    <span className='text-xl'>Smart Digital Solutions:</span>
                    <h2 className="text-3xl">For The Real World</h2>
                </div>
                <div className=''>
                    <p>Step into the dynamic world of digital innovation, where creativity knows no bounds! From mesmerizing web design to groundbreaking marketing strategies, we're your gateway to online triumph. Let's ignite your digital journey!</p>
                </div>
            </div>

        </Fragment>
    )
}

export default Home