import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Layouts/Layout'
import { getDatabase, onValue, ref } from 'firebase/database'
import app from '../FirebaseConfig'
import { FaBars, FaRegBookmark, FaRegComment } from 'react-icons/fa'
import Flex from '../Layouts/Flex'
import Heading1 from '../Layouts/Heading1'
import { BsSearch, BsThreeDots } from 'react-icons/bs'
import { PiDotsThreeCircle, PiShareFat } from 'react-icons/pi'
import Image from '../Layouts/Image'
import Peragraph from '../Layouts/Peragraph'
import { SlLike } from 'react-icons/sl'
import Span from '../Layouts/Span'
import defaultpic from '../assets/EmptyProfile.png'
import VideoItmes from '../Layouts/VideoItmes'

function Video() {


  const videoRef = useRef()
  const db = getDatabase(app)
  let [videoArr, setVideoArr] = useState([])



  useEffect(() => {

    let videoArr2 = []
    const starCountRef = ref(db, 'posts/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot
      data.forEach(item => {
        if (item.val().filetype === 'video') {
          videoArr2.push(item.val())
        }
      })
      setVideoArr(videoArr2)
    })

    const starCountRef2 = ref(db, 'stories/');
    onValue(starCountRef2, (snapshot) => {
      const data = snapshot
      data.forEach(item => {
        if (item.val().storyType === 'video') {
          videoArr2.push(item.val())
        }
      })
      setVideoArr(videoArr2)
    })

  }, [])


 


  console.log(videoArr)

  return (
    <>

      <div className='overflow-y-scroll snap-y h-screen snap-mandatory'>

        {
          videoArr.map((itme, index) => {
            return <div className='bg-black h-screen w-full relative snap-start' key={index}>
              <Flex className='justify-between px-4 absolute top-2.5 w-full py-1.5'>
                <Flex className='gap-x-3'>
                  <FaBars className='text-white' />
                  <Heading1 hea1Text="Reels" className='font-[roboto] font-bold text-lg text-white' />
                </Flex>
                <Flex className='gap-x-3'>
                  <BsSearch className='text-white' />
                  <PiDotsThreeCircle className='text-white' />
                </Flex>
              </Flex>



              <div className='absolute bottom-15 px-2.5'>
                <Flex className='gap-x-2.5  w-full '>
                  <div className='w-10.5 h-10.5 rounded-full'>
                    <Image className='w-full h-full rounded-full' src={itme.profilepic ? itme.profilepic : itme.profileImage ? itme.profileImage : defaultpic}/>
                  </div>
                  <Peragraph pText={itme.username} className='font-[roboto] text-sm font-medium text-white w-40 leading-4.5' />
                  <div className='py-0.5 px-1 border border-[rgba(199,199,199,0.44)] text-[rgb(250,244,244)] text-[10px] rounded-sm' >Follow</div>
                </Flex>
                <Peragraph pText={itme.des} className='text-white font-[inter] text-md py-1.5 px-1.5' />
              </div>

              <Flex className='flex-col gap-y-2.5 absolute bottom-15 right-1.5'>
                <div className='flex flex-col items-center gap-y-1.5'>
                  <SlLike className='text-[#fffefe] inline-block' />
                  <Span spanText='100' className='font-[roboto] text-white block text-sm' />
                </div>
                <div className='flex flex-col items-center gap-y-1.5'>
                  <FaRegComment className='rotate-y-180 text-[#e4e4e4] inline-block' />
                  <Span spanText='100' className='font-[roboto] text-white block text-sm' />
                </div>
                <div className='flex flex-col items-center gap-y-1.5'>
                  <PiShareFat className=' text-[#f1f1f1] inline-block' />
                  <Span spanText='100' className='font-[roboto] text-white block text-sm' />
                </div>
                <div className='flex flex-col items-center gap-y-1.5'>
                  <FaRegBookmark className=' text-[#f1f1f1] inline-block' />
                  <Span spanText='100' className='font-[roboto] text-white block text-sm' />
                </div>
                <div>
                  <BsThreeDots className='text-[#f1f1f1] inline-block' />
                </div>

              </Flex>




              <VideoItmes src={itme.post?itme.post:itme.story}/>


            </div>
          })
        }




      </div>


      <Navbar />
    </>
  )
}

export default Video
