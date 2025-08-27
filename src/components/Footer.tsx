import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-6">
        
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-4">
          
          {/* Copyright & Made with Love - Single Line */}
          <div className="text-center">
            <p className="text-gray-300 text-sm flex items-center justify-center gap-2 flex-wrap">
              <span className="font-medium text-white">Reet Kumar Bind</span>
              <span>© {currentYear}</span>
              <span className="flex items-center gap-1">
                Made with 
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                in India
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {[
              { 
                icon: <Github className="w-5 h-5" />, 
                href: "https://github.com/reetkumarbind", 
                label: "GitHub" 
              },
              { 
                icon: <Linkedin className="w-5 h-5" />, 
                href: "https://linkedin.com/in/reetkumarbind", 
                label: "LinkedIn" 
              },
              { 
                icon: <Mail className="w-5 h-5" />, 
                href: "mailto:reet.kumar.bind@gmail.com", 
                label: "Email" 
              }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
