// Icons
import { BsSpeedometer2 } from "react-icons/bs";
import { VscDebug } from "react-icons/vsc";
import { MdOutlinePersonPin, MdPhoneInTalk } from "react-icons/md";
import { RiQuestionAnswerLine, RiTreasureMapLine } from "react-icons/ri";

// Asserts
import CollabOne from "../../assets/collab1.svg";
import CollabTwo from "../../assets/collab2.svg";

// Components
import Layout from "../common/Layout/Layout";
import HeaderNormal from "../common/SectionHead/HeaderNormal";
import BulletPointList from "./BulletPointList";
import Container from "../common/Layout/Container";

const OurServices = () => {
  return (
    <Container positioning={"justify-evenly items-center"} spacing={"gap-8"}>
      <HeaderNormal text="Our Services" />
      <Layout>
        <Container
          positioning={"justify-between items-center"}
          spacing={"w-full"}
          lg={"lg:gap-24 lg:mt-12 lg:mb-12"}
        >
          {/* <section className="flex flex-col justify-between items-center w-full lg:gap-24 lg:mt-12 lg:mb-12"> */}
          {/* First Service */}
          <BulletPointList
            title="Career Coaching"
            bulletPoints={[
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
            ]}
            collabImg={CollabOne}
          />

          {/* Second Service */}
          <BulletPointList
            title="One-on-one Live Mentorship"
            bulletPoints={[
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
            ]}
            collabImg={CollabTwo}
            reverse={true}
          />
        </Container>
      </Layout>
    </Container>
  );
};

export default OurServices;

// border border-solid border-secondary
// my-12
