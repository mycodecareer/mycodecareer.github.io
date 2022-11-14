import React from "react";
import BulletPoint from "./BulletPoint";
import { BsSpeedometer2 } from "react-icons/bs";
import { VscDebug } from "react-icons/vsc";
import { MdOutlinePersonPin, MdPhoneInTalk } from "react-icons/md";
import { RiQuestionAnswerLine, RiTreasureMapLine } from "react-icons/ri";
import CollabOne from "../../assets/collab1.svg";
import CollabTwo from "../../assets/collab2.svg";
import Layout from "../common/Layout/Layout";
import HeaderNormal from "../common/SectionHead/HeaderNormal";

const OurServices = () => {
  return (
    <section className="flex flex-col flex-wrap justify-evenly items-center gap-8">
      <HeaderNormal text="Our Services" />
      <Layout>
        <section className="flex flex-col justify-between items-center w-full lg:gap-24 lg:mt-12 lg:mb-12">
          <div className="flex flex-col-reverse justify-evenly items-center gap-6 w-full lg:flex-row-reverse lg:justify-between lg:gap-24 ">
            <div className="flex flex-col justify-start items-start flex-wrap text-left gap-8 w-full lg:w-1/2">
              <h3 className="text-4xl font-bold md:text-5xl md:pr-10 md:font-normal">
                One-on-one live mentorship
              </h3>
              <div className="flex flex-col justify-center items-start gap-2 w-full mb-12">
                <BulletPoint
                  image={<RiTreasureMapLine className="fill-secondary" />}
                  text={"Determine your roadmap for career success"}
                />
                <BulletPoint
                  image={<MdPhoneInTalk className="fill-secondary" />}
                  text={"Learn how to book more interviews with less applying"}
                />
                <BulletPoint
                  image={<BsSpeedometer2 className="fill-secondary" />}
                  text={
                    "Accelerate your growth with accountability and mentorship"
                  }
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
              <h3 className="text-4xl font-bold md:text-5xl md:pl-10 md:font-normal">
                {" "}
                One-on-one live mentorship{" "}
              </h3>
              <div className="flex flex-col justify-center items-end gap-2 w-full">
                <BulletPoint
                  image={<VscDebug className="fill-secondary" />}
                  text={"Debug with the help of an expert"}
                />
                <BulletPoint
                  image={<MdOutlinePersonPin className="fill-secondary" />}
                  text={"Personalize your learning experience"}
                />
                <BulletPoint
                  image={<RiQuestionAnswerLine className="fill-secondary" />}
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
      </Layout>
    </section>
  );
};

export default OurServices;

// border border-solid border-secondary
// my-12
