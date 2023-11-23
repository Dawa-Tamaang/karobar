import React from 'react'
import profile from '../assets/images/profile/profile.jpg'
import { MdOutlineAddIcCall, MdEmail } from "react-icons/md";
export default function Agencies() {
  return (
    <div className='max-w-screen-xl mx-auto py-5'>
      <h1 className='font-bold text-4xl text-[#262626]'>Find Agencies and Agents</h1>
      <div className="deals grid 2xl:grid-cols-4 gap-14 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
        <div className="deal h-[400px] bg-white drop-shadow-2xl rounded-xl">
            <div className='relative h-[55%]'>
                <img src={profile} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            </div>
            <div className='p-4 space-y-2'>
              <h1 className='text-2xl font-semibold'>Dawa Tamang</h1>
              <div className='flex flex-row gap-2'>
                <p>Total Properties: </p> <span>20</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <MdOutlineAddIcCall /> <span> 9813000013</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <MdEmail /> <span>support@gmail.com </span>
              </div>
            </div>
        </div>
        <div className="deal h-[400px] bg-white drop-shadow-2xl rounded-xl">
            <div className='relative h-[55%]'>
                <img src={profile} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            </div>
            <div className='p-4 space-y-2'>
              <h1 className='text-2xl font-semibold'>Dawa Tamang</h1>
              <div className='flex flex-row gap-2'>
                <p>Total Properties: </p> <span>20</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <MdOutlineAddIcCall /> <span> 9813000013</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <MdEmail /> <span>support@gmail.com </span>
              </div>
            </div>
        </div>
        <div className="deal h-[400px] bg-white drop-shadow-2xl rounded-xl">
            <div className='relative h-[55%]'>
                <img src={profile} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            </div>
            <div className='p-4 space-y-2'>
              <h1 className='text-2xl font-semibold'>Dawa Tamang</h1>
              <div className='flex flex-row gap-2'>
                <p>Total Properties: </p> <span>20</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <MdOutlineAddIcCall /> <span> 9813000013</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <MdEmail /> <span>support@gmail.com </span>
              </div>
            </div>
        </div>
        <div className="deal h-[400px] bg-white drop-shadow-2xl rounded-xl">
            <div className='relative h-[55%]'>
                <img src={profile} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            </div>
            <div className='p-4 space-y-2'>
              <h1 className='text-2xl font-semibold'>Dawa Tamang</h1>
              <div className='flex flex-row gap-2'>
                <p>Total Properties: </p> <span>20</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <MdOutlineAddIcCall /> <span> 9813000013</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <MdEmail /> <span>support@gmail.com </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
