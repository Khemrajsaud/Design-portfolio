import React from 'react'
import myProfile from "../Components/Image/myProfile.png"
import { assets } from './Assets'

const Home = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>

      <div className='mt-[100px]'>
        <img src={myProfile} alt="" className='rounded-full w-32' />
      </div>
      <h3 className=' flex items-end gap-2 text-xl md:text-2xl mb-3'>Hi ! I'm Khemraj Saud 
        <img src={assets.hand_icon} alt="" className='w-6' />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px]' >
        Frontend Web developer based in Nepal
      </h1>
      <p  className='max-w-2xl mx-auto '>
      I am a dedicated and passionate MERN-Stack developer with a strong foundation in modern web development technologies.My goal is to leverage my skills and knowledge to contribute to innovative web applications that solve real-world problems.
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 ,t-4'>
        <a href="" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 '>Contact me
           <img src={assets.right_arrow} alt="" className='w-4' /></a>

           <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My resume
           <img src={assets.download_icon} alt="" className='w-4' /></a>
      </div>

    </div>
  )
}

export default Home
