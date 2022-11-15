import ContactImage from "../assets/Contact us-amico.png";
import CTA from "../components/common/CTA/CTA";
import CTAButton from "../components/common/CTA/Button";
import { MailChimpContactForm } from "../constants/constants";

const Contact = () => {
  return (
    <>
      <CTA
        text=" Learn how we can help you reach your coding goals, send us an email
        today!"
      >
        <CTAButton
          text="Contact Us"
          type="secondary"
          link={MailChimpContactForm}
        />
      </CTA>
      <section className="flex flex-col justify-center items-center mt-48 gap-4 p-4  w-full sm:mt-52 sm:p-10 lg:mt-60">
        <section className="flex justify-center items-center mt-24 p-1 lg:w-3/4 xl:w-2/3">
          <img
            src={ContactImage}
            alt="Someone contacting the company via phone"
            className="w-full h-full aspect-square"
          />
        </section>
      </section>
    </>
  );
};

export default Contact;
