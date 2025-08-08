


import { useRef } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast"; // ✅ Using react-hot-toast

// src/Components/Assets.js
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

 const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/khemraj-saud-76777822a/",
    icon: <FaLinkedin />,
  },
  {
    name: "Twitter",
    url: "https://x.com/khemrajsaud",
    icon: <FaTwitter />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Khemrajsaud",
    icon: <FaGithub />,
  },
  {
    name: "Email",
    url: "khemrajsaud56@gmail.com",
    icon: <FaEnvelope />,
  },
];



const Contact = ({ isDarkMode }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zawidxi", "template_a6bfwsa", form.current, {
        publicKey: "W8u68MMkBbYMH0yWY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Your message has been sent! I'll get back to you soon.");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(`There was an error: ${error.text}. Please try again.`);
        }
      );
  };

  return (
    <div
      id="contacts"
      className={`w-full px-[10%] pt-[120px] lg:pt-[100px] transition-colors duration-300 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      {/* Section Heading */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2
          className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDarkMode
              ? "text-white"
              : "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
          }`}
        >
          Get in Touch
        </h2>
        <p
          className={`text-center max-w-2xl mx-auto text-lg leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Have a question or want to work together? Feel free to reach out!
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div
        className={`w-full max-w-4xl mx-auto shadow-xl rounded-xl p-8 md:p-12 animate-fade-in-up ${
          isDarkMode
            ? "bg-gray-800 border border-gray-700"
            : "bg-white border border-gray-200"
        }`}
      >
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              name="to_name"
              required
              className={`w-full rounded-lg px-5 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-100 border-gray-300 text-black placeholder-gray-500"
              }`}
            />
            <input
              type="email"
              placeholder="Your Email"
              name="from_name"
              required
              className={`w-full rounded-lg px-5 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-100 border-gray-300 text-black placeholder-gray-500"
              }`}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className={`w-full rounded-lg px-5 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                : "bg-gray-100 border-gray-300 text-black placeholder-gray-500"
            }`}
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className={`relative group overflow-hidden px-10 py-4 rounded-full flex items-center justify-center mx-auto gap-2 font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md ${
                isDarkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Send Message
              <span className="ml-2">🚀</span>
            </button>
          </div>
        </form>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3
            className={`text-2xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Connect with me
          </h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl transition-colors duration-300 transform hover:scale-125 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Contact;

