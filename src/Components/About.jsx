import React from 'react'

const About = () => {
  return (
    <div className=' bg-gray-200 '>
        
        <div className='lg:flex items-center justify-between p-3 lg:p-9 lg:space-x-12'>
          
            
            <div className='lg:w-1/2 space-y-8 my-10'>
            <h1  className='text-3xl  font-bold underline decoration-4 decoration-pink-500  underline-offset-8  '>About Me</h1>
            
                <h3 className='font-bold text-xl'>Hello, I am <span className='text-green-500'> Khemraj Saud</span></h3>
                <h1 className='text-3xl font-bold '>I am a Mern stack Developer.</h1>
                <p className=' text-justify '>I’m Khemraj Saud, a frontend developer with a strong passion for creating visually appealing and highly functional web applications. My journey in web development began with a curiosity for design and evolved into a full-fledged passion for coding.I specialize in ReactJS and JavaScript, crafting responsive, user-centric interfaces that deliver seamless digital experiences. Currently, I’m exploring Next.js and MongoDB to enhance my backend and full-stack development skills.</p>
                
                    
                </div>
                <div className=' lg:w-1/2 space-y-7'>
                    <h1 className='text-xl font-bold'>Contact</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta enim ipsa veniam dicta facere laudantium assumenda corrupti cum aliquam! Dicta est, aliquam enim dolore saepe neque hic unde totam cupiditate.</p>
                       <button className='bg-blue-500 rounded-md px-4 p-2 gap-10 text-white font-bold'>Hire Me</button>
                       <button className='border-2 border-blue-600 px-4 p-2 rounded-md ml-5'>Dowonload CV</button>
                        
                    </div>

            
        </div>
      
    </div>
  )
}

export default About
