import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';  
import user from '../assets/user.png'  
// import ReactModel from 'react-model';

export default function Header() {
    const { currentUser } = useSelector(state => state.user)
    const [visible,setvisible] = useState(false);
  return (
    <header>
        <nav className="max-w-screen-xl mx-auto flex items-center justify-between py-5">
            <Link to='/'>
                <h1 className="text-xl md:text-2xl font-bold">karobar</h1>
            </Link>
            <div className='flex gap-5 flex-wrap text-center'>
                <ul className="flex items-center space-x-5 text-xs md:text-base">
                    <Link to='/for-buy'>
                        <li className='hover:text-yellow-400'>Buy</li>
                    </Link>
                    <Link to='/for-rent'>
                        <li className='hover:text-yellow-400'>Rent</li>
                    </Link>
                    <Link to='/agencies'>
                        <li className='hover:text-yellow-400'>Agencies</li>
                    </Link>
                    <Link to='/for-nrn'>
                        <li className='hover:text-yellow-400 font-medium'>For NRNs</li>
                    </Link>
                </ul>
                <Link to={'/create-property'}>
                    <button className="bg-yellow-400 hover:bg-yellow-600 text-white px-5 py-2 rounded-sm text-xs md:text-base">Post Property</button>                 
                </Link> 
                <Link to={'/profile'}>
                    { currentUser ? (
                        <img
                        className='rounded-full h-7 w-7 mt-1 object-cover'
                        src={currentUser.avatar}
                        alt='profile'
                      />
                    ) : (
                        <button className="border border-solid border-gray-300 px-5 py-2 rounded-sm text-xs md:text-base">Login / Signup</button>
                    )}
                </Link>   
            </div>  
        </nav>

    </header>
  )
}
