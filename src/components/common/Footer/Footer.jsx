import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import Divider from "../../../assets/triangleAsymmetricalNegative.svg";

const footerLinks = [
  // {
  //   id: 1,
  //   name: "About",
  //   url: "/about",
  // },
  // {
  //   id: 2,
  //   name: "Contact",
  //   url: "/contact",
  // },
  // {
  //   id: 4,
  //   name: "Testimonials",
  //   url: "/testimonials",
  // },
  {
    id: 5,
    name: "Refer",
    url: "/refer",
  },
  {
    id: 6,
    name: "Privacy Policy",
    url: "/privacy-policy",
  },
];

const Footer = () => {
  return (
    <>
      <img src={Divider} alt="divider" className="w-full mt-32" />
      <footer className="flex flex-col flex-wrap justify-between items-center w-full gap-12 p-4 bg-accent sm:p-8 lg:p-12">
        <section className="flex flex-col w-full gap-6 sm:flex-row sm:justify-between sm:items-start ">
          <FooterSocials />
          <FooterLinks footerLinks={footerLinks} />
        </section>
        <section className="text-xs text-text-main self-center sm:self-start sm:text-sm">
          &copy;2022 Matthew Sevey Consulting LLC
        </section>
      </footer>
    </>
  );
};

export default Footer;
