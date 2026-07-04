import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { cn } from "../utils/cn";

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = ({ onOpenResume }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-none",
          scrolled ? "py-4" : "py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
      >
        <div className="container mx-auto px-4 md:px-6 pointer-events-auto">
          <nav
            className={cn(
              "flex items-center justify-between rounded-full transition-all duration-500",
              scrolled ? "glass-panel px-6 py-3" : "px-2 py-0"
            )}
          >
            {/* Logo */}
            <a 
              href="#" 
              className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent2 magnetic-hover"
            >
              ST
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-white text-sm font-medium transition-colors relative group magnetic-hover"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
              
              <MagneticButton variant="primary" onClick={onOpenResume} className="!py-2 !px-5 text-sm">
                Resume
              </MagneticButton>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2 magnetic-hover z-[150]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[140] bg-background-light flex flex-col items-center justify-center p-8"
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <button
              className="absolute top-6 right-6 text-white p-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <ul className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-display font-medium text-text-muted hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-4"
              >
                <MagneticButton 
                  variant="primary" 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                >
                  View Resume
                </MagneticButton>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
