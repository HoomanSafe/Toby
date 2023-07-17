import React from "react";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Shark1 from "./assets/sharks1.png";
import Shark3 from "./assets/shark3.png";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen  w-full bg-black text-white font-Sumana">
      <Hero />
      <Features />
      <img src={Shark1} alt="" className="pointer-events-none" />
      <About />
      <img src={Shark3} alt="" className="pointer-events-none" />
      <Mics />
      <Footer />
    </div>
  );
};

export default App;
