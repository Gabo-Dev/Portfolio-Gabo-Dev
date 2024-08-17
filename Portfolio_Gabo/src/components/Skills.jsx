import React from "react";
import {
  FaGithub,
  FaReact,
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineConsoleSql, AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandRedux, TbCertificate } from "react-icons/tb";
import { SiUdemy, SiEdx } from "react-icons/si";

function Skills() {
  const iconClasses =
    "transform transition-transform hover:scale-125 hover:shadow-lg";

  return (
    <div className="grid   ml-8 md:mb-32 mt-14  shadow-lg">
      <h1
        className="text-gray-200 md:text-6xl  text-3xl
        tracking-tight bg-gradient-to-r from-[#3CA55C]  to-[#B5AC49] bg-clip-text text-transparent  font-bold mb-2 "
      >
        Skills
      </h1>

      <div className="   md:mx-5  flex flex-col gap-5 mr-5">
        <h2 className="text-gray-200 text-2xl md:text-3xl font-semibold  tracking-tight flex items-center">
          <FaCode className="mr-2 text-orange-500" />
          Lenguajes de Programación
        </h2>
        <div className="text-lg md:text-xl text-gray-100 md:mb-6 mb-4 p-4 rounded-lg bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-opacity-90 shadow-lg leading-relaxed">
    <p className="font-light">
    Durante mi formación académica en la universidad, he adquirido una sólida base en los principales lenguajes de programación a través de diversos cursos y asignaturas. Además, mi pasión personal por el desarrollo Front End me ha llevado a profundizar y perfeccionar continuamente mis habilidades en este campo, enfocándome en crear experiencias web atractivas y funcionales. 

    </p>
  <span className="font-bold">Estos son algunos de los lenguajes y herramientas en los que me he especializado:</span>
</div>

        <div
          className="bg-white w-[380px] md:w-[500px] bg-opacity-10 backdrop-blur-lg 
        rounded-lg p-4  flex flex-wrap gap-3 text-3xl  md:text-5xl self-center"
        >
          <FaGithub className={iconClasses} />
          <FaReact className={`text-blue-500 ${iconClasses}`} />
          <IoLogoJavascript className={`text-yellow-400 ${iconClasses}`} />
          <FaBootstrap className={`text-fuchsia-700 ${iconClasses}`} />
          <AiOutlineConsoleSql className={`text-blue-500 ${iconClasses}`} />
          <AiOutlineHtml5 className={iconClasses} />
          <FaCss3Alt className={`text-blue-500 ${iconClasses}`} />
          <TbBrandRedux className={`text-purple-500 ${iconClasses}`} />
        </div>
      </div>
      <h2 className="text-gray-200 text-2xl md:text-3xl font-semibold ml-5 mt-2 mb-5 tracking-tight flex items-center">
        <TbCertificate className="mr-2 text-orange-500" />
        Cursos
      </h2>
      <div className="  grid  justify-self-center  md:max-w-[700px] gap-4   mx-4 ">
        <a
          href="https://courses.edx.org/certificates/4faa00ae3092431f849ea0f6ecd3d9d2"
          className="flex flex-col items-center w-[1/2] bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[800px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiEdx className="text-7xl text-green-400 mx-2" />

          <div className="flex flex-col justify-between p-2 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Developing Front End Apps with React
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Certificado Verificado de edX
            </p>
          </div>
        </a>

        <a
          href="https://www.udemy.com/certificate/UC-cc3c0320-f566-4e01-a9a2-1156e97ac486/"
          className="flex flex-col items-center w-[1/2] bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[800px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiUdemy className="text-7xl text-purple-500 mx-2" />

          <div className="flex flex-col justify-between p-2 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
              Ultimate Front End Bootcamp: CSS, Bootstrap, JQ, JS , React
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Build Stylish Mobile Responsive Web Apps with Interactive
              Components.
            </p>
          </div>
        </a>
        <a
          href="https://www.udemy.com/certificate/UC-cc3c0320-f566-4e01-a9a2-1156e97ac486/"
          className="flex flex-col items-center w-[1/2] bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[800px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-7xl  text-blue-500 mx-2" />

          <div className="flex flex-col justify-between p-2 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
              Practical Github Actions
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Testing, releasing and publish a marketplace action.
            </p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-orna-ponce/details/certifications/"
          className="z-10 cursor-pointer font_bold place-self-center text-gray-200 w-[250px]  mt-6 p-3 bg-gradient-to-r  from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-2xl  flex justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Más Certificados
        </a>
      </div>
    </div>
  );
}

export default Skills;
