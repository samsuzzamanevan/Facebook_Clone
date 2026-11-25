import React, { useState } from 'react'
import Label from '../Layouts/Label'
import Input from '../Layouts/Input'
import Button from '../Layouts/Button'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../FirebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner';



function Login() {

 
  const auth = getAuth(app);
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [loader,setLoader] = useState(false)
  const navigate = useNavigate()

  let login = () => {

    setLoader(true)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast.success('Login Successful')
        setLoader(false)

        setTimeout(() => {

          navigate('/home')
        }, 1000);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoader(false)
        toast.error('Invalid Password or Email')

      });
  }




  return (
    <>


      <ToastContainer />

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
          :''
        }

        <Button className='py-1 px-5 bg-blue-500 font-[inter] text-base text-white rounded-md block ms-auto' btnText='Login' onclick={login} />

      </div>
      <p className='font-[inter] text-base p-8'>I have no account? <Link to={'/registration'}><span className='text-blue-500'>sign up</span></Link> </p>


    </>
  )
}

export default Login
