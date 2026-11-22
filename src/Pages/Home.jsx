import React from 'react'
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
import { RxCross2 } from "react-icons/rx";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";









function Home() {






    return (
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

            {/* logo part end */}



            {/* Post part start */}

            <div className='w-19/20 mx-auto py-1 overflow-x-hidden bg-white'>
                <Flex className='justify-between'>

                    <div className='w-9.5 h-9.5 rounded-full bg-amber-400'>
                        <Image className='object-cover object-center' />
                    </div>
                    <div className=' py-0.5 px-4 w-8/10  rounded-2xl border border-[rgba(0,0,0,0.25)] font-[roboto] text-base text-[rgba(0,0,0,0.76)]'>
                        What's on your mind?
                    </div>
                    <BsFileImage className='text-[#838282]' />

                </Flex>
            </div>

            {/* Post part end */}


            <div className='bg-[rgba(105,134,145,0.3)]'>



                {/* Story part start */}


                <div className='py-2 overflow-x-auto scrollbar-none bg-white'>
                    <Flex className='gap-x-1 w-max'>

                        <div className='h-40 w-30 rounded-md  bg-blue-50 relative border border-[#57555525]'>
                            <div className='p-2.5 text-white bg-blue-600 rounded-full border border-white absolute bottom-8 left-11 '>
                                <MdAdd />
                            </div>
                            <Peragraph pText='Create story' className='font-[roboto] text-[10px] text-black absolute bottom-0.5 left-[50%] -translate-x-9  w-17 text-center' />
                            <Image alt='adsf' src={Evan} className='w-full h-7/10 object-top object-cover rounded-t-md border-0' />
                        </div>
                        <div className='h-40 w-30 rounded-md  bg-amber-200 relative'>
                            <div className='h-9.5 w-9.5 rounded-full bg-red-500 absolute top-1.5 left-1.5'>
                                <Image className='object-cover object-center' />
                            </div>
                            <Peragraph pText='aldjfadsfasdf lkajsdlkfjlkjoij' className='font-[roboto] text-[10px] font-normal text-white absolute bottom-3 left-1' />
                            <Image alt='asdf' className='w-full h-full object-top object-cover rounded-md border-0' src={Evan} />
                        </div>
                        <div className='h-40 w-30 rounded-md  bg-amber-200 relative'>
                            <div className='h-9.5 w-9.5 rounded-full bg-red-500 absolute top-1.5 left-1.5'>
                                <Image className='object-cover object-center' />
                            </div>
                            <Peragraph pText='aldjfadsfasdf lkajsdlkfjlkjoij' className='font-[roboto] text-[10px] font-normal text-white absolute bottom-3 left-1' />
                            <Image alt='asdf' className='w-full h-full object-top object-cover rounded-md border-0' src={Evan} />
                        </div>
                        <div className='h-40 w-30 rounded-md  bg-amber-200 relative'>
                            <div className='h-9.5 w-9.5 rounded-full bg-red-500 absolute top-1.5 left-1.5'>
                                <Image className='object-cover object-center' />
                            </div>
                            <Peragraph pText='aldjfadsfasdf lkajsdlkfjlkjoij' className='font-[roboto] text-[10px] font-normal text-white absolute bottom-3 left-1' />
                            <Image alt='asdf' className='w-full h-full object-top object-cover rounded-md border-0' src={Evan} />
                        </div>
                        <div className='h-40 w-30 rounded-md  bg-amber-200 relative'>
                            <div className='h-9.5 w-9.5 rounded-full bg-red-500 absolute top-1.5 left-1.5'>
                                <Image className='object-cover object-center' />
                            </div>
                            <Peragraph pText='aldjfadsfasdf lkajsdlkfjlkjoij' className='font-[roboto] text-[10px] font-normal text-white absolute bottom-3 left-1' />
                            <Image alt='asdf' className='w-full h-full object-top object-cover rounded-md border-0' src={Evan} />
                        </div>
                        <div className='h-40 w-30 rounded-md  bg-amber-200 relative'>
                            <div className='h-9.5 w-9.5 rounded-full bg-red-500 absolute top-1.5 left-1.5'>
                                <Image className='object-cover object-center' />
                            </div>
                            <Peragraph pText='aldjfadsfasdf lkajsdlkfjlkjoij' className='font-[roboto] text-[10px] font-normal text-white absolute bottom-3 left-1' />
                            <Image alt='asdf' className='w-full h-full object-top object-cover rounded-md border-0' src={Evan} />
                        </div>

                    </Flex>
                </div>



                {/* Story part end */}




                {/* Post part Start */}


                <div>


                    <div className='bg-white my-1'>

                        <Flex className='justify-between px-2 py-1 pt-2'>

                            <Flex className='gap-x-1.5'>

                                <div className='w-9.5 h-9.5 rounded-full bg-amber-400'>
                                    <Image className='object-cover object-center' />
                                </div>

                                <div>
                                    <Peragraph pText='Samsuzzaman Evan' className='text-sm font-semibold font-[inter] leading-6' />
                                    <Flex className='gap-x-[1px]'>
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

                        <Peragraph className='font-[inter] text-sm font-medium px-4 py-2' pText='my name is samsuzzaman!' />

                        <div className='h-40 w-full bg-blue-50'>
                            <Image className='h-full w-full object-center object-contain' src={Evan} />
                        </div>


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


                </div>



                {/* Post part end */}
            </div>




        </>
    )
}

export default Home
