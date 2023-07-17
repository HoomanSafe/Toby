import React from "react";
import shark2 from "../assets/shark2.png";

const About = () => {
  return (
    <section className="py-20 w-full">
      <div className="container gap-8 relative flex flex-col justify-center items-center">
        <h1 className="text-6xl top-0 max-w-3xl  md:text-8xl text-center font-spicyRice tracking-[5.60px] yesOut">
          A Wild Elixir
        </h1>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center mt-16">
          <article className="flex flex-col gap-5">
            <h1 className="text-zinc-300 text-5xl font-spicyRice md:text-6xl tracking-[2.56px]">
              Breed Of The Beast
            </h1>
            <img src={shark2} alt="" />
          </article>
          <div className="  px-[37px] py-[62px] bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-[26px] flex-col justify-center items-center inline-flex">
            <div className=" text-white text-xl font-normal">
              SharkDogs have been around for centuries after a mad scientist
              took his family pets and gave them 3 elixirs each. After that day
              he never seen them again. They emerged from the beaches of Mexico
              50 years after being dormant for some time and have been
              tormenting the cities since
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
