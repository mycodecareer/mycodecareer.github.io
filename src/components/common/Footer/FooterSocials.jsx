import { GrFacebookOption, GrLinkedinOption, GrGithub } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import {
  FacebookLink,
  LinkedInLink,
  GithubLink,
} from "../../../constants/constants";

const iconClasses = "text-2xl fill-primary cursor-pointer";
const colStyle =
  "flex flex-col flex-wrap items-center gap-2 sm:flex-1 sm:justify-evenly sm:items-start sm:gap-2";
const rowStyle =
  "flex flex-wrap justify-center items-center gap-2 w-full sm:justify-start";

const FooterSocials = () => {
  const handleNavigateToAccount = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className={colStyle}>
      <section className={rowStyle}>
        <GrFacebookOption
          className={iconClasses}
          onClick={() => handleNavigateToAccount(FacebookLink)}
        />
        <GrLinkedinOption
          className={iconClasses}
          onClick={() => handleNavigateToAccount(LinkedInLink)}
        />
        <GrGithub
          className={iconClasses}
          onClick={() => handleNavigateToAccount(GithubLink)}
        />
      </section>
      <section className="flex justify-start items-center gap-1">
        <MdOutlineEmail className={iconClasses} />
        <p className="text-sm sm:text-lg md:text-xl">hello@mycodecareer.com</p>
      </section>
    </section>
  );
};

export default FooterSocials;
