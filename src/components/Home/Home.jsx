import React, { useRef, useState } from 'react'
import Statistics from '../StatisticsCard/Statistics'
import Banner from '../Banner/Banner'
import Courses from '../CourseCard/Courses'
import Trainings from '../Trainings/Trainings'
import TopSection from '../TopSection/TopSection'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Home = () => {
  const courseSection = useRef(null);
  const handleSections = (section) =>{
    if (section=="courseSection") {
      if(courseSection.current){
        courseSection.current.scrollIntoView({ behavior: 'smooth' });
      }
        
    }
  }
  return (
    <>
    <Navbar handleSection={handleSections}/>
    <div className='mt-32 text-custom-blue '>
        <TopSection/>
        <Banner/>
        <Statistics/>
        <Courses courseSection={courseSection}/>
        <Trainings/>
    </div>
    <Footer/>
    </>
  )
}

export default Home