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
          SharkDog
        </h1>
        <p className="max-w-3xl text-center text-white text-2xl font-normal">
          Unleashing this ferocious beast is something the gods wish they’ve
          never done. A wild creature twice the size of humans in a feral
          mindset is a formidable force to reckon with.
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
