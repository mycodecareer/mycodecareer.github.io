import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

const footerLinks = [
  {
    id: 1,
    name: "About",
    url: "https://www.google.com",
  },
  {
    id: 2,
    name: "Other",
    url: "",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col flex-wrap justify-between items-center w-full gap-12 p-4 sm:p-8 lg:p-12">
      <section className="flex flex-col w-full gap-6 sm:flex-row sm:justify-between sm:items-start ">
        <FooterSocials />
        <FooterLinks heading="links" footerLinks={footerLinks} />
      </section>
      <section className="text-xs text-text-main self-center sm:self-start sm:text-sm">
        &copy;2022 My Code Career | Developed by Damilola Bada
      </section>
    </footer>
  );
};

export default Footer;
