import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-blue-700 ">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto text-blue-200 text-sm '>
        <div className='space-y-4 px-2 md:px-0'>
          <h4 className='text-2xl'>LOGO</h4>
          <p>We have six regulation size bowling lanes, outfitted with
            automatic scoring and ball speed technology.
          </p>
          <p>4087 Terra Cotta Street Remer, MN 67567</p>
          <p>(012) 345 - 6789</p>
          <p>info@bowlingperu.com</p>

        </div>
        <div>

          <div className='space-y-4 px-2 md:px-0'>
            <h4 className='text-2xl'>Opening Hours</h4>
            <div className='flex justify-between max-w-[250px] items-center'>
              <p className='opacity-60  font-bold'>Mon</p>
              <p>9:00am - 10:00pm</p>
            </div>
            <div className='flex justify-between max-w-[250px] items-center'>

              <p className='opacity-60  font-bold'>Tue</p>
              <p>9:00am - 10:00pm</p>
            </div>
            <div className='flex justify-between max-w-[250px] items-center'>
              <p className='opacity-60  font-bold'>Wed</p>
              <p>9:00am - 10:00pm</p>
            </div>
            <div className='flex justify-between max-w-[250px] items-center'>
              <p className='opacity-60  font-bold'>Thu</p>
              <p>9:00am - 10:00pm</p>
            </div>
            <div className='flex justify-between max-w-[250px] items-center'>
              <p className='opacity-60  font-bold'>Fri</p>
              <p>9:00am - 10:00pm</p>
            </div>
            <div className='flex justify-between max-w-[250px] items-center'>
              <p className='opacity-60  font-bold'>Sat</p>
              <p>9:00am - 10:00pm</p>
            </div>
            <div className='flex justify-between max-w-[250px] items-center'>
              <p className='opacity-60  font-bold'>Sun</p>
              <p>9:00am - 10:00pm</p>
            </div>







          </div>
        </div>
        <div className='space-y-4 px-2 md:px-0'>
          <h4 className='text-2xl'>Latest Events</h4>
          <div className='flex gap-x-3 '>
            <IoIosArrowForward className='mt-1' />
            <div>
              <p>White Rose Blend Trophy</p>
              <p className='opacity-70 text-xs'>July, Wk 20 Tues 17Th</p>
            </div>
          </div>

          <div className='flex gap-x-3 '>
            <IoIosArrowForward className='mt-1' />
            <div>
              <p>White Rose Blend Trophy</p>
              <p className='opacity-70 text-xs'>July, Wk 20 Tues 17Th</p>
            </div>
          </div>

          <div className='flex gap-x-3 '>
            <IoIosArrowForward className='mt-1' />
            <div>
              <p>White Rose Blend Trophy</p>
              <p className='opacity-70 text-xs'>July, Wk 20 Tues 17Th</p>
            </div>
          </div>

          <div className='flex gap-x-3 '>
            <IoIosArrowForward className='mt-1' />
            <div>
              <p>White Rose Blend Trophy</p>
              <p className='opacity-70 text-xs'>July, Wk 20 Tues 17Th</p>
            </div>
          </div>
        </div>
        <div className='space-y-4 px-2 md:px-0'>
          <h4 className='text-2xl'>Blog Posts</h4>
          <div className='flex gap-x-3 '>
            <IoIosArrowForward className='mt-1' />
            <div>
              <p>Four-strong team for Hong Kong Classic announced</p>
              <p className='opacity-70 text-xs'>July, Wk 20 Tues 17Th</p>
            </div>
          </div>

          <div className='flex gap-x-3 '>
            <IoIosArrowForward className='mt-1' />
            <div>
              <p>National Championships to be introduced from 2017</p>
              <p className='opacity-70 text-xs'>Jua, Wk 20 Tues 17Th</p>
            </div>
          </div>


        </div>
      </div>
      <div className='flex items-center gap-x-3 container mx-auto'>
        <div className='h-[1px] w-full bg-slate-100'></div>
        <button className='h-12 w-12 text-sm  rounded-full bg-white text-blue-700'>Top</button>
      </div>
    </footer>
  )
}

export default Footer