import React from 'react'

const Hero = () => {
    return (
        <div
            className="bg-[url('https://sparetimetexas.com/img/containers/assets/images/bowling2.jpg/60528bda88769f44985887b8bf3bdb28.jpg')] h-[650px] bg-center bg-cover "
        >
            <div className='h-full bg-[rgba(0,0,0,.6)]'>

                <div className='container mx-auto h-full flex flex-col justify-end'>

                    <div className=' mb-12 space-y-4 px-5 md:px-0 ' >
                        <h1 className=' text-gray-50 titleHero'>Have some fun!</h1>
                        <p className='text-sm text-gray-200 lg:w-[600px] text-justify'>
                            Just a stones throw away from famous Coogee Beach, we pride ouraselves on being a perfect place to spend an afternoon with family & friends.
                        </p>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Hero