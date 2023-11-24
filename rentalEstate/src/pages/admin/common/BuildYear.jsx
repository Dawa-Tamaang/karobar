import React, { useState } from 'react';
import Select from 'react-select';

export default function BuildYear({ onSelectChange }) {
  const [value, setValue] = useState(null);

  const options = [
    { value: '2072 ', label: '2070' },
    { value: '2072', label: '2071' },
    { value: '2072', label: '2072' },
    { value: '2073 ', label: '2073' },
    { value: '2074', label: '2074' },
    { value: '2075', label: '2075' },
    { value: '2076 ', label: '2076' },
    { value: '2077', label: '2077' },
    { value: '2078', label: '2078' },
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
          placeholder="Build Year"
          onChange={handleSelectChange}
          styles={customStyles}
        />
      </div>
    </div>
  );
}
