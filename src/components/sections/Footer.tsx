import { Globe } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent2">
              ST
            </span>
            <span className="text-text-muted text-sm">
              © {currentYear} Shahid Tamboli. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-text-muted hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/shahidtamboli-2505" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shahid-tamboli-456403311/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://leetcode.com/u/shahidtamboli19/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <Globe size={20} />
            </a>
            <a href="https://www.instagram.com/sb._.champ" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};
