import React from 'react'

const About = () => {
  return (
    <div className=' bg-gray-200 '>
        
        <div className='lg:flex items-center justify-between p-3 lg:p-9 lg:space-x-12'>
          
            
            <div className='lg:w-1/2 space-y-8 my-10'>
            <h1  className='text-3xl  font-bold underline decoration-4 decoration-pink-500  underline-offset-8  '>About Me</h1>
            
                <h3 className='font-bold text-xl'>Hello, I am <span className='text-green-500'> Khemraj Saud</span></h3>
                <h1 className='text-3xl font-bold '>I am a Full stack Mern Developer.</h1>
                <p className=' text-justify '>Through extensive research on online resources as well as self-guided learning and hands-on projects, I have gained proficiency in the MERN stack, encompassing MongoDB, Express.js, React.js, and Node.js. My goal is to leverage my skills and knowledge to contribute to innovative web applications that solve real-world problems. I am excited to embark on a career path that aligns with my passion for coding and problem-solving. I am open to internships, freelance projects, or entry-level positions that offer the opportunity to learn and grow.</p>
                
                    
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
