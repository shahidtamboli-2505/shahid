import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: i * 0.08 } }),
};

export const Reveal = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-10% 0px" }}
    variants={fadeUp}
    custom={delay}
  >
    {children}
  </motion.div>
);

/** Splits text into words that slide up from a clipped mask. */
export const WordReveal = ({ text, className, delay = 0, as: Tag = "span" }: { text: string; className?: string; delay?: number; as?: "span" | "h1" | "h2" | "h3" }) => (
  <Tag className={cn("inline", className)}>
    {text.split(" ").map((w, i) => (
      <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em]">
        <motion.span
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease, delay: delay + i * 0.06 }}
        >
          {w}&nbsp;
        </motion.span>
      </span>
    ))}
  </Tag>
);

export const SectionHeading = ({ label, title, sub, align = "left" }: { label: string; title: ReactNode; sub?: string; align?: "left" | "center" }) => (
  <Reveal className={cn("mb-14 md:mb-20", align === "center" && "text-center")}>
    <span className={cn("section-label mb-5", align === "center" && "justify-center before:hidden")}>{label}</span>
    <h3 className="text-4xl md:text-6xl font-display font-bold text-white leading-[1.05]">{title}</h3>
    {sub && <p className={cn("mt-5 text-text-muted text-lg max-w-2xl", align === "center" && "mx-auto")}>{sub}</p>}
  </Reveal>
);
