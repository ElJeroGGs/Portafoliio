"use client";

import { motion } from "framer-motion";
import socialLinksRawData from "@/data/social-links.json";
import { SocialLink } from "@/types";

const socialLinksData = socialLinksRawData as SocialLink[];

const iconMap: Record<string, React.ReactNode> = {
  github: (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-16c-1.65 0-3 1.35-3 3v18c0 1.65 1.35 3 3 3h16c1.65 0 3-1.35 3-3v-18c0-1.65-1.35-3-3-3zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
    </svg>
  ),
  twitter: (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-2 7-2.5-3 1.5-6.5.5-9-2 3-2 8-3 9-5-4 0-8 3-9 5" />
    </svg>
  ),
  email: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
};

export const SocialLinksSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-background-alt relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary p5-clip-path p5-skew rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-block relative mb-8">
            <div className="absolute inset-0 bg-primary p5-clip-path p5-skew translate-x-2 translate-y-2 -z-10"></div>
            <h2 className="text-5xl md:text-7xl font-black p5-title-black bg-accent text-primary p-4 p5-clip-path-alt p5-skew-reverse inline-block border-4 border-primary">
              Contacto
            </h2>
          </div>
          <p className="text-center text-text-alt max-w-2xl mx-auto font-bold text-xl bg-primary p-6 p5-card p5-shadow">
            Sígueme en mis redes sociales o contáctame directamente. Estoy abierto a colaboraciones,
            preguntas y oportunidades.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8 }}
            className="h-3 bg-text mx-auto max-w-md mt-8 p5-skew border-2 border-primary"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-8"
        >
          {socialLinksData.map((link: SocialLink, index) => (
            <motion.a
              key={link.name}
              variants={itemVariants}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-8 p5-card relative group cursor-pointer flex flex-col items-center justify-center min-w-[160px]"
            >
              <div className="absolute -top-3 -right-3 bg-accent text-primary font-black px-3 py-1 p5-clip-path p5-skew border-2 border-primary z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                GO!
              </div>
              <motion.div className="mb-4 text-accent group-hover:text-text transition-colors scale-150">
                {iconMap[link.icon] || (
                  <span className="text-4xl">🔗</span>
                )}
              </motion.div>
              <p className="text-lg font-black uppercase tracking-widest text-center text-text bg-primary px-4 py-1 p5-clip-path-alt p5-skew-reverse border-2 border-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                {link.name}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
