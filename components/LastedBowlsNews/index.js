
import React from 'react'
import { HiLocationMarker, HiPhone } from 'react-icons/hi'
import { AiFillFacebook, AiFillInstagram, AiOutlineSearch } from 'react-icons/ai'
import { SiTiktok } from 'react-icons/si'
const LastedBowlsNews = () => {
    return (
        <div className='bg-gray-100 py-20'>
            <div  >
                <h2 className=' border-b-blue-400 mx-auto mb-2 border-b-2 w-fit text-2xl text-gray-700 '>JOIN US TODAY</h2>
                <p className='text-sm text-gray-400 text-center pb-10'>See what's going on at Bowling.</p>


                <div className='max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:h-[500px]'>
                    <div className='bg-red-500 row-span-2 relative  '>
                        <img
                            className='w-full h-full object-cover'
                            src='https://www.sunvalley.com/images/uploads/gridwall/SunValleyBowlingAlley_Family%282%29.jpg' />
                        <div className='absolute bottom-0 h-full bg-gradient-to-b
                          from-[rgba(0,0,0,.05)] to-[rgba(0,0,0,0.3)] w-full text-white flex flex-col justify-end '>
                            <div className='  justify-end p-7 bg-gradient-to-b to-black from-[rgba(0,0,0,.02)]'>
                                <p className='max-w-[200px] text-lg'>Port Macquarie Mixed Pairs - Final Day</p>
                                <p className='text-xs text-gray-200'>June 26th, 2018</p>
                                <button className='bg-blue-700 px-6 py-3 hover:bg-blue-600 hover:text-white transition-all ease-in-out text-gray-300 text-xs font-bold rounded-2xl mt-5'>Read Article</button>
                            </div>

                        </div>
                    </div>
                    <div className='bg-black h-[250px] relative'>
                        <img
                            className='w-full h-full object-cover'
                            src='https://media.istockphoto.com/photos/cheerful-black-couple-bowling-having-a-lot-of-fun-picture-id954411534?k=20&m=954411534&s=170667a&w=0&h=QrQi6P_lyT3Y0ihfaRTLgQNXR21rT_lFfeR781m2cns='
                        />

                        <div className='absolute bottom-0 h-full bg-gradient-to-b
                          from-[rgba(0,0,0,.05)] to-[rgba(0,0,0,0.3)] w-full text-white flex flex-col justify-end '>
                            <div className='  justify-end p-7 bg-gradient-to-b to-black from-[rgba(0,0,0,.02)]'>
                                <p className='max-w-[200px] text-lg'>Port Macquarie Mixed Pairs - Final Day</p>
                                <p className='text-xs text-gray-200'>June 26th, 2018</p>
                            </div>

                        </div>
                    </div>
                    <div className='bg-black h-[250px] relative'>
                        <img
                            className='w-full h-full object-cover'
                            src='https://media.istockphoto.com/photos/group-of-seniors-bowling-picture-id1034301250?k=20&m=1034301250&s=612x612&w=0&h=fhrm7yq4_OfruzBPjqUJagkVEo3lNdxXbMwtGcgL5Jg='
                        />

                        <div className='absolute bottom-0 h-full bg-gradient-to-b
                          from-[rgba(0,0,0,.05)] to-[rgba(0,0,0,0.3)] w-full text-white flex flex-col justify-end '>
                            <div className='  justify-end p-7 bg-gradient-to-b to-black from-[rgba(0,0,0,.02)]'>
                                <p className='max-w-[200px] text-lg'>Port Macquarie Mixed Pairs - Final Day</p>
                                <p className='text-xs text-gray-200'>June 26th, 2018</p>
                            </div>

                        </div>
                    </div>
                    <div className='bg-black h-[250px] relative'>
                        <img
                            className='w-full h-full object-cover'
                            src='https://bloximages.newyork1.vip.townnews.com/samessenger.com/content/tncms/assets/v3/editorial/a/c7/ac7301ee-4ec9-11ea-b411-938c8dc7e3c4/5e45f85bab2e9.image.jpg?resize=750%2C500'
                        />

                        <div className='absolute bottom-0 h-full bg-gradient-to-b
                          from-[rgba(0,0,0,.05)] to-[rgba(0,0,0,0.3)] w-full text-white flex flex-col justify-end '>
                            <div className='  justify-end p-7 bg-gradient-to-b to-black from-[rgba(0,0,0,.02)]'>
                                <p className='max-w-[200px] text-lg'>Port Macquarie Mixed Pairs - Final Day</p>
                                <p className='text-xs text-gray-200'>June 26th, 2018</p>
                            </div>

                        </div>
                    </div>
                    <div className='bg-blue-700 h-[250px] text-center p-6'>
                        <h4 className='text-2xl text-gray-50 '>SOCIALS FOLLOW</h4>
                        <p className='text-sky-500 py-1'>@BowlingPeru</p>
                        <div className='flex gap-x-3 text-4xl  justify-center mt-3'>
                            <AiFillFacebook className=' text-white opacity-30 hover:opacity-100 cursor-pointer ' />
                            <SiTiktok className=' text-white opacity-30 hover:opacity-100 cursor-pointer' />
                            <AiFillInstagram className=' text-white opacity-30 hover:opacity-100 cursor-pointer' />
                        </div>

                        <div className='h-[1px] bg-blue-600 my-6'></div>
                        <p>We promise good deals & promotions!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LastedBowlsNews