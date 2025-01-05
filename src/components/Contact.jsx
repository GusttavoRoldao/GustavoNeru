import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref: contactRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;

      const xRotation = deltaY * 30;
      const yRotation = deltaX * 30;

      if (titleRef.current) {
        titleRef.current.style.transition = "transform 0.2s ease-out";
        titleRef.current.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const contacts = [
    {
      title: "INSTA\nGRAM",
      buttonLabel: "gustawv_",
      icon: "/images/instagram.svg",
      href: "https://www.instagram.com/gustawv_/",
    },
    {
      title: "WHATS\nAPP",
      buttonLabel: "77 988689776",
      icon: "/images/whatsapp.svg",
      href: "https://wa.me/+5577988689776",
    },
    {
      title: "DISC\nORD",
      buttonLabel: "neru#6887",
      icon: "/images/discord.svg",
      href: null,
    },
  ];

  const handleMouseEnter = (cardRef) => {
    const card = cardRef.current;
    card.style.transform = "rotateX(15deg) rotateY(10deg) scale(1.1)";
    card.style.transition = "transform 0.3s ease-out";
  };

  const handleMouseLeave = (cardRef) => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    card.style.transition = "transform 0.3s ease-out";
  };

  return (
    <div
      ref={contactRef}
      className="min-h-screen bg-[#E3761D] flex flex-col items-center justify-center"
    >
      <motion.h1
        ref={titleRef}
        className="text-[#EDEFFF] text-5xl md:text-8xl lg:text-[160px] font-bold font-Aspire mb-36"
        initial={{ y: 200, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{
          duration: 1,
          ease: [0.2, 0.8, 0.2, 1],
        }}
      >
        CONTATO
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeOut",
              staggerChildren: 0.25,
            },
          },
        }}
      >
        {contacts.map((contact, index) => {
          const cardRef = useRef(null);

          return (
            <motion.div
              key={index}
              ref={cardRef}
              className="relative bg-[#E3761D] hover:bg-black rounded-lg w-[180px] h-[140px] md:w-[280px] md:h-[180px] lg:w-[250px] lg:h-[200px] p-4 flex flex-col justify-between mx-auto transition-transform duration-300"
              style={{
                perspective: "1000px",
              }}
              onMouseEnter={() => handleMouseEnter(cardRef)}
              onMouseLeave={() => handleMouseLeave(cardRef)}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              <h2 className="text-[#FFFFFF] text-2xl lg:text-3xl font-bold whitespace-pre-line font-Aspire">
                {contact.title}
              </h2>
              {contact.href ? (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex items-center justify-center text-white border border-white rounded-full px-3 py-1 text-xs md:text-sm font-semibold hover:bg-white hover:text-black transition-all"
                >
                  <span className="mr-2">{contact.buttonLabel}</span>
                  <img src={contact.icon} alt="Icon" className="w-4 h-4" />
                </a>
              ) : (
                <span className="absolute bottom-4 right-4 flex items-center justify-center text-white border border-white rounded-full px-3 py-1 text-xs md:text-sm font-semibold cursor-default">
                  <span className="mr-2">{contact.buttonLabel}</span>
                  <img src={contact.icon} alt="Icon" className="w-4 h-4" />
                </span>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Contact;
