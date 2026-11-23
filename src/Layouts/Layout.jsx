import { useState } from 'react'
import { FiHome } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";
import { CiShop } from "react-icons/ci";
import { PiBellBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import Flex from '../Layouts/Flex';
import { Link } from 'react-router-dom';
import VideoIcon from './VideoIcon';


function Navbar() {


    let [bgColor, setBgColor] = useState('text-blue-600')




    let [link, setLink] = useState(['/', '/video', '/freinds', '/shoping', '/notification', '/profile'])
    let [icons, setIcons] = useState([<FiHome className='text-[24px]' />, <VideoIcon />, <SlPeople className='text-[24px]' />, <CiShop className='text-[24px]' />, <PiBellBold className='text-[24px] ' />, <CgProfile className='text-[24px]' />])

    return (
        <>


            {/* Navbar start */}


            <div className='fixed w-full bottom-0 bg-white'>


                <Flex className='justify-around border-t py-3 border-blue-200 w-full'>

                    {
                        icons.map((item, index) => (
                            <Link to={link[index]} key={index} >{item}</Link>
                        ))
                    }


                </Flex>


            </div>

            {/* Navbar end */}





        </>
    )
}

export default Navbar
