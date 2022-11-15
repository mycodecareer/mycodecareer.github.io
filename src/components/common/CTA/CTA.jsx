import GoalImage from "../../../assets/Journey-amico.png";

const CTA = ({ text = "text", children }) => {
  return (
    <section className="flex flex-col justify-center items-center overflow-hidden mt-32 mb-12 gap-8 p-8 lg:flex-row lg:p-16">
      <img
        src={GoalImage}
        alt="divider"
        className="w-full sm:w-9/12 md:w-1/2 lg:w-1/3"
      />
      <section className="flex flex-col flex-wrap justify-center items-center gap-12 w-full p-6">
        <h5 className="text-xl text-center w-full sm:text-2xl">{text}</h5>
        <div className="md:w-1/2 lg:w-1/3">{children}</div>
      </section>
    </section>
  );
};

export default CTA;
