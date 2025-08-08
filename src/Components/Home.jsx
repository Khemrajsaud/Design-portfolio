import  'react';
import PropTypes from 'prop-types';
import { IoDownloadOutline } from "react-icons/io5";
import  assets  from '../Components/Image/myProfile.png'; 
import rightarrow from "../Components/Image/right-arrow-white.png";

const Home = ({ isDarkMode }) => {
  const greetingText = "Hi ! I'm Khemraj Saud";
  const words = greetingText.split(' '); 

  return (
    <div id="home" className={`w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-[80px] lg:pt-[40px] transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>
      {/* Profile Image */}
      <div className='lg:mt-[100px] mt-[80px] opacity-0 animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
        <img 
          src={assets} // Using placeholder for myProfile.png
          alt={assets}
          className='rounded-full w-32 h-32 object-cover border-4 border-blue-500 shadow-lg transform hover:scale-105 transition-transform duration-300' 
        />
      </div>

      {/* Greeting with Letter-by-Letter Animation */}
      <h3 className='flex items-end justify-center flex-wrap gap-x-2 text-xl md:text-2xl mb-3 font-semibold'>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split('').map((char, charIndex) => (
              <span
                key={`${wordIndex}-${charIndex}`}
                className="inline-block opacity-0 animate-stagger-fade-in"
                style={{ animationDelay: `${0.8 + (wordIndex * 0.1) + (charIndex * 0.03)}s` }}
              >
                {char === ' ' ? '\u00A0' : char} {/* Non-breaking space for spaces */}
              </span>
            ))}
            {wordIndex < words.length - 1 && <span className="inline-block opacity-0 animate-stagger-fade-in" style={{ animationDelay: `${0.8 + (wordIndex * 0.1) + (word.length * 0.03)}s` }}>&nbsp;</span>}
          </span>
        ))}
        <img 
          src={assets.hand_icon || "/placeholder.svg?height=24&width=24&text=👋"} 
          alt="hand wave" 
          className='w-6 ml-1 opacity-0 animate-bounce-once' 
          style={{ animationDelay: '1.5s' }} 
        />
      </h3>

      {/* Main Title */}
      <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 opacity-0 animate-fade-in-up ${
        isDarkMode ? 'text-white' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent'
      }`} style={{ animationDelay: '0.7s' }}>
        MERN stack Web developer based in Nepal
      </h1>

      {/* Description */}
      <p className={`max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-6 opacity-0 animate-fade-in-up ${
        isDarkMode ? 'text-gray-300' : 'text-gray-700'
      }`} style={{ animationDelay: '0.9s' }}>
        I am a dedicated and passionate MERN-Stack developer with a strong foundation in modern web development technologies. My goal is to leverage my skills and knowledge to contribute to innovative web applications that solve real-world problems.
      </p>

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 opacity-0 animate-fade-in-up' style={{ animationDelay: '1.1s' }}>
        <a 
          href="#contacts" 
          className={`relative group overflow-hidden px-10 py-3 rounded-full flex items-center gap-2 font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            isDarkMode 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          Contact me
          <img 
            src={rightarrow} 
            alt="arrow" 
            className='w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300' 
          />
        </a>
        <a 
          href="/resume.pdf" 
          download 
          className={`relative group overflow-hidden px-10 py-3 rounded-full flex items-center gap-2 font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            isDarkMode 
              ? 'border border-gray-500 text-white hover:bg-gray-700' 
              : 'border border-gray-500 text-black hover:bg-gray-100'
          }`}
        >
          My resume
          <IoDownloadOutline className='text-2xl ml-1 transform group-hover:-translate-y-0.5 transition-transform duration-300'/>
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes staggerFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceOnce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-stagger-fade-in {
          animation: staggerFadeIn 0.4s ease-out forwards;
        }

        .animate-bounce-once {
          animation: bounceOnce 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

Home.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Home;
