import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import Divider from "../../../assets/triangleAsymmetricalNegative.svg";
import { AcceleratorLink, MasterclassLink } from "../../../constants/constants";

const footerLinks = [
  {
    id: 1,
    name: "About",
    url: "/about",
  },
  {
    id: 2,
    name: "Contact",
    url: "/contact",
  },
];
const resourceLinks = [
  {
    id: 1,
    name: "Masterclass",
    url: MasterclassLink,
    external: true,
  },
  {
    id: 2,
    name: "Accelerator",
    url: AcceleratorLink,
    external: true,
  },
];

const Footer = () => {
  return (
    <>
      <img src={Divider} alt="divider" className="w-full mt-32" />
      <footer className="flex flex-col flex-wrap justify-between items-center w-full gap-12 p-4 bg-accent sm:p-8 lg:p-12">
        <section className="flex flex-col w-full gap-6 sm:flex-row sm:justify-between sm:items-start ">
          <FooterSocials />
          <FooterLinks heading="resources" footerLinks={resourceLinks} />
          <FooterLinks heading="links" footerLinks={footerLinks} />
        </section>
        <section className="text-xs text-text-main self-center sm:self-start sm:text-sm">
          &copy;2022 My Code Career | Developed by Damilola Bada
        </section>
      </footer>
    </>
  );
};

export default Footer;
