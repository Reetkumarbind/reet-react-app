import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, Calendar, Code2, Sparkles } from "lucide-react";
import ProfileAvatar from "@/components/ProfileAvatar";
import { useEffect, useState } from "react";

// Profile avatar with multiple fallback options
const profileAvatarOptions = {
  primary: "https://reetkumarbind.netlify.app/reet.JPG",
  fallback1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  fallback2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  placeholder: "https://ui-avatars.com/api/?name=Reet+Kumar+Bind&size=300&background=3b82f6&color=ffffff&bold=true"
};

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const roles = ["Software Engineer", "Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float-slow opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-pink-400 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-cyan-400 rounded-full animate-float-slow opacity-30"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMDMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Status Badge */}
              <div className="flex justify-center lg:justify-start">
                <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for hire
                </Badge>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                  <span className="text-white">Hi, I'm</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-shift">
                    Reet Kumar
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Bind
                  </span>
                </h1>
                
                {/* Animated Role */}
                <div className="h-16 flex items-center justify-center lg:justify-start">
                  <div className="text-2xl md:text-3xl text-gray-300 font-medium">
                    <span className="text-white">I'm a </span>
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold typewriter">
                      {roles[currentRole]}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                With <span className="text-blue-400 font-semibold">10+ years</span> of experience, I craft 
                innovative digital solutions across diverse industries. Currently building enterprise 
                applications for the <span className="text-purple-400 font-semibold">oil & gas sector</span> at ONGC.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                {[
                  { number: "10+", label: "Years Exp", icon: <Calendar className="w-4 h-4" /> },
                  { number: "50+", label: "Projects", icon: <Code2 className="w-4 h-4" /> },
                  { number: "6", label: "Industries", icon: <Sparkles className="w-4 h-4" /> }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-center gap-1 text-blue-400 mb-1">
                      {stat.icon}
                      <span className="text-2xl font-bold">{stat.number}</span>
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Code2 className="w-5 h-5 mr-2" />
                  View My Work
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Reet_Kumar_Bind_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                {[
                  { icon: <Github className="w-6 h-6" />, href: "https://github.com/reetkumarbind", label: "GitHub", color: "hover:text-gray-300" },
                  { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/reetkumarbind", label: "LinkedIn", color: "hover:text-blue-400" },
                  { icon: <Mail className="w-6 h-6" />, href: "mailto:reet.kumar.bind@gmail.com", label: "Email", color: "hover:text-green-400" }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/10`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right Column - Profile & Info */}
            <div className="flex flex-col items-center space-y-8">
              {/* Enhanced Profile Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
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
                  className="relative z-10 hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Location & Time */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Currently at ONGC, Delhi</span>
                </div>
                <div className="text-sm text-gray-400">
                  Local time: {currentTime.toLocaleTimeString('en-IN', { 
                    timeZone: 'Asia/Kolkata',
                    hour12: true 
                  })} IST
                </div>
              </div>
              
              {/* Tech Stack Preview */}
              <div className="grid grid-cols-3 gap-4 max-w-xs">
                {[
                  { name: "React", color: "from-blue-400 to-cyan-400" },
                  { name: "Node.js", color: "from-green-400 to-emerald-400" },
                  { name: "Java", color: "from-orange-400 to-red-400" },
                  { name: "MongoDB", color: "from-green-500 to-teal-500" },
                  { name: "AWS", color: "from-yellow-400 to-orange-500" },
                  { name: "Docker", color: "from-blue-500 to-indigo-500" }
                ].map((tech, index) => (
                  <div 
                    key={tech.name}
                    className={`p-3 rounded-lg bg-gradient-to-r ${tech.color} bg-opacity-20 backdrop-blur-sm border border-white/10 text-center hover:scale-105 transition-all duration-300`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-xs text-white font-medium">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
