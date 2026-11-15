import { useRef, useState, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../utils/cn";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export const MagneticButton = ({ children, className, variant = "primary", ...props }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    setPosition({ x: (clientX - (left + width / 2)) * 0.25, y: (clientY - (top + height / 2)) * 0.25 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const base = "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 overflow-hidden magnetic-hover shine";
  const variants = {
    primary: "bg-primary text-background hover:bg-primary-hover px-6 py-3 shadow-glow hover:shadow-[0_0_50px_-8px_rgba(242,176,79,0.6)]",
    secondary: "bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/10 backdrop-blur-md px-6 py-3",
    outline: "bg-transparent text-white border border-white/20 hover:border-primary hover:text-primary px-6 py-3",
    ghost: "bg-transparent text-text-muted hover:text-white px-4 py-2",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 pointer-events-none flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
