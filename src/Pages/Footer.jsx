import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../public/XurshidbekResume.pdf";

const Footer = () => {
  return (
    <div className="mt-5 mb-3 px-2">
      <div className="container relative rounded-2xl bg-blue-700/20 overflow-hidden ">
        {/* Yaltirash effekti */}
        <div className="shimmer-tr"></div>
        <div className="shimmer-bl"></div>

        <footer className="w-full flex py-4 px-3 items-center justify-between text-white text-sm relative z-100">
          {/* Social iconlar */}
          <div className="flex gap-3 md:gap-4">
            <a
              href="https://github.com/Xurshidbek002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/xurshidbekdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={resume}
              download="XurshidbekResume.pdf"
              className="flex gap-2 items-center hover:text-blue-600 group relative px-1 duration-300 rounded-md border border-transparent hover:border-blue-500 active:animate-ping"
            >
              <div className="absolute group-hover:bg-white/10 h-full w-0 duration-300 group-hover:w-full translate-x-1/2 right-1/2"></div>
              Resume <FaDownload className="animate-bounce" />
            </a>
          </div>

          {/* Navigatsiya linklar */}
          <div className="flex gap-3 md:gap-6 font-bold">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#portfolio" className="hover:text-gray-400">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </footer>
      </div>
      <p className="footer-text text-center mt-3 text-white/50">
        © 2025 Xurshidbek. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
