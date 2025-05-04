import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  {
    id: 1,
    link: "#home",
    text: "Home",
  },
  {
    id: 2,
    link: "#about",
    text: "About",
  },
  {
    id: 3,
    link: "#portfolio",
    text: "Portfolio",
  },
  {
    id: 4,
    link: "#contact",
    text: "Contact",
  },
];

const navMobile = [
  {
    id: 1,
    link: "#home",
    text: "Home",
    icon: <IoHome />,
  },
  {
    id: 2,
    link: "#about",
    text: "About",
    icon: <RiAccountCircleLine />,
  },
  {
    id: 3,
    link: "#portfolio",
    text: "Portfolio",
    icon: <MdManageAccounts />,
  },
  {
    id: 4,
    link: "#contact",
    text: "Contact",
    icon: <PiPlugsConnectedFill />,
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [open, setOpen] = useState(false);

  const menu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      nav.forEach(({ link }) => {
        const section = document.querySelector(link);
        if (section) {
          const offsetTop = section.offsetTop - 80; // header balandligi
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveLink(link);
          }
        }
      });

      setScrolled(scrollPosition > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home" className="fixed w-full mt-3 z-100">
      <div className="container">
        <div
          className={` transition duration-1000 py-5 px-5 md:px-10 z-50 rounded-full flex justify-between items-center w-full ${
            scrolled
              ? "bg-white/2 backdrop-blur-sm rounded-full"
              : "bg-transparent"
          }`}
        >
          <a
            href="/"
            className=" text-3xl items-center gap-2 md:gap-3 hover:gap-4 hover:text-shadow-[0_0_20px_blue]/30 duration-500 md:text-4xl font-bold flex text-transparent bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text"
          >
            Xurshid.Dev
          </a>
          <nav className="md:flex gap-5 hidden">
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`relative text-xl font-bold inline-block transition duration-500 
              ${
                activeLink === item.link
                  ? "font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text after:w-full"
                  : "text-gray-300 hover:text-white after:w-0"
              }
              after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2px]
              after:bg-gradient-to-r after:from-blue-500 after:to-purple-800
              hover:after:w-full after:transition-all after:duration-300
            `}
              >
                {item.text}
              </a>
            ))}
          </nav>
          <div
            className={`flex flex-col gap-[9px] cursor-pointer z-20 md:hidden`}
            onClick={menu}
          >
            <div
              className={`h-[3px] rounded-2xl w-9 bg-gradient-to-r from-blue-500 to-purple-800 transition-all duration-300 ${
                open ? "rotate-45 translate-y-[12.5px]" : ""
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-2xl w-9 bg-gradient-to-r from-blue-500 to-purple-800 transition-all duration-300${
                open
                  ? "duration-500 bg-gradient-to-r from-blue-500/0 to-purple-800/0"
                  : ""
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-2xl w-9 bg-gradient-to-r from-blue-500 to-purple-800 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[12.5px]" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-[70%] mt-2 mx-auto flex justify-between bg-white/2 backdrop-blur-xs px-5 py-2 rounded-full"
          >
            {navMobile.map((item) => (
              <a key={item.id} href={item.link} className="">
                <div className="flex flex-col items-center">
                  <div
                    onClick={() => setOpen(false)}
                    className={`text-2xl ${
                      activeLink === item.link ? "text-blue-500" : "text-white"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`relative text-[14px] text-center font-bold transition-all duration-300 bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text
        ${
          activeLink === item.link
            ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:h-[2px] after:w-[90%] after:origin-center after:scale-x-100 after:bg-gradient-to-r after:from-blue-500 after:to-purple-800 after:transition-transform after:duration-500"
            : "text-white after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:h-[2px] after:w-[90%] after:origin-center after:scale-x-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-800 after:transition-transform after:duration-500"
        }`}
                  >
                    {item.text}
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
