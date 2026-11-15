import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { cn } from "../utils/cn";

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = ({ onOpenResume }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive("#" + e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[110]" style={{ scaleX: progress }} />

      <motion.header
        className={cn("fixed top-0 left-0 right-0 z-[100] transition-all duration-500 pointer-events-none", scrolled ? "py-3" : "py-6")}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
      >
        <div className="container mx-auto px-4 md:px-6 pointer-events-auto">
          <nav className={cn("flex items-center justify-between transition-all duration-500 rounded-full", scrolled ? "glass-panel px-5 py-2.5" : "px-2")}>
            <a href="#home" className="font-display font-bold text-xl text-white magnetic-hover">
              Shahid<span className="text-primary">.</span>
            </a>

            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-full transition-colors magnetic-hover",
                      active === link.href ? "text-white" : "text-text-muted hover:text-white"
                    )}
                  >
                    {active === link.href && (
                      <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/[0.07]" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                    )}
                    <span className="relative">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <MagneticButton variant="primary" onClick={onOpenResume} className="!py-2 !px-5 text-sm">
                Resume <ArrowUpRight size={16} />
              </MagneticButton>
            </div>

            <button className="md:hidden text-white p-2 z-[150]" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[140] bg-background flex flex-col p-8"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-xl text-white">Shahid<span className="text-primary">.</span></span>
              <button className="text-white p-2" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X size={28} />
              </button>
            </div>

            <ul className="flex flex-col gap-2 mt-16">
              {navLinks.map((link, i) => (
                <motion.li key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.07 }}>
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)} className="flex items-baseline gap-4 py-3 border-b border-white/5">
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    <span className="text-4xl font-display font-semibold text-white">{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-auto">
              <MagneticButton variant="primary" className="w-full" onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}>
                View Resume <ArrowUpRight size={16} />
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
