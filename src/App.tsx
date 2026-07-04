import { useState } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { SmoothScroll } from "./components/SmoothScroll";
import { Preloader } from "./components/Preloader";
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { ResumeModal } from "./components/ResumeModal";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { EducationCertificationsSection } from "./components/sections/EducationCertificationsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/sections/Footer";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <Background />
      
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      
      <main className="relative flex flex-col min-h-screen">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationCertificationsSection />
        <ContactSection />
      </main>

      <Footer />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </SmoothScroll>
  );
}

export default App;
