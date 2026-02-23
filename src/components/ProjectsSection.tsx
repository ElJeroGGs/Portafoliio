"use client";

import { motion } from "framer-motion";
import projectsRawData from "@/data/projects.json";
import { Project } from "@/types";

const projectsData = projectsRawData as Project[];

export const ProjectsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const featuredProjects = projectsData.filter((p: Project) => p.featured);
  const otherProjects = projectsData.filter((p: Project) => !p.featured);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-full h-64 bg-text p5-clip-path p5-skew -rotate-12" />
        <div className="absolute bottom-1/4 left-1/4 w-full h-96 bg-primary p5-clip-path-alt p5-skew-reverse rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary p5-clip-path p5-skew translate-x-3 translate-y-3 -z-10"></div>
            <h2 className="text-5xl md:text-7xl font-black p5-title-black bg-text text-primary p-4 p5-clip-path-alt p5-skew-reverse inline-block border-4 border-primary">
              Proyectos
            </h2>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8 }}
            className="h-4 bg-accent mx-auto max-w-md mt-8 p5-skew border-2 border-primary"
          />
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24"
          >
            <h3 className="text-3xl md:text-4xl font-black text-text bg-primary inline-block p-3 p5-clip-path p5-skew mb-12 border-l-8 border-accent p5-shadow-white">
              Destacados
            </h3>
            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredProjects.map((project: Project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                  className="p5-card p-8 relative group"
                >
                  <div className="absolute -top-6 -right-6 bg-accent text-primary font-black text-2xl px-6 py-2 p5-clip-path p5-skew border-4 border-primary z-10 p5-shadow">
                    ★
                  </div>
                  <div className="mb-6">
                    <h3 className="text-3xl font-black text-accent group-hover:text-text transition-colors p5-title-black uppercase tracking-wider">
                      {project.title}
                    </h3>
                    <p className="text-text-alt mt-4 font-bold text-lg bg-primary p-3 p5-clip-path-alt border-l-4 border-accent">
                      {project.description}
                    </p>
                  </div>

                  <p className="text-base text-text-alt mb-6 font-medium leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="px-4 py-1 bg-text text-primary text-sm font-black p5-clip-path p5-skew border-2 border-primary"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    {project.links?.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        whileHover={{ scale: 1.1, rotate: linkIndex % 2 === 0 ? -2 : 2 }}
                        whileTap={{ scale: 0.95 }}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 text-lg ${
                          linkIndex % 2 === 0 
                            ? "p5-btn" 
                            : "font-black uppercase tracking-widest border-4 border-text text-text bg-transparent p5-clip-path-alt p5-skew-reverse transition-all hover:bg-text hover:text-primary p5-shadow-white"
                        }`}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {otherProjects.map((project: Project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
              className="p5-card p-6 relative group"
            >
              <h3 className="text-2xl font-black text-accent group-hover:text-text transition-colors mb-4 p5-title-black uppercase tracking-wider">
                {project.title}
              </h3>
              <p className="text-base text-text-alt mb-6 font-bold bg-primary p-3 p5-clip-path-alt border-l-4 border-accent">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-text text-primary text-xs font-black p5-clip-path p5-skew border-2 border-primary"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-primary text-text text-xs font-black p5-clip-path-alt p5-skew-reverse border-2 border-accent">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <div className="flex gap-3 mt-auto flex-wrap">
                {project.links?.map((link, linkIndex) => (
                  <motion.a
                    key={linkIndex}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 text-sm ${
                      linkIndex % 2 === 0
                        ? "p5-btn"
                        : "font-black uppercase tracking-widest border-2 border-text text-text bg-transparent p5-clip-path-alt p5-skew-reverse transition-all hover:bg-text hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
