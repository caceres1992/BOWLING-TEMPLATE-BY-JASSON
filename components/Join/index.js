import React from 'react'

const Join = () => {
    return (
        <div className='max-w-7xl mx-auto py-20 text-center'>

            <h2 className=' border-b-blue-400 mx-auto mb-2 border-b-2 w-fit text-2xl text-gray-700 '>JOIN US TODAY</h2>
            <p className='text-sm text-gray-400'>The membership year runs from January to December.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20  mt-6'>


                <div className='  space-y-2  '>
                    <div className='text-blue-700 text-3xl flex items-center justify-center '>$120
                        <span className='text-white bg-blue-700 text-xs py-0.5 px-2 rounded-lg'>yearly</span></div>

                    <h4 className='text-gray-500 font-medium'>ASSOCIATE MEMBER</h4>

                    <p className='text-xs text-gray-400 font-light  max-w-[280px] mx-auto lg:max-w-none '>
                        Someone who is member of another recognized lawn bowling club.
                    </p>
                </div>

                <div className='  space-y-2'>
                    <div className='text-blue-700 text-3xl flex items-center justify-center '>$120
                        <span className='text-white bg-blue-700 text-xs py-0.5 px-2 rounded-lg'>yearly</span></div>

                    <h4 className='text-gray-500 font-medium'>REGULAR MEMBER</h4>

                    <p className='text-xs text-gray-400 font-light  max-w-[280px] mx-auto lg:max-w-none '>
                        Enjoys the full rights and privileges of the club... That's right, just $15 per month!
                    </p>
                </div>

                <div className=' space-y-2'>
                    <div className='text-blue-700 text-3xl flex items-center justify-center '>$120
                        <span className='text-white bg-blue-700 text-xs py-0.5 px-2 rounded-lg'>yearly</span></div>

                    <h4 className='text-gray-500 font-medium'>TEMPORARY MEMBER</h4>

                    <p className='text-xs text-gray-400 font-light  max-w-[280px] mx-auto lg:max-w-none '>
                        A person who joins the club on a temporary basis; no more than 4 months in a calendar year.
                    </p>
                </div>

                <div className='  space-y-2'>
                    <div className='text-blue-700 text-3xl flex items-center justify-center '>$90
                        <span className='text-white bg-blue-700 text-xs py-0.5 px-2 rounded-lg'>yearly</span></div>

                    <h4 className='text-gray-500 font-medium'>YOUTH MEMBER</h4>

                    <p className='text-xs text-gray-400 font-light  max-w-[280px] mx-auto lg:max-w-none '>
                        A person who is at least 12(unless participating in a club-sanctioned youth program).
                    </p>
                </div>


            </div>

            <button className='bg-black text-gray-100 py-2 px-5 rounded-xl mt-10'>Subscribe Now</button>
        </div>
    )
}

export default Join