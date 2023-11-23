import React, { useState } from 'react'
import {BsSuitHeart} from 'react-icons/bs'
import {IoBedOutline,IoLocationOutline} from 'react-icons/io5'
import {GiBathtub,GiHomeGarage} from 'react-icons/gi'
import {AiOutlineDoubleRight} from 'react-icons/ai'
// import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import image from '../assets/images/homeimages/image6.jpg'
import homesale from '../assets/images/CategorySection/Home_Sale.png'
import homerent from '../assets/images/CategorySection/Home_Rent.png'
import homelist from '../assets/images/CategorySection/Home_Listed.png'
import house1 from '../assets/images/products/house1.jpg'
import house2 from '../assets/images/products/house2.jpg'
import ListingItems from '../components/ListingItems'
import Select from 'react-select'
import { Link } from 'react-router-dom'

export default function Home() {
    const [value, setValue] = useState(null);
    const options = [
        {value: "CHOCOLATE", label: "Chocolate"},
        {value: "CHOCOLATE", label: "Chocolate"},
        {value: "CHOCOLATE", label: "Chocolate"},
        {value: "CHOCOLATE", label: "Chocolate"}
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
    <home >
        <div className="h-[500px] relative">
            <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-md relative"
            />
        <div className="absolute bottom-10 w-full ">
            <div className='w-11/12 xl:w-4/5 m-auto mb-16 '>
                <div className='text-white font-bold shadow-xl text-3xl lg:text-6xl mb-3'>
                    Looking For A Property? <br />
                </div>
                <div className='text-white shadow-xl text-xs sm:text-sm'>
                    Search your dream home on Nepal’s largest property marketplace
                </div>
            </div>
                <div className=" bg-white w-11/12 xl:w-4/5 m-auto grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2xl md:space-x-5 md:rounded-md">
                    <div className="h-10 flex items-center justify-center w-1/4 ">
                        <input type="text" placeholder="City or District name here" className="w-full h-full pl-2 border-solid border-2 border-[#ccc] rounded-sm bg-transparent focus:outline-none "/>
                    </div>
                    <div className='w-full h-full flex gap-3'>
                        <div className=" h-10 flex items-center justify-center w-1/4 ">
                            <div className='w-full'>
                                <Select options={options} defaultValue={value} placeholder="Category" onChange={setValue} styles={customStyles}/>
                            </div>   
                        </div>
                        <div className=" h-10 flex items-center justify-center w-1/4 ">
                            <div className='w-full'>
                                <Select options={options} defaultValue={value} placeholder="Category" onChange={setValue} styles={customStyles} />
                            </div>   
                        </div>
                        <div className=" h-10 flex items-center justify-center w-1/4 ">
                            <div className='w-full'>
                                <Select options={options} defaultValue={value} placeholder="Category" onChange={setValue} styles={customStyles}/>
                            </div>   
                        </div>
                        <div className='h-10 flex items-center justify-center w-1/4'>
                            <button className="bg-yellow-400 w-full py-2 mt-5 md:mt-0 rounded-sm">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* listing our services for list, sale and rent start*/}
        <div className='max-w-screen-xl mx-auto py-10'>
            <div className='flex justify-center'>
                <div className='deals grid gap-36 2xl:grid-cols-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10'>
                    <div className=' deal h-[350px]'>
                        <div className='bg-white overflow-hidden items-center rounded-lg w-full sm:w-[330px]'>
                            <div className='relativex h-48 border-4 border-yellow-400 rounded-lg'>
                                <img
                                src={homesale}
                                alt='listing cover'
                                className='w-full h-full object-cover rounded-t-xl'
                                />
                            </div>
                            <div className='p-3 flex flex-col gap-2 w-full items-center'>
                            <p className='font-bold truncate text-lg text-black'>
                                Buy a home
                            </p>
                            <p className='text-sm text-gray-600 line-clamp-3 text-center'>
                                with over 200 listing for sale available, xyz estate can match you with a property you will want 
                            </p>
                            <Link to='/for-buy'>
                                <button className='bg-yellow-400 w-50 my-3 sm:w-80 text-white p-3 rounded-lg uppercase hover:opacity-95'>
                                    Find a Home
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className=' deal h-[350px]'>
                        <div className='bg-white overflow-hidden items-center rounded-lg w-full sm:w-[330px]'>
                            <div className='relative h-48 border-4 border-yellow-400 rounded-lg'>
                                <img
                                src={homerent}
                                alt='listing cover'
                                className='w-full h-full object-cover rounded-t-xl'
                                />
                            </div>
                            <div className='p-3 flex flex-col gap-2 w-full items-center'>
                            <p className='font-bold truncate text-lg text-black'>
                                Buy a Rent
                            </p>
                            <p className='text-sm text-gray-600 line-clamp-3 text-center'>
                                with over 200 listing for sale available, xyz estate can match you with a property you will want 
                            </p>
                            <Link to='/for-rent'>
                                <button className='bg-yellow-400 w-50 my-3 sm:w-80 text-white p-3 rounded-lg uppercase hover:opacity-95'>
                                    Find a Rent
                                </button>
                            </Link>
                            
                            </div>
                        </div>
                    </div>
                    <div className='deal h-[350px]'>
                        <div className='bg-white overflow-hidden rounded-lg w-full sm:w-[330px]'>
                            <div className='relative h-48  border-4 border-yellow-400 rounded-lg'>
                                <img
                                src={homelist}
                                alt='listing cover'
                                className='w-full h-full object-cover rounded-t-xl'
                                />
                            </div>
                            <div className='p-3 flex flex-col gap-2 w-full items-center'>
                            <p className='font-bold truncate text-lg text-black'>
                                Add Your Listing
                            </p>
                            <p className='text-sm text-gray-600 line-clamp-3 text-center'>
                                Reach the largest audience of home shoppers with free xyz estate listing or select best 
                            </p>
                            <Link to='/create-property'>
                                <button className='bg-yellow-400 w-50 my-3 sm:w-80 text-white p-3 rounded-lg uppercase hover:opacity-95'>
                                    Post Property free
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
        {/* listing our services for list, sale and rent end*/}
        {/* Create Properties to Buy or Rent start*/}
        {/* <CategorySlider/> */}

        {/* Create Properties to Buy or Rent end*/}

        {/* listing our services for list, sale and rent start*/}
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl font-bold'>Premium Properties in Nepal</h1>
                    <p className='text-base font-normal '>Browse beautiful properties with all the comforts of home, plus more</p>
                </div>
                <div className='flex justify-center py-5'>
                    <button className='bg-yellow-200 px-5 py-2 rounded-md text-xl flex items-center space-x-2'><span>View More</span> <AiOutlineDoubleRight/></button>
                </div>
            </div>

            <div className="deals grid 2xl:grid-cols-3 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
                <ListingItems/>
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
                <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                    <div className='relative h-[60%]'>
                    <img src={house2} alt="" className='w-full h-full object-cover rounded-t-xl'/>
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
                    <h1 className='text-2xl font-semibold'>$70,000</h1>
                    <div className='flex items-center space-x-2'>
                    <IoLocationOutline/>
                    <p className='text-sm text-gray-600'>Petra,Spain</p>
                    </div>
                    </div>

                </div>
            </div>
        </div>
        {/* listing our services for list, sale and rent end*/}

    </home>
  )
}
