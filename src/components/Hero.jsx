import React from "react";
import { useNavigate } from "react-router";
import Button from "./common/Button";
import Layout from "../components/common/Layout";
import HeaderImage from "../assets/headerIMG.svg";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/about");
  };

  return (
    <main className="custom-img-hero">
      <Layout>
        <header className="flex flex-col flex-wrap justify-center items-center h-screen w-full gap-4 pt-12 lg:grid lg:grid-cols-2 lg:place-content-center xl:grid-cols-3">
          <section className="flex flex-col flex-wrap justify-center items-center w-full flex-1 gap-4 lg:place-items-start xl:col-span-2">
            <h2 className="uppercase text-6xl text-center sm:text-7xl font-bold mb-1 sm:tracking-widest text-dark-blue lg:text-left">
              coding coach
            </h2>
            <p className="text-md mb-8 text-center text-text-main md:text-lg lg:text-left">
              Connecting developers with mentors worldwide
            </p>
            <div className="max-w-64 sm:w-72 ">
              <Button
                text="schedule a call"
                type="primary"
                onClick={handleNavigation}
              />
            </div>
          </section>
          <section className="flex justify-center items-center flex-1 ">
            <img
              src={HeaderImage}
              alt="#"
              className="aspect-square w-full h-full"
            />
          </section>
        </header>
      </Layout>
    </main>
  );
};

export default Hero;

