import React, { useState } from 'react'
import Select from 'react-select'

export default function ShortBy() {
    const [value, setValue] = useState(null);
    const options = [
        {value: "pricelowtohigh", label: "Price Low to High"},
        {value: "pricehightolow", label: "Price High to Low"}
    ]
    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          border: state.isFocused ? '2px solid #ccc' : '2px solid #ccc',
          boxShadow: state.isFocused ? 'none' : 'none',
          '&:hover': {
            border: '2px solid #ccc',
          },
        }),
        option: (provided, state) => ({
          ...provided,
          background: state.isFocused ? '#none' : 'white',
          color: state.isFocused ? 'black' : 'black',
        }),
      };
  return (
    <div className=" h-10 flex items-center justify-center">
        <div className='w-full'>
            <Select options={options} defaultValue={value} placeholder="Sort By" onChange={setValue} styles={customStyles} />
        </div>   
    </div>
  )
}
