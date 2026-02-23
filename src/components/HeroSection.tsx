"use client";

import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const borderVariants = {
    hidden: { width: 0 } as const,
    visible: { 
      width: "100%", 
      transition: { duration: 0.8, ease: "easeOut" } 
    } as const,
  };

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden relative p5-bg-pattern">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary opacity-20 p5-clip-path"
          animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent opacity-20 p5-clip-path-alt"
          animate={{ rotate: [0, -5, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Nombre */}
        <motion.div variants={itemVariants} className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-text p5-clip-path p5-skew translate-x-2 translate-y-2 -z-10"></div>
          <h1 className="text-6xl md:text-8xl font-black p5-title-black bg-accent text-primary p-4 p5-clip-path p5-skew inline-block border-4 border-primary">
            José Mercado 
          </h1>
        </motion.div>

        {/* Línea decorativa */}
        <motion.div
          variants={borderVariants}
          className="h-3 mx-auto mb-8 max-w-md p5-skew bg-text border-2 border-primary"
        />

        {/* Subtítulo */}
        <motion.div variants={itemVariants} className="mb-8 inline-block">
          <p className="text-xl md:text-3xl font-bold bg-primary text-text p-3 p5-clip-path-alt p5-skew-reverse border-2 border-accent p5-shadow">
            Ingeniero en Computación 
          </p>
        </motion.div>

        {/* Descripción */}
        <motion.div variants={itemVariants} className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-bold bg-background-alt text-text-alt p-6 p5-card p5-shadow">
            Apasionado por la informática desde la infancia, con la convicción de que en la computación siempre hay algo nuevo que aprender. Con experiencia probada liderando comunidades tecnológicas y gestionando infraestructura compleja de manera autodidacta.
          </p>
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center flex-wrap mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 text-xl p5-btn p5-shadow"
          >
            Ver Proyectos
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 text-xl font-black uppercase tracking-widest border-4 border-text text-text bg-transparent p5-clip-path-alt p5-skew-reverse transition-all hover:bg-text hover:text-primary p5-shadow-white"
          >
            Contactarme
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-20"
          style={{ color: 'var(--color-accent)' }}
        >
          <svg
            className="w-8 h-8 mx-auto p5-shadow-white bg-primary text-text rounded-full p-1 border-2 border-text"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
