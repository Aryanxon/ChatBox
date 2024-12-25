import React from 'react'
import ProfileHeader from './ProfileHeader'
import { AiFillDollarCircle } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa6";
import { AiFillEye } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { MdSegment } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


function Profile() {
    return (
        <div className='w-[25%]'>
            <ProfileHeader />


            {/* Viewership  */}
            <div className='px-12 flex justify-between items-center'>
                <div className='p-3 border-2 border-slate-400 rounded-xl'>

                    <div className='flex justify-center items-center text-slate-400'>
                        <AiFillDollarCircle />
                        <div>Revenue</div>
                    </div>
                    <div className='text-xl flex justify-center items-center font-bold'>
                        <FaDollarSign />
                        <div className='text-2xl'>3,452</div>

                    </div>
                    <div className='text-xs text-slate-500'>3 order</div>

                </div>



                <div className='p-3 border-2 border-slate-400 rounded-xl'>

                    <div className='flex justify-center items-center text-slate-400'>
                        <AiFillEye  />
                        <div>Web Visit</div>
                    </div>
                    <div className='text-xl flex justify-start items-center font-bold'>
                        <div className='text-2xl'>42</div>

                    </div>
                    <div className='text-xs text-slate-500'>4 Link Click</div>

                </div>

            </div>



            {/* Icons  */}

            <div className='px-4 my-4'>
                <div className='bg-gray-200 flex justify-between py-2 px-2 rounded-lg'>
                    <div className='bg-white px-10 py-2 rounded'><IoPersonSharp /></div>
                    <div className=' px-10 py-2 rounded'><FaBox   /></div>
                    <div className=' px-10 py-2 rounded'><FaClock /></div>

                   
                </div>
            </div>


            {/* Search  */}
            <div className='px-4'>
                <div className='bg-slate-300 flex justify-center items-center gap-2 px-4 py-2 rounded-lg'>
                    <IoSearch className='text-white'/>
                    <input type="text" placeholder="Search in general" className='bg-slate-300 w-full'/>
                </div>

            </div>


            {/* Information  */}

            <div className='px-4 my-4'>
                <div className='flex justify-between items-center my-2'>
                    <div className='flex justify-center items-center gap-2'> <FaChevronDown />Information</div>
                    <div className='text-blue-500 flex justify-center items-center gap-2'><IoMdAdd /> Add</div>
                </div>

                <div className='flex justify-between items-center my-2'>
                    <div className='flex justify-center items-center gap-2'> <MdSegment  />Segment</div>
                    <div className=' flex justify-center items-center gap-2'><FaCartShopping /> Abandoned Cart</div>
                </div>

                <div className='flex justify-between items-center my-2'>
                    <div className='flex justify-center items-center gap-2'> <MdAlternateEmail  />Email</div>
                    <div className=' flex justify-center items-center gap-2'>jdsbfhsbcjhb@gmail.com</div>
                </div>

                <div className='flex justify-between items-center my-2'>
                    <div className='flex justify-center items-center gap-2'> <FaPhoneAlt  />Phone</div>
                    <div className=' flex justify-center items-center gap-2'>+ 91 XXXXXX83678</div>
                </div>

                <div className='flex justify-between items-center my-2'>
                    <div className='flex justify-center items-center gap-2'> <FaClock />Last Visited</div>
                    <div className=' flex justify-center items-center gap-2'>7 Aug, 2024</div>
                </div>

            </div>

            {/* show more  */}
            <div className='mx-4 border-2 border-gray-600 flex  gap-4 items-center px-3 py-2 rounded-lg'><FaChevronDown /> Show more</div>







        </div>
    )
}

export default Profile
