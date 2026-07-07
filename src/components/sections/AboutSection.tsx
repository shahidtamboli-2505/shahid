import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";

const CountUp = ({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      spring.set(to);
    }
  }, [isInView, spring, to]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [spring]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
};

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  const stats = [
    { value: 5, suffix: "+", label: "Projects Shipped" },
    { value: 4, suffix: "", label: "Paying Clients" },
    { value: 60, suffix: "%", label: "Faster Order Processing" },
    { value: 35, suffix: "%", label: "Fewer Runway Conflicts" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-12 md:mb-20">
            <h2 className="text-sm font-display font-bold tracking-widest text-primary uppercase mb-4">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-display font-medium leading-tight text-white mb-8">
              AI/ML engineer with <span className="text-gradient">hands-on experience</span> shipping production AI systems and full-stack applications.
            </h3>
            
            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl">
              I am a final-year B.Tech student in Artificial Intelligence & Data Science. I specialize in building solutions for real, paying clients, blending cutting-edge AI technologies with robust full-stack architecture. Skilled in Python, FastAPI, LLM integration, RAG, vector search, and React/Next.js.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 md:p-8 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
                style={{
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.0) 100%)",
                }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-text-muted text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
