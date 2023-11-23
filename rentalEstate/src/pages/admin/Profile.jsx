import {  useSelector } from 'react-redux';
import { useRef, useState, useEffect  } from 'react'
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
  } from 'firebase/storage';
import { app } from '../../firebase';
import AdminMenu from './components/AdminMenu';

export default function Profile() {
    const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(null);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };
  return (
    <div className='max-w-screen-xl mx-auto'>
        <div className='pr-5 py-5 flex flex-1 overflow-auto'>
            <div className='w-80 h-full border-r-2'>
            <AdminMenu/>
            </div>
            <div className='w-full pl-5'>
                <div className='py-5'>
                    <div className='text-black font-bold text-xl mb-3'>
                        Your Profile
                    </div>
                </div>
                <div>
                        <div className='w-full'>
                            <div className=' flex flex-1 overflow-auto'>
                                
                                    <div className='flex flex-col items-center gap-4 bg-gray-200 py-5 px-5 w-2/6'>
                                        <form>
                                            <input onChange={(e)=> setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept='image/*'/>
                                        </form>
                                        <img src={formData.avatar || currentUser.avatar} alt="Profile" className=' rounded-full w-24 h-24 '/>
                                        <div onClick={() => fileRef.current.click()} className='w-[120px] text-sm p-2 border-2 border-yellow-400 text-center cursor-pointer'>
                                            Profile Upload
                                        </div>
                                        <p className='text-sm self-center'>
                                            {fileUploadError ? (
                                                <span className='text-red-700'>
                                                Error Image upload (image must be less than 2 mb)
                                                </span>
                                            ) : filePerc > 0 && filePerc < 100 ? (
                                                <span className='text-slate-700'>{`Uploading ${filePerc}%`}</span>
                                            ) : filePerc === 100 ? (
                                                <span className='text-green-700'>Image successfully uploaded!</span>
                                            ) : (
                                                ''
                                            )}
                                        </p>
                                        <div className='w-full flex justify-between py-2 '>
                                            <span className='text-sm text-red-600 p-2 border-2 border-red-500 rounded-sm cursor-pointer'>Delete Account</span>
                                            <span className='text-sm text-red-600 p-2 border-2 border-red-500 rounded-sm cursor-pointer'>Sign Out</span>
                                        </div>
                                    </div>
                            
                                <div className='w-full pl-5'>
                                    <div className='w-full flex flex-col gap-3 max-w-[550px]'>
                                        <form >
                                            <div className='w-full flex flex-col items-center mb-2'>
                                                <h3 className='text-3xl font-semibold mb-4'>Edit Profile</h3>
                                            </div>
                                            <div className='w-full flex flex-col'>
                                                <input type="text" placeholder='Enter Your Full Name' id='username' 
                                                className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                                                <input type="email" placeholder='Enter Your Email Address' id='email' 
                                                className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                                                <input type="text" placeholder='Enter Your Mobile Number' id='phoneNumber' 
                                                className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                                                <input type="password" placeholder='Enter Your Password' id='password' 
                                                className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                                            </div>
                                            <div className='w-full flex flex-col gap-3 my-4'>
                                                <button className='w-full font-bold text-white bg-yellow-400 rounded-md p-4 text-center flex items-center justify-center'>
                                                    Update Info
                                                </button>
                                            </div>
                                        </form> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>
                        Sign out
                    </span> */}
                </div>
            </div>
        </div>
    </div>

  )
}
