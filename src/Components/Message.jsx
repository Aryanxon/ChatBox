import React from 'react'
import MessageHeader from './MessageHeader'
import Background from '../assets/Background.jpg'
import ManIcon from '../assets/ManIcon.png'
import PartyPop from '../assets/PartyPop.png'
import Pinkmessage from '../assets/Pinkmessage.jpg'
import BlueChat from '../assets/BlueChat.png'
import { FaCartShopping } from "react-icons/fa6";
import { FaImage } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

function Message() {
  return (
    <div className='w-[50%] '>
      <MessageHeader/>




     <div className='relative rounded-3xl'>
        {/* Background  */}
        <img src={Background} alt="" className='opacity-10 absolute inset-0 rounded-2xl'/>
        <div className='relative z-10'>
            <div className='px-8 py-6'>



<div className= 'relative p-4 flex justify-between bg-white rounded-2xl'>

                <div >
                    <div className='flex  items-center gap-2  '>

                    <img src={ManIcon} alt="Icon" className='w-[30px] rounded-full bg-blue-300' />
                    <div>
                    <div className='font-bold'>Aryan Bandooni</div>
                    <div className='text-xs text-slate-400 font-bold'>dsjbsjbchjasbdjkbnhbe</div>
                    </div>
                    </div>
                    <div className='text-[15px] font-bold pt-2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, eius.
                    </div>



                </div>
                    <img src={PartyPop} alt="Popup" className=' w-[50px] inset-0 rounded-2xl'/>

                </div>


                <div className='flex justify-center items-center my-4'>
                  <div className='text-gray-500 font-bold bg-white py-2 px-4 rounded-xl'>Today</div>
                </div>


                <div className='flex gap-2 mb-4'>
                  <div><img src={ManIcon} alt="Icon" className='w-[30px] rounded-full bg-blue-300' /></div>
                  <div className='bg-white px-4 w-[80%] py-3 rounded-2xl'>



                    <div className='flex'>
                      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non quaerat autem alias animi nemo.</div>
                      <div><img src={Pinkmessage} alt="" className='w-[30px] rounded-full'/></div>
                    </div>
                    <div className='flex justify-between items-center bg-gray-200 p-2 rounded-lg'>
                      <img src={BlueChat} alt="" className='w-[30px] rounded-full'/>
                      <div className=' font-bold'>Smart Response Detected!</div>
                      <button className=' font-bold p-2 bg-white rounded-2xl'>Cancel</button>
                      <button className=' font-bold p-2 bg-purple-800 text-white rounded-2xl'>Selected</button>
                    </div>
                  </div>
                </div>



                <div className='text-white my-4 bg-purple-800 rounded-2xl px-4 py-3 w-[80%] float-end'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet est provident voluptate. Dignissimos, iusto ullam corrupti minima laudantium ea, libero maxime tenetur, debitis animi accusamus?
                </div>



                <div className='flex justify-between my-4 items-center w-full bg-white p-2 rounded-xl'>

                  <div><FaCartShopping /></div>
                  <div className='text-green-600 bg-green-200 px-4 py-2 rounded-xl '>@Ekrem Kenter</div>
                  <div>Product purchased!</div>
                  <div className='text-white bg-black px-2 py-1 rounded-2xl'>$99</div>
                  <div>SNOW TEETH WHITENING KIT</div>
                  <div className='text-slate-500'>2m ago</div>
                </div>



                <div className='w-full bg-white px-4 py-2 rounded-xl'>
                  <input type="text" className='w-full active:border-none' placeholder='Message>>'/>
                  <div className='flex py-4 items-center justify-between'>
                    <div className='flex justify-center items-center gap-3'>
                    <FaImage />
                    <IoIosContact />
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                      <div className='pr-2 border-r-2 border-s-slate-500'>
                    <IoIosSend  />
                      </div>
                    <FaChevronDown  />
                    </div>

                  </div>
                </div>




            </div>
        </div>
     </div>






    </div>
  )
}

export default Message
