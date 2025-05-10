import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import uz from "../assets/uz.png";
import ru from "../assets/ru.png";
import en from "../assets/eng.png";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
const languages = [
  { code: "uz", img: uz },
  { code: "ru", img: ru },
  { code: "eng", img: en },
];
const nav = [
  {
    id: 1,
    link: "#home",
    text: "navbar.home",
  },
  {
    id: 2,
    link: "#about",
    text: "navbar.about",
  },
  {
    id: 3,
    link: "#portfolio",
    text: "navbar.portfolio",
  },
  {
    id: 4,
    link: "#contact",
    text: "navbar.contact",
  },
];

const navMobile = [
  {
    id: 1,
    link: "#home",
    text: "navbar.home",
    icon: <IoHome />,
  },
  {
    id: 2,
    link: "#about",
    text: "navbar.about",
    icon: <RiAccountCircleLine />,
  },
  {
    id: 3,
    link: "#portfolio",
    text: "navbar.portfolio",
    icon: <MdManageAccounts />,
  },
  {
    id: 4,
    link: "#contact",
    text: "navbar.contact",
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

  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      const index = languages.findIndex((l) => l.code === savedLang);
      if (index !== -1) {
        setCurrentIndex(index);
        i18n.changeLanguage(savedLang);
      }
    }
  }, []);
  const rotateLanguage = () => {
    const nextIndex = (currentIndex + 1) % languages.length;
    setCurrentIndex(nextIndex);
    i18n.changeLanguage(languages[nextIndex].code);
    localStorage.setItem("lang", languages[nextIndex].code);
  };
  const getLangOrder = () => {
    const prev = (currentIndex + languages.length - 1) % languages.length;
    const next = (currentIndex + 1) % languages.length;
    return [languages[prev], languages[currentIndex], languages[next]];
  };
  const orderedLangs = getLangOrder();

  return (
    <div id="home" className="fixed w-full mt-3 z-100">
      <div className="container">
        <div
          className={` transition duration-1000 py-3 px-5 md:px-10 z-50 rounded-full flex justify-between items-center w-full ${
            scrolled
              ? "bg-white/2 backdrop-blur-sm rounded-full"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center gap-6 md:gap-10">
            <a
              href="/"
              className=" text-xl items-center gap-2 md:gap-3 hover:gap-4 hover:text-shadow-[0_0_20px_blue]/30 duration-500 md:text-2xl font-bold flex text-transparent bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text"
            >
              ZAFAROV.UZ
            </a>
            <div
              className="flex items-center h-3 w-15 overflow-hidden justify-center py-4 cursor-pointer"
              onClick={rotateLanguage}
            >
              {orderedLangs.map((lang, index) => (
                <img
                  key={lang.code}
                  src={lang.img}
                  alt={lang.code}
                  className={`transition-all duration-500 object-contain
            ${index === 1 ? "w-6 h-6 " : "w-3 h-3 opacity-50"}`}
                />
              ))}
            </div>
          </div>
          <nav className="md:flex gap-5 hidden">
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`relative text-md font-bold inline-block transition duration-500 
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
                {t(item.text)}
              </a>
            ))}
          </nav>
          <div
            className={`flex flex-col gap-[5px] cursor-pointer z-20 md:hidden`}
            onClick={menu}
          >
            <div
              className={`h-[2.7px] rounded-2xl w-6 bg-white transition-all duration-200 ${
                open ? "rotate-45 translate-y-[8px]" : ""
              }`}
            ></div>
            <div
              className={`h-[2.7px] rounded-2xl w-6 bg-white transition-all duration-200${
                open ? "duration-500 opacity-0" : ""
              }`}
            ></div>
            <div
              className={`h-[2.7px] rounded-2xl w-6 bg-white transition-all duration-200 ${
                open ? "-rotate-45 -translate-y-[8px]" : ""
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
            className="w-[95%] mt-2 mx-auto flex justify-between bg-white/2 backdrop-blur-xs px-5 py-2 rounded-full"
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
                    {t(item.text)}
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
