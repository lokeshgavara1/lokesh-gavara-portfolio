
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Engineer Trainee",
      company: "Gramtarang Technologies",
      location: "Onsite",
      period: "Dec 2025 – Present",
      achievements: [
        "Working as a Graduate Engineer Trainee contributing to technology solutions and development projects",
        "Collaborating with cross-functional teams to deliver innovative engineering solutions",
        "Gaining hands-on experience in professional software development practices and workflows"
      ],
      color: "neon-pink"
    },
    {
      title: "Python Developer Intern",
      company: "Infosys Springboard",
      location: "Remote",
      period: "Oct – Dec 2025",
      achievements: [
        "Develop and optimize modular Python code using advanced data structures and object-oriented programming (OOP) principles to ensure scalability and maintainability",
        "Implement and automate workflows and API integrations to streamline data processing, reduce manual tasks, and improve operational efficiency",
        "Enhance problem-solving and debugging capabilities by working on real-world projects and tackling complex coding challenges in a collaborative environment"
      ],
      color: "electric-blue"
    },
    {
      title: "AI/ML Intern",
      company: "Infosys Springboard",
      location: "Remote", 
      period: "Jun – Oct 2025",
      achievements: [
        "Built and optimized machine learning models for classification and regression using Python, Scikit-learn, and TensorFlow",
        "Applied data preprocessing, model training, evaluation, and hyperparameter tuning techniques to enhance predictive accuracy and model performance",
        "Gained hands-on experience with neural networks, deep learning architectures, and end-to-end AI/ML workflows, contributing to practical real-world solutions"
      ],
      color: "neon-green"
    }
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neon-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Professional internships and hands-on experience in AI/ML and development
          </p>
        </div>
        
        <div className="space-y-10 lg:space-y-12 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className={`professional-card border-${exp.color}/20 hover:border-${exp.color}/40 animate-fade-in group`} style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-${exp.color}/20 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <div className={`w-8 h-8 bg-${exp.color} rounded-xl`}></div>
                    </div>
                    <div>
                      <h3 className={`text-3xl font-semibold text-${exp.color} mb-3`}>{exp.title}</h3>
                      <p className="text-2xl text-white font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-400 text-lg">{exp.location}</p>
                    </div>
                  </div>
                  <Badge className={`bg-${exp.color}/20 text-${exp.color} border-${exp.color}/30 mt-6 lg:mt-0 px-6 py-3 text-lg font-semibold`}>
                    {exp.period}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-4 group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${i * 100}ms`}}>
                      <div className={`w-3 h-3 bg-${exp.color} rounded-full mt-2 flex-shrink-0 animate-pulse`}></div>
                      <p className="text-gray-300 leading-relaxed text-lg">{achievement}</p>
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
