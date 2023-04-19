import React from "react";
import CTA from "../components/common/CTA/CTA";
import LinkButton from "../components/common/CTA/LinkButton";
import Hero from "../components/Hero/Hero";
import OurServices from "../components/OurServices/OurServices";

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <CTA
        text="Learn how we can help you reach your coding goals, schedule a call
          today!"
      >
        <LinkButton text="Get Started" type="secondary" />
      </CTA>
    </>
  );
};

export default HomePage;
