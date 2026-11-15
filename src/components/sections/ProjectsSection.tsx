import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Reveal, SectionHeading } from "../Reveal";
import { cn } from "../../utils/cn";

interface Project {
  title: string;
  description: string;
  repo?: string;
  live?: string;
  type: string;
  year: string;
  tech: string[];
  isInternship?: boolean;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Pixel11 — Full-Stack & Agentic AI Intern",
    description: "Built scalable web-scraping pipelines (Python, BeautifulSoup, Playwright, Stealth) to extract management-level contact data; integrated LLM APIs into automation workflows; designed REST APIs powering AI-driven business processes and backend services for intelligent data retrieval.",
    repo: "https://github.com/shahidtamboli-2505/Shahid-Intern-project-1",
    type: "Internship · Startup",
    year: "Nov 2025 – Feb 2026",
    tech: ["Python", "Playwright", "BeautifulSoup", "LLM APIs", "REST APIs", "Agentic AI"],
    isInternship: true,
    featured: true,
  },
  {
    title: "AI Tutor Agent",
    description: "Document-grounded tutoring agent: upload a PDF/TXT, auto-extract topics and a course title, ask questions answered from retrieved passages, and generate full, short, misconception-focused and prerequisite-bridge lessons. Modular backend with retrieval, pretests, progress tracking and Groq usage metrics.",
    repo: "https://github.com/shahidtamboli-2505/AI_Tutor_Agent",
    type: "LLM · RAG · Agentic AI",
    year: "2026",
    tech: ["Python", "Streamlit", "Groq API", "RAG", "Retrieval", "LLM"],
    featured: true,
  },
  {
    title: "QR-Based Ordering & Billing System",
    description: "QR ordering and billing platform built and deployed for a paying restaurant client, with an admin dashboard for menu, orders and payments. Automated billing cut order-processing time by 60%.",
    repo: "https://github.com/shahidtamboli-2505/QR_billing-Invoice-System",
    type: "Client project · Full-stack",
    year: "2025",
    tech: ["Python", "Flask", "React", "Vite", "REST APIs", "SQL"],
  },
  {
    title: "Samruddhi Polyplast — Company Website",
    description: "Responsive, SEO-optimised website for a plastics manufacturer, delivered freelance from requirements to production launch and handed over to the client.",
    repo: "https://github.com/shahidtamboli-2505/SamruddhiPolyplostic",
    live: "https://samruddhipolyplast.com/",
    type: "Client project · Freelance",
    year: "2025",
    tech: ["React", "Next.js", "JavaScript", "CSS3", "Netlify"],
  },
  {
    title: "Guts — Enterprise AI Assistant",
    description: "Modular voice/text assistant on a RAG pipeline and vector database, integrating weather, search and time/date utilities via external APIs; architected for LLM-based extensions.",
    repo: "https://github.com/shahidtamboli-2505/Guts_Assistant",
    type: "LLM · Agentic AI",
    year: "2025",
    tech: ["Python", "FastAPI", "Flask", "RAG", "Vector DB", "Streamlit"],
  },
  {
    title: "SkySlot AI — ATC Slot Allocation",
    description: "AI-based runway slot-scheduling algorithms that reduced runway conflicts by 35% in simulation, with a dashboard for aircraft queue and runway-utilisation monitoring.",
    repo: "https://github.com/shahidtamboli-2505/ATC-Slot-Allocation-System",
    type: "ML · Optimisation",
    year: "2025",
    tech: ["Python", "Machine Learning", "Streamlit", "Data Analysis"],
  },
];

const Card = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Reveal delay={index % 2} className={cn("h-full", project.featured && "md:col-span-2")}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={cn("glass-card h-full p-7 md:p-9 flex flex-col group hover:border-primary/30", project.featured && "md:flex-row md:gap-10")}
      >
        <div className={cn("flex flex-col flex-1", project.featured && "md:w-3/5")}>
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-text-muted">0{index + 1}</span>
              <span className="font-mono text-xs text-primary">{project.type}</span>
            </div>
            <span className="font-mono text-xs text-text-muted">{project.year}</span>
          </div>

          <h4 className={cn("font-display font-bold text-white leading-tight mb-3 flex items-center gap-2", project.featured ? "text-2xl md:text-4xl" : "text-2xl")}>
            {project.isInternship && <Briefcase size={20} className="text-accent1 shrink-0" />}
            {project.title}
          </h4>

          <p className="text-text-muted leading-relaxed mb-6 flex-grow">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </div>

        <div className={cn("flex gap-3 mt-auto pt-6 border-t border-white/[0.06]", project.featured && "md:w-2/5 md:flex-col md:justify-end md:border-t-0 md:border-l md:pl-10 md:pt-0")}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-background text-sm font-semibold hover:bg-primary-hover transition-colors shadow-glow magnetic-hover">
              <Globe size={15} /> Live site <ArrowUpRight size={14} />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 text-sm font-medium text-white hover:border-primary hover:text-primary transition-colors magnetic-hover">
              <FaGithub size={15} /> Code <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </motion.div>
    </Reveal>
  );
};

export const ProjectsSection = () => (
  <section id="projects" className="py-24 md:py-36 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Selected work"
          title={<>Things I've <span className="text-gradient">built & shipped.</span></>}
          sub="Internship work, client deliveries and AI projects — with code and live links where available."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => <Card key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </div>
  </section>
);
