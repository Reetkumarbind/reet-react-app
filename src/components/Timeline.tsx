import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar,
  MapPin,
  ExternalLink,
  Building
} from "lucide-react";

const timelineData = [
  {
    type: "work",
    title: "Software Engineer",
    company: "Apollo Computers",
    location: "Client Location ONGC Scope Minar, Laxmi Nagar",
    period: "2023 - Present",
    description: "Working as Software Engineer at Apollo Computers, deployed at client location ONGC Scope Minar. Responsible for developing and maintaining software solutions for oil and gas industry applications.",
    achievements: [
      "Developed enterprise-level applications",
      "Implemented robust software solutions",
      "Collaborated with ONGC technical teams",
      "Maintained high-quality code standards"
    ],
    technologies: ["Java", "Spring Boot", "Oracle", "REST APIs", "Enterprise Applications"],
    icon: <Briefcase className="w-5 h-5" />,
    color: "bg-green-500"
  },
  {
    type: "work",
    title: "Software Engineer",
    company: "Tecnics Integration Technology Pvt Ltd.",
    location: "Delhi",
    period: "2021 - 2023",
    description: "Worked as Software Engineer at Tecnics Integration Technology, developing and maintaining software solutions. Contributed to various projects involving system integration and technology implementation.",
    achievements: [
      "Developed integrated software solutions",
      "Implemented system integration projects",
      "Collaborated with cross-functional teams",
      "Delivered projects within deadlines"
    ],
    technologies: ["Java", "Spring Framework", "MySQL", "REST APIs", "System Integration"],
    icon: <Briefcase className="w-5 h-5" />,
    color: "bg-blue-500"
  },
  {
    type: "work",
    title: "IT Support Engineer",
    company: "Sampark Software Pvt Ltd.",
    location: "Delhi",
    period: "2019 - 2021",
    description: "Worked as IT Support Engineer at Sampark Software, providing technical support and maintaining IT infrastructure. Responsible for troubleshooting hardware and software issues, system maintenance, and user support.",
    achievements: [
      "Provided comprehensive IT support services",
      "Maintained system uptime and performance",
      "Resolved technical issues efficiently",
      "Supported end-users with technical problems"
    ],
    technologies: ["Windows Server", "Network Administration", "Hardware Troubleshooting", "Help Desk", "System Maintenance"],
    icon: <Briefcase className="w-5 h-5" />,
    color: "bg-orange-500"
  },
  {
    type: "work",
    title: "System Engineer",
    company: "Foray Software Pvt Ltd.",
    location: "Client Location TCS Think Center, Electronic City, Bangalore, Karnataka, India",
    period: "2016",
    description: "Worked as System Engineer at Foray Software, deployed at client location TCS Think Center in Bangalore. Responsible for system administration, maintenance, and technical support in enterprise environment.",
    achievements: [
      "Managed enterprise system infrastructure",
      "Provided technical support at TCS facility",
      "Maintained system performance and reliability",
      "Collaborated with TCS technical teams"
    ],
    technologies: ["System Administration", "Enterprise Systems", "Technical Support", "Infrastructure Management", "Client Support"],
    icon: <Briefcase className="w-5 h-5" />,
    color: "bg-purple-500"
  },
  {
    type: "work",
    title: "Operation Executive",
    company: "MediAssist TPA Pvt. Ltd.",
    location: "India",
    period: "Feb 2016",
    description: "Worked as Operation Executive at MediAssist TPA, a leading Third Party Administrator in healthcare insurance. Responsible for operational activities, claim processing, and customer service in healthcare insurance domain.",
    achievements: [
      "Managed healthcare insurance operations",
      "Processed insurance claims efficiently",
      "Provided customer support services",
      "Maintained operational excellence"
    ],
    technologies: ["Healthcare Systems", "Insurance Processing", "Customer Service", "Data Management", "Operations Management"],
    icon: <Briefcase className="w-5 h-5" />,
    color: "bg-teal-500"
  },
  {
    type: "work",
    title: "Operation Executive",
    company: "BOB eProcure Solutions Pvt Ltd",
    location: "L-127, 4th Main, 14th Cross Rd, Sector 6, HSR Layout, Bengaluru, Karnataka 560102",
    period: "March 2015",
    description: "Worked as Operation Executive at BOB eProcure Solutions, specializing in e-procurement and digital procurement solutions. Responsible for operational processes, vendor management, and procurement operations.",
    achievements: [
      "Managed e-procurement operations",
      "Coordinated vendor management processes",
      "Streamlined procurement workflows",
      "Ensured operational efficiency"
    ],
    technologies: ["E-Procurement Systems", "Vendor Management", "Digital Procurement", "Process Management", "Operations Coordination"],
    icon: <Briefcase className="w-5 h-5" />,
    color: "bg-indigo-500"
  },
  {
    type: "education",
    title: "Master of Computer Application",
    company: "Visvesvaraya Technological University (VTU)",
    location: "TJIT Bangalore, Karnataka, India",
    period: "2010 - 2013",
    description: "Completed Master of Computer Application with focus on software development, database management, and system analysis. Gained expertise in programming languages and software engineering principles.",
    achievements: [
      "Specialized in Software Development",
      "Database Management Systems",
      "System Analysis and Design",
      "Advanced Programming Concepts"
    ],
    technologies: ["Java", "C++", ".NET", "SQL", "Web Technologies"],
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-purple-500"
  },
  {
    type: "education",
    title: "Bachelor of Computer Application",
    company: "Uttar Pradesh Rajarshi Tandon Open University (UPRTOU)",
    location: "IICS Allahabad, Uttar Pradesh, India",
    period: "2006 - 2009",
    description: "Completed Bachelor of Computer Application with foundation in computer science fundamentals, programming concepts, and basic software development. Built strong foundation in mathematics and computer applications.",
    achievements: [
      "Computer Programming Fundamentals",
      "Mathematics and Statistics",
      "Database Concepts",
      "Software Development Basics"
    ],
    technologies: ["C Programming", "Visual Basic", "HTML", "Database Management", "MS Office"],
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-indigo-500"
  },
  {
    type: "education",
    title: "Intermediate (12th Grade)",
    company: "State Board Uttar Pradesh",
    location: "Uttar Pradesh, India",
    period: "2004 - 2006",
    description: "Completed Higher Secondary Education with focus on Science stream. Built strong foundation in Mathematics, Physics, and Chemistry which provided the analytical thinking skills essential for computer science.",
    achievements: [
      "Science Stream Specialization",
      "Strong Mathematical Foundation",
      "Physics and Chemistry Knowledge",
      "Analytical Problem Solving"
    ],
    technologies: ["Mathematics", "Physics", "Chemistry", "Basic Computer Knowledge"],
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-green-500"
  },
  {
    type: "education",
    title: "High School (10th Grade)",
    company: "State Board Uttar Pradesh",
    location: "Dr. Lohia Intermediate College, Sagarpur Bawain, Bhadohi, Uttar Pradesh",
    period: "2004",
    description: "Completed Secondary Education with strong academic performance. Developed fundamental knowledge in core subjects including Mathematics, Science, and English, laying the groundwork for future academic pursuits.",
    achievements: [
      "Strong Academic Foundation",
      "Mathematics and Science Excellence",
      "English Language Proficiency",
      "Disciplined Study Habits"
    ],
    technologies: ["Basic Mathematics", "General Science", "English", "Hindi"],
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-blue-500"
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My career progression, education, and key achievements over the years
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white z-10 shadow-lg`}>
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <Card className="hover-lift glass border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-semibold mb-1">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 text-base font-medium text-gray-700 dark:text-gray-300">
                            <Building className="w-4 h-4" />
                            {item.company}
                          </CardDescription>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`${item.color} text-white border-0`}
                        >
                          {item.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2 text-gray-800 dark:text-gray-200">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-gray-800 dark:text-gray-200">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-xs bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-800 dark:text-white">
                Ready for the Next Challenge
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always excited to work on innovative projects and collaborate with amazing teams. 
                Let's build something great together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-gradient-ocean text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get In Touch
                </button>
                <button 
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  Download Resume
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
