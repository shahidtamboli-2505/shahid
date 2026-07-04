import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MagneticButton } from "../MagneticButton";

const roles = [
  "AI Engineer",
  "LLM & RAG Developer",
  "Agentic AI Builder",
  "Full-Stack Developer"
];

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection = ({ onOpenResume }: HeroSectionProps) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 text-primary text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 tracking-tight"
          >
            Hi, I'm <span className="text-white">Shahid Tamboli</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-12 md:h-16 flex items-center justify-center mb-6 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentRole]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-3xl md:text-5xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent1 to-accent2"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build production AI systems and full-stack apps that ship —{" "}
            <span className="text-white font-medium">for real, paying clients.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a href="#projects">
              <MagneticButton variant="primary">View Projects</MagneticButton>
            </a>
            <MagneticButton variant="secondary" onClick={onOpenResume}>Resume</MagneticButton>
            <a href="#contact">
              <MagneticButton variant="outline">Let's Talk</MagneticButton>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center gap-6"
          >
            {[
              { icon: FaGithub, href: "https://github.com/shahidtamboli-2505" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/shahid-tamboli-456403311/" },
              { icon: Mail, href: "mailto:shahidtamboli512@gmail.com" },
              { icon: FaInstagram, href: "https://www.instagram.com/sb._.champ" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-white hover:scale-110 transition-all duration-300 magnetic-hover p-2"
              >
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-primary origin-top animate-pulse"></div>
      </motion.div>
    </section>
  );
};
