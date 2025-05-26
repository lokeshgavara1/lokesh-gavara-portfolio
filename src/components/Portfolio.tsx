
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "AI-Crop Disease Prediction System",
      description: "Android app for real-time plant disease detection using TensorFlow Lite with 90% classification accuracy using CNN model",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      tech: ["TensorFlow Lite", "Android", "CNN", "Python"],
      accuracy: "90%",
      color: "electric-blue"
    },
    {
      title: "OCR and Document Classifier", 
      description: "ML-based OCR system for text extraction and classification using Tesseract & TensorFlow with 92% accuracy and 25% faster processing",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tech: ["Tesseract", "TensorFlow", "Python", "OCR"],
      accuracy: "92%",
      color: "neon-green"
    }
  ];

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Showcase of innovative projects combining AI/ML with practical applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className={`glass-effect border-${project.color}/20 hover-glow animate-fade-in overflow-hidden group hover:border-${project.color}/40 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className={`absolute top-6 right-6 bg-${project.color}/90 text-black px-4 py-2 rounded-full font-semibold text-lg shadow-lg`}>
                  {project.accuracy} Accuracy
                </div>
              </div>
              
              <CardContent className="p-10">
                <h3 className={`text-2xl font-semibold text-${project.color} mb-6 group-hover:text-white transition-colors duration-300`}>{project.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className={`border-${project.color}/30 text-${project.color} text-sm px-4 py-2 hover:bg-${project.color}/20 transition-all duration-300 transform hover:scale-105`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className={`border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-black flex-1 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-${project.color}/25`}
                  >
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-black flex-1 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
