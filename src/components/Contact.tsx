import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
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
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "reet.kumar.bind@gmail.com" },
                  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 98765 43210" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Mumbai, India" }
                ].map((contact, index) => (
                  <div key={contact.label} className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
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
                    { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "#" },
                    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "#" },
                    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", url: "#" }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      className="p-3 bg-muted rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="bg-card-gradient shadow-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                      Available
                    </Badge>
                    <span className="font-medium">Open for Work</span>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="John" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Doe" className="bg-background" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input placeholder="Project Inquiry" className="bg-background" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or how I can help..."
                    className="bg-background min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;