import { useNavigate } from "react-router";

const FooterLinks = ({ heading, footerLinks }) => {
  const navigate = useNavigate();

  const handleNavigateToLink = (url) => {
    navigate(url);
  };

  return (
    <section className="flex flex-col flex-wrap w-full justify-between items-center gap-1 sm:gap-4 sm:items-end sm:w-1/4">
      <h3 className="uppercase text-xl lg:text-2xl"> {heading} </h3>
      <section className="flex flex-col flex-wrap flex-1 justify-center items-start">
        {footerLinks.map((link) => {
          return (
            <p
              key={link.id}
              onClick={() => handleNavigateToLink(link.url)}
              className="text-md cursor-pointer lg:text-lg"
            >
              {link.name}
            </p>
          );
        })}
      </section>
    </section>
  );
};

export default FooterLinks;