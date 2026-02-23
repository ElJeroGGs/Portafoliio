"use client";

import { motion } from "framer-motion";
import devopsRawData from "@/data/devops.json";
import { DevOpsProject } from "@/types";

const devopsData = devopsRawData as DevOpsProject[];

export const DevOpsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const statusColors: Record<string, string> = {
    active: "bg-success",
    planned: "bg-warning",
    completed: "bg-accent",
  };

  const statusLabels: Record<string, string> = {
    active: "Activo",
    planned: "Planeado",
    completed: "Completado",
  };

  return (
    <section className="py-20 bg-background-alt relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-full h-32 bg-accent p5-clip-path p5-skew rotate-6" />
        <div className="absolute bottom-1/4 right-1/4 w-full h-64 bg-text p5-clip-path-alt p5-skew-reverse -rotate-6" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-block relative mb-6">
            <div className="absolute inset-0 bg-text p5-clip-path p5-skew translate-x-2 translate-y-2 -z-10"></div>
            <h2 className="text-5xl md:text-7xl font-black p5-title-black bg-primary text-accent p-4 p5-clip-path p5-skew inline-block border-4 border-accent">
              Homelab & DevOps
            </h2>
          </div>
          <p className="text-center text-text-alt max-w-3xl mx-auto mb-8 font-bold text-xl bg-primary p-6 p5-card p5-shadow">
            Proyectos y configuraciones que he implementado en mi homelab,
            demostrando experiencia en infraestructura, contenerización y CI/CD.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8 }}
            className="h-3 bg-text mx-auto max-w-md p5-skew border-2 border-primary"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {devopsData.map((project: DevOpsProject, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ x: index % 2 === 0 ? 10 : -10, scale: 1.02 }}
              className="p5-card p-8 relative group"
            >
              <div className="absolute -top-5 -left-5 bg-primary text-text font-black text-xl px-4 py-2 p5-clip-path p5-skew border-2 border-accent z-10">
                #{project.id}
              </div>
              <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-accent group-hover:text-text transition-colors mb-4 p5-title-black uppercase tracking-wider">
                    {project.name}
                  </h3>
                  <p className="text-text-alt text-lg font-bold bg-primary p-4 p5-clip-path-alt border-l-4 border-accent">
                    {project.description}
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`px-6 py-3 font-black text-lg uppercase tracking-widest text-primary p5-clip-path p5-skew border-2 border-primary p5-shadow ${
                    statusColors[project.status]
                  }`}
                >
                  {statusLabels[project.status]}
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="px-4 py-2 bg-text text-primary text-sm font-black p5-clip-path p5-skew border-2 border-primary"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-dark p-8 rounded-lg border border-border text-center"
          >
            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              className="text-4xl font-bold text-accent mb-2"
            >
              6+
            </motion.p>
            <p className="text-text-alt">Meses de Experiencia</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-dark p-8 rounded-lg border border-border text-center"
          >
            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
              className="text-4xl font-bold text-success mb-2"
            >
              {devopsData.filter((p) => p.status === "active").length}
            </motion.p>
            <p className="text-text-alt">Proyectos Activos</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-dark p-8 rounded-lg border border-border text-center"
          >
            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
              className="text-4xl font-bold text-accent mb-2"
            >
              {new Set(devopsData.flatMap((p) => p.technologies)).size}+
            </motion.p>
            <p className="text-text-alt">Tecnologías Usadas</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
