import React from "react";
import BulletPoint from "./common/BulletPoint";
import { VscDebug } from "react-icons/vsc";
import { MdOutlinePersonPin } from "react-icons/md";
import { RiQuestionAnswerLine } from "react-icons/ri";
import CollabOne from "../assets/collab1.svg"
import CollabTwo from "../assets/collab2.svg"

const OurServices = () => {
  return (
    // <Layout>
      <section className="flex flex-col justify-between items-center w-full my-12 lg:gap-24 lg:mt-12 lg:mb-12">
        <h2 className="text-5xl my-8 "> Our Services </h2>
        <div className="flex flex-col-reverse justify-evenly items-center gap-6 w-full lg:flex-row-reverse lg:justify-between lg:gap-24 ">
          <div className="flex flex-col justify-start items-start flex-wrap text-left gap-8 w-full lg:w-1/2">
            <h3 className="text-4xl font-bold md:text-5xl md:pr-10 md:font-normal"> One-on-one live mentorship </h3>
            <div className="flex flex-col justify-center items-start gap-2 w-full mb-12">
              <BulletPoint
                image={<VscDebug className="fill-secondary" />}
                text={"Debug with the help of an expert"}
              />
              <BulletPoint
                image={<MdOutlinePersonPin className="fill-secondary" />}
                text={"Personalize your learning experience"}
              />
              <BulletPoint
                image={<RiQuestionAnswerLine className="fill-secondary"/>}
                text={"Get answers to complex problems"}
              />
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center aspect-square">
            <img
              src={CollabOne}
              alt="#"
              className="w-full h-full rounded-md"
            />
          </div>
        </div>

        {/* Second Service */}
        <div className="flex flex-col-reverse justify-between items-start w-full lg:flex-row lg:gap-24 lg:items-center">
          <div className="flex flex-col justify-center items-end text-right gap-8 w-full lg:w-1/2">
            <h3 className="text-4xl font-bold md:text-5xl md:pl-10 md:font-normal"> One-on-one live mentorship </h3>
            <div className="flex flex-col justify-center items-end gap-2 w-full">
              <BulletPoint
                // image={<VscDebug />}
                text={"Debug with the help of an expert"}
              />
              <BulletPoint
                // image={<MdOutlinePersonPin />}
                text={"Personalize your learning experience"}
              />
              <BulletPoint
                // image={<RiQuestionAnswerLine />}
                text={"Get answers to complex problems"}
              />
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center aspect-square">
            <img
              src={CollabTwo}
              alt="#"
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      </section>
// </Layout>
  );
};

export default OurServices;


// border border-solid border-secondary