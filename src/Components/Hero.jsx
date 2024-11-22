import React from "react";

const Hero = () => {
  return (
    <section
      className="py-24 lg:min-h-screen flex justify-center items-center w-full min--screen"
      id="hero"
    >
      <div className="container gap-5 flex flex-col items-center justify-center">
        <p className="text-center text-white text-2xl font-normal leading-[38px]">
          A Mystical Adventure
        </p>
        <h1 className="text-center max-w-2xl  gradi  text-6xl md:text-7xl font-spicyRice  tracking-wider">
          Toby
        </h1>
        <p className="max-w-3xl text-center text-white text-2xl font-normal">
          When opportunity arose, $TOBY answered! This isn't just another token—it's your gateway to long-term growth, powered by innovation and driven by the power of community. 💎
        </p>
        <a
          href=""
          className="w-[173px] h-[60px] px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 rounded shadow justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-black text-xl font-spicyRice leading-7 tracking-tight">
            BUY NOW
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
