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
import LodingBg from "./Components/LodingBg"; // Bu komponentingiz mavjud deb o'ylayman
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // AOSni bir marta, global sozlamalar bilan initsializatsiya qilish
    // Bu sozlamalar asosan sahifadagi kontent uchun mo'ljallangan.
    // Yuklanish ekranidagi elementlar o'zlarining data-aos atributlari bilan boshqariladi.
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi
      offset: 50,     // Element qancha ko'ringanda animatsiya boshlanishi
      once: false,    // Element har scroll'da animatsiya bo'ladimi (false) yoki bir marta (true)
    });

    // Yuklanish ekranini ko'rsatish uchun taymer
    const loadingTimer = setTimeout(() => {
      setIsLoading(false); // Yuklanish tugadi, asosiy kontent ko'rsatiladi
    }, 3000); // Yuklanish ekrani qancha vaqt ko'rinishi (3 soniya)

    // Komponent o'chirilganda taymerni tozalash
    return () => clearTimeout(loadingTimer);
  }, []);

  // Asosiy kontent ko'rsatilgandan keyin AOS'ni yangilash
  // Bu isLoading o'zgarganda ishlaydi
  useEffect(() => {
    if (!isLoading) {
      // DOM yangilanganidan keyin AOS elementlarni qayta topishi uchun
      // Kichik kechikish qo'shish ba'zan yordam beradi, ayniqsa Framer Motion bilan
      const refreshTimer = setTimeout(() => {
        AOS.refresh();
      }, 100); // 100ms kechikish (agar kerak bo'lmasa, 0 yoki olib tashlash mumkin)
      return () => clearTimeout(refreshTimer);
    }
  }, [isLoading]);

  return (
    <div className="relative">
      {/* YUKLANISH EKRANI QATLAMI */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17062c] text-white" // z-index yuqori
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} // Kirishda o'zgarish yo'q, shunchaki ko'rinib turadi
            exit={{ opacity: 0, filter: "blur(3px)" }} // Chiqish animatsiyasi: shaffoflik va blur
            // Agar blur effekti qotishga sabab bo'lsa, filter: "blur(8px)" ni olib tashlang yoki qiymatini kamaytiring
            transition={{ duration: 1 }} // Chiqish animatsiyasi davomiyligi (2s dan 1.5s ga qisqartirildi)
          >
            <LodingBg /> {/* Fon komponenti */}
            <div className="text-center space-y-4 relative z-10"> {/* Kontent fon ustida */}
              {/* Yuklanish ekranidagi ikonka animatsiyalari AOS orqali */}
              <ul className="flex justify-center gap-5 text-4xl md:text-5xl">
                <li
                  data-aos="zoom-in-down" // AOS animatsiya turi
                  className="p-3 md:p-5 bg-blue-950/50 rounded-full"
                  data-aos-delay="100"    // Animatsiya kechikishi
                  data-aos-duration="1000" // Animatsiya davomiyligi (globaldan farqli)
                  data-aos-once="true"     // Bu element faqat bir marta animatsiya bo'ladi
                >
                  <LuLinkedin />
                </li>
                <li
                  data-aos="zoom-in-down"
                  className="p-3 md:p-5 bg-blue-950/50 rounded-full"
                  data-aos-delay="300" // Kechikish o'zgartirildi
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <LuGithub />
                </li>
                <li
                  data-aos="zoom-in-down"
                  className="p-3 md:p-5 bg-blue-950/50 rounded-full"
                  data-aos-delay="500" // Kechikish o'zgartirildi
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <FaCode />
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ASOSIY KONTENT */}
      {/* isLoading false bo'lganda bu qism ko'rinadi */}
      {!isLoading && (
        <motion.div
          className="relative" // z-index kerak bo'lsa, yuklanish ekranidan pastroq qilib belgilang
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }} // Kontent paydo bo'lishi uchun kichik fade-in (0 dan 0.5s ga)
        >
          <AnimatedBackground /> {/* Siz optimallashtirgan fon */}
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
