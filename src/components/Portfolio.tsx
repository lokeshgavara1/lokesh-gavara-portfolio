
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
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of innovative projects combining AI/ML with practical applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className={`glass-effect border-${project.color}/20 hover-glow animate-fade-in overflow-hidden group`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute top-4 right-4 bg-${project.color}/90 text-black px-3 py-1 rounded-full font-semibold`}>
                  {project.accuracy} Accuracy
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className={`text-xl font-semibold text-${project.color} mb-4`}>{project.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className={`border-${project.color}/30 text-${project.color} text-xs`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className={`border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-black flex-1`}
                  >
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-black flex-1"
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
