import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const parallaxElements = useRef([]);
  const mainImageRef = useRef(null);
  const [visibleDescription, setVisibleDescription] = useState(null);

  useEffect(() => {
    const updateParallaxElements = () => {
      const elements = document.querySelectorAll(".parallax");
      parallaxElements.current = Array.from(elements);
    };

    updateParallaxElements();

    const observer = new MutationObserver(() => {
      updateParallaxElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

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

        el.style.transition = "transform 0.3s ease-out";
        el.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) translateZ(${zMovement}px) translateY(${yMovement}px)`;
      };

      parallaxElements.current.forEach((el) => {
        const speed = el.dataset.speed || 1;
        updateParallaxMovement(el, speed);
      });

      if (mainImageRef.current) {
        updateParallaxMovement(mainImageRef.current, 2);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleDescription = (index) => {
    setVisibleDescription((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative bg-[#E3761D] text-[#EDEFFF] w-full h-screen flex items-center justify-center mb-10 mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-between w-4/5">
        {/* Texto com animação ajustada */}
        <motion.div
          className="text-left lg:mr-10"
          initial={{
            x: -200,
            rotateY: 30,
            rotateX: -10,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            rotateY: 0,
            rotateX: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-Aspire leading-tight mb-8">
            O Que Posso Fazer <br />
            Pelo Seu <br />
            Negócio
          </h1>
          <div className="space-y-6">
            {[1, 2, 3].map((blockIndex) => (
              <div key={blockIndex}>
                <div
                  className="cursor-pointer font-bold flex items-center"
                  onClick={() => toggleDescription(blockIndex)}
                >
                  <motion.span
                    className="font-Starguard"
                    animate={{
                      y: visibleDescription === blockIndex ? -10 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    0{blockIndex}
                  </motion.span>
                  <motion.span
                    className="ml-2 font-Asgard"
                    animate={{
                      y: visibleDescription === blockIndex ? -10 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    {blockIndex === 1
                      ? "Precisa de presença online?"
                      : blockIndex === 2
                      ? "Quer otimizar sua produção?"
                      : "Precisa melhorar a experiência do usuário?"}
                  </motion.span>
                </div>
                <AnimatePresence>
                  {visibleDescription === blockIndex && (
                    <motion.div
                      className="flex items-center text-sm mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <span className="text-[#EDEFFF] font-light">|</span>
                      <p className="ml-2">
                        {blockIndex === 1
                          ? "Crio websites completos, do design à programação e experiência do usuário."
                          : blockIndex === 2
                          ? "Implemento automatizo funções para economizam seu tempo e recursos."
                          : "Aumento a interatividade e funcionalidade para conquistar seus clientes."}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative mt-12 lg:mt-0">
          <motion.div
            className="parallax"
            data-speed="2"
            ref={mainImageRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src="/images/rectangle.png"
              alt="Principal"
              className="w-72 h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          {[
            { src: "/images/aa.png", className: "-top-14 -left-16" },
            { src: "/images/aaa.png", className: "top-10 -right-16" },
            { src: "/images/aaaa.png", className: "-bottom-16 -left-16" },
          ].map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={`Decoração ${index + 1}`}
              className={`absolute w-28 h-28 parallax ${image.className}`}
              data-speed={2 + index * 0.5}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
