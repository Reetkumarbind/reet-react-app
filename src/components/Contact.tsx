import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import type React from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return (
    <section id="contact" className="py-20 bg-section-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a project in mind, need technical consultation, 
                  or just want to connect, I'd love to hear from you. I'm currently 
                  available for freelance projects and full-time opportunities.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {[
                  { 
                    icon: <Mail className="w-5 h-5" />, 
                    label: "Email", 
                    value: "reetkumarbind@gmail.com",
                    action: () => window.open('mailto:reetkumarbind@gmail.com'),
                    color: "text-brand-teal",
                    bgColor: "bg-brand-teal/10"
                  },
                  { 
                    icon: <Phone className="w-5 h-5" />, 
                    label: "Phone", 
                    value: "+91 9738443482",
                    action: () => window.open('tel:+919738443482'),
                    color: "text-brand-emerald",
                    bgColor: "bg-brand-emerald/10"
                  },
                  { 
                    icon: <MapPin className="w-5 h-5" />, 
                    label: "Location", 
                    value: "Delhi, India",
                    action: () => window.open('https://maps.google.com/?q=Delhi,India'),
                    color: "text-brand-purple",
                    bgColor: "bg-brand-purple/10"
                  }
                ].map((contact, index) => (
                  <div 
                    key={contact.label} 
                    className="flex items-center gap-4 animate-fade-in-up cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-colors" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={contact.action}
                  >
                    <div className={`p-3 ${contact.bgColor} rounded-lg ${contact.color}`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com/reetkumarbind" },
                    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://linkedin.com/in/reetkumarbind" },
                    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", url: "https://twitter.com/reetkumarbind" }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="bg-card-gradient shadow-card border-border/50 border-l-4 project-accent-emerald">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-gradient-forest text-white border-0 hover:bg-gradient-forest/80">
                      Available
                    </Badge>
                    <span className="font-medium text-brand-emerald">Open for Work</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new projects and collaboration opportunities.
                    Response time: Usually within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name *</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                        className="bg-background" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        className="bg-background" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      className="bg-background" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Inquiry" 
                      className="bg-background" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how I can help..."
                      className="bg-background min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-sunset hover:bg-gradient-fire transition-all duration-300 border-0" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;