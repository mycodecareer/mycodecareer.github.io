import React from "react";
import CTA from "../components/common/CTA";
import Layout from "../components/common/Layout";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Layout>
        <OurServices />
        <CTA />
      </Layout>
    </>
  );
};

export default HomePage;
