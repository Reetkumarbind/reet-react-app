import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profileAvatar}
                alt="Reet Kumar Bind"
                className="w-32 h-32 rounded-full border-4 border-white/20 shadow-elegant animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20"></div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6 animate-fade-in-up">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Full Stack Developer
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Reet Kumar
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Bind
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with modern technologies. 
              Passionate about creating scalable solutions and beautiful user interfaces.
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["React", "TypeScript", "Node.js", "Python", "MongoDB", "AWS"].map((tech) => (
                <Badge key={tech} variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  {tech}
                </Badge>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button size="lg" variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;