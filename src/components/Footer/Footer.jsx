import React from 'react'

const Footer = () => {
  return (
    <div className='h-auto mt-16 px-20 pt-10 bg-gray-800 text-white'>
    <div className='bg-transparent grid grid-cols-1 md:grid-cols-3 '>
      <div className='bg-transparent '>
         <img src="images/footer_logo.png" className='bg-transparent h-20' alt="" />
         <div className='pt-10 bg-transparent'>
            <span className='bg-transparent '>Phone - +91 7907086372</span>
         </div>
         <div className='pt-10 bg-transparent'>
            <span className='bg-transparent '>Email - info@learntos.com</span>
         </div>    
      </div>
      
      <div className='bg-transparent cursor-pointer'>
        <div className='bg-transparent pt-4'><span className='course'>Courses</span></div>
        <div className='bg-transparent pt-3'><span className='bg-transparent text-md'>Salesforce Certification Training</span></div>
        <div className='bg-transparent pt-3'><span className='bg-transparent text-md pt-3'>Angular Certification Training</span></div>
        <div className='bg-transparent pt-3'><span className='bg-transparent text-md'>IoT Certification Training on Azure</span></div>
        <div className='bg-transparent pt-3'><span className='bg-transparent text-md'>Selenium Certification Training</span></div>
        <div className='bg-transparent pt-3'><span className='bg-transparent text-md'>Web Developer Certification Training</span></div>
      </div>

      <div className='bg-transparent '>
      <div className='bg-transparent pt-4'><span className='course'>Address</span></div>
        <div className='bg-transparent pt-3'><p className='bg-transparent text-md whitespace-pre-line'>
        Rowdha Tower 
        Passport Office 
        Building Near 
        Thrissur Railway 
        Station Thrissur 
        Kerala</p></div>
      </div>
    </div>
    <div className='bg-transparent text-sm text-center mt-8 pb-2'>
      © 2023 Learntos. All Rights Reserved. Designed By Nandana S
      </div>
    </div>
  )
}

export default Footer