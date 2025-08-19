import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      techs: ["React", "TypeScript", "Next.js", "Tailwind CSS", "kotlin","JavaScript"],
      color: "text-brand-teal",
      bgColor: "bg-brand-teal/10",
      borderColor: "border-brand-teal/20"
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      techs: ["Node.js", "Python", "Express", "MongoDB", "MySQL"],
      color: "text-brand-emerald",
      bgColor: "bg-brand-emerald/10",
      borderColor: "border-brand-emerald/20"
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      techs: ["React Native", "Expo", "Android"],
      color: "text-brand-purple",
      bgColor: "bg-brand-purple/10",
      borderColor: "border-brand-purple/20"
    },
    {
      category: "Tools & Others",
      icon: <Code className="w-6 h-6" />,
      techs: ["Android Studio", "Docker", "Kiro", "Firebase", "Visual Studio Code"],
      color: "text-brand-orange",
      bgColor: "bg-brand-orange/10",
      borderColor: "border-brand-orange/20"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-1">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with 3+ years of experience creating 
              innovative digital solutions. I love turning complex problems into simple, 
              beautiful, and intuitive designs.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className={`bg-card-gradient shadow-card border-border/50 hover:shadow-elegant transition-all duration-300 animate-fade-in-up ${skillGroup.borderColor} border-l-4`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 ${skillGroup.bgColor} rounded-lg ${skillGroup.color}`}>
                      {skillGroup.icon}
                    </div>
                    <h3 className={`font-semibold text-lg text-foreground ${skillGroup.color}`}>{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.techs.map((tech) => (
                      <Badge key={tech} variant="secondary" className={`text-xs ${skillGroup.bgColor} ${skillGroup.color} border-0`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Started my development journey in college, fascinated by how code could bring ideas to life. 
                Since then, I've worked on diverse projects ranging from e-commerce platforms to mobile apps, 
                always focusing on user experience and performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                When I'm not coding, you can find me contributing to open-source projects or 
                exploring new frameworks and tools.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { year: "2021", title: "Started Programming", desc: "Began learning web development" },
                { year: "2022", title: "First Internship", desc: "Joined a startup as Frontend Developer" },
                { year: "2023", title: "Full Stack Role", desc: "Expanded to backend development" },
                { year: "2024", title: "Senior Developer", desc: "Leading projects and mentoring juniors" }
              ].map((milestone, index) => (
                <div key={milestone.year} className="flex gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{milestone.year}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                    <p className="text-muted-foreground text-sm">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;