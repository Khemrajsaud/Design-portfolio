import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkMode }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8083gbn", "template_vos2fnd", form.current, {
        publicKey: "W8u68MMkBbYMH0yWY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className=" flex items-center justify-center px-6 pt-10">
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-8">
        {/* Section Heading */}

        <h2 className="text-center text-3xl lg:text-4xl font-bold">
          Get in touch
        </h2>
        <h4 className="text-center text-lg pt-4 font-semibold ">Connect with me</h4>
       
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
          <div className="flex flex-col  sm:flex-row sm:space-x-4 gap-2">
            <input
              type="text"
              placeholder="Enter your name"
              name="to_name"
              required
              className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-4 py-3  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="from_name"
              required
              className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            name="message"
            placeholder="Enter your message"
            rows="4"
            required
            className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className={` py-2 px-6  border border-gray-500  rounded-full lg:ml-[300px] ml-[20px] transition ${
              isDarkMode
                ? "bg-gray-800 text-white shadow-md"
                : "bg-white text-black shadow-md"
            } `}
          >
            Submit now →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
