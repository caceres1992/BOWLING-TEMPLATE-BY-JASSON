import React from 'react'

const Schedules = () => {
    return (
        <div className='bg-gray-100 text-center py-20'>

            <h2 className=' border-b-blue-400 mx-auto mb-2 border-b-2 w-fit text-2xl text-gray-700 '>HOURS & PRICES</h2>
            <p className='text-sm text-gray-400'>Our working hours & price list.</p>

            <div className='max-w-7xl mx-auto pt-10 '>
                <div className='flex  justify-around md:justify-between items-center gap-5 md:gap-10 lg:gap-20  px-4 flex-wrap gap-y-10'>
                    <div className='max-w-sm'>
                        <h4>Monday-Thursday</h4>
                        <div className='text-gray-500 text-xs md:text-sm mt-6'>
                            <p className='text-blue-700 mb-1'>12am-5pm</p>
                            <p>$4.00 Game / Person</p>
                            <p>$4.00 Shoe Rental</p>
                        </div>

                        <div className='text-gray-500 text-xs md:text-sm mt-6'>
                            <p className='text-blue-700 mb-1'>12am-5pm</p>
                            <p>$4.00 Game / Person</p>
                            <p>$4.00 Shoe Rental</p>

                        </div>

                        <div className='text-gray-500 text-xs md:text-sm mt-6'>
                            <p className='text-blue-700 mb-1'>12am-5pm</p>
                            <p>$4.00 Game / Person</p>
                            <p>$4.00 Shoe Rental</p>

                        </div>
                    </div>

                    <div className='max-w-sm'>
                        <h4>Friday</h4>
                        <div className='text-gray-500 text-xs md:text-sm mt-6'>
                            <p className='text-blue-700 mb-1'>5pm-9pm</p>
                            <p>$4.00 Game / Person</p>
                            <p>$4.00 Shoe Rental</p>
                        </div>

                        <div className='text-gray-500 text-xs md:text-sm mt-6'>
                            <p className='text-blue-700 mb-1'>9pm-Midnight</p>
                            <p>$4.00 Game / Person</p>
                            <p>$4.00 Shoe Rental</p>

                        </div>

                        <div className='text-gray-500 text-xs md:text-sm mt-6'>
                            <p className='text-blue-700 mb-1'>12am-5pm</p>
                            <p>$4.00 Game / Person</p>
                            <p>$4.00 Shoe Rental</p>

                        </div>
                    </div>

                    <div className='max-w-sm'>
                        <h4>Saturday</h4>
                        <div className='text-gray-500 text-xs md:text-sm mt-6'>
                            <p className='text-blue-700 mb-1'>2am-6pm</p>
                            <p>$4.00 Game / Person</p>
                            <p>$4.00 Shoe Rental</p>
                        </div>

                        <div className='text-gray-500 text-xs md:text-sm mt-6'>
                            <p className='text-blue-700 mb-1'>5pm-6pm</p>
                            <p>$5.00 Game / Person</p>
                            <p>$4.00 Shoe Rental</p>

                        </div>

                        <div className='text-gray-500 text-xs md:text-sm mt-6'>
                            <p className='text-blue-700 mb-1'>2am-9pm</p>
                            <p>$5.00 Game / Person</p>
                            <p>$5.00 Shoe Rental</p>

                        </div>
                    </div>
                </div>

                <button className='bg-black text-white font-light px-8 rounded-xl mt-10
                text-sm py-2'>Contact Us</button>
            </div>
        </div>
    )
}

export default Schedules