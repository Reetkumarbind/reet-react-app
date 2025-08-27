import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote,
  Linkedin,
  ExternalLink
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Tech Solutions Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Reet is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding. He transformed our legacy system into a modern, scalable application.",
    project: "E-commerce Platform Redesign",
    linkedin: "https://linkedin.com/in/priyasharma",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "CTO",
    company: "Digital Innovations Ltd.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Working with Reet was a game-changer for our startup. He not only delivered excellent code but also provided valuable insights on architecture and best practices. His React expertise is top-notch.",
    project: "SaaS Dashboard Development",
    linkedin: "https://linkedin.com/in/arjunpatel",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    name: "Kavya Reddy",
    role: "Design Lead",
    company: "Creative Agency Pro",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Reet has an incredible ability to translate design concepts into pixel-perfect implementations. His collaboration with our design team was seamless, and the final product exceeded our expectations.",
    project: "Portfolio Website Development",
    linkedin: "https://linkedin.com/in/kavyareddy",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    name: "Rohit Gupta",
    role: "Startup Founder",
    company: "InnovateTech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Reet helped us build our MVP from scratch. His full-stack expertise and understanding of modern technologies made the development process smooth. He's reliable, communicative, and delivers on time.",
    project: "Mobile App Backend",
    linkedin: "https://linkedin.com/in/rohitgupta",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    name: "Sneha Agarwal",
    role: "Senior Developer",
    company: "TechCorp Solutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "As a fellow developer, I can appreciate Reet's clean code and thoughtful architecture. He's always up-to-date with the latest technologies and best practices. A true professional.",
    project: "API Integration Project",
    linkedin: "https://linkedin.com/in/snehaagarwal",
    color: "from-indigo-500 to-purple-500"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useState(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  });

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${currentTestimonial.color}`}></div>
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar and Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="relative mb-4">
                    <Avatar className="w-24 h-24 mx-auto md:mx-0 ring-4 ring-white shadow-lg">
                      <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                      <AvatarFallback className="text-xl font-semibold">
                        {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2">
                      <Badge className={`bg-gradient-to-r ${currentTestimonial.color} text-white border-0`}>
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {currentTestimonial.rating}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {currentTestimonial.company}
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(currentTestimonial.linkedin, '_blank')}
                      className="text-blue-600 hover:text-blue-700 p-1"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Badge variant="outline" className="text-xs">
                      {currentTestimonial.project}
                    </Badge>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <Quote className="w-12 h-12 text-gray-300 dark:text-gray-600 mb-4" />
                  <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic mb-6">
                    "{currentTestimonial.text}"
                  </blockquote>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="rounded-full w-10 h-10 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="rounded-full w-10 h-10 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Testimonial Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentIndex 
                  ? 'ring-2 ring-blue-500 shadow-lg scale-105' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <CardContent className="p-4 text-center">
                <Avatar className="w-12 h-12 mx-auto mb-2">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-sm text-gray-800 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {testimonial.company}
                </p>
                <div className="flex justify-center mt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
