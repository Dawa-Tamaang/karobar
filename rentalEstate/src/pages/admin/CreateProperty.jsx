import React, { useState } from 'react';
import AdminMenu from './components/AdminMenu'
import City from './common/City'
import Area from './common/Area';
import JoditEditor from 'jodit-react';
import DistanceFMR from './common/DistanceFMR'
import BuildYear from './common/BuildYear'
import Furnishing from './common/Furnishing'
import AreaMeasurement from './common/AreaMeasurement';
import RoadType from './common/RoadType';
import RoadMType from './common/RoadMType';
import BuildAreaMea from './common/BuildAreaMea';
import PropertyFace from './common/PropertyFace';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
  } from 'firebase/storage';
  import { app } from '../../firebase';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import PriceLabel from './common/PriceLabel';
export default function CreateProperty() {
    const { currentUser } = useSelector((state) => state.user);
    
    const navigate = useNavigate();
	const [content, setContent] = useState('');
    const [value, setValue] = useState('');
    const [files, setFiles] = useState([]);
    const [ imageUploadError, setImageUploadError ] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedArea, setSelectedArea] = useState(null)
    const [SelectedRoadmeasure, setSelectedRoadmeasure] = useState(null)
    const [SelectedRoadtype, setSelectedRoadtype] = useState(null)
    const [SelectedBuildYear, setSelectedBuildYear] = useState(null)
    const [SelectedFloorFurnishing, setSelectedFloorFurnishing] = useState(null)
    const [SelectedPropertymeasure, setSelectedPropertymeasure] = useState(null)
    const [SelectedAreameasurement, setSelectedAreameasurement] = useState(null)
    const [SelectedBuildAreaMeas, setSelectedBuildAreaMeas] = useState(null)
    const [SelectedPropertyface, setSelectedPropertyface] = useState(null)
    
    const handleCitySelectChange = (selectedOption) => {
        setSelectedCity(selectedOption);
        setFormData((prevFormData) => ({
            ...prevFormData,
            city: selectedOption.value, // or whatever property you need
        }));
    };
    const handleAreaSelectChange = (selectedOption) => {
        setSelectedArea(selectedOption);
        setFormData((prevFormData) => ({
            ...prevFormData,
            area: selectedOption.value, // or whatever property you need
        }));
    };
    const handleRoadmeasureSelectChange = (selectedOption) => {
        setSelectedRoadmeasure(selectedOption);
        setFormData((prevFormData) => ({
            ...prevFormData,
            roadmeasuretype: selectedOption.value, // or whatever property you need
        }));
    };
    const handleRoadtypeSelectChange = (selectedOption) => {
        setSelectedRoadtype(selectedOption);
        setFormData((prevFormData) => ({
            ...prevFormData,
            roadtype: selectedOption.value, // or whatever property you need
        }));
    };
    const handleMeasurementSelectChange = (selectedOption) => {
        setSelectedAreameasurement(selectedOption);
        setFormData((prevFormData) => ({
            ...prevFormData,
            disfrommainroadtype: selectedOption.value, // or whatever property you need
        }));
    };
    const handleBuildYearSelectChange = (selectedOption) => {
        setSelectedBuildYear(selectedOption);
        setFormData((prevFormData) => ({
            ...prevFormData,
            buildyear: selectedOption.value, // or whatever property you need
        }));
    };
    const handleFurnishingSelectChange = (selectedOption) => {
        setSelectedFloorFurnishing(selectedOption);
        setFormData((prevFormData) => ({
            ...prevFormData,
            furnishing: selectedOption.value, // or whatever property you need
        }));
    };
    const handlePropertymeasureSelectChange = (selectedOption) => {
        setSelectedPropertymeasure(selectedOption);
        setFormData((prevFormData) => ({
            ...prevFormData,
            propertyareameasurement: selectedOption.value, // or whatever property you need
        }));
    };
    const handleBuildAreaMeasSelectChange = (selectedOption) => {
        setSelectedBuildAreaMeas(selectedOption);
        setFormData((prevFormData) => ({
            ...prevFormData,
            buildupareameasurement: selectedOption.value, // or whatever property you need
        }));
    };
    const handlePropertyfaceSelectChange = (selectedOption) => {
        setSelectedPropertyface(selectedOption);
        setFormData((prevFormData) => ({
            ...prevFormData,
            propertyface    : selectedOption.value, // or whatever property you need
        }));
    };
    const handleDescriptionChange = newContent => {
        setFormData(prevFormData => ({
          ...prevFormData,
          description: newContent,
        }));
      };
    const [formData, setFormData] = useState({
        imageUrls:[],
        type: 'rent',
        propertytype: 'commercial',
        propertycategory: 'house',
        propertytitle: '',
        address: '',
        roadsize: '',
        dis_from_mr: '',
        totalfloor: '',
        totalpropertyarea: '',
        builduparea: '',
        bedrooms: '',
        bathrooms: '',
        livinghall: '',
        kitchen: '',
        parking: '',
        price: '',
        ownername: '',
        owneremail: '',
        ownercontact: '',
        city: '',
        area: '',
        roadmeasuretype: '',
        roadtype: '',
        disfrommainroadtype: '',
        buildyear: '',
        furnishing: '',
        propertyareameasurement:'',
        buildupareameasurement: '',
        propertyface:'',
        description: ''
    });
    console.log(formData)
