import React from 'react'
import {IoBedOutline,IoLocationOutline} from 'react-icons/io5'
import {GiBathtub,GiHomeGarage} from 'react-icons/gi'
import house1 from '../../assets/images/products/house1.jpg'
import house2 from '../../assets/images/products/house2.jpg'
import house3 from '../../assets/images/products/house3.jpg'
export default function ListPanel() {
  return (
    <div className="deals grid 2xl:grid-cols-3 gap-8 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
            <div className='relative h-[60%]'>
                <img src={house1} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            </div>
            <div className='p-4 space-y-4'>
            <div className='flex space-x-5 items-center'>
                <div className='flex items-center space-x-1'>
                    <IoBedOutline/>
                    <p className='text-sm text-gray-400'>5 bed</p>
                </div>
                <div className='flex items-center space-x-1'>
                <GiBathtub/>
                <p className='text-sm text-gray-400'>3 bat</p>
                </div>
                <div className='flex items-center space-x-1'>
                <GiHomeGarage/>
                    <p className='text-sm text-gray-400'>1 gar</p>
                </div>
            </div>
            <h1 className='text-2xl font-semibold'>$110,000</h1>
            <div className='flex items-center space-x-2'>
            <IoLocationOutline/>
            <p className='text-sm text-gray-600'>Kissimmee.Florida US</p>
            </div>
            </div>

        </div>
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
            <div className='relative h-[60%]'>
            <img src={house2} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            </div>
            <div className='p-4 space-y-4'>
            <div className='flex space-x-5 items-center'>
                <div className='flex items-center space-x-1'>
                    <IoBedOutline/>
                    <p className='text-sm text-gray-400'>5 bed</p>
                </div>
                <div className='flex items-center space-x-1'>
                <GiBathtub/>
                <p className='text-sm text-gray-400'>3 bat</p>
                </div>
                <div className='flex items-center space-x-1'>
                <GiHomeGarage/>
                    <p className='text-sm text-gray-400'>1 gar</p>
                </div>
            </div>
            <h1 className='text-2xl font-semibold'>$70,000</h1>
            <div className='flex items-center space-x-2'>
            <IoLocationOutline/>
            <p className='text-sm text-gray-600'>Petra,Spain</p>
            </div>
            </div>

        </div>
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
            <div className='relative h-[60%]'>
            <img src={house3} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            </div>
            <div className='p-4 space-y-4'>
            <div className='flex space-x-5 items-center'>
                <div className='flex items-center space-x-1'>
                    <IoBedOutline/>
                    <p className='text-sm text-gray-400'>5 bed</p>
                </div>
                <div className='flex items-center space-x-1'>
                <GiBathtub/>
                <p className='text-sm text-gray-400'>3 bat</p>
                </div>
            
            </div>
            <h1 className='text-2xl font-semibold'>$42,000</h1>
            <div className='flex items-center space-x-2'>
            <IoLocationOutline/>
            <p className='text-sm text-gray-600'>Ia Molas,Italy</p>
            </div>
            </div>

        </div>
    </div>
  )
}
