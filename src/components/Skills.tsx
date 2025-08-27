import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Palette,
  Server,
  GitBranch,
  Zap,
  Shield
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React/Next.js", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "JavaScript", level: 88, color: "bg-yellow-500" },
      { name: "HTML/CSS", level: 95, color: "bg-orange-500" }
    ]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85, color: "bg-green-500" },
      { name: "Python", level: 80, color: "bg-green-600" },
      { name: "Express.js", level: 88, color: "bg-emerald-500" },
      { name: "REST APIs", level: 90, color: "bg-teal-500" },
      { name: "GraphQL", level: 75, color: "bg-pink-500" }
    ]
  },
  {
    title: "Database & Cloud",
    icon: <Database className="w-6 h-6" />,
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "MongoDB", level: 85, color: "bg-green-600" },
      { name: "PostgreSQL", level: 80, color: "bg-blue-600" },
      { name: "AWS", level: 78, color: "bg-orange-500" },
      { name: "Docker", level: 75, color: "bg-blue-500" },
      { name: "Firebase", level: 82, color: "bg-yellow-500" }
    ]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "React Native", level: 85, color: "bg-blue-500" },
      { name: "Expo", level: 88, color: "bg-purple-500" },
      { name: "Flutter", level: 70, color: "bg-blue-400" },
      { name: "iOS/Android", level: 75, color: "bg-gray-600" }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <GitBranch className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git/GitHub", level: 92, color: "bg-gray-800" },
      { name: "CI/CD", level: 78, color: "bg-blue-500" },
      { name: "Linux", level: 80, color: "bg-yellow-600" },
      { name: "Nginx", level: 75, color: "bg-green-500" }
    ]
  },
  {
    title: "Design & UI/UX",
    icon: <Palette className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Figma", level: 85, color: "bg-purple-500" },
      { name: "Adobe XD", level: 80, color: "bg-pink-500" },
      { name: "UI/UX Design", level: 88, color: "bg-indigo-500" },
      { name: "Responsive Design", level: 95, color: "bg-blue-500" }
    ]
  }
];

const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2024",
    icon: <Cloud className="w-5 h-5" />,
    color: "bg-orange-500"
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    year: "2023",
    icon: <Code2 className="w-5 h-5" />,
    color: "bg-blue-500"
  },
  {
    name: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    year: "2023",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-green-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              A comprehensive showcase of my <span className="text-blue-600 font-semibold">technical expertise</span> 
              and <span className="text-purple-600 font-semibold">professional skills</span> developed over a decade
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              From enterprise systems to modern web technologies, I bring deep expertise across 
              the full technology stack with hands-on experience in diverse industry domains.
            </p>
          </div>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <div className="text-2xl">
                      {category.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{category.skills.length}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Technologies</div>
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-white transition-colors duration-300 mb-2">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                  Professional expertise in {category.skills.length} key technologies
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground group-hover:text-white/70 transition-colors duration-300">
                            {skill.level}%
                          </span>
                          <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
                        </div>
                      </div>
                      
                      {/* Enhanced Progress Bar */}
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 150) + (skillIndex * 100)}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Skill Category Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
                  <div className="flex items-center justify-between text-xs text-muted-foreground group-hover:text-white/70 transition-colors duration-300">
                    <span>Proficiency Level</span>
                    <span className="font-medium">
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}% Avg
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Certifications */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-12">
            <h3 className="text-4xl font-display font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </h3>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card Background Glow */}
                <div className={`absolute inset-0 ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-20 h-20 ${cert.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <div className="text-3xl">
                      {cert.icon}
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-xl mb-3 text-foreground group-hover:text-white transition-colors duration-300">
                    {cert.name}
                  </h4>
                  <p className="text-muted-foreground group-hover:text-white/80 text-sm mb-2 transition-colors duration-300">
                    {cert.issuer}
                  </p>
                  <Badge variant="secondary" className="text-xs bg-white/10 text-white border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    {cert.year}
                  </Badge>
                  
                  {/* Achievement Indicator */}
                  <div className="mt-4 pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full opacity-80"></div>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-white/70 mt-2 block transition-colors duration-300">
                      Professional Certification
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Quick Stats */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl"></div>
          <div className="relative z-10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
            <h3 className="text-3xl font-display font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Metrics
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Code2 className="w-10 h-10" />, value: "50+", label: "Projects Completed", color: "text-blue-500", bg: "from-blue-500/20 to-blue-600/20" },
                { icon: <Zap className="w-10 h-10" />, value: "10+", label: "Years Experience", color: "text-yellow-500", bg: "from-yellow-500/20 to-orange-500/20" },
                { icon: <Shield className="w-10 h-10" />, value: "15+", label: "Technologies", color: "text-green-500", bg: "from-green-500/20 to-emerald-500/20" },
                { icon: <Globe className="w-10 h-10" />, value: "6", label: "Industries Served", color: "text-purple-500", bg: "from-purple-500/20 to-pink-500/20" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2 group-hover:text-white transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300 font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Progress Ring */}
                  <div className="mt-4 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-current to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
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

export default Skills;
