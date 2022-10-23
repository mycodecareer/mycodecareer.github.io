import React from "react";
import Layout from "../components/common/Layout";
import Portrait from "../assets/Matt_large.png";

const About = () => {
  return (
    <Layout>
      <section className="flex flex-col justify-start items-start gap-4 sm:mt-12 sm:gap-8 lg:mt-48">
        <section className="text-4xl lg:text-5xl"> About Me </section>
        <section className="flex flex-col-reverse justify-between items-center flex-wrap gap-4 mt-12 w-full sm:gap-8 lg:flex-row lg:mt-24 lg:text">
          <section className="w-full text-lg p-2 lg:w-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            atque maxime sapiente hic! Dolore inventore cupiditate possimus?
            Numquam voluptas, sit cum obcaecati repellendus vel similique
            architecto nostrum natus porro. Mollitia temporibus nihil veniam
            officiis nesciunt hic consequatur reprehenderit autem corrupti
            voluptate est impedit eaque id, voluptas, ipsam nobis accusamus
            odio.
            Mollitia temporibus nihil veniam
            officiis nesciunt hic consequatur reprehenderit autem corrupti
            voluptate est impedit eaque id, voluptas, ipsam nobis accusamus
            odio.
          </section>
          <section className="flex justify-center items-center lg:flex-1">
            <img src={Portrait} alt="matthew-sevey-portrait"  className="w-full h-full rounded-md"/>
          </section>
        </section>
        <section className="flex flex-col-reverse justify-between items-center flex-wrap gap-4 mt-12 w-full sm:gap-8 md:flex-row lg:flex-row-reverse">
          <section className="w-full text-lg p-2 md:w-1/2 md:text-md lg:w-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            atque maxime sapiente hic! Dolore inventore cupiditate possimus?
            Numquam voluptas, sit cum obcaecati repellendus vel similique
            architecto nostrum natus porro. 
          </section>
          <section className="flex justify-center items-center md:flex-1 lg:flex-1">
            <img src={Portrait} alt="matthew-sevey-portrait"  className="w-full h-full rounded-md md:aspect-auto "/>
          </section>
        </section>
      </section>
    </Layout>
  );
};

export default About;
