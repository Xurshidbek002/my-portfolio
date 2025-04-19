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
  },
  {
    id: 2,
    text: "JavaScript",
  },
  {
    id: 3,
    text: "NodeJs",
  },
  {
    id: 4,
    text: "Tailwind",
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
    link: "https://www.linkedin.com/in/xurshidbek-parpiboyev-581678360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/egoistfunny?igsh=dzV1d2tpYW0ya2Zu",
  },
];
const Asosiy = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div id="asosiy" className="flex items-center justify-center h-screen">
      <div className="container  w-full">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-10">
          {/* Chap qism--------------------------------------------------------------------------------- */}
          <div className="md:pl-10 z-50 flex flex-col items-center md:items-start text-left gap-5">
            <p className="md:flex hidden items-center text-sm text-blue-300 font-medium bg-black/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
              <LuSparkles className="mr-2 text-blue-400" />
              Ready to Innovate
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-center md:text-left">
              <span className="bg-gradient-to-r text-3xl md:text-6xl from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Frontend
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <Typewriter
              texts={["Yuqori Natijalar", "Yuqori aniqlikdagi dasturchilar"]}
            />

            <div className="flex gap-1 md:gap-3">
              {base.map((item) => (
                <div
                  key={item.id}
                  className="bg-black/50 border-[1px] border-black/40 px-[10px] md:px-5 py-[3px] md:py-[5px] rounded-full text-white"
                >
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex gap-5">
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
                href="#portfolio"
                className="  shadow-[0_0_25px_#935AF590] hover:shadow-[0_0_25px_#935AF5]  flex  w-38 h-11 relative overflow-hidden justify-center rounded-xl bg-black/40 items-center gap-2 hover:gap-4 duration-1000 group font-bold text-white"
              >
                <div className="absolute left-0 top-0 h-full w-0 bg-blue-400/10 transition-all duration-500 group-hover:w-full group-hover:translate-x-0 translate-x-[-100%]"></div>{" "}
                Projects
                <MdOutlineMailOutline
                  size={19}
                  className="group-hover:rotate-10 duration-500"
                />
              </a>
            </div>

            <div className="flex gap-9 mt-3">
              {linklar.map((item) => (
                <a key={item.id} href={item.link} className="">
                  <div
                    className="bg-[#1D163B] hover:bg-[#322c4b] rounded-xl border-[1px] border-white/20 p-[6px] shadow-[0_0_30px_#935AF590] hover:shadow-[0_0_30px_#935AF5] duration-500"
                  >
                    <div className="text-white text-2xl">{item.icon}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* O'ng qism (DotLottie) --------------------------------------------------------------------------*/}
          <div
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
                isHovering ? "scale-160 rotate-2" : "scale-150"
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
