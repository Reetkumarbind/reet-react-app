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
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
                I'm a passionate <span className="text-blue-600 font-semibold">Software Engineer</span> with 
                <span className="text-purple-600 font-semibold"> 10+ years</span> of experience creating 
                innovative digital solutions across diverse industries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From operations to enterprise software development, I specialize in turning complex business 
                requirements into elegant, scalable solutions. Currently working on enterprise applications 
                for the oil & gas industry at ONGC.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { number: "10+", label: "Years Experience", icon: "⚡", color: "from-yellow-400 to-orange-500" },
                  { number: "50+", label: "Projects Delivered", icon: "🚀", color: "from-blue-400 to-cyan-500" },
                  { number: "6", label: "Industries Served", icon: "🏢", color: "from-green-400 to-emerald-500" },
                  { number: "15+", label: "Technologies", icon: "💻", color: "from-purple-400 to-pink-500" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className={`text-2xl mb-2 w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Skills Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-display font-bold text-center mb-12 text-foreground">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <Card key={skillGroup.category} className={`group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in-up ${skillGroup.borderColor} border-l-4 delay-[${index * 100}ms] overflow-hidden relative`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-current to-transparent"></div>
                  </div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 ${skillGroup.bgColor} rounded-xl ${skillGroup.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {skillGroup.icon}
                      </div>
                      <h3 className={`font-semibold text-xl text-foreground ${skillGroup.color} group-hover:text-white transition-colors duration-300`}>
                        {skillGroup.category}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {skillGroup.techs.map((tech, techIndex) => (
                        <div key={tech} className="flex items-center gap-2 group/tech">
                          <div className="w-2 h-2 bg-current rounded-full opacity-60 group-hover/tech:opacity-100 transition-opacity duration-200"></div>
                          <Badge 
                            variant="secondary" 
                            className={`text-sm ${skillGroup.bgColor} ${skillGroup.color} border-0 hover:scale-105 transition-transform duration-200 cursor-default`}
                            style={{ animationDelay: `${(index * 100) + (techIndex * 50)}ms` }}
                          >
                            {tech}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    
                    {/* Skill Count */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <span className="text-xs text-muted-foreground">
                        {skillGroup.techs.length} technologies
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="flex justify-center">
            <div className="w-full max-w-6xl space-y-8">
              <h3 className="text-4xl font-bold text-foreground text-center mb-12">
                My Journey
              </h3>
              
              <div className="space-y-8">
                {/* Educational Foundation Card */}
                <div className="max-w-4xl mx-auto p-8 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🎓</span>
                    </div>
                    <h4 className="text-2xl font-semibold text-foreground">Educational Foundation</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                    My journey began with a strong academic foundation, completing my BCA from UPRTOU (2006-2009) 
                    and MCA from VTU (2010-2013). What started as curiosity about technology evolved into a 
                    decade-long career spanning diverse industries and roles.
                  </p>
                </div>

                {/* Operations Phase Card */}
                <div className="max-w-4xl mx-auto p-8 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <h4 className="text-2xl font-semibold text-foreground">Operations Phase (2015-2016)</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                    I began my professional journey in 2015 with operations roles at BOB eProcure Solutions and 
                    MediAssist TPA, where I learned the importance of process efficiency and customer service. 
                    This foundation led me to system engineering at Foray Software (deployed at TCS), where I 
                    discovered my passion for technical problem-solving.
                  </p>
                </div>

                {/* Technical Evolution Card */}
                <div className="max-w-4xl mx-auto p-8 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <h4 className="text-2xl font-semibold text-foreground">Technical Evolution (2019-2023)</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                    Transitioning through IT support at Sampark Software to software engineering at Tecnics Integration 
                    Technology, I've gained expertise across the entire technology stack. This phase solidified my 
                    technical skills and prepared me for enterprise-level challenges.
                  </p>
                </div>

                {/* Current Excellence Card */}
                <div className="max-w-4xl mx-auto p-8 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <h4 className="text-2xl font-semibold text-foreground">Current Excellence (2023-Present)</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                    Currently, as a Software Engineer at Apollo Computers (deployed at ONGC), I work on enterprise-level 
                    applications for the oil and gas industry, combining my operational experience with technical expertise. 
                    My diverse background gives me a unique perspective on building solutions that truly serve business needs.
                  </p>
                </div>

                {/* Philosophy Card */}
                <div className="max-w-4xl mx-auto p-8 rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-800 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">💡</span>
                    </div>
                    <h4 className="text-2xl font-semibold text-foreground">My Philosophy</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                    I believe in continuous learning and adapting to new technologies while maintaining focus on 
                    reliability and user experience. My journey from operations to software engineering has taught me 
                    that the best solutions come from understanding both business needs and technical possibilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;