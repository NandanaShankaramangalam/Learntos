import React from 'react'
import MiniCard from '../MiniCard/MiniCard'

const Banner = () => {
  return (
    <div className='mt-10 mb-5 relative'>
        <div className='h-72 md:h-96 bg-custom-gradient flex flex-col gap-3 text-center md:gap-5 justify-center items-center font-bold text-2xl md:text-5xl text-white'>
            <span className='bg-transparent'>Elavate your skills, achieve your goals:</span> 
            <span className='bg-transparent'>Join our expert-led training program today</span> 
        </div>
        <MiniCard title={"Proficient Classes"} className={"bottom-[-0.8rem] md:bottom-5 left-8 md:left-16"}/>
        <MiniCard title={"Delighted Students"} className={"top-[-1rem] md:top-5 right-10 md:right-16"}/>
    </div>
  ) 
}

export default Banner