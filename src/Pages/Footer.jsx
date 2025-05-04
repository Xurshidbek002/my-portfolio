import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-5 mb-3">
      <div className="container relative rounded-2xl bg-blue-700/20 overflow-hidden">
        {/* Yaltirash effekti */}
        <div className="shimmer-tr"></div>
        <div className="shimmer-bl"></div>

        <footer className="w-full flex py-4 px-3 items-center justify-between text-white text-sm relative">
          {/* Social iconlar */}
          <div className="flex gap-3 md:gap-4">
            <a
              href="https://github.com/Xurshidbek002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/xurshidbekdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          {/* Navigatsiya linklar */}
          <div className="flex gap-3 md:gap-6">
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
    </div>
  );
};

export default Footer;
