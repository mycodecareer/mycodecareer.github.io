import CTAButton from "./Button";
import Divider from "../../../assets/triangleAsymmetricalNegative.svg";

const CTA = () => {
  return (
    <section className="my-12">
      <img src={Divider} alt="divider" className="w-full mt-32" />
      <section className="flex flex-col flex-wrap justify-center items-center gap-12 w-full h-64 overflow-hidden p-6 bg-accent">
        <h5 className="text-xl text-center w-full sm:text-2xl">
          Learn how we can help you reach your coding goals, schedule a call
          today!
        </h5>
        <div className="md:w-1/2 lg:w-1/3">
          <CTAButton text="Get Started" type="secondary" />
        </div>
      </section>
    </section>
  );
};

export default CTA;
