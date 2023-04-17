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
          {/* First Service */}
          {ServiceRow(
            "Career Coaching",
            [
              {
                image: <RiTreasureMapLine className="fill-secondary" />,
                text: "Determine your roadmap for career success",
              },
              {
                image: <MdPhoneInTalk className="fill-secondary" />,
                text: "Learn how to book more interviews with less applying",
              },
              {
                image: <BsSpeedometer2 className="fill-secondary" />,
                text: "Accelerate your growth with accountability and mentorship",
              },
            ],
            CollabOne
          )}

          {/* Second Service */}
          {ServiceRow(
            "One-on-one live mentorship",
            [
              {
                image: <VscDebug className="fill-secondary" />,
                text: "Debug with the help of an expert",
              },
              {
                image: <MdOutlinePersonPin className="fill-secondary" />,
                text: "Personalize your learning experience",
              },
              {
                image: <RiQuestionAnswerLine className="fill-secondary" />,
                text: "Get answers to complex problems",
              },
            ],
            CollabTwo,
            true
          )}
        </section>
      </Layout>
    </section>
  );
};

function ServiceRow(title, bulletPoints, collabImg, reverse = false) {
  const baseOuterDivCSS =
    "justify-evenly items-center gap-6 lg:flex-row-reverse lg:justify-between";
  const reverseouterdivcss =
    "justify-between items-start lg:flex-row lg:items-center";

  let outerDivCSS = reverse ? reverseouterdivcss : baseOuterDivCSS;

  let innerDivCSS = reverse
    ? "justify-center items-end text-right"
    : "justify-start items-start text-left flex-wrap";

  let bulletCSS = reverse ? "items-end" : "items-start";
  let h3CSS = reverse ? "pl-10" : "pr-10";

  return (
    <div className={`flex flex-col-reverse w-full lg:gap-24 ${outerDivCSS}`}>
      <div className={`flex flex-col gap-8 w-full lg:w-1/2 ${innerDivCSS}`}>
        <h3
          className={`text-4xl font-bold md:text-5xl md:font-normal md:${h3CSS}`}
        >
          {title}
        </h3>
        <div
          className={`flex flex-col justify-center gap-2 w-full mb-12 ${bulletCSS}`}
        >
          {bulletPoints.map((bp) => {
            return (
              <BulletPoint key={bp.text} image={bp.image} text={bp.text} />
            );
          })}
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center aspect-square">
        <img src={collabImg} alt="#" className="w-full h-full rounded-md" />
      </div>
    </div>
  );
}

export default OurServices;

// border border-solid border-secondary
// my-12
