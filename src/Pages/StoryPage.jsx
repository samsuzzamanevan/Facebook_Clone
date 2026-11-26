import React, { useState } from 'react'
import Flex from '../Layouts/Flex'
import { RxCross2 } from 'react-icons/rx'
import Input from '../Layouts/Input'
import Label from '../Layouts/Label'
import Image from '../Layouts/Image'
import Peragraph from '../Layouts/Peragraph'
import defaultProfile from '../assets/EmptyProfile.png'
import Button from '../Layouts/Button'
import { getDatabase, push, ref, set } from "firebase/database";
import app from '../FirebaseConfig'
import { toast, ToastContainer } from 'react-toastify'

function StoryPage({ name, image, setPostType }) {

    let [visuImg, setVisuImg] = useState(null)


    let [type, setType] = useState('')
    let disabled = visuImg
    let [storyImg,setStoryImg] = useState(null)

    let db = getDatabase(app)



    let post = () => {



        if (!disabled) {
            return
        }


        else if (visuImg !== null) {
           
   
            let formdata = new FormData()
            formdata.append("file", storyImg)
            formdata.append("upload_preset","Storydata")
            fetch('https://api.cloudinary.com/v1_1/z7dn9zdp/auto/upload',{
                method:"POST",
                body:formdata
            })
            .then(res=> res.json())
            .then(res=> {
                set(push(ref(db, 'stories/')), {
                    username: name,
                    profilepic: image,
                    story:res.secure_url,
                    storyType:res.resource_type
                  })
                  .then(()=>{
                    console.log('done')
                    setVisuImg(null)
                    setStoryImg(null)
                  })
                  .catch(()=> toast.error('problem'))
            })


            .catch(error=>{
                console.log(error)
            })
        }


      


    }






    let collection = (e) => {
        setType(e.target.files[0].type)
        let file = URL.createObjectURL(e.target.files[0])
        setVisuImg(file)
    }



    return (
        <>
        <ToastContainer/>
            <div className='w-full  h-screen'>
                <Flex className='py-2 px-3 gap-x-1.5'>
                    <div className='w-3/10'>
                        <RxCross2 onClick={()=> setPostType("A")}/>
                    </div>
                    <h1 className=' font-[inter] text-lg font-semibold'>New Story</h1>
                </Flex>
                <Flex className='gap-x-3 mt-1.5 mb-5 px-3'>
                    <Image className='rounded-full object-full object-center w-9.5 h-9.5' src={image ? image : defaultProfile} />
                    <Peragraph pText={name} className='font-[roboto] font-medium' />
                </Flex>
                <div className='my-3'>
                    {
                        type.includes('image')
                            ?
                            <Image className='w-8/10 h-40 mx-auto block object-cover object-center rounded-2xl' src={visuImg} />
                            : type.includes('video')
                                ? <video src={visuImg} className='w-8/10 h-40 mx-auto block object-cover object-center rounded-2xl' controls></video>
                                : ''
                    }
                </div>
                <Label id='story' labelText='Upload Image/Video' className='bg-blue-400 font-[roboto] text-white py-1.5 text-center rounded-md mx-auto block w-8/10' />
                <Input type='file' accept='image/*,video/*' className='hidden' id='story' onchange={(e) => {
                    collection(e)
                    setStoryImg(e.target.files[0])
                }} />
                <Button btnText='Post' className={`${disabled ? 'bg-blue-400' : 'bg-blue-100'}  py-1 px-5 text-white font-[inter] font-medium rounded-md block mx-auto my-2.5`} onclick={post} />
            </div>
        </>
    )
}

export default StoryPage
