import { CalendlyRoutingFormLink } from "../../../constants/constants";
import Button from "./Button";

const LinkButton = ({
  text = "button",
  type = "primary",
  link = CalendlyRoutingFormLink,
}) => {
  const handleNavigation = () => {
    window.open(link, "_blank");
  };

  return <Button text={text} type={type} onClick={handleNavigation} />;
};

export default LinkButton;
