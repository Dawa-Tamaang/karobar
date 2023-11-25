import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import house6 from '../assets/images/products/house6.jpg'
import house1 from '../assets/images/products/house1.jpg'
import house2 from '../assets/images/products/house2.jpg'
import house3 from '../assets/images/products/house3.jpg'
import house4 from '../assets/images/products/house4.jpg'
import house5 from '../assets/images/products/house5.jpg'


export default function PropertyDisplay() {
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchListing = async () => {
        try {
            setLoading(true);
            const res = await fetch(`/api/listing/get/${params.listingId}`);
            const data = await res.json();
            if (data.success === false) {
            setError(true);
            setLoading(false);
            return;
            }
            setListing(data);
            setLoading(false);
            setError(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
        };
        fetchListing();
    }, [params.listingId, history]);
  return (
    <div className='max-w-screen-xl mx-auto'>
        <div className='max-w-screen-xl mx-auto py-10'>
            <div className='flex justify-between mb-3'>
                <div className='font-bold text-3xl'>
                    {listing && listing.propertytitle}
                </div>
                <div className='flex items-baseline space-x-1 '> 
                    <h1 className='font-semibold text-3xl'>NPR {listing && listing.price} </h1> <span className='font-semibold text-xl'>per {listing && listing.propertyareameasurement}</span>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='font-semibold text-sm text-white'>
                        <span className='bg-black px-2 py-1 my-2'>{listing && listing.type}</span>
                    </div>
                    <div>
                        <p className='text-gray-500 font-medium'>{listing && listing.address}</p>
                    </div>
                </div>
                <div className='font-semibold text-sm text-white'>
                        <span className='bg-red-500 px-2 py-1 my-2'>Not Negotiable</span>
                    </div>
            </div>
            <div className=''>
                <div className='w-full h-2/6 grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>

                    <img className=' w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={house1} alt="" />
                    <img className=' w-full h-full object-cover ' src={house2} alt="" />
                    <img className=' w-full h-full object-cover ' src={house3} alt="" />
                    <img className=' w-full h-full object-cover ' src={house4} alt="" />
                    <img className=' w-full h-full object-cover ' src={house5} alt="" />
                </div>
            </div>
        </div>
        <div className=' flex flex-1'>
            <div className='w-full px-5'>
                <div className='border-b-2 '>
                    <h1 className='font-medium text-2xl'>Description</h1>
                    <p className='py-5'>
                        Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum disputando ea. An duis dolor appellantur mea, est id zril nobis appellantur. Ei sea duis senserit qualisque, te facilisis appellantur pri. Id aperiri aliquam interesset mel. Contentiones vituperatoribus id est, per prima nihil scripta no. No semper forensibus adipiscing quo. Amet deleniti lobortis et eam. In oporteat pertinacia quo, cu qui antiopam intellegebat, ei alii paulo has. In alia eros ornatus pri,
                        graeci accusata pericula an vix. His ne homero dignissim, aliquam dolores scriptorem vis ut. Sit ad suas adhuc interesset, neu essent iuvaret adipiscing everti.
                    </p>
                </div>
                <div className='w-full py-5'>
                    <h1 className='font-medium text-2xl'>Property Features</h1>
                    <div className='py-3'>
                        <h3 className='font-bold text-lg'>Property Details</h3>
                        <div className='flex justify-between gap-14 py-2'>
                            <div className='w-full border-b-2 flex justify-between py-2'>
                                <div>
                                    <h1>
                                        Property Type:
                                    </h1>
                                </div>
                                <div>
                                    <h1 className='font-bold'>
                                        Residental
                                    </h1>
                                </div>
                            </div>
                            <div className='w-full border-b-2 flex justify-between py-2'>
                                <div>
                                    <h1>
                                        Property Type:
                                    </h1>
                                </div>
                                <div>
                                    <h1 className='font-bold'>
                                        Residental
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-14 py-2'>
                            <div className='w-full border-b-2 flex justify-between py-2'>
                                <div>
                                    <h1>
                                        Property Type:
                                    </h1>
                                </div>
                                <div>
                                    <h1>
                                        Residental
                                    </h1>
                                </div>
                            </div>
                            <div className='w-full border-b-2 flex justify-between py-2'>
                                <div>
                                    <h1>
                                        Property Type:
                                    </h1>
                                </div>
                                <div>
                                    <h1>
                                        Residental
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-3'>
                        <h3 className='font-bold text-lg'>Property Details</h3>
                        <div className='flex justify-between gap-14 py-2'>
                            <div className='w-full border-b-2 flex justify-between py-2'>
                                <div>
                                    <h1>
                                        Property Type:
                                    </h1>
                                </div>
                                <div>
                                    <h1 className='font-bold'>
                                        Residental
                                    </h1>
                                </div>
                            </div>
                            <div className='w-full border-b-2 flex justify-between py-2'>
                                <div>
                                    <h1>
                                        Property Type:
                                    </h1>
                                </div>
                                <div>
                                    <h1 className='font-bold'>
                                        Residental
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-14 py-2'>
                            <div className='w-full border-b-2 flex justify-between py-2'>
                                <div>
                                    <h1>
                                        Property Type:
                                    </h1>
                                </div>
                                <div>
                                    <h1>
                                        Residental
                                    </h1>
                                </div>
                            </div>
                            <div className='w-full border-b-2 flex justify-between py-2'>
                                <div>
                                    <h1>
                                        Property Type:
                                    </h1>
                                </div>
                                <div>
                                    <h1>
                                        Residental
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='w-[40%] my-4'>
                <div className='bg-gray-200 flex flex-1'>
                    <div className='p-4'>
                        <img className='w-20 h-20 rounded-md' src={house6} alt="" />
                    </div>
                    <div className='py-4'>
                        <ul>
                            <li>
                                Dawa Tamang
                            </li>
                            <li>
                                tdawa@gmail.com
                            </li>
                            <li>
                                9813231295
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full'>
                    <form >
                        <div className='w-full flex flex-col items-start mt-2'>
                            <h3 className='text-2xl font-semibold my-4'>Contact Owner</h3>
                        </div>
                        <div className='w-full flex flex-col'>
                            <input type="text" placeholder='Enter Your Full Name' id='username'
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                            <input type="text" placeholder='Enter Your Contact' id='contact'
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                            <input type="email" placeholder='Enter Your E-mail' id='email'
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                            <textarea className='bg-transparent border-b border-yellow-400 outline-none text-gray-400' placeholder='Message' name="" id=""/>
                        </div>
                        <div className='w-full flex flex-col gap-3 my-4'>
                            <button className='w-full text-white bg-yellow-400 rounded-md p-4 text-center flex items-center justify-center'>
                                Send Message</button>
                            
                            {/* <button className='w-full text-white bg-yellow-400 rounded-md p-4 text-center flex items-center justify-center'>Sign Up</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
