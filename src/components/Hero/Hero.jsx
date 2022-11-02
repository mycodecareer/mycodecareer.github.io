import React from "react";
import CTAButton from "../common/CTA/Button";
// import Layout from "../common/Layout/Layout";
import HeaderImage from "../../assets/Programming-amico.png";

const Hero = () => {
  return (
    <main className="h-screen mt-44 custom-img-hero md:mt-52 px-4 lg:px-8">
      {/* <Layout> */}
      <header className="flex flex-col justify-center items-center gap-16 w-full h-full skew-y-12 lg:flex-row">
        <section className="flex flex-col flex-wrap justify-center items-center w-full flex-1 gap-4 ">
          <h2 className="uppercase text-6xl text-center sm:text-7xl font-bold mb-1 sm:tracking-widest text-dark-blue ">
            coding coach
          </h2>
          <p className="text-md mb-8 text-center text-text-main md:text-lg ">
            Connecting developers with mentors worldwide
          </p>
          <div className="max-w-64 sm:w-72 ">
            <CTAButton text="schedule a call" type="primary" />
          </div>
        </section>
        <section className="flex justify-center items-center flex-1 ">
          <img
            src={HeaderImage}
            alt="Web illustrations by Storyset"
            className="aspect-square w-full sm:w-4/5"
          />
        </section>
      </header>
      {/* </Layout> */}
    </main>
  );
};

export default Hero;
