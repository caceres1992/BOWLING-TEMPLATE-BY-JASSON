
import React from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'
const ClientSay = () => {
    return (
        <div className='py-20 bg-slate-100'>
            <div className='max-w-7xl mx-auto  text-center'>
                <h2 className=' border-b-blue-400 mx-auto mb-2 border-b-2 w-fit text-2xl text-gray-700 '>WHAT PEOPLE SAY</h2>
                <p className='text-sm text-gray-400'>See why clients love us & come to have fun.</p>


                <div className='flex flex-col md:flex-row md:items-center pt-20'>
                    <div className='w-full md:w-1/2 h-96  border'>
                        <img
                            className='w-full h-full object-cover'
                            src='https://tinybeans.com/wp-content/uploads/2019/02/bowling-alleys-portland-family-grand-central-cc-instagram.jpg' />
                    </div>
                    <div className='border bg-gray-200 flex-1 h-96 w-full '>
                        <div className=' ml-auto p-10 '>
                            <RiDoubleQuotesL className="text-3xl lg:text-5xl" />
                            <p className=' text-sm lg:text-base text-justify pl-10 text-gray-700'>
                                My son had a lovely birthday party and would recommend it to others.
                                We love the venue and we will be back.
                                Everything was ready and looked super when we arrived.
                                The children a lovely time and the venue was perfect.
                                What I liked about that is was very secure and safe.
                                The food was perfect and thanks again.
                            </p>

                            <p className='text-gray-800 text-sm lg:text-base font-bold pt-10'>CAROL R. CROY</p>
                            <p className='text-blue-700 text-xs font-bold'>- NEW YORK</p>
                            <p className='text-gray-400 text-xs text-right font-light'>January 02 2022</p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ClientSay