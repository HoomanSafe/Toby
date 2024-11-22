import React from "react";

const Features = () => {
  return (
    <section className="py-20 w-full">
      <div className="container gap-8 relative flex flex-col justify-center items-center">
        <h1 className="text-6xl top-0 lg:absolute md:text-8xl text-center font-spicyRice tracking-[5.60px] yesOut">
          Adventurer : Toby ($TOBY) | 🪙BNB
        </h1>
        <p className="font-spicyRice mt-20 text-center text-white text-3xl lg:text-5xl max-w-3xl font-normal">
          Each token has its own use and can be used for trading, gaming and advertising within the Toby community.
          
        </p>
        <div className="justify-start font-spicyRice flex-col md:flex-row items-start gap-[30px] inline-flex">
          <div className="px-8 py-4 rounded-[100px] shadow border border-amber-400 justify-center items-center gap-2.5 flex">
            <div className="text-white text-xl font-normal leading-7 tracking-tight">
              BUY TOBY
            </div>
          </div>
          <a
            href="https://t.me/Tobybnb"
            className="px-8 py-4 rounded-[100px] shadow border border-amber-400 justify-center items-center gap-2.5 flex"
          >
            <div className="text-white text-xl font-normal leading-7 tracking-tight">
              JOIN TELEGRAM
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
