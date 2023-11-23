import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function GoogleAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try{
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: result.user.displayName, email: result.user.email, photo: result.user.photoURL}),
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/profile');
        } catch (error) {
            console.log('could not sign in with google',error);
        }
    }
  return (
    <div>
        <div className='w-full my-2 font-semibold bg-white border-2 border-yellow-400 rounded-md p-4 text-center flex items-center gap-2 justify-center'>
            
            <button onClick={handleGoogleClick} type='button' className='flex items-center gap-2 justify-center'>
            <div className=''><FcGoogle/></div> <h1 className='text-yellow-400'> Sign Up With Google</h1>
            </button>
        </div>
</div>
  )
}
