import React, { useState } from 'react'
import { HiLocationMarker, HiPhone } from 'react-icons/hi'
import { AiFillFacebook, AiFillInstagram, AiOutlineMenuUnfold, AiOutlineSearch } from 'react-icons/ai'
import { SiTiktok } from 'react-icons/si'
const Header = () => {

    const [showSideBar, setShowSideBar] = useState(false)

    const hiddeSideBar = () => {
        setShowSideBar(!showSideBar);
    }

    return (
        <header className='bg-gray-800'>
            <div className='container mx-auto'>
                <div className='flex items-center border-b-2 border-gray-600 py-2 justify-between text-gray-300'>
                    <p className='text-xs hidden lg:block'>Never tried bowling but would love to give it a go?</p>
                    <div className='flex  items-center gap-x-6 text-xs px-2 md:px-0'>
                        <p className='flex items-center gap-x-1 '> <HiLocationMarker /> 4730 Spring Haven Trail, NJ 48234</p>
                        <p className='flex items-center gap-x-1'><HiPhone /> 555 - 345 6789</p>
                        <div className=' gap-x-3 text-base md:flex hidden'>
                            <AiFillFacebook className='hover:text-white cursor-pointer ' />
                            <SiTiktok className='hover:text-white cursor-pointer' />
                            <AiFillInstagram className='hover:text-white cursor-pointer' />
                        </div>
                    </div>
                </div>
                <nav className='flex items-center gap-x-2 px-2 md:px-0 md:flex-row md:justify-between py-3 '>
                    <div className='text-2xl font-bold text-gray-200'>LOGO</div>
                    <ul className=' hidden lg:flex gap-4 items-center text-gray-100 text-sm'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Faq's</li>
                        <li>Membership</li>
                        <li>Gallery</li>
                        <li>Club Rules</li>
                        <li>News</li>
                        <li>Contact</li>
                        <li><AiOutlineSearch /></li>
                    </ul>

                    <AiOutlineMenuUnfold
                        onClick={hiddeSideBar}
                        size={30} color="white" className='lg:hidden' />



                </nav>
            </div>
            <SideBar isVisiable={showSideBar} />
        </header>
    )
}


const SideBar = ({ isVisiable }) => {
    return (
        <div className={`bg-white absolute  overflow-hidden  w-full ${isVisiable ? 'h-[400px]' : 'h-0'} transition-all ease-in-out`}>

            <ul className={`py-5 space-y-5 items-center text-gray-800 px-2 container mx-auto text-sm `}>
                <li>Home</li>
                <li>About</li>
                <li>Faq's</li>
                <li>Membership</li>
                <li>Gallery</li>
                <li>Club Rules</li>
                <li>News</li>
                <li>Contact</li>
                <li className='relative'>
                    <input className='border px-4 w-full py-2 ' placeholder='search somethings' />
                    <AiOutlineSearch size={20} className='absolute top-1/2 -mt-2 right-3' /></li>
            </ul>
        </div>
    )
}

export default Header