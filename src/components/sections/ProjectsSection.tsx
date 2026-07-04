import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Guts — Enterprise AI Assistant (LLM + Agentic AI)",
    description: "Built a modular voice/text assistant powered by a RAG pipeline and vector database, integrating weather, search, and time/date utilities via external APIs; architected for future LLM-based extensions.",
    repo: "https://github.com/shahidtamboli-2505/Guts_Assistant",
    type: "Voice/text-based intelligent assistant",
    tech: ["Python", "Flask", "Streamlit", "FastAPI", "RAG", "Vector Database", "REST APIs"]
  },
  {
    title: "QR-Based Ordering & Billing System",
    description: "Built and deployed a QR-based ordering and billing platform for a real paying client, with an admin dashboard for menu, orders, and payments; automated billing workflows cut order-processing time by 60%.",
    repo: "https://github.com/shahidtamboli-2505/QR_billing-Invoice-System",
    type: "Full-stack smart restaurant management platform",
    tech: ["Python", "Flask", "React.js", "Vite", "REST APIs", "SQL"]
  },
  {
    title: "Intelligent ATC Slot Allocation System (SkySlot AI)",
    description: "Designed AI-based runway slot-scheduling algorithms that reduced simulated runway conflicts by 35%, with a dashboard for aircraft queue and runway-utilization monitoring.",
    repo: "https://github.com/shahidtamboli-2505/ATC-Slot-Allocation-System",
    type: "AI-based air traffic control optimization system",
    tech: ["Python", "Machine Learning", "Streamlit", "Data Analysis"]
  },
  {
    title: "Samruddhi Polyplastic — Company Website",
    description: "Designed, built, and deployed a responsive, SEO-optimized company website for a plastics manufacturer, working directly with the client from requirements through production launch.",
    repo: "https://github.com/shahidtamboli-2505/SamruddhiPolyplostic",
    type: "Role: Web Developer (Freelance)",
    tech: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Git", "GitHub", "Netlify"]
  },
  {
    title: "Aircraft Damage Detection & Health Monitoring System",
    description: "Trained and evaluated a computer-vision classification model to detect aircraft body damage and abnormalities from component datasets, supporting predictive health monitoring.",
    repo: "https://github.com/shahidtamboli-2505",
    type: "Computer vision-based defect classification system",
    tech: ["Python", "OpenCV", "PyTorch", "Machine Learning"]
  }
];

const TiltCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate normalized values from -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full"
    >
      <div 
        className="glass-card h-full p-8 flex flex-col items-start rounded-2xl group transition-all duration-300 hover:border-primary/50 relative overflow-hidden" 
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(56,189,248,0.1)_0%,transparent_100%)] pointer-events-none" />

        <div className="w-full flex items-start justify-between mb-4">
          <div className="bg-background-light p-3 rounded-xl border border-white/10 group-hover:bg-primary/10 transition-colors">
            <FaGithub size={24} className="text-primary" />
          </div>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        <h4 className="text-2xl font-display font-semibold text-white mb-2 leading-tight">
          {project.title}
        </h4>
        
        <p className="text-sm font-medium text-accent1 mb-6">
          {project.type}
        </p>

        <p className="text-text-muted leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 w-full mt-auto pt-6 border-t border-white/5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-medium text-text px-2.5 py-1 bg-white/5 rounded-md border border-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const sectionRef = useRef(null);

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-display font-bold tracking-widest text-primary uppercase mb-4">Portflio</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Featured Work</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {projects.map((project, idx) => (
            <TiltCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
