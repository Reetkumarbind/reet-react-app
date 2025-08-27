import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowUp, 
  MessageCircle, 
  Phone, 
  Mail, 
  Github, 
  Linkedin,
  Download,
  Menu,
  X
} from "lucide-react";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show/hide based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const actions = [
    {
      icon: <ArrowUp className="w-5 h-5" />,
      label: "Back to Top",
      action: scrollToTop,
      color: "bg-blue-500 hover:bg-blue-600",
      primary: true
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email Me",
      action: () => window.location.href = "mailto:reet.kumar.bind@gmail.com",
      color: "bg-red-500 hover:bg-red-600"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "Call Me",
      action: () => window.location.href = "tel:+919876543210",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      label: "WhatsApp",
      action: () => window.open("https://wa.me/919876543210", "_blank"),
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: <Github className="w-4 h-4" />,
      label: "GitHub",
      action: () => window.open("https://github.com/reetkumarbind", "_blank"),
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      label: "LinkedIn",
      action: () => window.open("https://linkedin.com/in/reetkumarbind", "_blank"),
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Download className="w-4 h-4" />,
      label: "Resume",
      action: () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Reet_Kumar_Bind_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      color: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Actions */}
      <div className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {actions.slice(1).map((action, index) => (
          <div
            key={action.label}
            className="flex items-center gap-3 group"
            style={{ 
              transitionDelay: isExpanded ? `${index * 50}ms` : '0ms',
              animation: isExpanded ? `slide-in-right 0.3s ease-out ${index * 50}ms both` : 'none'
            }}
          >
            {/* Label */}
            <div className="bg-black text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {action.label}
            </div>
            
            {/* Action Button */}
            <Button
              onClick={action.action}
              className={`${action.color} text-white rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
              aria-label={action.label}
            >
              {action.icon}
            </Button>
          </div>
        ))}
      </div>

      {/* Main Toggle Button */}
      <div className="relative">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${actions[0].color} text-white rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          aria-label={isExpanded ? "Close menu" : "Open menu"}
        >
          {isExpanded ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>

        {/* Pulse Animation */}
        <div className={`absolute inset-0 rounded-full ${actions[0].color} animate-ping opacity-20`}></div>
      </div>

      {/* Quick Back to Top (always visible) */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 hover:bg-gray-900 text-white rounded-full w-10 h-10 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-60 hover:opacity-100"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default FloatingActions;
