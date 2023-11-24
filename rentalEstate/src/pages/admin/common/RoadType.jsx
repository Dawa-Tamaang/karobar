import React, { useState } from 'react';
import Select from 'react-select';

export default function RoadType() {
    const [value, setValue] = useState(null);

    const options = [
      { value: 'soilstablized ', label: 'Soil Stabilized' },
      { value: 'gravelled', label: 'Gravelled' },
      { value: 'alley', label: 'Alley' },
      { value: 'paved ', label: 'Paved' },
      { value: 'backtopped ', label: 'Backtopped' },
    ];
  
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
  
    const handleSelectChange = (selectedOption) => {
      setValue(selectedOption);
      onSelectChange(selectedOption); // Pass the selected value to the parent component
    };
  
    return (
      <div className="flex items-center justify-center">
        <div className="w-full">
          <Select
            options={options}
            value={value}
            placeholder="Road Type"
            onChange={handleSelectChange}
            styles={customStyles}
          />
        </div>
      </div>
    );
  }
