export const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-blob mix-blend-screen"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent1/20 blur-[120px] animate-blob mix-blend-screen" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-accent2/15 blur-[150px] animate-blob mix-blend-screen" style={{ animationDelay: "4s" }}></div>
      
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    </div>
  );
};
