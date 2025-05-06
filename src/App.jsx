import React, { useEffect, useState } from "react";
import AnimatedBackground from "./Components/Background";
import Navbar from "./Components/Navbar";
import Asosiy from "./Pages/Asosiy";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import { AnimatePresence, motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import LodingBg from "./Components/LodingBg";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [aosReady, setAosReady] = useState(false);

  useEffect(() => {
    // Faqat loading ichida ishlovchi AOS
    AOS.init({ duration: 1000, offset: 0, once: true });

    const timer = setTimeout(() => {
      setIsLoading(false); // loading tugaydi

      setTimeout(() => {
        // Sahifa kontenti uchun AOS ishga tushadi
        AOS.init({ duration: 1000, offset: 20 });
        AOS.refresh();
        setAosReady(true);
      }, 800);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* LOADING LAYER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#17062c] text-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 2 }}
          >
            <LodingBg />
            <div className="text-center space-y-4 relative z-10">
              <ul className="flex justify-center space-x-6 text-2xl md:text-4xl">
                <li
                  data-aos="zoom-in-down"
                  className="p-5 bg-blue-950/50 rounded-full"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  <LuLinkedin />
                </li>
                <li
                  data-aos="zoom-in-down"
                  className="p-5 bg-blue-950/50 rounded-full"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  <LuGithub />
                </li>
                <li
                  data-aos="zoom-in-down"
                  className="p-5 bg-blue-950/50 rounded-full"
                  data-aos-delay="700"
                  data-aos-duration="1500"
                >
                  <FaCode />
                </li>
              </ul>
              <div className="text-2xl md:text-3xl font-semibold mt-7 ">
                <p
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="text-3xl text-blue-200 text-shadow-[0_0_70px_blue]/90"
                >
                  Assalom Alaykum
                </p>
                <span
                  className="py-3 inline-block text-blue-400 text-shadow-[0_0_70px_blue]/90"
                  data-aos="fade-up-right"
                  data-aos-delay="1000"
                >
                  Mening Portfolio
                </span>
                <span className=""> </span>
                <span
                  className="py-3 inline-block text-blue-400 text-shadow-[0_0_70px_blue]/90"
                  data-aos="fade-up-left"
                  data-aos-delay="1000"
                >
                  Web sahifamga
                </span>
                <p className="text-purple-400 text-shadow-[0_0_70px_purple]/90">
                  <span
                    data-aos="zoom-in"
                    data-aos-delay="1500"
                    data-aos-duration="2500"
                    className="inline-block"
                  >
                    Hush
                  </span>
                  <span> </span>
                  <span
                    data-aos="zoom-in"
                    data-aos-delay="2000"
                    data-aos-duration="2500"
                    className="inline-block"
                  >
                    kelibsiz
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      {aosReady && (
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <AnimatedBackground />
          <Navbar />
          <Asosiy />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
