import React from 'react'
import { CourseSvg, PartTimeSvg } from '../SvgIcons/SvgIcons'
import { svgs } from '../../services/svgAPI'
const StatisticsCard = () => {
    console.log("svggd=",svgs);
  return (
    <div className='grid grid-cols-2 md:grid-cols-6'>
        {
            svgs.map((item,index)=>{
                return(
                   <div className={`${index>1 && `md:mt-0 mt-8`}`}>
                    <div className='flex justify-center h-20'>
                        <img src={`${item.icon}`} alt="" />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-lg font-bold'>{item.number}+</h1>
                        <h3>{item.title}</h3>
                    </div>
                   </div>   
                )
                 
            })
        
        } 
    </div>
  )
}

export default StatisticsCard