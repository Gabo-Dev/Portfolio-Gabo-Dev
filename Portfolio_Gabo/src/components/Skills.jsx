import React from "react";
import {
  Github,
  HTML5,
  LinkedIn,
  ReactIcon,
  CSS,
  NPM,
  VisualStudioCode,
  EclipseIDE,
  Udemy,
  Edx,
  Bootstrap,
  IconBxCodeAlt,
  CertificateIcon,
} from "../assets/Icons.jsx";

function Skills() {
  const iconClasses =
    "transform transition-transform animate-customePulse shadow-lg";
  const certificatesClasses =
    "flex flex-col items-center w-[1/2] bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700";
  return (
    <div className="grid   mx-auto max-w-screen w-full  md:mt-12 shadow-lg gap-1">
      <span className="relative inline-flex overflow-hidden rounded-full p-[3px]  w-[150px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
        <div className="inline-flex items-center justify-center w-full  text-4xl font-bold text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
          <span className="animate-bounce">Skills</span>
        </div>
      </span>

      {/* Contenedor Introducción SKills */}
      <h2 className="text-gray-200 text-2xl  md:text-3xl font-semibold  tracking-tight flex items-center md:p-3">
        <IconBxCodeAlt className="text-orange-400 size-7 "/>
          Lenguajes de Programación
        </h2>
      <div className="flex flex-wrap  justify-center items-center w-full max-w-full overflow-hidden ">
        <div className=" text-gray-100 md:mb-6 mb-4  w-full max-w-full   rounded-lg bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-opacity-90 shadow-lg leading-relaxed">
          <p className="font-light">
            Durante mi formación académica en la Universidad, he adquirido una
            sólida base en los principales lenguajes de programación a través de
            diversos cursos y asignaturas. Además, mi pasión personal por el
            desarrollo Front End me ha llevado a profundizar y perfeccionar
            continuamente mis habilidades en este campo, enfocándome en crear
            experiencias web atractivas y funcionales.
          </p>
          <span className="font-bold">
            Estos son algunos de los lenguajes y herramientas en los que me he
            especializado:
          </span>
        </div>

        <div
          className="bg-white w-[380px] md:w-[500px] bg-opacity-10 backdrop-blur-lg 
        rounded-lg p-4  flex  gap-3 text-3xl  md:text-5xl self-center"
        >
          <Github className={iconClasses} />
          <ReactIcon className={iconClasses} />
          <HTML5 className={iconClasses} />
          <CSS className={iconClasses} />
          <Bootstrap className={iconClasses} />
          <EclipseIDE className={iconClasses} />
          <VisualStudioCode className={iconClasses} />
          <NPM className={iconClasses} />
        </div>
        
      </div>

      {/* Contenedor Cursos  */}
      <h2 className="text-gray-200 text-2xl md:text-3xl font-semibold ml-5 mt-2 mb-5 tracking-tight flex items-center">
      <CertificateIcon className="text-orange-400 size-7 mr-2 "/>
        Cursos
      </h2>
      <div className="  grid  justify-self-center   md:w-[700px] gap-4   mx-4 ">
        <a
          href="https://courses.edx.org/certificates/4faa00ae3092431f849ea0f6ecd3d9d2"
          className={certificatesClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Edx className="size-20 mx-3 bg-gray-100" />
          <div className="flex flex-col justify-between p-2 leading-normal">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Developing Front End Apps with React
            </h5>
            <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
              Certificado Verificado de edX
            </p>
          </div>
        </a>

        <a
          href="https://www.udemy.com/certificate/UC-cc3c0320-f566-4e01-a9a2-1156e97ac486/"
          className={certificatesClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Udemy className="text-7xl mx-3" />

          <div className="flex flex-col justify-between p-2 leading-normal">
            <h5 className="mb-2 text-xl font-bold tracking-tight  text-gray-900 dark:text-white">
              Ultimate Front End Bootcamp: CSS, Bootstrap, JQ, JS , React
            </h5>
            <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400 ">
              Build Stylish Mobile Responsive Web Apps with Interactive
              Components.
            </p>
          </div>
        </a>
        <a
          href="https://www.udemy.com/certificate/UC-cc3c0320-f566-4e01-a9a2-1156e97ac486/"
          className={certificatesClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className="text-6xl  mx-2" />

          <div className="flex flex-col justify-between p-2 leading-normal">
            <h5 className="mb-2 text-xl font-bold tracking-tight  text-gray-900 dark:text-white">
              Practical Github Actions
            </h5>
            <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400 ">
              Testing, releasing and publish a marketplace action.
            </p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-orna-ponce/details/certifications/"
          className="z-10 cursor-pointer font_bold place-self-center text-gray-200 w-[200px] m-4  p-3 bg-gradient-to-r  from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-2xl  flex justify-center"
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
