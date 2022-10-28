import { CalendlyClarityCallLink } from "../../../constants/constants";

const CTAButton = ({ text = "button", type = "primary" }) => {
  const handleNavigation = () => {
    window.open(CalendlyClarityCallLink, "_blank");
  };

  if (type === "primary") {
    return (
      <button
        className={`flex justify-center items-center bg-secondary border-none p-4 rounded-xl w-full cursor-pointer uppercase text-white text-xl`}
        onClick={handleNavigation}
      >
        {text}
      </button>
    );
  }
  if (type === "secondary") {
    return (
      <button
        className={`flex justify-center items-center border border-solid bg-transparent border-dark-blue p-4 rounded-xl w-full cursor-pointer capitalize text-dark-blue text-xl`}
        onClick={handleNavigation}
      >
        {text}
      </button>
    );
  }
};

export default CTAButton;
