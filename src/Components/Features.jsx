import React from "react";

const Features = () => {
  return (
    <section className="py-20 w-full">
      <div className="container gap-8 relative flex flex-col justify-center items-center">
        <h1 className="text-6xl top-0 absolute md:text-8xl text-center font-spicyRice tracking-[5.60px] yesOut">
          Understand Your Power
        </h1>
        <p className="font-spicyRice mt-20 text-center text-white text-3xl lg:text-5xl max-w-3xl font-normal">
          100% OF THE TOTAL SUPPLY HAS BEEN LOCKED ON UNISWAP AND LIQUIDITY
          TOKENS HAS BEEN BURNED. $CF WAS A FAIR LAUNCH BLOCKCHAIN SMART
          CONTRACT ECOSYSTEM.
        </p>
        <div className="justify-start font-spicyRice flex-col md:flex-row items-start gap-[30px] inline-flex">
          <div className="px-8 py-4 rounded-[100px] shadow border border-amber-400 justify-center items-center gap-2.5 flex">
            <div className="text-white text-xl font-normal leading-7 tracking-tight">
              BUY SHARK DOG
            </div>
          </div>
          <div className="px-8 py-4 rounded-[100px] shadow border border-amber-400 justify-center items-center gap-2.5 flex">
            <div className="text-white text-xl font-normal leading-7 tracking-tight">
              JOIN TELEGRAM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