const handleImageSubmit  = (e) => {
    console.log(currentUser._id)
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
        setUploading(true);
        setImageUploadError(false);
        const promises = [];

        for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
        }
        Promise.all(promises)
        .then((urls) => {
            setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
            });
            setImageUploadError(false);
            setUploading(false);
        })
        .catch((err) => {
            setImageUploadError('Image upload failed (2 mb max per image)');
            setUploading(false);
        });
    } else {
        setImageUploadError('You can only upload 6 images per listing');
        setUploading(false);
    }
};
const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
        'state_changed',
        (snapshot) => {
            const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
        },
        (error) => {
            reject(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
            });
        }
        );
    });
    };
const handleRemoveImage = (index) => {
        setFormData({
          ...formData,
          imageUrls: formData.imageUrls.filter((_, i) => i !== index),
        });
      };
const handleChange = (e) => {
        if (e.target.id === 'sale' || e.target.id === 'rent' || e.target.id === 'lease') {
          setFormData({
            ...formData,
            type: e.target.id,
          });
        }
    
        if (
          e.target.id === 'residential' ||
          e.target.id === 'commercial' ||
          e.target.id === 'agricultural'
        ) {
          setFormData({
            ...formData,
            propertytype: e.target.id,
          });
        }
    
        if (
          e.target.id === 'house' ||
          e.target.id === 'land' ||
          e.target.id === 'flat' ||
          e.target.id === 'apartment' ||
          e.target.id === 'housing' ||
          e.target.id === 'business' ||
          e.target.id === 'officespace' ||
          e.target.id === 'hostel' ||
          e.target.id === 'room'
        ) {
          setFormData({
            ...formData,
            propertycategory: e.target.id,
          });
        }

        if (e.target.type === 'number' || e.target.type === 'text'){
            setFormData({
              ...formData,
              [e.target.id]: e.target.value,
            });
          }
      
      };
