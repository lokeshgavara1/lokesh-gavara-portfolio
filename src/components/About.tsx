
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="animate-slide-in-left">
            <Card className="glass-effect border-electric-blue/20 hover-glow group hover:border-electric-blue/40 transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-electric-blue/20 rounded-xl flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-electric-blue rounded-lg"></div>
                  </div>
                  <h3 className="text-3xl font-semibold text-electric-blue">My Story</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  I am a B.Tech student specializing in Computer Science and Engineering with a focus on 
                  Artificial Intelligence and Machine Learning (CSE-AIML). Passionate about cutting-edge 
                  technologies, I am particularly interested in exploring the vast potential of AI and ML 
                  to solve real-world problems.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I enjoy learning about data-driven solutions, deep learning, and intelligent systems, 
                  and I am eager to contribute to innovative projects in this field. My goal is to bridge 
                  the gap between theoretical knowledge and practical applications in the world of artificial intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in">
            <Card className="glass-effect border-neon-green/20 hover-glow group hover:border-neon-green/40 transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-xl flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-neon-green rounded-lg"></div>
                  </div>
                  <h3 className="text-3xl font-semibold text-neon-green">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-electric-blue pl-8 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-electric-blue rounded-full animate-pulse"></div>
                    <h4 className="text-2xl font-semibold text-white mb-2">B.Tech in CSE-AIML</h4>
                    <p className="text-electric-blue font-medium text-lg mb-2">Centurion University, Vizianagaram</p>
                    <p className="text-gray-400 mb-4">Ongoing • Visakhapatnam Rural Mandal</p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Specializing in Artificial Intelligence and Machine Learning with focus on 
                      deep learning, data science, and intelligent system design.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
