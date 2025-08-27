import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import FloatingActions from "@/components/FloatingActions";
import KeyboardShortcutsHelp from "@/components/KeyboardShortcutsHelp";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingOverlay, ProgressiveLoader } from "@/components/Loading";
import { usePortfolioShortcuts } from "@/hooks/useKeyboardShortcuts";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Enable keyboard shortcuts
  usePortfolioShortcuts();

  // Add smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(timer);
    };
  }, []);

  // Show loading screen
  if (isLoading) {
    return (
      <ThemeProvider defaultTheme="dark">
        <ProgressiveLoader 
          steps={[
            "Initializing portfolio...",
            "Loading components...",
            "Preparing experience...",
            "Almost ready..."
          ]}
          duration={3000}
        />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <ScrollProgress />
        <Navigation />
        
        {/* Hero Section */}
        <div id="home">
          <Hero />
        </div>
        
        {/* About Section */}
        <div id="about">
          <About />
        </div>
        
        {/* Skills Section */}
        <div id="skills">
          <Skills />
        </div>
        
        {/* Timeline/Experience Section */}
        <div id="experience">
          <Timeline />
        </div>
        
        {/* Projects Section */}
        <div id="projects">
          <Projects />
        </div>
        
        {/* Testimonials Section */}
        <div id="testimonials">
          <Testimonials />
        </div>
        
        {/* Contact Section */}
        <div id="contact">
          <Contact />
        </div>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating Actions */}
        <FloatingActions />
        
        {/* Utility Components */}
        <BackToTop />
        <KeyboardShortcutsHelp />
        <PerformanceMonitor />
        
        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Animated Background Particles */}
          <div className="particles">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="particle animate-particle-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${Math.random() * 4 + 4}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
