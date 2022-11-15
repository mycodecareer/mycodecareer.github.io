import { CalendlyClarityCallLink } from "../../../constants/constants";

const CTAButton = ({
  text = "button",
  type = "primary",
  link = CalendlyClarityCallLink,
}) => {
  const handleNavigation = () => {
    window.open(link, "_blank");
  };

  let className = `flex justify-center items-center bg-secondary border-none p-4 rounded-xl w-full cursor-pointer uppercase text-white text-xl`;
  if (type === "secondary") {
    className = `flex justify-center items-center border border-solid bg-transparent border-dark-blue p-4 rounded-xl w-full cursor-pointer capitalize text-dark-blue text-xl`;
  }
  return (
    <button className={className} onClick={handleNavigation}>
      {text}
    </button>
  );
};

export default CTAButton;
