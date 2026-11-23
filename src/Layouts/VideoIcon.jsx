import React from 'react'
import { IoPlay } from "react-icons/io5";

function VideoIcon() {
    return (
        <>
            <div className='h-5 w-6 bg-white border-2 rounded-[5px] '>
                <div className='h-3/10 w-full flex flex-wrap'>
                    <div className='h-full w-3/9 bg-white border'></div>
                    <div className='h-full w-3/9 bg-white border'></div>
                    <div className='h-full w-3/9 bg-white border'></div>
                </div>
                <IoPlay className='text-[10px] mx-auto' />

            </div>
        </>
    )
}

export default VideoIcon
