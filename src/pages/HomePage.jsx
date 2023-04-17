import React from "react";
import CTA from "../components/common/CTA/CTA";
import CTAButton from "../components/common/CTA/CTAButton";
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
        <CTAButton text="Get Started" type="secondary" />
      </CTA>
    </>
  );
};

export default HomePage;
