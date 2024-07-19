import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Header() {
    return (
        <div className='w-screen flex flex-row items-center justify-between shadow-md'>
            {/* left */}
            <div className='flex flex-row items-center ml-16'>
                <img
                    src="../../public/Images/Myntra-icon-logo2.png"
                    alt="loding..."
                    className='w-12' />

                <div className='flex flex-row items-center w-[670px] ml-10 '>
                    <p className='text-xs font-bold text-slate-700 p-5 py-8  border-b-4 border-white hover:cursor-pointer hover:border-b-red-700  transition duration-200 '>MEN</p>
                    <p className='text-xs font-bold text-slate-700 p-5 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-pink-600 transition duration-200 '>WOMWN</p>
                    <p className='text-xs font-bold text-slate-700 p-5 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-orange-500  transition duration-200 '>KIDS</p>
                    <p className='text-xs font-bold text-slate-700 p-5 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-yellow-500  transition duration-200 '>HOME & LIVING</p>
                    <p className='text-xs font-bold text-slate-700 p-5 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-green-600  transition duration-200 '>BEAUTY</p>
                    <p className='text-xs font-bold text-slate-700 p-5 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-teal-900  transition duration-200 '>STUDIO</p>
                </div>
            </div>
  
            {/* right */}
            <div className='flex flex-row items-center mr-16'>
                <div className='flex flex-row items-center'>
                    <div className='mr-0.5 bg-gray-100 w-10 h-10 rounded-ss-xl pt-3 pl-3' >
                        <ImSearch className='text-gray-500' />
                    </div>
                    <input type="text" placeholder='Search for products, brands and more'
                        className='w-[400px] h-10 mr-14 bg-gray-100 rounded-ee-xl text-sm pl-3'
                    />
                </div>

                <div className='flex flex-row items-center'>
                    <div className='flex flex-col items-center hover:cursor-pointer border-b-4 border-white hover:border-b-red-700 transition duration-200 px-3 py-6 relative group'>
                        <FaRegUser className='text-sm text-gray-600' />
                        <p className='text-xs font-bold'>Profile</p>
                        <div className='absolute  bg-white border-2 top-[85px] hidden group-hover:flex'>
                            <p>WELCOME</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center hover:cursor-pointer px-3 py-6'>
                        <FiHeart className='text-sm text-gray-600 ' />
                        <p className='text-xs font-bold'>Wishlist</p>
                    </div>
                    <div className='flex flex-col items-center hover:cursor-pointer px-3 py-6'>
                        <HiOutlineShoppingBag className='text-sm text-gray-600 ' />
                        <p className='text-xs font-bold'>Bag</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header