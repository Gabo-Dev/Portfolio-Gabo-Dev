import React from "react";
import { FaGithub, FaReact, FaBootstrap  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineConsoleSql } from "react-icons/ai";


function Skills() {
  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14">
      <div className="max-w-[800px] inline-block">
        <h1 className="text-gray-200 md:text-6xl  text-3xl tracking-tight">
          Skills
        </h1>
        <h2 className="text-gray-200  ml-5 mt-2 tracking-tight">Lenguajes de Programación</h2>
        <div className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-5">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
            <FaGithub />
            <FaReact className="text-blue-500" />
            <IoLogoJavascript className="text-yellow-400" />
            <FaBootstrap className="text-fuchsia-700"/>
            <AiOutlineConsoleSql className="text-blue-500"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
