import React from 'react'
import AdminMenu from './components/AdminMenu'
export default function Properties() {
  return (
    <div className='max-w-screen-xl mx-auto'>
        <div className='pr-5 py-5 flex flex-1 overflow-auto'>
            <div className='w-80 h-full border-r-2'>
            <AdminMenu/>
            </div>
            <div className='w-full pl-5'>
                <div className='py-5'>
                    <div className='text-black font-bold text-xl mb-3'>
                        Your Property
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
