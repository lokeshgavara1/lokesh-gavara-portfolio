
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mt-16 mb-4 flex justify-center">
            <div className="relative flex items-center justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-electric-blue/30 shadow-[0_0_40px_rgba(0,212,255,0.3)] animate-glow flex items-center justify-center">
                <img 
                  src="https://i.postimg.cc/zDbKDKYN/naaphoto.png" 
                  alt="Lokesh Gavara"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-neon-green rounded-full flex items-center justify-center animate-pulse">
                <div className="w-6 h-6 bg-black rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <p className="text-electric-blue font-medium text-lg mb-4 tracking-wide">Hello, I'm</p>
          
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
            <span className="gradient-text">Lokesh Gavara</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-8">
            Machine Learning Enthusiast | Developer | Designer
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            I am a B.Tech student specializing in Computer Science and Engineering with a focus on 
            Artificial Intelligence and Machine Learning, passionate about cutting-edge technologies 
            and solving real-world problems through innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-electric-blue hover:bg-electric-blue/80 text-black font-semibold px-8 py-3 rounded-full hover-glow text-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black px-8 py-3 rounded-full text-lg transition-all duration-300"
            >
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-electric-blue" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
