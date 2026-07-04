import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

const certifications = [
  "Anthropic — Claude & AI Certifications (5 courses: Claude 101, Claude Code, AI Fluency, and others)",
  "NPTEL — Leadership & Team Effectiveness (Elite Certificate)",
  "Forage Virtual Job Simulations — Walmart Global Tech (Advanced Software Engineering), Deloitte (Technology Virtual Experience), Tata (GenAI Powered Data Analytics)",
  "Sports Coordinator, ADCET; Event Coordinator, Discovery & Neuroverse Tech Fest (300+ participants), 2025–26",
  "Gold Medalist, Boxing (University Zonal & Inter-Zonal); National-Level Participant, All India Boxing Competition (2026)"
];

export const EducationCertificationsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

  return (
    <section id="education" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Education Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Education</h3>
            </div>
            
            <div className="glass-card p-8">
              <h4 className="text-xl md:text-2xl font-display font-semibold text-white mb-2 leading-tight">
                Annasaheb Dange College of Engineering and Technology, Ashta
              </h4>
              <p className="text-primary font-medium mb-6">Expected Graduation: 2027</p>
              
              <div className="flex flex-col gap-2 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-lg font-medium text-white mb-1">
                  B.Tech, Artificial Intelligence and Data Science
                </div>
                <div className="text-text-muted">
                  4th Year
                </div>
                <div className="mt-2 inline-flex items-center self-start px-3 py-1 bg-accent1/10 text-accent1 border border-accent1/20 rounded-md text-sm font-semibold">
                  CPI: 7.57 / 10
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-accent2">
                <Award size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Achievements</h3>
            </div>
            
            <div className="glass-card p-8">
              <ul className="space-y-6">
                {certifications.map((cert, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1 text-text-muted group-hover:text-primary transition-colors shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-text-muted group-hover:text-white transition-colors leading-relaxed text-sm md:text-base">
                      {cert}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
