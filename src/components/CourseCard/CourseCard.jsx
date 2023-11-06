import React from 'react'
import { course } from '../../services/courseAPI'
const CourseCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
            course.map((item)=>{
                return(
                    <div class="flex max-w-sm rounded overflow-hidden shadow-lg bg-yellow-100 mb-8 md:mb-0 ">
                    <div class="px-6 py-4 bg-yellow-100">
                        <div class="font-bold text-2xl mb-2 bg-transparent text-center">{item.title}</div>
                        <p class="text-gray-500 bg-transparent line-clamp-2 text-sm">
                        {item.description}
                        </p>
                        <span className='bg-transparent text-sm font-semibold hover:text-blue-500 cursor-pointer'>View more</span>
                        <div className='bg-transparent flex justify-center animate-float'>
                          <img className="bg-transparent h-40 w-40" src={`${item.image}`} alt="Sunset in the mountains"/>
                        </div>
                    </div>   
                    </div>
                )
            })
    }
    </div>
  )
}

export default CourseCard