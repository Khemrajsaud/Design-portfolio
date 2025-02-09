

import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8083gbn', 'template_vos2fnd', form.current, {
        publicKey: 'W8u68MMkBbYMH0yWY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className=" container mx-8">
      <h1 className="lg:text-center text-3xl font-bold underline decoration-pink-600 pl-6 decoration-4 pt-8">
        Contact Me
      </h1>
      {/* Parent Flex Container */}
      <div className="lg:flex  p-3  my-12 ">
        {/* Left Section */}
        <div className=" lg:w-[45%] ">
          <h1 className="lg:text-2xl font-bold mb-4">Let's Work Together</h1>
          <p className="mb-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            dolores, sint placeat laborum repudiandae debitis incidunt
            necessitatibus ea corporis sequi dolor eos atque, asperiores non
            doloribus esse quibusdam ab pariatur.
          </p>

          {/* Phone */}
          <div className="flex items-center mb-4">
            <IoIosCall className="bg-gray-700 w-6 h-7 text-green-500 rounded-md" />
            <div className="ml-4">
              <p className="font-bold">Phone</p>
              <p className="text-sm text-gray-600">(+977) 9849741323</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center mb-4">
            <MdEmail className="bg-gray-700 w-6 h-7 text-green-500 rounded-md" />
            <div className="ml-4">
              <p className="font-bold">Email</p>
              <p className="text-sm text-gray-600">khemrajsaud56@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="bg-gray-700 w-6 h-7 text-green-500 rounded-md" />
            <div className="ml-4">
              <p className="font-bold">Address</p>
              <p className="text-sm text-gray-600">KTM, Baudha</p>
            </div>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
       

        <div className="lg:w-[30%] lg:ml-[150px] w-full  lg:p-4 rounded-lg shadow-lg">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Full Name"
            name="to_name"
            className="w-full my-2 bg-gray-100 border-t-4  shadow-gray-500 shadow-md text-black rounded-md focus:outline-none p-3"
          />
          <input
            type="email"
            placeholder="Email Address"
            name="from_name"
            className="w-full my-2 border-t-4    shadow-gray-500 shadow-md text-black  rounded-md focus:outline-none p-3"
          />
          
          
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full my-2 border-t-4   shadow-gray-500 shadow-md text-black  rounded-md focus:outline-none p-3"
          ></textarea>
          
          <input type="submit" value="Send" className="w-full text-white py-3 rounded-md hover:bg-green-600 transition cursor-pointer" />
          </form>
        </div>
       
      </div>
    </div>
  );
};

export default Contact;

