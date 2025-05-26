
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "AIML Intern",
      company: "ShadowFox",
      location: "Visakhapatnam",
      period: "07/2024 - 08/2024",
      achievements: [
        "Led a team of engineers in development and implementation",
        "Developed new scheduling system, reducing completion times by 10%"
      ],
      color: "electric-blue"
    },
    {
      title: "Python Intern",
      company: "InternPe",
      location: "Visakhapatnam", 
      period: "06/2024 - 07/2024",
      achievements: [
        "Created Python scripts for data analysis and web functionality using Pandas and Flask",
        "Designed optimized data pipeline improving efficiency by 20%"
      ],
      color: "neon-green"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional internships and hands-on experience in AI/ML and development
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className={`glass-effect border-${exp.color}/20 hover-glow animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-semibold text-${exp.color} mb-2`}>{exp.title}</h3>
                    <p className="text-xl text-white font-medium">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <Badge className={`bg-${exp.color}/20 text-${exp.color} border-${exp.color}/30 mt-4 md:mt-0`}>
                    {exp.period}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 bg-${exp.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
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

export default Experience;
