
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["Java", "Python", "C", "SQL", "JavaScript", "HTML/CSS", "PHP"],
      color: "electric-blue"
    },
    {
      title: "Frameworks", 
      icon: "⚡",
      skills: ["React", "Node.js", "Express.js", "Flask", "Kotlin"],
      color: "neon-green"
    },
    {
      title: "Developer Tools",
      icon: "🛠️", 
      skills: ["Git", "Github", "Google Cloud Platform", "Visual Studio", "Jupyter", "Eclipse", "Power BI", "Tableau"],
      color: "neon-pink"
    },
    {
      title: "Libraries",
      icon: "📚",
      skills: ["pandas", "NumPy", "Matplotlib", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
      color: "electric-blue"
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["AWS", "Firebase", "MongoDB", "MySQL", "Oracle", "Microsoft SQL Server"],
      color: "neon-green"
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            Skills & <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Technical expertise and creative services I offer to bring your ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`glass-effect border-${category.color}/20 hover-glow animate-fade-in group hover:border-${category.color}/40 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105`} style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-10 text-center">
                <div className="text-6xl mb-8 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{category.icon}</div>
                <h3 className={`text-2xl font-semibold text-${category.color} mb-8`}>{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className={`border-${category.color}/30 text-${category.color} hover:bg-${category.color}/10 transition-all duration-300 text-base py-3 px-6 block w-full transform hover:scale-105 hover:shadow-lg`}
                      style={{transitionDelay: `${i * 100}ms`}}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
