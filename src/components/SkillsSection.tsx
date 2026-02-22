"use client";

import { motion } from "framer-motion";
import skillsRawData from "@/data/skills.json";
import { Skill } from "@/types";

const skillsData = skillsRawData as Skill[];

export const SkillsSection: React.FC = () => {
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-text p5-clip-path p5-skew" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent p5-clip-path-alt p5-skew-reverse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="mb-16 relative inline-block"
        >
          <div className="absolute inset-0 bg-text p5-clip-path p5-skew translate-x-2 translate-y-2 -z-10"></div>
          <h2 className="text-4xl md:text-6xl font-black p5-title-black bg-accent text-primary p-4 p5-clip-path p5-skew inline-block border-4 border-primary">
            Tecnologías
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillsData.map((skillCategory: Skill, index) => (
            <motion.div
              key={skillCategory.category}
              variants={categoryVariants}
              className="p5-card p-6 relative"
              style={{
                transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
              }}
            >
              <div className="absolute -top-4 -left-4 bg-primary text-text font-black px-4 py-1 p5-clip-path p5-skew border-2 border-accent z-10">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-black mb-6 mt-2 uppercase tracking-wider text-accent p5-title-black" style={{ textShadow: '2px 2px 0px var(--color-primary)' }}>
                {skillCategory.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {skillCategory.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="flex items-center gap-3 font-bold text-lg bg-primary text-text p-2 p5-clip-path-alt border-l-4 border-accent"
                  >
                    <motion.span
                      className="w-3 h-3 bg-accent p5-clip-path"
                      whileHover={{ rotate: 90 }}
                    />
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
