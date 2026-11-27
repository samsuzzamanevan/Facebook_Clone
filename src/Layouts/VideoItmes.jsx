import React, { useEffect, useRef } from 'react'

function VideoItmes({src}) {


    const videoRef = useRef(null)


    useEffect(()=>{
        const video = videoRef.current
        if(!video)return
        let intersec = new IntersectionObserver((entries)=>{
            entries.forEach((item)=>{
                if(item.isIntersecting){
                    item.target.play().catch((error) => {console.log(error)});
                }else{
                    item.target.pause()
                }
            })
        },{
            threshold:0.7,
        })

        intersec.observe(video)
        return ()=>{
            intersec.disconnect()
        }

    },[])



  return (
    <>
      <video src={src} muted playsInline className='w-full h-full object-contain'  onClick={()=>{
        if(videoRef.current.paused){
            videoRef.current.play()
        }else{
            videoRef.current.pause()
        }
      }}  ref={videoRef}></video>
    </>
  )
}

export default VideoItmes
