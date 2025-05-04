import React, { useState } from "react";
import { GiStarsStack } from "react-icons/gi";
import { IoCode } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import portfolio1 from "../assets/p1.png";
import portfolio2 from "../assets/p2.png";
import portfolio3 from "../assets/p3.png";
import { desc } from "motion/react-client";
import tech1 from "../assets/skills/reactjs.svg";
import tech2 from "../assets/skills/javascript.svg";
import tech3 from "../assets/skills/SweetAlert.svg";
import tech4 from "../assets/skills/css.svg";
import tech5 from "../assets/skills/vercel.svg";
import tech7 from "../assets/skills/tailwind.svg";
import tech8 from "../assets/skills/tech1.png";
import tech9 from "../assets/skills/tech2.png";
import tech10 from "../assets/skills/tech3.png";
import tech11 from "../assets/skills/tech4.png";
import { HiExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const buttons = [
  {
    name: "Projects",
    icon: <IoCode />,
  },
  {
    name: "Certificates",
    icon: <LiaCertificateSolid />,
  },
  {
    name: "Tech Stack",
    icon: <GiStarsStack />,
  },
];

const projects = [
  {
    title: "IT TIME Academy",
    aos: "fade-up-right",
    img: portfolio1,
    desc: "Multilingual website using React, TypeScript, Tailwind CSS, i18next, and Particles.js. Supports 4 languages and real-time form submission via Telegram Bot.",
    git: "https://github.com/Xurshidbek002/IT-TIME-ACADEMY.git",
    link: "https://it-time-academy.vercel.app/",
  },
  {
    title: "Sleep Nest",
    aos: "fade-up",
    img: portfolio2,
    desc: "Responsive landing page built with React, Zustand, and Tailwind CSS. Includes product search, like system with localStorage, and Telegram Bot integration.",
    git: "https://github.com/Xurshidbek002/SleepNest.git",
    link: "https://sleep-nest.vercel.app/",
  },
  {
    title: "Admin Panel(Aoron)",
    aos: "fade-up-left",
    img: portfolio3,
    desc: "Built with React, Axios, and Fetch for API-based CRUD operations. Tested endpoints using Swagger and Postman. Designed for content management.",
    git: "https://github.com/Xurshidbek002/aoron-admin-panel.git",
    link: "https://aoron-admin-panel-opal.vercel.app/",
  },
];

const certificat = [
  {
    title: "It Time Academy",
    img: portfolio1,
    desc: "olish kerak keyin yozaman",
  },
];
const tech = [
  {
    img: tech1,
  },
  {
    img: tech2,
  },
  {
    img: tech3,
  },
  {
    img: tech4,
  },
  {
    img: tech5,
  },
  {
    img: tech7,
  },
  {
    img: tech8,
  },
  {
    img: tech9,
  },
  {
    img: tech10,
  },
  {
    img: tech11,
  },
];

function Portfolio() {
  const [select, setSelect] = useState("Projects");

  const handleClick = (e, name) => {
    setSelect(name);
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      e.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      e.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.classList.add("ripple");

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 1000);
  };

  return (
    <div id="portfolio" className="mb-10">
      <div className="">
        <div className="container">
          <h2
            data-aos="zoom-in-down"
            data-aos-offset="30"
            className="text-center text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          >
            Portfolio Showcase
          </h2>
          <p
            data-aos="zoom-in-up"
            data-aos-offset="30"
            className="max-w-sm md:max-w-3xl text-center text-sm md:text-[18px] mx-auto text-white/70 mt-5"
          >
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
          <div className="grid grid-cols-3 bg-blue-900/20 backdrop-blur-2xl p-3 rounded-xl gap-4 md:gap-7 mt-5">
            {buttons.map((item, index) => (
              <button
                onClick={(e) => handleClick(e, item.name)}
                key={index}
                className={`group ripple-container flex items-center justify-center rounded-xl py-3 md:py-5 transition-all duration-1000 hover:-translate-y-1 ${
                  select === item.name
                    ? "bg-[#194c9d]/80 backdrop-blur-2xl"
                    : "bg-[#163363]/50 hover:bg-[#194c9d]/45 hover:-translate-y-1"
                }`}
              >
                <div className="flex flex-col items-center gap-2 text-blue-100 z-10">
                  <div className="text-4xl group-hover:rotate-10 duration-500">
                    {item.icon}
                  </div>
                  <div className="font-extrabold group-hover:scale-105 duration-500">{item.name}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-5 text-white">
            {select === "Projects" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((item, index) => (
                  <div
                    data-aos={item.aos}
                    key={index}
                    className="rounded-2xl overflow-hidden group bg-blue-950/10 backdrop-blur shadow-[3px_3px_35px_blue]/15"
                  >
                    <div className="overflow-hidden relative">
                      <div className="text-3xl whitespace-nowrap text-shadow-[0_0_10px_white]/50 font-extrabold group-hover:scale-2500 duration-700 group-hover:opacity-0 text-white absolute z-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {item.title}
                      </div>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="blur-[4px] brightness-60 group-hover:brightness-100 object-cover w-full h-50 scale-150 group-hover:scale-100 duration-700 group-hover:blur-[0]"
                      />
                    </div>
                    <div className="p-3 ">
                      <p className="text-sm text-white/60">{item.desc}</p>
                      <div className="flex justify-between mt-3 space-x-4">
                        {/* Live Demo Link */}
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative overflow-hidden inline-flex items-center gap-1 px-3 py-1.5 bg-blue-950/70 rounded-md group transition-all duration-300 hover:bg-blue-950"
                          data-replace="Live Demo"
                        >
                          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-[200%]">
                            Live Demo
                          </span>
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 translate-x-[200%] text-cyan-400 transition-transform duration-300 group-hover:translate-x-0">
                            Live Demo
                          </span>
                          <HiExternalLink className="w-4 h-4 group-hover:text-cyan-400 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 origin-[100%_50%] scale-x-0 transition-transform duration-300 group-hover:origin-[0%_50%] group-hover:scale-x-100" />
                        </a>

                        {/* Github Link */}
                        <a
                          href={item.git}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative overflow-hidden inline-flex items-center gap-1 px-3 py-1.5 bg-blue-950/70 rounded-md group transition-all duration-300 hover:bg-blue-950"
                          data-replace="Github"
                        >
                          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-[200%]">
                            Github
                          </span>
                          <span className="absolute left-3 top-1/2 text-cyan-300 -translate-y-1/2 translate-x-[200%] transition-transform duration-300 group-hover:translate-x-0">
                            Github
                          </span>
                          <FiGithub className="w-4 h-4 transition-transform group-hover:text-cyan-300 duration-300 group-hover:translate-x-1" />
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 origin-[100%_50%] scale-x-0 transition-transform duration-300 group-hover:origin-[0%_50%] group-hover:scale-x-100" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {select === "Certificates" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {certificat.map((item, index) => (
                  <div
                    data-aos="zoom-in"
                    key={index}
                    className="rounded-2xl overflow-hidden group bg-blue-950/10 backdrop-blur shadow-[3px_3px_35px_blue]/15"
                  >
                    <div className="overflow-hidden relative">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="blur-[3px] object-cover w-full h-50 scale-110 group-hover:scale-100 duration-700 group-hover:blur-[0]"
                      />
                    </div>
                    <div className="p-3 ">
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#55f77b]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {select === "Tech Stack" && (
              <div className="grid grid-cols-4 lg:grid-cols-5 gap-5 md:gap-10">
                {tech.map((item, index) => {
                  const aosAnimations = [
                    "fade-up-right",
                    "fade-up-left",
                    "zoom-in-up",
                  ];
                  const aosDelays = [200, 300, 400, 500, 600, 700, 800];

                  const getRandomUnique = (arr, prev) => {
                    let filtered = arr.filter((val) => val !== prev);
                    return filtered[
                      Math.floor(Math.random() * filtered.length)
                    ];
                  };

                  const prevAos = index > 0 ? tech[index - 1]._aos : null;
                  const prevDelay = index > 0 ? tech[index - 1]._delay : null;

                  const _aos = getRandomUnique(aosAnimations, prevAos);
                  const _delay = getRandomUnique(aosDelays, prevDelay);

                  tech[index]._aos = _aos;
                  tech[index]._delay = _delay;

                  return (
                    <div
                      key={index}
                      data-aos={_aos}
                      data-aos-offset="1"
                      data-aos-delay={_delay}
                      className="bg-blue-950/50 relative group flex h-22 md:h-40 lg:h-47 content-center p-3 lg:p-10 rounded-2xl"
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-1/2 w-10 h-10 md:w-20 md:h-20 bg-blue-700/0 group-hover:bg-blue-700/100 duration-600 blur-xl md:blur-2xl"></div>
                      <img
                        src={item.img}
                        alt="tech skill"
                        className="w-full z-1 h-full object-contain"
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
