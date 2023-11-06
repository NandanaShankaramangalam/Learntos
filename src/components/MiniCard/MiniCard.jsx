import React from 'react'

const MiniCard = ({title, className, icon}) => {
  return (
    <div className={`absolute ${className} rounded animate-float `}>
      <div className='flex justify-center h-20 w-40 bg-white rounded z-10 text-center items-center'>
        <span className='bg-transparent p-2 text-cyan-800'>{title}</span>     
      </div>
    </div>
  )
}

export default MiniCard  