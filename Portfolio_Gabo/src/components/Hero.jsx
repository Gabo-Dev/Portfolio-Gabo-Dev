import React from "react";
import profilepic from "../assets/profilePortfolio.webp";
import {Github, LinkedIn} from "../assets/Icons.jsx";
import { TypeAnimation } from  'react-type-animation';

function Hero() {
    const contactClass =
     "transform transition-transform   hover:scale-105 hover:shadow-lg z-10 cursor-pointer font_bold text-gray-200 w-auto  mt-6 p-3 bg-gradient-to-r  from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-2xl  flex items-center ";
  
     return (
    <section className="md:grid md:grid-cols-2  place-items-center">
      <div >
        <p className="text-gray-200 md:text-6xl  text-3xl tracking-tight">
          Hey, soy <br />
          <span>Gabo Dev</span> <br />
          <TypeAnimation
            sequence={["Developer", 1000, "Software Engineer", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>
        <p className="text-gray-300 mt-2">
          Especializado en el desarrollo de aplicaciones web únicas.
        </p>
        <div className="flex flex-row gap-4 mb-2 md:mb-0 ">
          <a
            href="https://www.linkedin.com/in/jonathan-orna-ponce/"
            target="_blank"
            rel="noopener noreferrer" // Buenas prácticas de seguridad
            className={contactClass}
          >
            <LinkedIn className="mr-2"/>
            LinkedIn
          </a>
          <a
           href="https://github.com/Gabo-Dev"
           target="_blank"
           rel="noopener noreferrer" // Buenas prácticas de seguridad
            className={contactClass}
          >
            <Github  className="mr-2"/>
            Github
          </a>
        </div>
      </div>
      <img src={profilepic} className="w-[300px] md:w-[500px] m-6 md:m-0
       rounded-full" loading="lazy" alt="foto de perfil" />
    </section>
  );
}

export default Hero;
