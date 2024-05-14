import React, { Fragment } from 'react'
import myVideo from '../../assets/video/earth.mp4'

function VideoPlayer() {
    return (
        <Fragment>
            <video src={myVideo} autoPlay loop muted className='m-0 p-0  ' />
        </Fragment>
    )
}

export default VideoPlayer