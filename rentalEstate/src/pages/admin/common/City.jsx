import React, { useState } from 'react'
import Select from 'react-select'

export default function City() {
    const [value, setValue] = useState(null);
    const options = [
        {value: "kathmandu", label: "Kathmandu"},
        {value: "bhaktapur", label: "Bhaktapur"},
        {value: "lalitpur", label: "Lalitpur"}
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
        container: (provided) => ({
            ...provided,
            height: '40px', // Adjust the height as needed
          }),
      };
  return (
    <div className="flex items-center justify-center">
        <div className='w-full'>
            <Select options={options} defaultValue={value} placeholder="city" onChange={setValue} styles={customStyles} />
        </div>   
    </div>
  )
}
