import React from "react";
import { FiFileText, FiGlobe, FiUserCheck } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { AiOutlineTrophy } from "react-icons/ai";
import { BiArrowFromBottom } from "react-icons/bi";
import { PiSparkleFill } from "react-icons/pi";
import rasm from "../assets/imgage.jpg";

function About() {
  return (
    <div
      id="about"
      className="pb-20 z-0 h-[90vh] pt-30  flex flex-col justify-center "
    >
      <div className="container">
        <div className="flex flex-col items-center gap-5 text-shadow-[0_0_100px_blue]">
          <h1
            data-aos="zoom-in-up"
            data-aos-offset="20"
            className="text-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          >
            About Me
          </h1>
          <p
            data-aos="zoom-in-up"
            data-aos-offset="10"
            className="flex items-center gap-2 text-md md:text-xl text-white/80"
          >
            <PiSparkleFill className="text-purple-400" />
            Transforming ideas into digital experiences
            <PiSparkleFill className="text-purple-400" />
          </p>
        </div>
        {/* about qisim */}
        <div className="flex flex-col-reverse md:flex-row md:justify-around mt-10 items-center gap-10">
          {/* chap tomon */}
          <div className="flex flex-col items-center text-center gap-5 md:text-left md:items-start">
            <h1 data-aos='fade-right' className="text-4xl md:text-5xl font-bold text-white">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#9210b3] to-[#6366f1] ">
                Hello, I'm
              </div>
              <div className="">Parpiboyev Xurshidbek</div>
            </h1>
            <p data-aos='fade-up' className="max-w-md text-white/70">
              I'm a Front-End developer with a background in Computer
              Networking. I focus on building clean, responsive, and
              user-friendly websites that bring ideas to life.
            </p>
            <a
            data-aos='fade-up'
            data-aos-delay='100'
              href="#portfolio"
              className="flex group relative items-center px-4 py-2 border-3 overflow-hidden border-purple-500/50 rounded-md gap-2 font-medium hover:text-purple-500 text-white"
            >
              <div className="absolute w-full top-0 left-0 duration-200 translate-0 group-hover:-translate-y-full h-full bg-purple-500/50"></div>
              <FaCode />
              View Project
            </a>
          </div>
          {/* img tomon */}
          <div className="">
            <div
              className="relative group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="w-60 h-60 sm:w-70 sm:h-70 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
                  <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-b rounded-full from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
                  <img
                    src={rasm}
                    alt="Profile"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                    <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
