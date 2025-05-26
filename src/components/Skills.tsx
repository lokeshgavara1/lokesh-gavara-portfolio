
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Skills",
      icon: "🎯",
      skills: ["Python", "Machine Learning", "MySQL"],
      color: "electric-blue"
    },
    {
      title: "Expertise Areas", 
      icon: "⚡",
      skills: ["Machine Learning", "Web Development", "Android Development"],
      color: "neon-green"
    },
    {
      title: "Services Offered",
      icon: "🎨", 
      skills: ["UI/UX Design", "Canva Design", "Social Media Content Creation"],
      color: "neon-pink"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Skills & <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technical expertise and creative services I offer to bring your ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`glass-effect border-${category.color}/20 hover-glow animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className={`text-xl font-semibold text-${category.color} mb-6`}>{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className={`border-${category.color}/30 text-${category.color} hover:bg-${category.color}/10 transition-colors duration-300 text-sm py-2 px-4 block w-full`}
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
