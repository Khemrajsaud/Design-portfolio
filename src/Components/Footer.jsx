import React from 'react'

const Footer = () => {
  return (
    <div className=''>
        <div className='w-full h-1 bg-red-500 rounded-md'>
        </div>
        <div>
          <div className='flex justify-between  p-9'>
          <ul className=' cursor-pointer flex flex-col gap-3'>
            <h1 className='font-bold'>RESOURCES</h1>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Project</li>
            
            <li>contact</li>

            


          </ul>
          <ul className='flex flex-col cursor-pointer gap-3 items-center'>
            <h1 className='font-bold'>FOLLOW ME</h1>
            <li>Home</li>
            <li>About</li>
            
           

            


          </ul>
          <ul className='flex flex-col gap-3 cursor-pointer lg:mr-[200px] '>
            <h1 className='font-bold'>LEGAL</h1>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
           

            


          </ul>
          </div>

          
        </div>
        <div className='w-full h-1 bg-red-400'></div>
        <div className='flex justify-between p-9'>
          <h1>Copyright © 2024 Khemrajsaud.
All Rights Reserved</h1>
        </div>
      
    </div>
  )
}

export default Footer
