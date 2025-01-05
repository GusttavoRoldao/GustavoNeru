import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "Nutri IA",
      description:
        "Aplicativo inteligente que monta dietas personalizadas, ajudando você a alcançar seus objetivos de forma simples e prática.",
      codeLink: "https://github.com/GusttavoRoldao/NutriIA.git",
      image: "/images/NutriIA.png",
      liveLink: null,
    },
    {
      name: "SoltaOmapa",
      description:
        "Desenvolvi uma landing page para um app de planejamento de viagens, destacando suas funcionalidades e benefícios de forma clara e atrativa.",
      codeLink: "https://github.com/GusttavoRoldao/app-viagem.git",
      image: "/images/soltaomapa.png",
      liveLink: "https://app-viagem.vercel.app/",
    },
    {
      name: "Cardapio",
      description:
        "Criei uma página de cardápio online onde os clientes podem visualizar pratos, adicionar ao carrinho e finalizar pedidos diretamente pelo WhatsApp.",
      codeLink: "https://github.com/GusttavoRoldao/Cardapio-Digital.git",
      image: "/images/cardapio.png",
      liveLink: "https://cardapio-digital-virid.vercel.app/",
    },
  ];

  const parallaxElements = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;

      const updateParallaxMovement = (el, speed) => {
        const xRotation = deltaY * speed * 10;
        const yRotation = deltaX * speed * 10;
        const zMovement = deltaX * speed * 7;
        const yMovement = deltaY * speed * 6;

        el.style.transition = "transform 0.15s ease-out";
        el.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) translateZ(${zMovement}px) translateY(${yMovement}px)`;
      };

      parallaxElements.current.forEach((el) => {
        const speed = el.dataset.speed || 1;
        updateParallaxMovement(el, speed);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-[#f5f5fe] px-14 py-10">
      <motion.h1
        className="text-4xl md:text-6xl font-bold font-Aspire text-black mt-6 mb-4"
        initial={{ x: -250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        PROJETOS
      </motion.h1>
      <motion.p
        className="text-xs md:text-sm font-Asgard text-gray-700 mb-8 max-w-2xl"
        initial={{ x: -250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
      >
        Explore meus projetos no GitHub! Veja atualizações de trabalho,
        <br />
        projetos anteriores e os que estão em andamento. Fique
        <br />à vontade para me acompanhar!
      </motion.p>
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      >
        <a
          href="https://github.com/GusttavoRoldao"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center bg-black text-white rounded-lg px-6 py-3 text-sm font-Stem-Medium transform transition-transform duration-300 hover:rotate-y-3d whitespace-nowrap"
          style={{ width: "fit-content" }}
        >
          <span className="font-Asgard">Visite minhas atualizações</span>
          <img src="/images/GitHub.png" alt="GitHub" className="w-4 h-4 ml-2" />
        </a>
      </motion.div>
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
      >
        <div className="flex flex-col items-start space-y-28 max-w-sm">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start justify-center space-y-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-xl border border-black overflow-hidden parallax group"
                  data-speed="2"
                  ref={(el) => (parallaxElements.current[index] = el)}
                >
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-[300px] h-[200px] object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </a>
              ) : (
                <div
                  className="relative rounded-xl border border-black overflow-hidden parallax group"
                  data-speed="2"
                  ref={(el) => (parallaxElements.current[index] = el)}
                >
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-[300px] h-[200px] object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
              )}
              <div className="flex flex-col items-start space-y-2">
                <h2 className="ml-[90px] text-sm font-Asgard">
                  {project.name}
                </h2>
                <div className="flex flex-row items-center space-x-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center bg-black text-white rounded-xl px-4 py-2 text-sm font-Stem-Medium transition-transform duration-300 ease-out hover:rotate-y-3d"
                    style={{
                      transition: "transform 0.3s ease-out",
                    }}
                  >
                    <span>Code</span>
                    <img
                      src="/images/GitHub.png"
                      alt="GitHub"
                      className="w-3 h-3 ml-1"
                    />
                  </a>

                  <p className="text-xs font-Asgard text-gray-700 max-w-xs">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
