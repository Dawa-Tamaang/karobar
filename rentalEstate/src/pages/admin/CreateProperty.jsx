import React, { useState, useRef, useMemo } from 'react';
import AdminMenu from './components/AdminMenu'
import City from './common/City'
import JoditEditor from 'jodit-react';
export default function CreateProperty() {
    const editor = useRef(null);
	const [content, setContent] = useState('');
  return (
    <div className='max-w-screen-xl mx-auto'>
        <div className='pr-5 py-5 flex flex-1 overflow-auto mb-10'>
            <div className='w-80 h-full border-r-2'>
            <AdminMenu/>
            </div>
            <div className='w-full pl-5'>
                <div className='py-5'>
                    <div className='text-black font-bold text-xl mb-3'>
                        Add Your Property
                    </div>
                </div>
                <form>
                    <div className='flex flex-wrap gap-5'>
                        <div className='w-full pb-3'>
                            <div className='font-semibold text-lg mb-2'>
                                What do you want to do?
                            </div>
                            <div className='flex gap-6 flex-wrap'>  
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='sale' name='propertyWhat' className='w-4 h-4' />
                                    <label for="sale" class='ml-2'>Sale</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='rent' name='propertyWhat' className='w-4 h-4' />
                                    <label for="rent" class='ml-2'>Rent</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='lease' name='propertyWhat' className='w-4 h-4' />
                                    <label for="lease" class='ml-2'>Lease</label>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                            <div className='font-semibold text-lg mb-2'>
                                Property Type
                            </div>
                            <div className='flex gap-6 flex-wrap'>  
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='residential' name='propertyType' className='w-4 h-4' />
                                    <label for="residential" class='ml-2'>Residential</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='commercial' name='propertyType' className='w-4 h-4' />
                                    <label for="commercial" class='ml-2'>Commercial</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='agricultural' name='propertyType' className='w-4 h-4' />
                                    <label for="agricultural" class='ml-2'>Agricultural</label>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3 '>
                            <div className='font-semibold text-lg mb-2'>
                                Property Category
                            </div>
                            <div className='flex gap-6 flex-wrap'>  
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='house' name='propertyType' className='w-4 h-4' />
                                    <label for="house" class='ml-2'>House</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='land' name='propertyType' className='w-4 h-4' />
                                    <label for="land" class='ml-2'>Land</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='flat' name='propertyType' className='w-4 h-4' />
                                    <label for="flat" class='ml-2'>Flat</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='apartment' name='propertyType' className='w-4 h-4' />
                                    <label for="apartment" class='ml-2'>Apartment</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='housing' name='propertyType' className='w-4 h-4' />
                                    <label for="housing" class='ml-2'>Housing</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='business' name='propertyType' className='w-4 h-4' />
                                    <label for="business" class='ml-2'>Business</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='officespace' name='propertyType' className='w-4 h-4' />
                                    <label for="officespace" class='ml-2'>Office Space</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='hostel' name='propertyType' className='w-4 h-4' />
                                    <label for="hostel" class='ml-2'>Hostel</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='room' name='propertyType' className='w-4 h-4' />
                                    <label for="room" class='ml-2'>Room</label>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                            <div className='font-semibold text-lg mb-2'>
                                Property Title
                            </div>
                            <div className='flex flex-wrap'>  
                                <div className='w-full'>
                                <input type="text" id="propertytitle" 
                                className='w-full text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Address
                                        </div>
                                        <div className='mb-2'>
                                            <input type="text" id="address" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' />
                                        </div>
                                    </div> 
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2 '>
                                        <div className='font-semibold text-lg mb-2 '>
                                            City
                                        </div>
                                        <div className='mb-2'>
                                            <City/>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Area
                                        </div>
                                        <div>
                                            <City/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Distance from Main Road
                                        </div>
                                        <div>
                                            <input type="text" id="dis_from_mr" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' />
                                        </div>
                                    </div> 
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Measurement Type
                                        </div>
                                        <div>
                                            <City/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Built Year
                                        </div>
                                        <div>
                                            <City/>
                                        </div>
                                    </div> 
                                </div>
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Total Floors
                                        </div>
                                        <div>
                                            <input type="text" id="total_floors" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' />
                                        </div>
                                    </div> 
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Measurement Type
                                        </div>
                                        <div>
                                            <City/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Total Property Area
                                        </div>
                                        <div>
                                            <input type="text" id="tot_prop_area" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' />
                                        </div>
                                    </div> 
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Area Measurement
                                        </div>
                                        <div>
                                            <City/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Build Up Area
                                        </div>
                                        <div>
                                            <input type="text" id="bui_up_area" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' />
                                        </div>
                                    </div> 
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Area Measurement
                                        </div>
                                        <div>
                                            <City/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Property Face
                                        </div>
                                        <div>
                                            <City/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            No. of bedrooms
                                        </div>
                                        <div>
                                            <input type="text" id="bedrooms" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' />
                                        </div>
                                    </div> 
                                </div>
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            No. of bathrooms
                                        </div>
                                        <div>
                                            <input type="text" id="bathrooms" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' />
                                        </div>
                                    </div> 
                                </div>
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            No. of Living Hall
                                        </div>
                                        <div>
                                            <input type="text" id="livinghall" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' />
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            No. of Kitchen
                                        </div>
                                        <div>
                                            <input type="text" id="kitchen" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' />
                                        </div>
                                    </div> 
                                </div>
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            No. of Parking
                                        </div>
                                        <div>
                                            <input type="text" id="parking" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' />
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                            <div className=" h-[50px] rounded-sm flex items-center">
                                <div className='items-start justify-between w-full gap-2'>
                                    <div className='font-semibold text-lg mb-2'>
                                        Amenities
                                    </div>
                                    <div className='grid grid-cols-4 gap-4'> 
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='electricitybackup' name='propertyType' className='w-4 h-4' />
                                            <label for="electricitybackup" class='ml-2'>Electricity Backup</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='maintenance' name='propertyType' className='w-4 h-4' />
                                            <label for="maintenance" class='ml-2'>Maintenance</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='playground' name='propertyType' className='w-4 h-4' />
                                            <label for="playground" class='ml-2'>Playground</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='storeroom' name='propertyType' className='w-4 h-4' />
                                            <label for="storeroom" class='ml-2'>Store Room</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='gym' name='propertyType' className='w-4 h-4' />
                                            <label for="gym" class='ml-2'>Gym</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='modularkitchen' name='propertyType' className='w-4 h-4' />
                                            <label for="modularkitchen" class='ml-2'>Modular Kitchen</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='airconditioner' name='propertyType' className='w-4 h-4' />
                                            <label for="airconditioner" class='ml-2'>Air Conditioner</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='garage' name='propertyType' className='w-4 h-4' />
                                            <label for="garage" class='ml-2'>Garage</label>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className='w-full py-5 mb-14'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Price
                                        </div>
                                        <div>
                                            <input type="text" id="price" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' />
                                        </div>
                                    </div> 
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Area Measurement
                                        </div>
                                        <div>
                                            <City/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full py-5'>
                            <div className=" h-[50px] rounded-sm flex items-center">
                                <div className='items-start justify-between w-full gap-2'>
                                    <div className='font-semibold text-lg mb-2'>
                                        Description
                                    </div>
                                    <div>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}// tabIndex of textarea
                                            onBlur={newContent => setContent(newContent)} 
                                        />
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}