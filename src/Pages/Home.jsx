import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import Flex from '../Layouts/Flex';
import Heading1 from '../Layouts/Heading1';
import Peragraph from '../Layouts/Peragraph';
import Span from '../Layouts/Span';
import Image from '../Layouts/Image';
import { BsSearch } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import Evan from '../assets/Evan.jpeg'
import { BsFileImage } from "react-icons/bs";
import { FaEarthAsia } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { RxCross1, RxCross2, RxCrosshair2 } from "react-icons/rx";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import Navbar from '../Layouts/Layout';
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../FirebaseConfig';
import PostPage from './PostPage';
import defaultProfile from '../assets/EmptyProfile.png'
import StoryPage from './StoryPage';



// 4ta kaaj baqu ase, 1.. like , 2.. comment , 3.. ekta nirdisto time er por story delete hoye jawa , 4.. post create hole tar time dekhano...







function Home() {

    const Auth = getAuth(app)
    const db = getDatabase(app)
    let [profile, setProfile] = useState({})
    let [arr, setArr] = useState([])
    let [storyArr, setStoryArr] = useState([])
    let [fileType, setFileType] = useState('')
    let [visuStory, setVisuStory] = useState(null)


    useEffect(() => {

        onAuthStateChanged(Auth, (user) => {
            if (user) {
                setProfile({
                    Name: user.displayName,
                    Image: user.photoURL
                })
            }
        })

        const starCountRef = ref(db, 'posts/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot

            let arr2 = []
            data.forEach(itmes => {

                arr2.push(itmes.val())
            })
            setArr(arr2)
        });

        const starCountRef2 = ref(db, 'stories/');
        onValue(starCountRef2, (snapshot) => {
            const data = snapshot
            let storyArr2 = []
            data.forEach(item => {
                storyArr2.push(item.val())
            })
            setStoryArr(storyArr2)
        });


    }, [])





    let visualStory = (item) => {
        setVisuStory(item)
        setPostType("D")
    }



    let [postType, setPostType] = useState('A')



    return (
        <>




            {
                postType === 'A'
                    ?
                    <>
                        {/* logo part start */}

                        <div className='w-11/12 mx-auto py-3 overflow-x-hidden bg-white'>

                            <Flex className='justify-between'>

                                <Flex className='gap-x-2'>
                                    <FaBars />
                                    <Heading1 hea1Text='facebook' className='font-[raleway] text-2xl font-extrabold text-blue-600' />
                                </Flex>

                                <Flex className='gap-x-4'>
                                    <div className='border rounded-sm'>
                                        <MdAdd />
                                    </div>
                                    <BsSearch />
                                    <FaFacebookMessenger />
                                </Flex>

                            </Flex>
                        </div>

                        {/* logo part end  */}



                        {/* Post part start */}

                        <div className='w-19/20 mx-auto py-1 overflow-x-hidden bg-white'>
                            <Flex className='justify-between'>

                                <div className='w-9.5 h-9.5  '>
                                    <Image className='object-cover object-center w-full h-full rounded-full' src={profile.Image ? profile.Image : defaultProfile} />
                                </div>
                                <div className=' py-0.5 px-4 w-8/10  rounded-2xl border border-[rgba(0,0,0,0.25)] font-[roboto] text-base text-[rgba(0,0,0,0.76)]' onClick={() => setPostType("C")}>
                                    What's on your mind?
                                </div>
                                <BsFileImage className='text-[#838282]' onClick={() => setPostType("C")} />

                            </Flex>
                        </div>

                        {/* Post part end */}


                        <div className='bg-[rgba(105,134,145,0.3)]'>



                            {/* Story part start */}


                            <div className='py-2 overflow-x-auto scrollbar-none bg-white'>
                                <Flex className='gap-x-1 w-max'>

                                    <div className='h-50 w-30 rounded-md ms-1 bg-blue-50 relative border border-[#57555525]' onClick={() => setPostType("B")}>
                                        <div className='p-2.5 text-white bg-blue-600 rounded-full border-2 border-white absolute bottom-8 left-11 '>
                                            <MdAdd />
                                        </div>
                                        <Peragraph pText='Create story' className='font-[roboto] text-[10px] text-black absolute bottom-0.5 left-[50%] -translate-x-9  w-17 text-center' />
                                        <Image alt='adsf' src={profile.Image ? profile.Image : defaultProfile} className='w-full h-7/10 border-b-[rgba(141,139,139,0.2)] border-b object-top object-cover rounded-t-md border-0' />
                                    </div>



                                    {
                                        storyArr.map((items, index) => {

                                            return <div className='h-50 w-30 rounded-md  relative' key={index} onClick={() => visualStory(items)}>
                                                <div className='h-9.5 w-9.5 rounded-full  absolute top-1.5 left-1.5'>
                                                    <Image className='object-cover object-center' src={items.profilepic ? items.profilepic : defaultProfile} />
                                                </div>
                                                <Peragraph pText={items.username} className='font-[roboto] text-[10px] font-semibold text-white absolute bottom-3 left-2' />
                                                {
                                                    items.storyType == 'image'
                                                        ?
                                                        <Image alt='asdf' className='w-full h-full object-top object-cover rounded-md border-0' src={items.story} />
                                                        : items.storyType == 'video'
                                                        &&
                                                        <video src={items.story} className='w-full h-full  rounded-md border-0'></video>

                                                }
                                            </div>
                                        })
                                    }

                                </Flex>
                            </div>



                            {/* Story part end */}




                            {/* Post part Start */}


                            <div>



                                {
                                    arr.map((item, index) => {


                                        return <div className='bg-white my-1' key={index}>

                                            <Flex className='justify-between px-2 py-1 pt-2'>

                                                <Flex className='gap-x-1.5'>

                                                    <div className='w-9.5 h-9.5 '>
                                                        <Image className='object-cover object-center w-full h-full rounded-full' src={item.profileImage ? item.profileImage : defaultProfile} />
                                                    </div>

                                                    <div>
                                                        <Peragraph pText={item.username} className='text-sm font-semibold font-[inter] leading-6' />
                                                        <Flex className='gap-x-px'>
                                                            <Span spanText='9h' className='text-[12px] font-semibold text-[#585858] font-[inter] leading-0.5' />
                                                            <div className='w-0.5 rounded-full h-0.5 bg-[rgba(0,0,0,0.16)]'></div>
                                                            <FaEarthAsia className='text-[#8d8c8c] h-2.5' />
                                                        </Flex>
                                                    </div>

                                                </Flex>


                                                <Flex className='gap-x-3'>
                                                    <BsThreeDots className='text-[#464444]' />
                                                    <RxCross2 className='text-[#444444]' />
                                                </Flex>

                                            </Flex>

                                            <Peragraph className='font-[inter] text-sm font-medium px-4 py-2' pText={item.des} />

                                            {
                                                item.post
                                                    ?
                                                    <div className='h-40 w-full bg-blue-50'>
                                                        {
                                                            item.filetype == 'image'
                                                                ?
                                                                <Image className='h-full w-full object-center object-contain' src={item.post} />
                                                                :
                                                                item.filetype == 'video'
                                                                    ?
                                                                    <video src={item.post} controls className='h-full w-full object-center object-contain'></video>
                                                                    : ''
                                                        }
                                                    </div>
                                                    : ''
                                            }



                                            <Flex className='gap-x-2.5 py-1.5 px-2'>
                                                <div>
                                                    <SlLike className='text-[#585858] inline-block' /><Span spanText='100' className='text-sm text-[rgba(0,0,0,0.6)] font-[roboto] ms-1' />
                                                </div>
                                                <div>
                                                    <FaRegComment className='rotate-y-180 text-[#585858] inline-block' /><Span spanText='100' className='text-sm text-[rgba(0,0,0,0.6)] font-[roboto] ms-1' />
                                                </div>
                                                <div>
                                                    <PiShareFat className=' text-[#585858] inline-block' /><Span spanText='100' className='text-sm text-[rgba(0,0,0,0.6)] font-[roboto] ms-1' />
                                                </div>
                                            </Flex>




                                        </div>
                                    })
                                }









                            </div>



                            {/* Post part end */}
                        </div>
                        <Navbar />


                    </>



                    : postType === 'B'
                        ?
                        <StoryPage name={profile.Name} image={profile.Image} setPostType={setPostType} />
                        : postType === 'C'
                            ?
                            <PostPage name={profile.Name} image={profile.Image} setPostType={setPostType} />
                            :
                            postType === "D"
                            &&
                            <div className='h-screen w-full relative '>
                                <Flex className='justify-between px-1.5 absolute w-full top-1.5'>
                                    <Flex className='gap-x-1.5  top-1.5 left-1.5'>
                                        <div className='w-9.5 h-9.5  top-2.5 left-1.5 '>
                                            <Image className='object-cover object-center w-full h-full rounded-full' src={visuStory.profilepic ? visuStory.profilepic : defaultProfile} />
                                        </div>
                                        <Peragraph pText={visuStory.username} className="font-[inter] text-base font-medium text-white" />
                                    </Flex>
                                    <RxCross1 className='text-white' onClick={() => setPostType("A")} />
                                </Flex>
                                {
                                    visuStory.storyType === "image"
                                        ?
                                        <Image src={visuStory.story} alt='askj' className='w-full h-full object-center object-cover' />
                                        :visuStory.storyType === "video" &&
                                        <video src={visuStory.story} alt='askj' className='w-full h-full object-center object-cover' controls></video>
                                }
                            </div>
            }






        </>
    )
}

export default Home
