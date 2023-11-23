import React from 'react'
import { Link } from 'react-router-dom';  

export default function AdminMenu() {
  return (
    <div className='max-w-screen-xl mx-auto'>
        <div className='font-bold text-xl py-5'>
            User Dashboard
        </div>
        <ul className='text-lg gap-5 px-2'>
            <Link to='/dashboard'>
                <li className='hover:text-yellow-400'>Dashboard</li>
            </Link>
            <Link to='/properties'>
                <li className='hover:text-yellow-400'>Properties</li>
            </Link>
            <Link to='/create-property'>
                <li className='hover:text-yellow-400'>Add Property</li>
            </Link>
            <Link to='/profile'>
                <li className='hover:text-yellow-400'>Profile</li>
            </Link>
        </ul>
    </div>
  )
}
