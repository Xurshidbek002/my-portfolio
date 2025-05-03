import React, { useEffect } from "react";
import AnimatedBackground from "./Components/Background";
import Navbar from "./Components/Navbar";
import Asosiy from "./Pages/Asosiy";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 20,
    });
  }, []);
  return (
    <div>
      <AnimatedBackground />
      <div className="relative">
        <Navbar />
        <Asosiy />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
