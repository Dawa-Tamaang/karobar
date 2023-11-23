import React from 'react'
import AdminMenu from './components/AdminMenu'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function DashBoard() {
  return (
    <div className='max-w-screen-xl mx-auto h-full'>
        <div className='pr-5 py-5 flex flex-1 overflow-auto'>
            <div className='w-80 h-full border-r-2'>
            <AdminMenu/>
            </div>
            <div className='w-full pl-5'>
                <div className='py-5'>
                    <div className='text-black font-bold text-xl mb-3'>
                        Dashboard
                    </div>
                </div>
                <div className="deals grid 2xl:grid-cols-3 gap-8 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <Link to='/properties'>
                        <div className="deal h-[50px] border-2 border-yellow-400 rounded-sm flex items-center">
                        
                            <div className='flex items-center justify-between px-4 w-full'>
                                <div className='font-semibold text-[20px]'>
                                    Properties
                                </div>
                                <div>
                                    <FaChevronRight/>
                                </div>
                            </div>
                        
                        </div>
                    </Link>
                    <Link to='/create-property'>
                        <div className="deal h-[50px] border-2 border-yellow-400 rounded-sm flex items-center">
                            <div className='flex items-center justify-between px-4 w-full'>
                                <div className='font-semibold text-[20px]'>
                                    Add Properties
                                </div>
                                <div>
                                    <FaChevronRight/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/profile'>
                        <div className="deal h-[50px] border-2 border-yellow-400 rounded-sm flex items-center">
                            <div className='flex items-center justify-between px-4 w-full'>
                                <div className='font-semibold text-[20px]'>
                                    Profile
                                </div>
                                <div>
                                    <FaChevronRight/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
