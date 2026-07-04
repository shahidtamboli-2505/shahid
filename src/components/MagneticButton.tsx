import { useRef, useState, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../utils/cn";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  asChild?: boolean; // For links
}

export const MagneticButton = ({ 
  children, 
  className, 
  variant = "primary",
  ...props 
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full transition-colors duration-300 overflow-hidden magnetic-hover";
  
  const variants = {
    primary: "bg-primary text-black hover:bg-primary-hover px-6 py-3 shadow-[0_0_20px_rgba(56,189,248,0.4)]",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-md px-6 py-3",
    outline: "bg-transparent text-white border border-primary hover:bg-primary/10 px-6 py-3",
    ghost: "bg-transparent text-text-muted hover:text-white px-4 py-2",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 pointer-events-none flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
