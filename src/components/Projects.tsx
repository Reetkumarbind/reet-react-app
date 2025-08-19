import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      techs: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "https://github.com/reetkumarbind/ecommerce-platform",
      live: "https://ecommerce-demo.reetkumarbind.com",
      accentColor: "project-accent-orange"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, built using React and Firebase. Includes drag-and-drop functionality.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      techs: ["React", "Firebase", "TypeScript", "Material-UI"],
      github: "https://github.com/reetkumarbind/task-manager",
      live: "https://taskmanager.reetkumarbind.com",
      accentColor: "project-accent-teal"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed weather information with interactive charts and 7-day forecast.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
      techs: ["Vue.js", "Chart.js", "OpenWeather API", "SCSS"],
      github: "https://github.com/reetkumarbind/weather-dashboard",
      live: "https://weather.reetkumarbind.com",
      accentColor: "project-accent-purple"
    },
    {
      title: "Social Media App",
      description: "A mobile-first social media application with photo sharing, real-time messaging, and user profiles.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=400&fit=crop",
      techs: ["React Native", "Expo", "Supabase", "TypeScript"],
      github: "https://github.com/reetkumarbind/social-media-app",
      live: "https://expo.dev/@reetkumarbind/social-app",
      accentColor: "project-accent-pink"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-2">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className={`bg-card shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in-up overflow-hidden group ${project.accentColor} border-l-4`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-gradient-ocean hover:text-white hover:border-transparent transition-all duration-300"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-sunset hover:bg-gradient-fire transition-all duration-300 border-0"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-background"
              onClick={() => window.open('https://github.com/reetkumarbind', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;