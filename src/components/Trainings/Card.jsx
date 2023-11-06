import React from 'react'
import { programs } from '../../services/programAPI'
import './Trainings.css'
const Card = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 mb-5 pb-8 bg-transparent gap-4'>
    {
        programs.map((item)=>{
            return(
                <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10 transform transition duration-300 hover:scale-105">
                <div className="px-6 py-4">
                    <img className="w-full" src={`${item.image}`} alt="Sunset in the mountains"/>
                    <div className="font-bold text-xl mb-2 mt-3 text-center">{item.title}</div>
                </div> 
                <div className='flex justify-center pb-8'>
                    <button class="button">
                    Explore
                    <div class="arrow bg-transparent">›</div>
                    </button>
                    </div>   
                </div>
                
            )
        })    
    }
    </div>
  )
}

export default Card