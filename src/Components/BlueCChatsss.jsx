import React from 'react'
import ManIcon from '../assets/ManIcon.png'
import Message from '../assets/Message.png'
import { LuDot } from "react-icons/lu";
import 'primeicons/primeicons.css';
        

function BlueCChatsss({Pic, Name, text, Icon}) {
    return (
        <div className='items-center py-2 px-10'>
            <div className='border-b-2 border-black'>


            <div className='flex justify-between items-center '>


                <div className='flex gap-2'>
                    <img src={Pic} alt="Icon" className='w-[30px] rounded-full bg-blue-300' />
                    <div className='font-bold'>{Name}</div>
                    <img src={Icon} alt="Icon" className='w-[30px] rounded-full' />
                </div>


                <div className='flex gap-1 text-purple-700 justify-center items-center'>
                <LuDot />
                <div>5m</div>
                </div>
            </div>

            <div className='py-4 flex gap-2'>
                <div className='text-[14px] text-slate-400 pr-10'>{text}</div>
                <div><i className="pi pi-check" style={{ color: 'slateblue' }}></i></div>
            </div>
            </div>

        </div>
    )
}

export default BlueCChatsss
