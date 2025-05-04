import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaExternalLinkAlt, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuSparkles } from "react-icons/lu";
import Typewriter from "../Components/Typewriter";

const base = [
  {
    id: 1,
    text: "React",
    delay: "200",
  },
  {
    id: 2,
    text: "JavaScript",
    delay: "250",
  },
  {
    id: 3,
    text: "HTML5",
    delay: "300",
  },
  {
    id: 4,
    text: "Tailwind",
    delay: "350",
  },
];

const linklar = [
  {
    id: 1,
    icon: <FiGithub />,
    link: "https://github.com/Xurshidbek002",
  },
  {
    id: 2,
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/xurshidbekdev",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/egoistfunny",
  },
];
const Asosiy = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div id="asosiy" className="flex items-center justify-center pt-25 pb-20">
      <div className="container  w-full">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-10">
          {/* Chap qism--------------------------------------------------------------------------------- */}
          <div className="md:pl-10 z-50 flex flex-col items-center md:items-start text-left">
            <p className=" z-10 mt-5 hidden md:flex  items-center text-[10px] md:text-[15px] text-blue-300 hover:bg-blue-500/20 duration-700 hover:shadow-[0_0_45px_blue]/30 hover:text-white font-medium bg-black/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
              <LuSparkles className="mr-2 text-blue-400" />
              Ready to Innovate
            </p>
            <h1
              data-aos="fade-up-right"
              className="text-6xl mb-2 pt-4 lg:text-7xl font-extrabold text-center md:text-left text-shadow-[0_0_60px_aqua]/40"
            >
              <span className="bg-gradient-to-r text-5xl md:text-7xl from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Frontend
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <Typewriter
              texts={[
                "Trained at IT Time Academy with solid fundamentals.",
                "A passionate learner with 2 years of coding experience.",
              ]}
            />

            <div className="flex gap-1 md:gap-3 ">
              {base.map((item) => (
                <div
                  data-aos="fade-right"
                  data-aos-delay={item.delay}
                  key={item.id}
                  className=""
                >
                  <div className="bg-black/50 border-[1px] border-black/40 hover:bg-white/3 duration-200 px-[10px] md:px-5 py-[3px] md:py-[5px] rounded-full text-white">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex gap-5 my-8"
            >
              <a
                href="#portfolio"
                className="shadow-[0_0_25px_#935AF590] hover:shadow-[0_0_25px_#935AF5]  flex w-38 h-11 relative overflow-hidden justify-center rounded-xl bg-black/40 items-center gap-2 hover:gap-4 duration-1000 group font-bold text-white"
              >
                <div className="absolute left-0 top-0 h-full w-0 bg-blue-400/10 transition-all duration-500 group-hover:w-full group-hover:translate-x-0 translate-x-[-100%]"></div>{" "}
                Projects
                <FaExternalLinkAlt
                  size={15}
                  className="group-hover:rotate-45 duration-500"
                />
              </a>
              <a
                href="#contact"
                className="  shadow-[0_0_25px_#935AF590] hover:shadow-[0_0_25px_#935AF5]  flex  w-38 h-11 relative overflow-hidden justify-center rounded-xl bg-black/40 items-center gap-2 hover:gap-4 duration-1000 group font-bold text-white"
              >
                <div className="absolute left-0 top-0 h-full w-0 bg-blue-400/10 transition-all duration-500 group-hover:w-full group-hover:translate-x-0 translate-x-[-100%]"></div>{" "}
                Contact
                <MdOutlineMailOutline
                  size={19}
                  className="group-hover:rotate-10 duration-500"
                />
              </a>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-offset="5"
              className="flex gap-9"
            >
              {linklar.map((item) => (
                <a key={item.id} href={item.link} className="">
                  <div className="bg-[#1D163B] hover:bg-[#322c4b] rounded-xl border-[1px] border-white/20 p-[6px] shadow-[0_0_30px_#935AF590] hover:shadow-[0_0_30px_#935AF5] duration-1000">
                    <div className="text-white text-2xl">{item.icon}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* O'ng qism (DotLottie) --------------------------------------------------------------------------*/}
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl flex justify-center items-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Tashqi fon blur effekt */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                isHovering ? "opacity-50 scale-110" : "opacity-20 scale-100"
              }`}
            ></div>

            {/* DotLottie komponenti--------------------------------------------------------------------------------- */}
            <div
              className={`relative z-10 w-full transform transition-transform duration-500 ${
                isHovering ? "scale-150 rotate-4" : "scale-140"
              }`}
            >
              <DotLottieReact
                src="https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie"
                loop
                autoplay
                className="w-full h-auto"
              />
            </div>

            {/* Ichki blur puls effekt */}
            <div
              className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                isHovering ? "opacity-50" : "opacity-20"
              }`}
            >
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                  isHovering ? "scale-110" : "scale-100"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asosiy;
