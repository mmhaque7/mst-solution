import React, { Fragment } from 'react'
import Hero from './HomeHelpers/Hero'
import VideoPlayer from './HomeHelpers/VideoPlayer'

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <VideoPlayer />
        </Fragment>
    )
}

export default Home