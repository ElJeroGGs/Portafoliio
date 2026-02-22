"use client";

import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t-8 border-accent py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full p5-bg-pattern opacity-20 pointer-events-none"></div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-text text-primary font-black px-6 py-2 p5-clip-path p5-skew mb-6 border-2 border-primary">
            © {currentYear} LALO. ALL RIGHTS RESERVED.
          </div>
          <p className="text-sm text-text-alt font-bold uppercase tracking-widest">
            Construido con <span className="text-accent bg-primary px-2 py-1 p5-clip-path-alt">Next.js</span>, 
            <span className="text-accent bg-primary px-2 py-1 p5-clip-path"> TypeScript</span> y 
            <span className="text-accent bg-primary px-2 py-1 p5-clip-path-alt"> Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
