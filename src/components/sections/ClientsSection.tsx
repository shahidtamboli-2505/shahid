import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  { name: "Alpha Corp", role: "AI Integration" },
  { name: "Beta Tech", role: "Web Application" },
  { name: "Gamma AI", role: "Data Pipeline" },
  { name: "Delta Systems", role: "Custom Automation" }
];

export const ClientsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="clients" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-display font-bold tracking-widest text-primary uppercase mb-4">Trusted By</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Paying Clients</h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 md:p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors group cursor-pointer"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)"
              }}
            >
              <h4 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">{client.name}</h4>
              <p className="text-xs text-text-muted mt-2">{client.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
