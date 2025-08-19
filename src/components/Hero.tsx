import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ProfileAvatar from "@/components/ProfileAvatar";

// Profile avatar with multiple fallback options
const profileAvatarOptions = {
  primary: "https://reetkumarbind.netlify.app/reet.JPG",
  fallback1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  fallback2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  placeholder: "https://ui-avatars.com/api/?name=Reet+Kumar+Bind&size=300&background=3b82f6&color=ffffff&bold=true"
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <ProfileAvatar
              src={[
                profileAvatarOptions.primary,
                profileAvatarOptions.fallback1,
                profileAvatarOptions.fallback2,
                profileAvatarOptions.placeholder
              ]}
              alt="Reet Kumar Bind"
              size="xl"
              showStatus={true}
              showTooltip={true}
              statusText="Available for hire"
              hoverEffect="glow"
              enableContextMenu={true}
              email="reet.kumar.bind@gmail.com"
              phone="+91 98765 43210"
              colorTheme="sunset"
              className="animate-fade-in-up"
            />
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
              {[
                { name: "React", color: "bg-brand-teal/20 text-brand-teal border-brand-teal/30" },
                { name: "TypeScript", color: "bg-brand-indigo/20 text-brand-indigo border-brand-indigo/30" },
                { name: "Node.js", color: "bg-brand-emerald/20 text-brand-emerald border-brand-emerald/30" },
                { name: "Python", color: "bg-brand-amber/20 text-brand-amber border-brand-amber/30" },
                { name: "MongoDB", color: "bg-brand-purple/20 text-brand-purple border-brand-purple/30" },
                { name: "AWS", color: "bg-brand-orange/20 text-brand-orange border-brand-orange/30" }
              ].map((tech) => (
                <Badge key={tech.name} variant="outline" className={`${tech.color} hover:bg-white/20 transition-all duration-300`}>
                  {tech.name}
                </Badge>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button 
                size="lg" 
                className="bg-gradient-ocean hover:bg-gradient-sky text-white border-0 backdrop-blur-sm transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-white/30 hover:bg-gradient-sunset hover:border-transparent hover:text-white transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <a 
                href="https://github.com/reetkumarbind" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/reetkumarbind" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:reet.kumar.bind@gmail.com"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Send Email"
              >
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