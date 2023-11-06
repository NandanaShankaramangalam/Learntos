import React from 'react'
import Card from './Card'
import './Arrow.css'

const Trainings = () => {
  return (
    <>
    <div className='bg-custom-bluegradient pt-16'>
        <div className='bg-transparent'>
        <h1 className='text-2xl md:text-4xl font-bold bg-transparent text-center text-white'>Discover all the training programs</h1>
      </div> 
    <div className='h-auto bg-transparent'>
      <div className='mx-20 bg-transparent'>
       <Card/>
      </div>
    </div>  
    <div className='bg-transparent text-white pb-10 flex justify-end me-20'>
       <span className='bg-transparent cursor-pointer'>View all training programs &gt;&gt;&gt;</span> 
    </div>
    </div>
    </>
  )
}

export default Trainings