import React from "react";
import CTA from "../components/common/CTA/CTA";
import LinkButton from "../components/common/CTA/LinkButton";
import Hero from "../components/Hero/Hero";
import OurServices from "../components/OurServices/OurServices";
import Testimonials from "./Testimonials/Testimonials";
import { JobSearchStrategySessionLink } from "../constants/constants";
import HeaderNormal from "../components/common/SectionHead/HeaderNormal";
import { BioOneCTA } from "./About";

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <HeaderNormal text="Where to Start" />
      <CTA text="Learn how we can help you reach your coding goals, schedule a FREE Job Search Strategy Session today!">
        <LinkButton
          text="Book a Call"
          type="secondary"
          link={JobSearchStrategySessionLink}
        />
      </CTA>
      <HeaderNormal text="Testimonials" />
      <Testimonials />
      <HeaderNormal text="About Matthew" />
      <BioOneCTA />
    </>
  );
};

export default HomePage;
