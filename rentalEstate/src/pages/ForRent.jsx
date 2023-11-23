import React from 'react'
import FilterPannel from '../components/filterpannel/FilterPannel'
import ListPanel from '../components/listpanel/ListPanel'
import ShortBy from '../components/common/ShortBy'

export default function ForRent() {
  return (
    <div className='w-full'>
      <div className='px-5 py-5'>
        <div className='text-black font-bold text-xl lg:text-4xl mb-3'>
          Properties in Nepal <br />
        </div>
        <div className='text-black text-xs sm:text-sm'>
          Find properties anywhere in Nepal
        </div>
      </div>
      <div className='px-5 py-5 flex flex-1 overflow-auto'>
        <div className='w-80 border-r-2'>
          <FilterPannel/>
        </div>
        <div className='w-full pl-5'>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-[#262626] text-[37px] font-bold'>
              Properties For Rent
            </h1>
            <div className='w-[280px]'>
              <ShortBy/>
            </div>
          </div>        
          <ListPanel/>
        </div>
      </div>
    </div>
  )
}
