import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const FilterIteams = ({open, toggle, title, dis}) => {
  return (
    <div className='pt-[10px]'>
        <div className='bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer ' onClick={toggle}>
            <p className='text-[22px] font-semibold'>{title}</p>
            <div className='text-[30px]'>
                {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
        </div>
        <Collapse isOpened = {open}>
            <div className='bg-white px-[50px] pb-[20px]'>
                {dis}
            </div>
        </Collapse>
    </div>
  )
};

export default FilterIteams;
