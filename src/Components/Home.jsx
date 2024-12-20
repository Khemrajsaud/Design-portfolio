import React from 'react'
import Image from "../Components/Image/myprofile.png";

const Home = () => {
  return (
    <div className='bg-red-100'>
        <div className='lg:flex items-center justify-between   md:grid-flow-col gap-8'>
            <div className=' lg:w-1/2 lg:my-28 p-9 '>
                <h3 className='text-2xl text-green-500'>Hi I'm Khemraj Saud</h3><br />
                <h1 className='text-4xl font-bold   md:text-2xl text-yellow-500 sm:text-balance'>Full Stack Developer</h1><br /><br />
                <p className=''>I am a dedicated and passionate full-stack MERN developer with a strong foundation in modern web development technologies.My goal is to leverage my skills and knowledge to contribute to innovative web applications that solve real-world problems.</p>
                <br />

                <button className='border-spacing-1 rounded-md p-2 px-3 border-2  border-blue-500 shadow-gray-300'>My Project</button>
            </div>
            <div className='flex items-center justify-center lg:w-1/2'>
               <img className='w-[300px] rounded-full  '  src={Image} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Home
