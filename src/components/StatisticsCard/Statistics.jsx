import React from 'react'
import StatisticsCard from './StatisticsCard'

const Statistics = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center">
            <div className="mt-6 mb-8 text-center">
                <h1 className='text-2xl font-bold'>What we offer?</h1>
                <p>The quickest and efficient way of learning!</p>
            </div>
        </div>
        <StatisticsCard/>
    </div>
  )
}

export default Statistics