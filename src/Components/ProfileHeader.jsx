import React from 'react'
import SnapMan from '../assets/SnapMan.jpg'
import { IoIosCall } from "react-icons/io";
import { MdVideoChat } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

function ProfileHeader() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center my-4 px-12'>
            <div><img src={SnapMan} alt="" className='w-[80px] rounded-full'/></div>
            <div className='text-xl font-bold'>Aryan Bandooni</div>
            <div className='text-xl font-bold text-slate-400'>11:50 AM in India, Delhi</div>
            <div className='py-5 flex justify-between w-full items-center'>
                <div className='flex flex-col justify-center items-center'><IoIosCall /><div>Call</div></div>
                <div className='flex flex-col justify-center items-center' ><MdVideoChat /><div>Video</div></div>
                <div className='flex flex-col justify-center items-center'><SlOptions  /><div>More</div></div>
            </div>
        </div>

      
    </div>
  )
}

export default ProfileHeader
