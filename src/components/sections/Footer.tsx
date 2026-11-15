import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: FaGithub, href: "https://github.com/shahidtamboli-2505", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/shahid-tamboli-456403311/", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/shahidtamboli19/", label: "LeetCode" },
  { icon: FaInstagram, href: "https://www.instagram.com/sb._.champ", label: "Instagram" },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-white/[0.06] overflow-hidden">
      {/* Big marquee */}
      <a href="#contact" className="block py-8 border-b border-white/[0.06] overflow-hidden group">
        <div className="flex w-max animate-marquee-reverse whitespace-nowrap group-hover:[animation-play-state:paused]">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-display font-bold text-5xl md:text-7xl text-white/[0.08] group-hover:text-primary/70 transition-colors px-6">
              Let's work together <span className="text-primary">·</span>
            </span>
          ))}
        </div>
      </a>

      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-xl text-white">Shahid<span className="text-primary">.</span></span>
            <span className="text-text-muted text-sm">© {year} Shahid Tamboli</span>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:text-primary hover:bg-white/5 transition-all magnetic-hover">
                <s.icon size={18} />
              </a>
            ))}
          </div>

          <a href="#home" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors magnetic-hover">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};
