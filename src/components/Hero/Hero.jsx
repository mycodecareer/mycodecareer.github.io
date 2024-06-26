import React from "react";
import LinkButton from "../common/CTA/LinkButton";
import HeaderImage from "../../assets/Programming-amico.png";
import ImageContainer from "../common/Layout/ImageContainer";
import { SkoolCommunityLink } from "../../constants/constants";

const Hero = () => {
  return (
    <main className="h-screen mt-44 custom-img-hero md:mt-52 px-4 lg:px-8">
      <header className="flex flex-col justify-center items-center gap-16 w-full h-full skew-y-12 lg:flex-row">
        <section className="flex flex-col flex-wrap justify-center items-center w-full flex-1 gap-4 ">
          <h2 className="uppercase text-6xl text-center sm:text-7xl font-bold mb-1 sm:tracking-widest text-dark-blue ">
            My Code Career
          </h2>
          <p className="text-md mb-8 text-center text-text-main md:text-lg ">
            Helping software engineers land their dream job 3x faster without
            begging for referrals and sending 1000s of applications.
          </p>
          <div className="max-w-64 sm:w-72 ">
            <LinkButton text="Join Skool" link={SkoolCommunityLink} />
          </div>
        </section>
        <ImageContainer>
          <img
            src={HeaderImage}
            alt="Web illustrations by Storyset"
            className="aspect-square w-full sm:w-4/5"
          />
        </ImageContainer>
      </header>
    </main>
  );
};

export default Hero;
