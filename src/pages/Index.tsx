import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import KeyboardShortcutsHelp from "@/components/KeyboardShortcutsHelp";
import { usePortfolioShortcuts } from "@/hooks/useKeyboardShortcuts";

const Index = () => {
  // Enable keyboard shortcuts
  usePortfolioShortcuts();

  return (
    <div className="dark min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <ScrollProgress />
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Projects />
      <Contact />
      <BackToTop />
      <KeyboardShortcutsHelp />
    </div>
  );
};

export default Index;
