import React from 'react'
import CourseCard from './CourseCard'

const Courses = () => {
  return (
    <div className='mt-20 mx-20 mb-16'>
        <div className='text-center mb-12'>
            <h1 className='text-2xl md:text-4xl font-bold mb-1'>Top rated courses</h1>
            <span className='text-sm'>"Unlock your potential with our comprehensive training courses,
            designed to empower you with the skills you need."</span>
        </div>
        <CourseCard/>
    </div>
  )
}

export default Courses