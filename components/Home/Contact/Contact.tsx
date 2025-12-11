import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Text content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out today and let’s discuss how I can help you achieve your goals.
          </p>

          <div className="mt-7 space-y-4">
            <div className="flex items-center space-x-3">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                +55 21 97269-2860
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                dpo.dev11@gmail.com
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                Rio de Janeiro, Brazil
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center mt-8 space-x-3">
            {[FaFacebookF, FaYoutube, FaTwitter, FaInstagram].map((Icon, i) => (
              <div
                key={i}
                className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300"
              >
                <Icon className="text-white w-6 h-6" />
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="md:p-10 p-5 bg-[#131332]/60 backdrop-blur-xl border border-white/10 rounded-lg"
        >
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />

            <textarea
              placeholder="Your Message"
              className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
            ></textarea>
          </div>

          <button className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
