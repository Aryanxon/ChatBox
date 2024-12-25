import React from 'react'
import BlueCHeader from './BlueCHeader'
import { GrGroup } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import BlueCChatsss from './BlueCChatsss';
import ManIcon from '../assets/ManIcon.png'
import Message from '../assets/Message.png'
import ManPic from '../assets/ManPic.jpg'
import Pinkmessage from '../assets/Pinkmessage.jpg'
import Flip from '../assets/Flip.jpg'
import Whattsapp from '../assets/Whattsapp.jpg'


function BlueChat() {
    return (
        <div className='w-[25%]'>
            <BlueCHeader />

            {/* Message and segment  */}
            <div className='flex  justify-center items-center'>
                <div className=' flex my-2 rounded-lg bg-slate-100 gap-8 items-center px-2 py-2'>
                    <div className='bg-white py-2 rounded-lg font-bold cursor-pointer px-10'>Messages</div>

                    <div className=' px-10 py-2 rounded-lg font-bold text-slate-400 cursor-pointer'>Segments</div>
                </div>
            </div>


            {/* Filteration  */}
            <div className='w-[100%] flex justify-between px-14 py-2'>

                <div className='flex justify-center items-center gap-2'>
                    <div><GrGroup /></div>
                    <div>All</div>
                    <div className='bg-green-100 px-4 py-2 rounded-3xl text-green-700 font-bold'>232</div>
                    <div><FaChevronDown /></div>
                </div>

                <div className='flex justify-center items-center gap-2'>
                    <div><FaFilter /></div>
                    <div>Oldest</div>
                    <div><FaChevronDown /></div>

                </div>


            </div>



            {/* Chats  */}
            <BlueCChatsss 
            Pic={ManIcon} 
            Name="Oguz Yagiz Kara"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius, adipisci consequatur nam ex eum?"
            Icon={Message}
            />
            <BlueCChatsss 
            Pic={ManPic} 
            Name="George Klein"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci?"
            Icon={Pinkmessage}
            />
            <BlueCChatsss 
            Pic={Flip} 
            Name="847-401-1944"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci?"
            Icon={Whattsapp}
            />
           





        </div>
    )
}

export default BlueChat
