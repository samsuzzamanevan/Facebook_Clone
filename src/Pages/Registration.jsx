import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import Input from '../Layouts/Input'
import Label from '../Layouts/Label'
import Flex from '../Layouts/Flex'
import Button from '../Layouts/Button'
import app from '../FirebaseConfig'
import { updateProfile } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

function Registration() {


    const navigate = useNavigate()

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [cpassword, setCpassword] = useState('')
    let [image, setImage] = useState(null)
    const auth = getAuth(app);
    const db = getDatabase(app);


    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const [cpasswordError,setCPasswordError] = useState('')

    let signUp = () => {


        if (!name) {
            setNameError('please Write your Name')
        }

        if (!email) {
            setEmailError('please Write your Email')
        }

        if(!password){
            setPasswordError('please Write password')
        }
        if(!cpassword){
            setCPasswordError('please Confirm Your password')
        }



        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                let send = await updateProfile(user, {
                    displayName: name,
                    photoURL: image
                })


                set(push(ref(db, 'users/')), {
                    UserName: auth.currentUser.displayName,
                    UserImage: auth.currentUser.photoURL
                })

                setName('')
                setEmail('')
                setPassword('')
                setCpassword('')

                navigate('/home')

            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });


    }


    let collectImg = (e) => {
        let formdata = new FormData()
        formdata.append('file', e.target.files[0])
        formdata.append('upload_preset', 'Registration')
        fetch('https://api.cloudinary.com/v1_1/z7dn9zdp/image/upload', {
            method: 'POST',
            body: formdata
        })
            .then(res => res.json())
            .then(res => setImage(res.secure_url))

            .catch((error) => {
                console.log('asdjf')
            })
    }






    return (
        <>

            <div className='py-10 w-10/10'>


                <Flex className='flex-col gap-y-9 justify-center mx-auto'>

                    <div>
                        <label htmlFor="image">
                            <div className="h-30 w-30 rounded-full bg-amber-200">
                                <img src={image} alt="" className="h-full w-full rounded-full object-top object-cover" />
                            </div>
                        </label>
                        <Input type="file" className="hidden" id='image' onchange={(e) => collectImg(e)} />
                        <Label labelText='Upload a Photo' id='image' className='font-[inter]' />
                    </div>

                    {/* Name */}
                    <div>

                        <Label labelText='Name : ' id='name' className={`font-[inter] text-base block mb-1 ${nameError == '' ? '' : ' text-red-400'}`} />
                        <Input type='text' inpText='Write Your Name' className={`w-10/10 py-1 px-1 font-[inter] text-base outline-none border  rounded-lg ${nameError == '' ? 'border-[rgba(44,44,44,0.2)]' : 'border-red-500 text-red-600'}`} id='name'
                            onchange={(e) => {
                                setName(e.target.value)
                                setNameError('')
                            }} value={name} />
                        <p className="text-red-600">{nameError}</p>

                    </div>

                    {/* Email */}

                    <div>

                        <Label labelText='Email Address : ' id='email' className={`font-[inter] text-base block mb-1 ${emailError == '' ? '' : ' text-red-400'}`} />
                        <Input type='text' inpText='Email' className={`w-10/10 py-1 px-1 font-[inter] text-base outline-none border  rounded-lg ${emailError == '' ? 'border-[rgba(44,44,44,0.2)]' : 'border-red-500 text-red-600'}`} id='email'
                            onchange={(e) => {
                                setEmail(e.target.value)
                                setEmailError('')
                            }} value={email} />
                                <p className="text-red-600">{emailError}</p>
                    </div>


                    {/* Password */}

                    <div>

                        <Label labelText='Password : ' id='password' className={`font-[inter] text-base block mb-1 ${passwordError == '' ? '' : ' text-red-400'}`} />
                        <Input type='password' inpText='Password' className={`w-10/10 py-1 px-1 font-[inter] text-base outline-none border  rounded-lg ${passwordError == '' ? 'border-[rgba(44,44,44,0.2)]' : 'border-red-500 text-red-600'}`} id='password'
                            onchange={(e) => {
                                setPassword(e.target.value)
                                setPasswordError('')
                                }} value={password} />
                                <p className="text-red-600">{passwordError}</p>

                    </div>



                    {/* Confirm Password */}

                    <div>

                        <Label labelText='Confirm Password : ' id='cpassword' className={`font-[inter] text-base block mb-1 ${cpasswordError == '' ? '' : ' text-red-400'}`}/>
                        <Input type='password' inpText='Confirm Password' className={`w-10/10 py-1 px-1 font-[inter] text-base outline-none border  rounded-lg ${cpasswordError == '' ? 'border-[rgba(44,44,44,0.2)]' : 'text-red-600'}`} id='cpassword'
                            onchange={(e) => {
                                setCpassword(e.target.value)
                                setCPasswordError('')
                                }} value={cpassword} />
                                <p className="text-red-600">{cpasswordError}</p>
                    </div>

                    <Button btnText='Sign Up' className='py-1 rounded-md px-4 bg-blue-400 font-[inter] text-base text-white block mx-auto' onclick={signUp} />
                </Flex>
            </div>



        </>
    )
}

export default Registration
