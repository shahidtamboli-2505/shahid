import { useEffect, useRef } from "react";

const NOISE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export const Background = () => {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    let tx = window.innerWidth / 2, ty = window.innerHeight / 3;
    let cx = tx, cy = ty;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${cx - 400}px, ${cy - 400}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Grid with radial mask */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px]"
        style={{ maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 100%)" }}
      />

      {/* Top amber glow */}
      <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[90vw] h-[70vh] rounded-full bg-primary/[0.12] blur-[140px]" />
      {/* Teal glow bottom right */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vh] rounded-full bg-accent1/[0.08] blur-[140px] animate-float" />

      {/* Cursor spotlight */}
      <div
        ref={spotRef}
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full will-change-transform hidden md:block"
        style={{ background: "radial-gradient(circle, rgba(242,176,79,0.07) 0%, transparent 60%)" }}
      />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay" style={{ backgroundImage: `url("${NOISE}")` }} />
    </div>
  );
};
