import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const navLinks = {
  home: "/",
  "about me": "/about",
  contact: "/contact",
};

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
      <section>
        <Link to="/" className="text-3xl">
          LOGO
        </Link>
      </section>
      <ul className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-6">
        {Object.keys(navLinks).map((link) => {
          return (
            <li key={link} className="ml-1 uppercase">
              <Link to={navLinks[link]}> {link} </Link>
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
            {Object.keys(navLinks).map((link) => {
              return (
                <li key={link} className="ml-1 uppercase text-2xl">
                  <Link to={navLinks[link]} onClick={handleMenuToggle}>
                    {" "}
                    {link}{" "}
                  </Link>
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
