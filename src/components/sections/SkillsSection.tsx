import { motion } from "framer-motion";
import { Code2, BrainCircuit, Layout, Wrench, Binary } from "lucide-react";
import { Reveal, SectionHeading } from "../Reveal";

const skillCategories = [
  { title: "AI / ML", icon: BrainCircuit, accent: "text-primary", skills: ["LLM Integration", "RAG", "Agentic AI Systems", "Vector Search", "Embeddings", "Prompt Engineering", "Machine Learning", "Computer Vision", "PyTorch"] },
  { title: "Web & Backend", icon: Layout, accent: "text-accent1", skills: ["FastAPI", "Flask", "REST APIs", "React.js", "Next.js", "Streamlit", "HTML5", "CSS3", "Tailwind"] },
  { title: "Programming", icon: Code2, accent: "text-accent2", skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"] },
  { title: "Tools & Platforms", icon: Wrench, accent: "text-primary", skills: ["Git", "GitHub", "Docker", "Playwright", "BeautifulSoup", "Groq API", "Netlify", "Vite"] },
  { title: "Core CS", icon: Binary, accent: "text-accent1", skills: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "DBMS"] },
];

export const SkillsSection = () => (
  <section id="skills" className="py-24 md:py-36 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Skills"
          title={<>The stack I <span className="text-gradient">ship with.</span></>}
          sub="From model to UI — the tools I reach for when building and deploying AI products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((c, i) => (
            <Reveal key={c.title} delay={i} className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
              <motion.div whileHover={{ y: -4 }} className="glass-card p-7 h-full group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center ${c.accent}`}>
                      <c.icon size={20} />
                    </div>
                    <h4 className="text-lg font-display font-semibold text-white">{c.title}</h4>
                  </div>
                  <span className="font-mono text-xs text-text-muted/60">0{i + 1}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.skills.map((s) => (
                    <span key={s} className="chip magnetic-hover">{s}</span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
