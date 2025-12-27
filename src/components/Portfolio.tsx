
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "🎤 Audio-Based Conversational Chatbot",
      description: "Complete real-time audio-based conversational chatbot system built with Django, React, and WebSockets. Features speech-to-text (STT) using Whisper, LLM integration via Groq (Llama 3.3), and text-to-speech (TTS) using Google TTS (gTTS).",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
      tech: ["Django", "React", "WebSockets", "Whisper", "Groq", "gTTS"],
      accuracy: "Real-Time",
      color: "neon-pink",
      github: "https://github.com/lokeshgavara1/Real-Time-Ai-Voice-Chatbot"
    },
    {
      title: "🌍 AirAware - Smart Air Quality Prediction",
      description: "Comprehensive air quality monitoring and prediction system for Delhi, India. Collects, stores, analyzes, and visualizes air quality data with real-time monitoring capabilities and predictive analytics to help make informed decisions.",
      image: "https://images.unsplash.com/photo-1530533718754-001d2668365a?w=600&h=400&fit=crop",
      tech: ["Python", "ML", "Analytics", "Prediction", "Real-Time"],
      accuracy: "Predictive",
      color: "electric-blue",
      github: "https://github.com/lokeshgavara1/AirAware-Smart-Air-Quality-Prediction-System"
    },
    {
      title: "🎧 AI Audio Book Generator",
      description: "Transform text documents into narrated audiobooks using AI-powered rewriting and text-to-speech (TTS). Upload PDF, DOCX, or TXT files and automatically generate natural-sounding audiobooks with storytelling narration. Built with Python and Streamlit — no paid APIs required for basic use.",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&h=400&fit=crop",
      tech: ["Python", "Streamlit", "AI", "TTS", "NLP"],
      accuracy: "AI-Powered",
      color: "neon-green",
      github: "https://github.com/lokeshgavara1/AI-AUDIO-BOOK-GENERATOR"
    },
    {
      title: "AI-Crop Disease Prediction System",
      description: "Android app for real-time plant disease detection using TensorFlow Lite with 90% classification accuracy using CNN model",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      tech: ["TensorFlow Lite", "Android", "CNN", "Python"],
      accuracy: "90%",
      color: "neon-green",
      github: "https://github.com/lokeshgavara1/Crop_Disease_Prediction"
    },
    {
      title: "OCR and Document Classifier", 
      description: "ML-based OCR system for text extraction and classification using Tesseract & TensorFlow with 92% accuracy and 25% faster processing",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tech: ["Tesseract", "TensorFlow", "Python", "OCR"],
      accuracy: "92%",
      color: "neon-green",
      github: "https://github.com/lokeshgavara1/Optical_Character_Recognition"
    },
    {
      title: "BizBoost – Automated Social Media Promotion Tool",
      description: "Full-stack web application for automating social media promotions using Node.js, Express, MongoDB, React, and JWT authentication with automated content generation and analytics dashboard",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Node.js", "Express", "MongoDB", "React", "JWT"],
      accuracy: "Full-Stack",
      color: "electric-blue",
      github: "https://github.com/lokeshgavara1/BizBoost-Automated-Social-Media-Promotion-Tool"
    },
    {
      title: "AI News Generator",
      description: "Comprehensive blog post creation tool using advanced AI agents powered by CrewAI & Cohere's Command R7B with user-friendly design and practical AI applications",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
      tech: ["CrewAI", "Cohere", "AI", "Blog Generation"],
      accuracy: "AI-Powered",
      color: "neon-green",
      github: "https://github.com/lokeshgavara1/AI-Engineering-Projects-Hub/tree/main/ai_news_generator"
    },
    {
      title: "YouTube Trend Analysis",
      description: "YouTube Trend Analysis system implementing CrewAI and BrightData for comprehensive video trend insights and analytics",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tech: ["CrewAI", "BrightData", "Analytics", "YouTube API"],
      accuracy: "Trend Analysis",
      color: "electric-blue",
      github: "https://github.com/lokeshgavara1/Youtube-Trend-Analyser"
    },
    {
      title: "Customer Management System",
      description: "Android application for comprehensive customer management with features for customer data handling, relationship management, and business operations optimization",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["Android", "Java", "SQLite", "XML"],
      accuracy: "Mobile App",
      color: "neon-green",
      github: "https://github.com/lokeshgavara1/CustomerManagementSystemProjectportfolio"
    }
  ];

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Showcase of innovative projects combining AI/ML with practical applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className={`professional-card border-${project.color}/20 hover:border-${project.color}/40 animate-fade-in overflow-hidden group`} style={{animationDelay: `${index * 0.2}s`}}>
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
              
              <CardContent className="p-8 lg:p-10">
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
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-black flex-1 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                    onClick={() => window.open(project.github, '_blank')}
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
