import React from "react";
import CTA from "../components/common/CTA/CTA";
import CTAButton from "../components/common/CTA/CTAButton";
import Layout from "../components/common/Layout/Layout";
import Portrait from "../assets/Matt_large.png";
import SI_Talk from "../assets/SI_talk.jpeg";
import Matt_Luna from "../assets/matt_luna.jpeg";
import TextImageRow from "../components/common/Sections/TextImageRow";

const About = () => {
  return (
    <>
      <Layout>
        <section className="flex flex-col justify-start items-start gap-4 mt-36 sm:gap-12 lg:mt-48">
          <div className="text-4xl lg:text-5xl"> About Me </div>
          <TextImageRow
            // {``} is used for passing newlines
            text={`Hi, I'm Matthew Sevey. I'm going to help you reach your next lever in your career as a software developer. 
          
          Whether you are trying to make the switch and land your first job, or you are a senior developer looking to make your next move, I can show you exactly what you need to do to accelerate your career.`}
            image={Portrait}
            imageName="Matthew's Portrait"
          />

          <TextImageRow
            text={`I didn't have a traditional path to becoming a software developer. 
          I don't have a CS Degree. 
          I started learning to code in my free time back in 2014, but it wasn't until 2018 that I finally landed my first job as a software developer. 
          I started learning to code because it was fun! 
          Then, after nearly 3 years of learning to code and building projects, I decided it was time to try and land a job as a developer.`}
            image={SI_Talk}
            imageName="SI Talk"
            isReversed={true}
          />

          <TextImageRow
            text={`Since that first job, I've received raises and been promoted every single year. 
          I've more than doubled by starting salary. 
          I've been able to creating hiring plans, interview hundreds of engineers, and grow multiple teams. 
          Now I'm sharing everything I've learned with you so you can do the same, in a fraction of the time.`}
            image={Matt_Luna}
            imageName="Matt and Luna"
          />
        </section>
      </Layout>
      <CTA
        text="Learn how we can help you reach your coding goals, schedule a call
          today!"
      >
        <CTAButton text="Get Started" type="secondary" />
      </CTA>
    </>
  );
};

export default About;
