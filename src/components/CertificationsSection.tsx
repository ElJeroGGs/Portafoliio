"use client";

import { motion } from "framer-motion";
import certificationsRawData from "@/data/certifications.json";
import { Certification } from "@/types";

const certificationsData = certificationsRawData as Certification[];

export const CertificationsSection: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-10">
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-primary p5-clip-path p5-skew rotate-45" />
        <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-accent p5-clip-path-alt p5-skew-reverse -rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-accent p5-clip-path p5-skew translate-x-3 translate-y-3 -z-10"></div>
            <h2 className="text-5xl md:text-7xl font-black p5-title-black bg-text text-primary p-4 p5-clip-path-alt p5-skew-reverse inline-block border-4 border-primary">
              Certificaciones
            </h2>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8 }}
            className="h-4 bg-primary mx-auto max-w-md mt-8 p5-skew border-2 border-accent"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificationsData.map((cert: Certification, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="p5-card p-6 relative group cursor-pointer"
            >
              <div className="absolute -top-4 -right-4 bg-text text-primary font-black text-2xl px-4 py-2 p5-clip-path p5-skew border-2 border-primary z-10 p5-shadow">
                ★
              </div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-black text-accent group-hover:text-text transition-colors flex-1 p5-title-black uppercase tracking-wider">
                  {cert.title}
                </h3>
              </div>

              <p className="text-text-alt text-lg font-bold bg-primary p-3 p5-clip-path-alt border-l-4 border-accent mb-3">
                {cert.issuer}
              </p>
              <p className="text-text-alt text-sm font-black uppercase tracking-widest mb-6">
                Completado: {cert.date}
              </p>

              {cert.credentialUrl && (
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p5-btn px-6 py-3 text-sm inline-block"
                >
                  Ver Credencial
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {certificationsData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-text-alt text-xl font-bold bg-primary p-6 p5-card p5-shadow inline-block">
              Agrega tus certificaciones en{" "}
              <code className="bg-text text-primary px-2 py-1 p5-clip-path p5-skew font-black">src/data/certifications.json</code>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
