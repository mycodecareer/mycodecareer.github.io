import { CalendlyClarityCallLink } from "../../../constants/constants";

const CTAButton = ({
  text = "button",
  type = "primary",
  link = CalendlyClarityCallLink,
}) => {
  const handleNavigation = () => {
    window.open(link, "_blank");
  };

  let baseClassName =
    "flex justify-center items-center w-full p-4 rounded-xl cursor-pointer text-xl";
  let className = `bg-secondary border-none uppercase text-white`;
  if (type === "secondary") {
    className = `bg-transparent border border-solid border-dark-blue capitalize text-dark-blue`;
  }
  return (
    <button
      className={`${baseClassName} ${className}`}
      onClick={handleNavigation}
    >
      {text}
    </button>
  );
};

export default CTAButton;
