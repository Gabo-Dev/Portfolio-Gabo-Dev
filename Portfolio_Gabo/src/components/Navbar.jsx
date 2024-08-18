import React, { useState } from "react";
import { Link } from "react-scroll";
import CloseIcon from "../assets/closeIcon.jsx";
import MenuIcon from "../assets/menuIcon.jsx";

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <div className="flex text-2xl justify-between text-gray-200 items-center px-6 max-w-[1300px] mx-auto h-24">
      <a href="#Inicio">Gabo-Dev</a>
      <ul className="hidden md:flex gap-12 <-10 cursor-pointer">
        <li className="relative group">
          <Link to="about" smooth={true} offset={50} duration={500}>
            Sobre mí
          </Link>
          <span
            className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0
           group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
          ></span>
        </li>
        <li className="relative group">
          <Link to="projects" smooth={true} offset={50} duration={500}>
            Proyectos
          </Link>
          <span
            className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0
           group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
          ></span>
        </li>
        <li className="relative group">
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contacto
          </Link>
          <span
            className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0
           group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
          ></span>
        </li>
      </ul>
      <div onClick={toggleNav} className="md:hidden z-30">
        {nav ? <CloseIcon className="size-8" /> : <MenuIcon className="size-14"  />}
      </div>

      <div
        className={
          nav
            ? "text-center z-20 fixed h-full w-full left-0 top-0 bg-[#232323]"
            : "fixed left-[-100%]"
        }
      >
        {/* Mobile display */}
        <ul className="font-semibold text-4xl space-y-8 mt-24">
          <li>
            <Link to="about"  onClick={closeNav} smooth={true} offset={50} duration={500}>
              Sobre mí
            </Link>
          </li>
          <li>
            <Link to="projects" onClick={closeNav} smooth={true} offset={50} duration={500}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
