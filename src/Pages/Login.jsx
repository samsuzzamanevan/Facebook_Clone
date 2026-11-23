import React, { useState } from 'react'
import Label from '../Layouts/Label'
import Input from '../Layouts/Input'
import Button from '../Layouts/Button'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../FirebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const auth = getAuth(app);
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  const navigate = useNavigate()

  let login = () => {
    console.log(email, password)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/home')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


  return (
    <>



      <div className='w-9/10 mx-auto py-6'>

        {/* Email */}

        <div className='my-2.5'>

          <Label labelText='Email Address : ' id='email' className='font-[inter] text-base block mb-1' />
          <Input type='text' inpText='Email' className='w-10/10 py-1 px-1 font-[inter] text-base outline-none border border-[rgba(44,44,44,0.2)] rounded-lg' id='email'
            onchange={(e) => setEmail(e.target.value)}
          />

        </div>


        {/* Password */}

        <div className='my-5.5'>

          <Label labelText='Password : ' id='password' className='font-[inter] text-base block mb-1' />
          <Input type='password' inpText='Password' className='w-10/10 py-1 px-1 font-[inter] text-base outline-none border border-[rgba(44,44,44,0.2)] rounded-lg' id='password'
            onchange={(e) => setPassword(e.target.value)}
          />

        </div>
        <Button className='py-1 px-5 bg-blue-500 font-[inter] text-base text-white rounded-md block ms-auto' btnText='Login' onclick={login} />

      </div>
      <p className='font-[inter] text-base p-8'>I have no account? <Link to={'/registration'}><span className='text-blue-500'>sign up</span></Link> </p>


    </>
  )
}

export default Login
