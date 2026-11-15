import { GraduationCap, Award, Trophy, Users, BadgeCheck } from "lucide-react";
import { Reveal, SectionHeading } from "../Reveal";

const timeline = [
  { icon: GraduationCap, period: "2023 – 2027", title: "B.Tech, Artificial Intelligence & Data Science", org: "Annasaheb Dange College of Engineering and Technology, Ashta", note: "Final year · CPI 7.57 / 10", accent: "text-primary border-primary/40" },
  { icon: BadgeCheck, period: "2025 – 2026", title: "Full-Stack & Agentic AI Intern", org: "Pixel11 (Startup)", note: "Scraping pipelines, LLM automation, REST APIs", accent: "text-accent1 border-accent1/40" },
];

const certs = [
  { icon: Award, title: "Anthropic — Claude & AI certifications", text: "5 courses incl. Claude 101, Claude Code and AI Fluency" },
  { icon: Award, title: "NPTEL — Leadership & Team Effectiveness", text: "Elite certificate" },
  { icon: BadgeCheck, title: "Forage virtual job simulations", text: "Walmart Global Tech (Advanced SWE), Deloitte (Technology), Tata (GenAI Data Analytics)" },
  { icon: Users, title: "Event & Sports Coordinator, ADCET", text: "Discovery & Neuroverse Tech Fest, 300+ participants (2025–26)" },
  { icon: Trophy, title: "Gold medalist — Boxing", text: "University Zonal & Inter-Zonal; national-level participant, All India Boxing Competition (2026)" },
];

export const EducationCertificationsSection = () => (
  <section id="education" className="py-24 md:py-36 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Background" title={<>Education & <span className="text-gradient">achievements.</span></>} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal key={t.title} delay={i} className="relative pl-16">
                  <div className={`absolute left-0 top-0 w-10 h-10 rounded-full bg-background border ${t.accent} flex items-center justify-center`}>
                    <t.icon size={18} />
                  </div>
                  <span className="font-mono text-xs text-text-muted">{t.period}</span>
                  <h4 className="text-xl font-display font-semibold text-white mt-1">{t.title}</h4>
                  <p className="text-text-muted mt-1">{t.org}</p>
                  <span className="inline-block mt-3 chip">{t.note}</span>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certs.map((c, i) => (
              <Reveal key={c.title} delay={i} className={i === certs.length - 1 ? "sm:col-span-2" : ""}>
                <div className="glass-card p-6 h-full group hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                      <c.icon size={18} />
                    </div>
                    <div>
                      <h5 className="font-display font-semibold text-white leading-snug">{c.title}</h5>
                      <p className="text-sm text-text-muted mt-1 leading-relaxed">{c.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
