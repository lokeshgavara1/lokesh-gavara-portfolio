
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="glass-effect border-electric-blue/20 hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-electric-blue mb-6">My Story</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I am a B.Tech student specializing in Computer Science and Engineering with a focus on 
                  Artificial Intelligence and Machine Learning (CSE-AIML). Passionate about cutting-edge 
                  technologies, I am particularly interested in exploring the vast potential of AI and ML 
                  to solve real-world problems.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I enjoy learning about data-driven solutions, deep learning, and intelligent systems, 
                  and I am eager to contribute to innovative projects in this field. My goal is to bridge 
                  the gap between theoretical knowledge and practical applications in the world of artificial intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in">
            <Card className="glass-effect border-neon-green/20 hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-neon-green mb-6">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-electric-blue pl-6">
                    <h4 className="text-xl font-semibold text-white">B.Tech in CSE-AIML</h4>
                    <p className="text-electric-blue font-medium">Centurion University, Vizianagaram</p>
                    <p className="text-gray-400">Ongoing • Visakhapatnam Rural Mandal</p>
                    <p className="text-gray-300 mt-2">
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
