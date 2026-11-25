import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useEffect, useState } from 'react'
import Input from '../Layouts/Input'
import Label from '../Layouts/Label'
import Flex from '../Layouts/Flex'
import Button from '../Layouts/Button'
import app from '../FirebaseConfig'
import { updateProfile, reload } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Oval } from "react-loader-spinner";
import defaultProfile from '../assets/EmptyProfile.avif'


function Registration() {


    const navigate = useNavigate()

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [cpassword, setCpassword] = useState('')
    let [image, setImage] = useState(null)
    let [loader, setLoader] = useState(false)
    const auth = getAuth(app);
    const db = getDatabase(app);


    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [cpasswordError, setCPasswordError] = useState('')


    let signUp = () => {


        if (!name) {
            setNameError('please Write your Name')
        }


        if (!email) {
            setEmailError('please Write your Email')
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailError('Please Enter a Valid Email')
        }

        if (!password) {
            setPasswordError('please Write password')
        }
        else if (!/(?=.*[a-z])/.test(password) || !/(?=.*[A-Z])/.test(password) || password.length < 6) {
            setPasswordError('Password have to be at least 6 letters , 1 uppercase and 1 lowercase must')
        }
        if (!cpassword) {
            setCPasswordError('please Confirm Your password')
        }
        else if (password !== cpassword) {
            setCPasswordError('Wrong password')
        }




        if (name && email && password && cpassword && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && /(?=.*[a-z])/.test(password) && /(?=.*[A-Z])/.test(password) && password === cpassword) {
            setLoader(true)
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed up
                   
                    let profileImage = image || defaultProfile
                    const user = userCredential.user
                    try {

                        await sendEmailVerification(user);


                        setLoader(false)
                        toast.success('Verification email sent! Please verify your email.')


                        // ...
                        let send = await updateProfile(user, {
                            displayName: name,
                            photoURL: profileImage
                        })


                        set(ref(db, `users/${user.uid}`), {
                            UserName: auth.currentUser.displayName,
                            UserImage: auth.currentUser.photoURL,
                            UserId: user.uid
                        })


                        let emailverification = async () => {
                            await reload(auth.currentUser)
                            if (auth.currentUser.emailVerified) {

                                toast.success('Registration Successful')
                                setName('')
                                setEmail('')
                                setPassword('')
                                setCpassword('')
                                navigate('/home')
                                clearInterval(stop)

                            }

                        }

                        let stop = setInterval(() => {

                            emailverification()

                        }, 3000);










                    } catch (error) {
                        setLoader(false)
                        toast.error(error)
                    }



                })

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage)
                    setLoader(false)
                    // ..
                });

        }


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

            <ToastContainer />
            <div className='py-10 w-10/10'>


                <Flex className='flex-col gap-y-9 justify-center mx-auto'>

                    <div>
                        <label htmlFor="image">
                            <div className="h-30 w-30 rounded-full bg-amber-200">
                                <img src={image ? image : defaultProfile} alt="" className="h-full w-full rounded-full object-top object-cover" />
                            </div>
                        </label>
                        <Input type="file" className="hidden" id='image' onchange={(e) => {
                            e.target.files[0]
                            collectImg(e)

                        }} />
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

                    <div className="w-8/11">

                        <Label labelText='Password : ' id='password' className={`font-[inter] text-base block mb-1 ${passwordError == '' ? '' : ' text-red-400'}`} />
                        <Input type='password' inpText='Password' className={`w-10/10 py-1 px-1 font-[inter] text-base outline-none border  rounded-lg ${passwordError == '' ? 'border-[rgba(44,44,44,0.2)]' : 'text-red-600'}`} id='password'
                            onchange={(e) => {
                                setPassword(e.target.value)
                                setPasswordError('')
                            }} value={password} />
                        <p className="text-red-600 w-8/10">{passwordError}</p>

                    </div>



                    {/* Confirm Password */}

                    <div>

                        <Label labelText='Confirm Password : ' id='cpassword' className={`font-[inter] text-base block mb-1 ${cpasswordError == '' ? '' : ' text-red-400'}`} />
                        <Input type='password' inpText='Confirm Password' className={`w-10/10 py-1 px-1 font-[inter] text-base outline-none border  rounded-lg ${cpasswordError == '' ? 'border-[rgba(44,44,44,0.2)]' : 'text-red-600'}`} id='cpassword'
                            onchange={(e) => {
                                setCpassword(e.target.value)
                                setCPasswordError('')
                            }} value={cpassword} />
                        <p className="text-red-600">{cpasswordError}</p>
                    </div>
                    {
                        loader
                            ?
                            <Oval
                                visible={true}
                                height="30"
                                width="30"
                                color="#4fa94d"
                                ariaLabel="oval-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                            : ''
                    }

                    <Button btnText='Sign Up' className='py-1 rounded-md px-4 bg-blue-400 font-[inter] text-base text-white block mx-auto' onclick={signUp} />
                </Flex>
            </div>



        </>
    )
}

export default Registration



// 
