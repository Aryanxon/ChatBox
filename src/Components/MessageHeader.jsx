import React from 'react'
import ManIcon from '../assets/ManIcon.png'
import Pinkmessage from '../assets/Pinkmessage.jpg'
import { FaChevronDown } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { PiTextItalicFill } from "react-icons/pi";

function MessageHeader() {
    return (
        <div className='flex justify-between items-center px-10 py-2'>

            <div className='flex gap-2 justify-center items-center'>
                <img src={ManIcon} alt="Icon" className='w-[30px] rounded-full bg-blue-300' />
                <div>
                    <div className='font-bold text-[16px]'>Aryan Bandooni</div>
                    <div className='text-slate-400 text-xs'>dbjvhcbdjcbbdsajbhcb</div>
                </div>
            </div>

            <div className='flex justify-center items-center gap-3'>
                <div className='flex justify-center items-center gap-1 bg-slate-200 px-4 py-2 rounded-2xl border-2 border-slate-500 cursor-pointer'>
                    <img src={Pinkmessage} alt="Message" className='w-[30px] rounded-full'/>
                    <div className='text-[14px] font-bol'>Messenger</div>
                    <FaChevronDown />
                </div>
                <div><i className="pi pi-check"></i></div>
                <SlOptionsVertical />
                <img src={Pinkmessage} alt="Message" className='w-[30px] rounded-full'/>
                <FaChevronDown />
                <PiTextItalicFill />

            </div>

        </div>
    )
}

export default MessageHeader
