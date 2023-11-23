// import { Link } from "react-router-dom"
import {BsSuitHeart} from 'react-icons/bs'
import {IoBedOutline,IoLocationOutline} from 'react-icons/io5'
import {GiBathtub,GiHomeGarage} from 'react-icons/gi'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import house1 from '../assets/images/products/house1.jpg'

export default function ListingItems() {
  return (
    <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
        <div className='relative h-[60%]'>
        <img src={house1} alt="" className='w-full h-full object-cover rounded-t-xl'/>
        <div className='absolute top-0 right-0 p-4'>
            <BsSuitHeart size={"1.5rem"} className="text-white"/>
        </div>
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
  )
}
