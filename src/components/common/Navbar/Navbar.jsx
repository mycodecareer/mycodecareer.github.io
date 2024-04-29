import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import LOGO from "../../../assets/transp-logo.png";
import LOGOWITHTEXT from "../../../assets/logo-with-text.png";
// import { P4OverviewNotion } from "../../../constants/constants";

const navLinks = [
  // {
  //   id: 1,
  //   name: "About",
  //   url: "/about",
  // },
  // {
  //   id: 4,
  //   name: "Testimonials",
  //   url: "/testimonials",
  // },
  // {
  //   name: "Learn More!",
  //   url: P4OverviewNotion,
  //   external: true,
  // },
];

const Navbar = () => {
  //* STATES
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navColor, setNavColor] = useState("");

  //* EVENT HANDLERS
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //* Change Navbar color on scroll
  const changeNavColor = () => {
    if (window.scrollY >= 80) {
      setNavColor("accent");
    } else {
      setNavColor("transparent");
    }
  };
  window.addEventListener("scroll", changeNavColor);
  return (
    <nav
      className={`flex justify-between items-center px-4 lg:px-10 gap-4 w-screen h-[80px] fixed top-0 z-10 drop-shadow-xs text-dark-blue bg-${navColor}`}
    >
      <div className="p-2">
        <Link to="/">
          <img
            src={LOGO}
            alt="company-logo"
            className="aspect-square w-16 h-16 lg:hidden"
          />
          <img
            src={LOGOWITHTEXT}
            alt="company-logo"
            className="hidden lg:flex lg:aspect-video lg:w-72 lg:h-32"
          />
        </Link>
      </div>
      {/* Maximized menu */}
      <ul className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-6">
        {navLinks.map((link) => {
          return (
            <li key={link.name} className="ml-1 uppercase">
              {link.external ? (
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              ) : (
                <Link to={link.url}>{link.name}</Link>
              )}
            </li>
          );
        })}
      </ul>
      {isMenuOpen ? (
        <RiCloseLine
          fontSize={"2rem"}
          className="lg:hidden cursor-pointer fixed right-4"
          onClick={handleMenuToggle}
        />
      ) : (
        <RiMenu3Line
          fontSize={"2rem"}
          className="lg:hidden cursor-pointer fixed right-4"
          onClick={handleMenuToggle}
        />
      )}
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <section>
          <ul className="flex flex-col justify-center items-center gap-6 p-4 absolute top-20 right-0 bg-accent w-full h-screen">
            {navLinks.map((link) => {
              return (
                <li key={link.name} className="ml-1 uppercase text-2xl">
                  {link.external ? (
                    <a href={link.url} onClick={handleMenuToggle}>
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.url} onClick={handleMenuToggle}>
                      {link.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
