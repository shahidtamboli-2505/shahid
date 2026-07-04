import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, BrainCircuit, Layout, Wrench, Binary } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "C++", "JavaScript", "SQL"],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: ["Machine Learning", "Computer Vision", "LLM Integration", "RAG", "Vector Search", "Prompt Engineering", "Agentic AI Systems"],
  },
  {
    title: "Web & Backend",
    icon: Layout,
    skills: ["FastAPI", "Flask", "REST APIs", "React.js", "Next.js", "HTML5", "CSS3", "Web Scraping"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "BeautifulSoup", "Playwright", "PyTorch", "Embeddings", "Semantic Search"],
  },
  {
    title: "Core CS",
    icon: Binary,
    skills: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "DBMS"],
  },
];

export const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-sm font-display font-bold tracking-widest text-primary uppercase mb-4">Technical Arsenal</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Skills & Technologies</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 group hover:border-accent1/50 transition-colors"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)"
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300 text-white">
                    <category.icon size={24} />
                  </div>
                  <h4 className="text-xl font-display font-semibold text-white">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-white/5 text-text-muted border border-white/5 hover:border-primary hover:text-white hover:bg-primary/10 transition-colors duration-300 cursor-default magnetic-hover"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
