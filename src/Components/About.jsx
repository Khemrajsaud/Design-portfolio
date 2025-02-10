import React from 'react'
import { assets } from './Assets'
import { infoList } from './Assets'
import { toolsData } from './Assets'

const About = () => {
  return (
    <div className=' w-full px-[12%] py-10'>
        
         <h4 className='text-center mb-2 text-lg '>Introduction</h4>
         <h2 className='text-center text-3xl lg:text-5xl '>About me</h2>
         <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <div className='w-64 sm:w-80 rounded-3xl max-w-none' >
            <img src={assets.about_me} alt="user"  className='w-full rounded-3xl'/>
          </div>
          <div className='flex-1'>
                <p className='mb-10 max-w-2xl '>
                  I’m Khemraj Saud, a frontend developer with a strong passion for creating visually appealing and highly functional web applications. My journey in web development began with a curiosity for design and evolved into a full-fledged passion for coding.I specialize in ReactJS and JavaScript, crafting responsive, user-centric interfaces that deliver seamless digital experiences. Currently, I’m exploring Next.js and MongoDB to enhance my backend and full-stack development skills.

            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
              {infoList.map(({icon, iconDark, title, description},index)=>(
              <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer'  key={index}>
                <img src={icon} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
              ))}
              
            </ul>

            <h4 className='py-5 font-semibold'>Tools I use</h4>

            <ul className='flex items-center gap-3 sm:gap-5  py-4'>
              {toolsData.map((tool,index)=>(
              <li className='flex items-center justify-center w-12 sm:w-14 aspect-square hover:-translate-y1 duration-500 border border-gray-400 cursor-pointer rounded-lg' key={index}>
                <img src={tool} alt="Tool"  className='w-5 sm:w-7'/>
              </li>

              ))}
            </ul>

          </div>
         </div>

      
    </div>
  )
}

export default About
