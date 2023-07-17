import React from "react";

const Hero = () => {
  return (
    <section
      className="py-24 lg:min-h-screen flex justify-center items-center w-full min--screen"
      id="hero"
    >
      <div className="container gap-5 flex flex-col items-center justify-center">
        <p className="text-center text-white text-2xl font-normal leading-[38px]">
          Pepe and Toad the memecoin Launched
        </p>
        <h1 className="text-center max-w-2xl  gradi  text-6xl md:text-7xl font-spicyRice  tracking-wider">
          Don’t miss the Dev who make the Pepe Great
        </h1>
        <p className="max-w-3xl text-center text-white text-2xl font-normal">
          Pepe and Toad the memecoin Launched on the ethereum. Our mission is to
          provide a fun, community-driven investment opportunity that celebrates
          the power of{" "}
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
