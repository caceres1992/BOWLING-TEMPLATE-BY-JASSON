import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'

const Reel = ({ image, instragramreel }) => {



    return (
        <div  className=' h-52 relative group overflow-hidden image__reel text-xs lg:text-base'>
            <img className=' object-cover w-full h-full '
                src={image}
            />
            {instragramreel ?
                <div className={`group-hover:bottom-0 h-full text-center px-6 bg-[rgba(50,113,217,.7)] show__text py-3  absolute -bottom-96 transition-all ease-in-out w-full text-gray-100`}>
                   <AiFillInstagram className='mx-auto my-5' size={30}/>
                   <p className='text-sm'>We have experienced coaches who will be happy to show you how. We will arrange all:</p>
                    <p className='text-xs'>https://efhjcvedrtotgdk45.com</p>
                </div>
                :
                <div className={`group-hover:bottom-0 px-6 bg-blue-700 show__text py-3  absolute -bottom-96 transition-all ease-in-out w-full text-gray-100`}>
                    <p className='text-sm'>Our 89th Club Anniversary</p>
                    <p className='text-xs'>SEE FULL GALLU</p>

                </div>

            }

        </div>
    )
}

export default Reel