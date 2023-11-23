import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess, signInFailure } from '../redux/user/userSlice';

import Cover_Image from '../assets/images/coversignin.jpg'
import { FcGoogle } from "react-icons/fc";
import GoogleAuth from '../components/GoogleAuth';
export default function LoginPage() {
    const [formData, setFormData] = useState({});
    const { loading, error } = useSelector((state) =>state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) =>{
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value,
            }
        )
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            dispatch(signInStart());
            const res = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.success === false){
                dispatch(signInFailure(data.message));
                return;
            }
            dispatch(signInSuccess(data));
            navigate('/');
            }catch(error){
                dispatch(signInFailure(error.message));
            }

    };
  return (
    <div className='max-w-screen-xl mx-auto flex items-start py-12'>
        <div className='relative w-1/2 h-[800px] flex flex-col'>  
            <div className='absolute inset-0 bg-black opacity-20 rounded-xl'></div>
            <img src={Cover_Image}  className="absolute w-full h-full object-cover mix-blend-overlay rounded-xl" alt="" />
            <div className='top-[20%] left-[10%] flex flex-col h-full items-start justify-start relative'>
                <h1 className='text-4xl text-white font-bold my-4'>Turn Your Ideas into reality</h1>
                <p className='text-xl text-white font-normal'>Start for free and get exciting offers from the community</p>
            </div>
        </div>
        <div className='w-1/2 h-full bg-white flex flex-col items-center gap-5 p-10  justify-between'>
            <h1 className='text-xl text-yellow-400 font-semibold'>Rental Estate</h1>
            <div className='w-full flex flex-col gap-3 max-w-[550px]'>
                <form onSubmit={handleSubmit}>
                    <div className='w-full flex flex-col items-center mb-2'>
                        <h3 className='text-3xl font-semibold mb-4'>log In</h3>
                        <p className='tex-base mb-2'>Welcome back! Please enter your details.</p>
                    </div>
                    <div className='w-full flex flex-col'>
                        <input type="email" id="email" placeholder='Enter Your Email' onChange={handleChange}
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                        <input type="password" id="password" placeholder='Enter Your Password' onChange={handleChange}
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex item-center'>
                            <input type="checkbox" className='w-4 h-4 mr-2' />
                            <p className='text-sm'> Remember Me</p>
                        </div>
                        <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password ?</p>
                    </div>
                    <div className='w-full flex flex-col gap-3 my-4'>
                        <button disabled={loading} className='w-full text-white bg-yellow-400 rounded-md p-4 text-center flex items-center justify-center'>{loading ? 'loading...' : 'Sign In'}</button>
                    </div>
                </form>
                <div className='w-full flex flex-col gap-3 my-4'>
                    <Link to='/sign-up'>
                        <button className='w-full text-yellow-400 bg-white border-2 border-yellow-400 rounded-md p-4 text-center flex items-center justify-center'>Sign Up</button>
                    </Link>
                    
                </div>
                <div className='w-full flex items-center justify-center relative py-2'>
                    <div className='w-full h-[1px] bg-black'></div>
                    <p className='text-lg absolute text-black/80 bg-white'>or</p>
                </div>
                <GoogleAuth/>
            </div>
            <div className='w-full flex item-center justify-center'>
                <p className='text-sm font-normal text-black'>Don't have a account? 
                <Link to='/sign-up'>
                    <span className='font-semibold text-yellow-400 underline underline-offset-2 cursor-pointer'>Sign up for Free </span>
                </Link>
                    
                </p>
            </div>
        </div>  
    </div>
  )
}
