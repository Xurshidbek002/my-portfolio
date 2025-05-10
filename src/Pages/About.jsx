import React from "react";
import { FiGlobe } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import { PiSparkleFill } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaArrowDown } from "react-icons/fa";
import resume from "../../public/XurshidbekResume.pdf";
import rasm from "../assets/logo.jpg";
import { IoCode } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const base = [
  {
    num: "5",
    title: "about.1.title",
    text: "about.1.text",
    icon: <IoCode />,
    aos: "fade-right",
    href: "#portfolio",
  },
  {
    num: "1",
    title: "about.2.title",
    text: "about.2.text",
    icon: <LiaCertificateSolid />,
    aos: "fade-up",
    href: "#portfolio",
  },
  {
    num: "1+",
    title: "about.3.title",
    text: "about.3.text",
    icon: <FiGlobe />,
    aos: "fade-left",
    href: "#portfolio",
  },
];

function About() {
  const { t } = useTranslation();
  return (
    <div id="about" className="pb-20">
      <div className="container">
        <div className="flex flex-col items-center gap-5 text-shadow-[0_0_100px_blue]">
          <h1
            data-aos="zoom-in-up"
            data-aos-offset="20"
            className="text-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          >
            {t("about.title")}
          </h1>
          <p
            data-aos="zoom-in-up"
            data-aos-offset="10"
            className="flex items-center gap-2 text-sm md:text-md md:text-xl text-white/80"
          >
            <PiSparkleFill className="text-purple-400" />
            {t("about.text")}
            <PiSparkleFill className="text-purple-400" />
          </p>
        </div>
        {/* about qisim */}
        <div className="flex flex-col-reverse md:flex-row md:justify-around mt-10 items-center gap-10">
          {/* chap tomon */}
          <div className="flex flex-col items-center text-center gap-5 md:text-left md:items-start">
            <h1
              data-aos="fade-right"
              className="text-3xl md:text-5xl font-bold text-white"
            >
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#9210b3] to-[#6366f1] ">
                {t("about.stitle")}
              </div>
              <div className="">{t("about.name")}</div>
            </h1>
            <p
              data-aos="fade-up"
              className="max-w-md text-sm md:text-md text-white/70"
            >
              {t("about.stext")}
            </p>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-offset="10"
            >
              <a
                href={resume}
                download="XurshidbekResume.pdf"
                className="flex group relative duration-700 px-4 py-2 overflow-hidden rounded-md font-medium text-white"
              >
                <span className="z-1 flex items-center gap-2">
                  {t("about.resume")}
                  <FaDownload />
                </span>

                <div className="absolute w-full top-0 left-0 duration-700 scale-100 rounded-md hover:opacity-0 group-hover:-scale-0 h-full bg-purple-500/50" />
                <div className="absolute inset-0 rounded-md border-3 border-white scale-0 group-hover:scale-100 transition-transform duration-500 animate-pulse-slow" />
              </a>
            </div>
          </div>
          {/* img tomon */}
          <div className="w-auto h-auto">
            <div data-aos="zoom-in-up" data-aos-duration="3000" className="w-full flex md:hidden justify-center">
              <img src={rasm} alt="" className="w-70 h-70 rounded-full" />
            </div>
            <div
              className="relative group hidden md:block"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="absolute -inset-6 opacity-[25%] z-0">
                {/* Gradientlar va bagni mobil uchun olib tashlaymiz */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50 hidden md:block" />
              </div>
              <div className="relative">
                <div className="w-60 h-60 sm:w-70 sm:h-70 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
                  <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-b rounded-full from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 " />
                  <img
                    src={rasm}
                    alt="Profile"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 will-change-transform backface-hidden"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                    <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-2 md:px-5">
          {base.map((item, index) => (
            <a
              href={item.href}
              key={index}
              data-aos={item.aos}
              // data-aos-offset="100"
              className=""
            >
              <div className="w-full relative group rounded-2xl overflow-hidden bg-blue-700/20 hover:bg-blue-700/35  p-5 flex flex-col gap-5 hover:scale-105 duration-1000">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/5 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                <div className="flex justify-between items-center text-5xl text-white">
                  <div className="bg-blue-900/30 p-3 rounded-full group-hover:rotate-15 duration-700">
                    {item.icon}
                  </div>
                  <div
                    data-aos="fade-up-left"
                    data-aos-duration="2000"
                    data-aos-delay="700"
                    data-aos-offset="30"
                    className="font-extrabold"
                  >
                    {item.num}
                  </div>
                </div>
                <div className="text-white">
                  <h4
                    data-aos="fade-up"
                    data-aos-offset="20"
                    className="text-xl font-bold uppercase"
                  >
                    {t(item.title)}
                  </h4>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-offset="20"
                    className="flex justify-between"
                  >
                    <p className="text-white/70 text-sm">{t(item.text)}</p>
                    <FaArrowDown className="rotate-200 group-hover:rotate-250 duration-1000" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
