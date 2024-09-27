import React from "react";
import { Carousel } from "react-responsive-3d-carousel";
import Card from "./Card";
import proyecto1 from "../assets/proyecto1.webp";
import proyecto2 from "../assets/proyecto2.webp";

function Projects() {
  return (
    <section className="grid   m-5 md:mb-32 mx-auto w-full overflow-hidden" id="projects">
      <span className="relative inline-flex overflow-hidden rounded-full p-[3px]  w-[200px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
        <div className="inline-flex items-center justify-center w-full px-3 py-1 text-4xl font-bold text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
          <span className="animate-bounce">Proyectos</span>
        </div>
      </span>
      <div className="md:w-[70%]  w-full   place-self-center">
        <Carousel
          depth={2}
          transitionTime={1000}
          spread="normal"
          showArrows={false}
          showStatus={false}
          height="500px"
          width="50vh"
        >
          <Card
            image={proyecto1}
            title="E-Plant"
            description="Website diseñada para la venta de plantas."
          />
          <Card
            image={proyecto2}
            title="VibeStream"
            description="Website diseñada para descubrir las mejores canciones."
          />
          <Card
            image={proyecto1}
            title="E-Plant"
            description="Website diseñada para la venta de plantas."
          />
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