const handleSubmit= async (e) => {
        e.preventDefault();
        try {
        setLoading(true);
        setError(false);
        const res = await fetch('/api/listing/create', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            ...formData,
            userRef: currentUser._id,
            }),
        });
        const data = await res.json();
        setLoading(false);
        if (data.success === false) {
            setError(data.message);
        }
        if (data && data._id) {
            navigate(`/listing/${data._id}`);
          } else {
            console.error('Invalid data received from the server:', data);
            // Handle the error or navigate to a fallback route
          }
        } catch (error) {
        setError(error.message);
        setLoading(false);
        }
    }
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
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-wrap gap-5'>
                        <div className='w-full pb-3'>
                            <div className='font-semibold text-lg mb-2'>
                                What do you want to do?
                            </div>
                            <div className='flex gap-6 flex-wrap'>  
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='sale' name='propertyWhat' className='w-4 h-4' onChange={handleChange} checked={formData.type === 'sale'}/>
                                    <label for="sale" class='ml-2'>Sale</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='rent' name='propertyWhat' className='w-4 h-4' onChange={handleChange} checked={formData.type === 'rent'}/>
                                    <label for="rent" class='ml-2'>Rent</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='lease' name='propertyWhat' className='w-4 h-4' onChange={handleChange} checked={formData.type === 'lease'}/>
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
                                    <input type='radio' id='residential' name='propertyType' className='w-4 h-4' onChange={handleChange} checked={formData.propertytype === 'residential'}/>
                                    <label htmlFor="residential" class='ml-2'>Residential</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='commercial' name='propertyType' className='w-4 h-4' onChange={handleChange} checked={formData.propertytype === 'commercial'}/>
                                    <label htmlFor="commercial" class='ml-2'>Commercial</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='agricultural' name='propertyType' className='w-4 h-4' onChange={handleChange} checked={formData.propertytype === 'agricultural'}/>
                                    <label htmlFor="agricultural" class='ml-2'>Agricultural</label>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3 '>
                            <div className='font-semibold text-lg mb-2'>
                                Property Category
                            </div>
                            <div className='flex gap-6 flex-wrap'>  
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='house' name='propertyCategory' className='w-4 h-4' onChange={handleChange} checked={formData.propertycategory === 'house'}/>
                                    <label for="house" class='ml-2'>House</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='land' name='propertyCategory' className='w-4 h-4' onChange={handleChange} checked={formData.propertycategory === 'land'}/>
                                    <label for="land" class='ml-2'>Land</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='flat' name='propertyCategory' className='w-4 h-4' onChange={handleChange} checked={formData.propertycategory === 'flat'}/>
                                    <label for="flat" class='ml-2'>Flat</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='apartment' name='propertyCategory' className='w-4 h-4' onChange={handleChange} checked={formData.propertycategory === 'apartment'}/>
                                    <label for="apartment" class='ml-2'>Apartment</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='housing' name='propertyCategory' className='w-4 h-4' onChange={handleChange} checked={formData.propertycategory === 'housing'}/>
                                    <label for="housing" class='ml-2'>Housing</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='business' name='propertyCategory' className='w-4 h-4'onChange={handleChange} checked={formData.propertycategory === 'business'}/>
                                    <label for="business" class='ml-2'>Business</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='officespace' name='propertyCategory' className='w-4 h-4' onChange={handleChange} checked={formData.tpropertycategoryype === 'officespace'}/>
                                    <label for="officespace" class='ml-2'>Office Space</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='hostel' name='propertyCategory' className='w-4 h-4' onChange={handleChange} checked={formData.propertycategory === 'hostel'}/>
                                    <label for="hostel" class='ml-2'>Hostel</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='room' name='propertyCategory' className='w-4 h-4' onChange={handleChange} checked={formData.propertycategory === 'room'}/>
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
                                className='w-full text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                value={formData.propertytitle}/>
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
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.address}/>
                                        </div>
                                    </div> 
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2 '>
                                        <div className='font-semibold text-lg mb-2 '>
                                            City
                                        </div>
                                        <div className='mb-2'>
                                            <City onSelectChange={handleCitySelectChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Area
                                        </div>
                                        <div>
                                            <Area onSelectChange={handleAreaSelectChange}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Road size
                                        </div>
                                        <div className='mb-2'>
                                            <input type="text" id="roadsize" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.roadsize}/>
                                        </div>
                                    </div> 
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2 '>
                                        <div className='font-semibold text-lg mb-2 '>
                                            Measurement Type
                                        </div>
                                        <div className='mb-2'>
                                            <RoadMType onSelectChange={handleRoadmeasureSelectChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Road Type
                                        </div>
                                        <div>
                                        <RoadType onSelectChange={handleRoadtypeSelectChange} />
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
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.dis_from_mr}/>
                                        </div>
                                    </div> 
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Measurement Type
                                        </div>
                                        <div>
                                            <DistanceFMR onSelectChange={handleMeasurementSelectChange}/>
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
                                            <BuildYear onSelectChange={handleBuildYearSelectChange}/>
                                        </div>
                                    </div> 
                                </div>
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Total Floors
                                        </div>
                                        <div>
                                            <input type="text" id="totalfloor" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.totalfloor}/>
                                        </div>
                                    </div> 
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Furnishing
                                        </div>
                                        <div>
                                            <Furnishing onSelectChange={handleFurnishingSelectChange}/>
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
                                            <input type="text" id="totalpropertyarea" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2'onChange={handleChange}
                                            value={formData.totalpropertyarea}/>
                                        </div>
                                    </div> 
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Area Measurement
                                        </div>
                                        <div>
                                            <AreaMeasurement onSelectChange={handlePropertymeasureSelectChange}/>
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
                                            <input type="text" id="builduparea" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.builduparea}/>
                                        </div>
                                    </div> 
                                </div>
                                <div className="h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Area Measurement
                                        </div>
                                        <div>
                                            <BuildAreaMea onSelectChange={handleBuildAreaMeasSelectChange}/>
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
                                            <PropertyFace onSelectChange={handlePropertyfaceSelectChange}/>
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
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.bedrooms}/>
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
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.bathrooms}/>
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
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.livinghall}/>
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
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.kitchen}/>
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
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.parking}/>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        {/* <div className='w-full pb-3'>
                            <div className=" h-[50px] rounded-sm flex items-center">
                                <div className='items-start justify-between w-full gap-2'>
                                    <div className='font-semibold text-lg mb-2'>
                                        Amenities
                                    </div>
                                    <div className='grid grid-cols-4 gap-4'> 
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='electricitybackup' name='amenities' className='w-4 h-4' onChange={handleChange} checked={value}/>
                                            <label htmlFor="electricitybackup" class='ml-2'>Electricity Backup</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='maintenance' name='amenities' className='w-4 h-4' onChange={handleChange} checked={value}/>
                                            <label htmlFor="maintenance" class='ml-2'>Maintenance</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='playground' name='amenities' className='w-4 h-4' onChange={handleChange} checked={value} />
                                            <label htmlFor="playground" class='ml-2'>Playground</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='storeroom' name='amenities' className='w-4 h-4' onChange={handleChange} checked={value}/>
                                            <label htmlFor="storeroom" class='ml-2'>Store Room</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='gym' name='amenities' className='w-4 h-4' onChange={handleChange} checked={value} />
                                            <label htmlFor="gym" class='ml-2'>Gym</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='modularkitchen' name='amenities' className='w-4 h-4' onChange={handleChange} checked={value} />
                                            <label htmlFor="modularkitchen" class='ml-2'>Modular Kitchen</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='airconditioner' name='amenities' className='w-4 h-4' onChange={handleChange} checked={value} />
                                            <label htmlFor="airconditioner" class='ml-2'>Air Conditioner</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' id='garage' name='amenities' className='w-4 h-4' onChange={handleChange} checked={value} />
                                            <label htmlFor="garage" class='ml-2'>Garage</label>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div> */}
                        <div className='w-full py-5 mb-14'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Price
                                        </div>
                                        <div>
                                            <input type="text" id="price" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.price}/>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className='w-full py-5 mb-20'>
                            <div className=" h-[50px] rounded-sm flex items-center">
                                <div className='items-start justify-between w-full gap-2'>
                                    <div className='font-semibold text-lg mb-2'>
                                        Description
                                    </div>
                                    <div>
                                        <JoditEditor
                                            value={formData.description}// tabIndex of textarea
                                            onBlur={handleDescriptionChange} 
                                        />
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className='w-full pb-3 mb-5'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Owner Name
                                        </div>
                                        <div>
                                            <input type="text" id="ownername" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2'onChange={handleChange}
                                            value={formData.ownername}/>
                                        </div>
                                    </div> 
                                </div>
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Owner Email
                                        </div>
                                        <div>
                                            <input type="text" id="owneremail" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.owneremail}/>
                                        </div>
                                    </div> 
                                </div>
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div className='font-semibold text-lg mb-2'>
                                            Owner Contact
                                        </div>
                                        <div>
                                            <input type="text" id="ownercontact" 
                                            className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' onChange={handleChange}
                                            value={formData.ownercontact}/>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-3'>
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='flex justify-between w-full gap-2'>
                                        <div className='mb-10'> 
                                            <div className='font-semibold text-lg mb-2'>
                                                Upload Images
                                            </div>
                                            <div>
                                                <input onChange={(e)=>setFiles(e.target.files)} type="file" id="images" accept='image/*'
                                                className='w-full h-10 text-black py-2 my-2 bg-transparent border-2 border-gray-200 outline-none focus:outline-none pl-2' multiple/>
                                            </div>
                                        </div>
                                        <button type='button' onClick= { handleImageSubmit }>Upload Image</button>
                                    </div> 
                                </div>
                                <p className='text-red-700 text-sm'>
                                    {imageUploadError && imageUploadError}
                                </p>
                                {formData.imageUrls.length > 0 &&
                                    formData.imageUrls.map((url, index) => (
                                    <div
                                        key={url}
                                        className='flex justify-between p-3 border items-center'
                                    >
                                        <img
                                        src={url}
                                        alt='listing image'
                                        className='w-20 h-20 object-contain rounded-lg'
                                        />
                                        <button
                                        type='button'
                                        onClick={() => handleRemoveImage(index)}
                                        className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                                        >
                                        Delete
                                        </button>
                                    </div>
                                    ))}
                        </div>
                    </div>
                        <div className='w-full pb-3'>
                            <div className="grid grid-cols-3 gap-4">
                                <div className=" h-[50px] rounded-sm flex items-center">
                                    <div className='items-start justify-between w-full gap-2'>
                                        <div>
                                            <button className='w-full text-white bg-yellow-400 h-10 rounded-sm'>POST</button>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        {error && <p className='text-red-700 text-sm'>{error}</p>}
                </form>
            </div>
        </div>
    </div>
  )
}