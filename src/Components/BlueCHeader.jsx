import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import BlueChat from '../assets/BlueChat.png';

function BlueCHeader() {
    return (
        <div className='flex justify-between items-center  px-10 py-2'>
            <IoMdArrowBack className='cursor-pointer'/>


            <div className='flex justify-center items-center gap-4'>
                <img src={BlueChat} alt="BlueChat" className='w-[40px] h-[45px]' />
                <div>
                    <div className='text-2xl font-bold'>BlueChat</div>
                    <div className='text-slate-300 text-xl'>Inbox</div>
                </div>
            </div>



            <div className='flex gap-4 justify-center items-center'>

                <IoSearchOutline className='cursor-pointer'/>


                <div className='bg-slate-200 px-4 py-4 rounded-xl cursor-pointer'>
                    <MdAdd />
                </div>
            </div>

        </div>
    )
}

export default BlueCHeader
