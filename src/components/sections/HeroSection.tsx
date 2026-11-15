import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MagneticButton } from "../MagneticButton";
import { WordReveal } from "../Reveal";

const roles = ["AI Engineer", "LLM & RAG Developer", "Agentic AI Builder", "Full-Stack Developer"];

const stack = ["Python", "FastAPI", "LangChain", "RAG", "Vector DBs", "LLM APIs", "React", "Next.js", "PyTorch", "Playwright", "Docker", "SQL", "Streamlit", "Groq"];

const socials = [
  { icon: FaGithub, href: "https://github.com/shahidtamboli-2505", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/shahid-tamboli-456403311/", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/shahidtamboli19/", label: "LeetCode" },
  { icon: Mail, href: "mailto:shahidtamboli512@gmail.com", label: "Email" },
  { icon: FaInstagram, href: "https://www.instagram.com/sb._.champ", label: "Instagram" },
];

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection = ({ onOpenResume }: HeroSectionProps) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrentRole((p) => (p + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  const D = 1.5; // base delay after preloader

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: D }}
            className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-sm text-text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent1 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent1" />
            </span>
            Available for internships & freelance
            <span className="text-white/20">|</span>
            <span className="font-mono text-xs">Sangli, IN</span>
          </motion.div>

          <h1 className="text-[13vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-bold leading-[0.95] tracking-[-0.03em] mb-6">
            <WordReveal text="Shahid" delay={D + 0.1} className="text-white block" />
            <WordReveal text="Tamboli" delay={D + 0.25} className="text-gradient block" />
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mt-10">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: D + 0.5 }}
                className="h-9 flex items-center overflow-hidden mb-5 font-mono text-sm md:text-base text-primary"
              >
                <span className="text-text-muted mr-3">{">"}</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[currentRole]}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
                <span className="ml-1 w-2 h-5 bg-primary animate-pulse" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: D + 0.6 }}
                className="text-lg md:text-xl text-text-muted leading-relaxed"
              >
                Final-year AI & Data Science student building production LLM, RAG and agentic systems, plus the full-stack apps around them —{" "}
                <span className="text-white font-medium">shipped for real, paying clients.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: D + 0.75 }}
                className="flex flex-wrap items-center gap-3 mt-8"
              >
                <a href="#projects"><MagneticButton variant="primary">View Work <ArrowUpRight size={16} /></MagneticButton></a>
                <MagneticButton variant="secondary" onClick={onOpenResume}>Resume</MagneticButton>
                <a href="#contact"><MagneticButton variant="ghost">Let's talk →</MagneticButton></a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: D + 0.9 }}
              className="flex lg:flex-col items-center lg:items-end gap-2"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex items-center gap-3 px-3 py-2 rounded-full text-text-muted hover:text-white transition-colors magnetic-hover"
                >
                  <span className="hidden lg:inline text-xs font-mono opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">{s.label}</span>
                  <s.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: D + 1.1 }}
        className="relative mt-20 border-y border-white/[0.06] py-4 overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)" }}
      >
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...stack, ...stack].map((t, i) => (
            <span key={i} className="flex items-center font-mono text-sm uppercase tracking-[0.2em] text-text-muted/70 px-8">
              {t} <span className="ml-8 w-1.5 h-1.5 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 font-mono text-xs text-text-muted hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: D + 1.4 }}
      >
        <ArrowDown size={14} className="animate-bounce" /> scroll
      </motion.a>
    </section>
  );
};
