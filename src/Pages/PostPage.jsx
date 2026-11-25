import React, { useState } from 'react'
import Heading1 from '../Layouts/Heading1'
import Flex from '../Layouts/Flex'
import Image from '../Layouts/Image'
import Peragraph from '../Layouts/Peragraph'
import Input from '../Layouts/Input'
import Label from '../Layouts/Label'
import Button from '../Layouts/Button'
import { getDatabase, push, ref, set } from "firebase/database";
import app from '../FirebaseConfig'

function PostPage({ className, image, name }) {

    const db = getDatabase(app)

    let [postDes, setPostDes] = useState('')
    let [postImage, setPostImage] = useState('')
    let [visImg, setVisImg] = useState(null)
    let [file, setFile] = useState('')

    let formdata = new FormData()
    formdata.append("file", postImage)
    formdata.append("upload_preset", "postdata")


    let post = () => {

        fetch('https://api.cloudinary.com/v1_1/z7dn9zdp/auto/upload', {
            method: "POST",
            body: formdata
        })
            .then(res => res.json())
            .then(res => {
                let url = res.secure_url
                set(push(ref(db, 'posts/')), {
                    username: name,
                    profileImage: image,
                    post: url,
                    des:postDes
                })
            })
    }


    let collectImage = (e) => {
        let file = e.target.files[0]
        setFile(file.type)
        setVisImg(URL.createObjectURL(file))
    }




    return (
        <>
            <div className={`${className} h-screen`}>

                <Flex className='py-3 px-3 border-b border-[#a1a1a188]'>

                    <div className='font-[roboto] text-md w-1/3'>X</div>
                    <Heading1 hea1Text='New Post' className='font-[inter] text-base font-medium ' />

                </Flex>

                <Flex className='gap-x-3.5 py-3 px-3'>
                    <Image className='w-9.5 h-9.5 rounded-full object-center object-cover' src={image} />
                    <Peragraph pText={name} className='font-[inter] text-base font-medium' />
                </Flex>

                <div>
                    {
                        file.includes('image')
                            ?
                            <Image src={visImg} className='w-8/10 h-40 mx-auto block object-cover object-center rounded-2xl' />
                            : file.includes('video')
                                ? <video src={visImg} className='w-8/10 h-40 mx-auto block object-cover object-center rounded-2xl' controls ></video>
                                : ''

                    }
                </div>

                <div>
                    <Input type='text' inpText="What's on your mind?" className='border-none outline-none py-3 block mx-auto w-8/10 h-6 my-2  align-top' onchange={(e) => setPostDes(e.target.value)} />
                    <Label id='image' labelText='Upload Image or Video' className='font-[inter] text-base font-medium block py-2.5 px-5 bg-blue-400 w-8/10 text-white rounded-md mx-auto my-8' />
                    <Input type='file' accept='video/*,image/*' id='image' className='hidden' onchange={(e) => {
                        collectImage(e)
                        setPostImage(e.target.files[0])
                    }
                    } />

                </div>
                <Button btnText='Post' className='bg-blue-400 py-1 px-5 text-white font-[inter] font-medium rounded-md block mx-auto' onclick={post} />

            </div>
        </>
    )
}

export default PostPage
