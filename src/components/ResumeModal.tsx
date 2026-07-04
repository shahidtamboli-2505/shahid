import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const resumePath = "/resume/Shahid_Tamboli_Resume.pdf";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-5xl h-full max-h-[90vh] glass-card flex flex-col overflow-hidden shadow-2xl shadow-primary/20"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-white/5">
              <h2 className="text-xl font-display font-semibold text-white">Resume</h2>
              
              <div className="flex items-center gap-4">
                <a 
                  href={resumePath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-white transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={20} />
                </a>
                <a 
                  href={resumePath} 
                  download="Shahid_Tamboli_Resume.pdf"
                  className="inline-flex"
                >
                  <MagneticButton variant="primary" className="!py-2 !px-4 text-sm hidden md:flex">
                    <Download size={16} /> Download PDF
                  </MagneticButton>
                  {/* Mobile icon-only download */}
                  <button className="md:hidden text-text-muted hover:text-primary transition-colors">
                    <Download size={20} />
                  </button>
                </a>
                <button 
                  onClick={onClose}
                  className="p-2 text-text-muted hover:text-white hover:bg-white/10 rounded-full transition-colors ml-2"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Viewer */}
            <div className="flex-1 w-full bg-black/40 relative">
              <iframe
                src={`${resumePath}#toolbar=0`}
                className="w-full h-full border-none"
                title="Resume PDF"
              />
              {/* Overlay for small screens where iframe PDF might not render properly */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-background-light md:hidden text-center z-10 pointer-events-none">
                <p className="text-text-muted mb-4">Mobile preview may be limited.</p>
                <div className="pointer-events-auto">
                   <MagneticButton variant="primary" onClick={() => window.open(resumePath, "_blank")}>
                     View / Download PDF
                   </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
