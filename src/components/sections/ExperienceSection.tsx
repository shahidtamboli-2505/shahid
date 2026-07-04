import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ExternalLink, Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-sm font-display font-bold tracking-widest text-primary uppercase mb-4">Work History</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Experience</h3>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            <motion.div 
              className="hidden md:block absolute left-1/2 top-0 w-px bg-gradient-to-b from-primary via-accent1 to-transparent -translate-x-1/2 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              style={{ height: lineHeight }}
            />

            {/* Mobile Left Line */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10" />
            <motion.div 
              className="md:hidden absolute left-0 top-0 w-px bg-gradient-to-b from-primary via-accent1 to-transparent shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              style={{ height: lineHeight }}
            />

            {/* Timeline Item */}
            <div className="relative md:w-1/2 md:pr-12 py-8 group">
              {/* Icon Marker Desktop */}
              <div className="hidden md:flex absolute top-8 -right-6 w-12 h-12 bg-background border border-primary/50 text-primary rounded-full items-center justify-center z-10 shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                <Briefcase size={20} />
              </div>

              {/* Icon Marker Mobile */}
              <div className="md:hidden absolute top-8 -left-[25px] w-6 h-6 bg-background border-2 border-primary text-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_10px_rgba(56,189,248,0.3)] group-hover:bg-primary transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-black transition-colors" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6 md:p-8 hover:border-primary/30 transition-colors"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)"
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <h4 className="text-2xl font-display font-semibold text-white">Full-Stack & Agentic AI Intern</h4>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                    Nov 2025 – Feb 2026
                  </span>
                </div>
                
                <h5 className="text-lg font-medium text-text-muted mb-6 flex items-center gap-2">
                  Pixel11 (Startup)
                  <a 
                    href="https://github.com/shahidtamboli-2505/Shahid-Intern-project-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors ml-2"
                  >
                    <ExternalLink size={16} />
                  </a>
                </h5>

                <ul className="space-y-4">
                  {[
                    "Built scalable web-scraping pipelines (Python, BeautifulSoup, Playwright, Stealth) that extracted management-level contact data from company websites and structured results into APIs and dashboards.",
                    "Integrated LLM APIs into automation workflows and designed REST APIs powering AI-driven business processes.",
                    "Built scalable backend services that processed structured and unstructured business data for intelligent retrieval."
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-muted leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent1 mt-2.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* End Marker Desktop */}
            <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-white/20 bg-background" />
            <div className="md:hidden absolute bottom-0 left-[-7px] w-3 h-3 rounded-full border border-white/20 bg-background" />

          </div>
        </motion.div>
      </div>
    </section>
  );
};
