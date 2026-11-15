import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const skip = typeof window !== "undefined" && window.location.search.includes("nopreload");
  const [isLoading, setIsLoading] = useState(!skip);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (skip) return;
    const start = performance.now();
    const dur = 1100;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setIsLoading(false), 200);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [skip]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-background flex items-end justify-between p-8 md:p-12"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-white text-2xl"
          >
            Shahid<span className="text-primary">.</span>
          </motion.div>
          <div className="font-display font-bold text-6xl md:text-8xl text-white tabular-nums leading-none">
            {count}<span className="text-primary">%</span>
          </div>
          <div className="absolute bottom-0 left-0 h-[2px] bg-primary" style={{ width: `${count}%` }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
