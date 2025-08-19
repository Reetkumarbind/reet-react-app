import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    // Create a sample resume download - replace with actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your actual resume file to the public folder
    link.download = 'Reet_Kumar_Bind_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-4xl font-bold text-white">
            Reet Kumar Bind
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-white/90 hover:text-white transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              onClick={handleResumeDownload}
            >
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/10">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-2 text-white/90 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 py-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Theme</span>
                  <ThemeToggle />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 w-full"
                  onClick={handleResumeDownload}
                >
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;