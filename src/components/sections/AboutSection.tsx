import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import { Bot, Database, Layers, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "../Reveal";

const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [v, setV] = useState(0);
  const spring = useSpring(0, { duration: 1800, bounce: 0 });

  useEffect(() => { if (isInView) spring.set(to); }, [isInView, spring, to]);
  useEffect(() => spring.on("change", (l) => setV(Math.floor(l))), [spring]);

  return <span ref={ref} className="tabular-nums">{v}{suffix}</span>;
};

const stats = [
  { value: 6, suffix: "+", label: "Projects shipped" },
  { value: 4, suffix: "", label: "Paying clients" },
  { value: 60, suffix: "%", label: "Faster order processing" },
  { value: 35, suffix: "%", label: "Fewer runway conflicts (sim)" },
];

const focus = [
  { icon: Bot, title: "Agentic AI & LLM apps", text: "Tool-using agents, prompt pipelines and LLM API integrations that run real business workflows." },
  { icon: Database, title: "RAG & vector search", text: "Document-grounded Q&A with embeddings, semantic retrieval and vector databases." },
  { icon: Layers, title: "Full-stack delivery", text: "FastAPI / Flask backends, React & Next.js frontends, deployed and handed over to clients." },
  { icon: Sparkles, title: "Automation & scraping", text: "Playwright + BeautifulSoup pipelines that collect and enrich data at scale." },
];

export const AboutSection = () => (
  <section id="about" className="py-24 md:py-36 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="About me"
          title={<>I turn AI ideas into <span className="text-gradient">products people pay for.</span></>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              I'm a final-year B.Tech student in Artificial Intelligence & Data Science from Sangli, Maharashtra. Instead of just coursework, I've spent the last two years building for actual clients: a QR ordering & billing platform for a restaurant, a production website for a plastics manufacturer, and agentic scraping pipelines. Right now I'm an R&D intern at CS Development, a startup, where I build and train ML models, ship them behind APIs, and implement research for PhD clients' publications.
            </p>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              My sweet spot is the full path from <span className="text-white">LLM/RAG backend</span> to a <span className="text-white">polished React frontend</span>, deployed and in users' hands.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i} className="glass-card p-5 md:p-6">
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs md:text-sm text-text-muted">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focus.map((f, i) => (
              <Reveal key={f.title} delay={i + 1}>
                <motion.div whileHover={{ y: -4 }} className="glass-card p-7 h-full group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <f.icon size={20} />
                  </div>
                  <h4 className="text-lg font-display font-semibold text-white mb-2">{f.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{f.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
