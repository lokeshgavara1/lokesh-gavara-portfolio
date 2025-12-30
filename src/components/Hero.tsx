
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
      </div>
      
      <div className="section-container text-center max-w-6xl">
        <div className="animate-fade-in">
          {/* Profile Image - 3D Effect */}
          <div className="mb-12 flex justify-center mt-24 perspective-[1000px]">
            <div className="relative flex items-center justify-center group">
              {/* 3D Container with hover effect */}
              <div 
                className="w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-electric-blue/40 
                shadow-[0_20px_50px_rgba(0,212,255,0.4),0_0_80px_rgba(0,212,255,0.2),inset_0_-10px_30px_rgba(0,0,0,0.3)] 
                animate-glow flex items-center justify-center bg-gradient-to-br from-electric-blue/20 to-neon-green/20
                transform-gpu transition-all duration-500 ease-out
                hover:rotate-y-12 hover:rotate-x-6 hover:scale-105
                group-hover:shadow-[0_30px_60px_rgba(0,212,255,0.5),0_0_100px_rgba(0,212,255,0.3),inset_0_-15px_40px_rgba(0,0,0,0.4)]"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Image with 3D depth */}
                <img 
                  src="https://i.postimg.cc/zDbKDKYN/naaphoto.png" 
                  alt="Lokesh Gavara - Machine Learning Enthusiast"
                  className="w-full h-full object-cover object-center transition-transform duration-500"
                  style={{
                    transform: 'translateZ(20px)',
                  }}
                />
                {/* 3D Highlight overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-full pointer-events-none"></div>
              </div>
              
              {/* Floating ring effect for 3D depth */}
              <div className="absolute inset-0 w-52 h-52 lg:w-64 lg:h-64 rounded-full border-2 border-electric-blue/20 
                transform translate-z-[-20px] scale-110 animate-pulse pointer-events-none"
                style={{ transform: 'translateZ(-20px) scale(1.1)' }}
              ></div>
              
              {/* Status indicator */}
              <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-neon-green to-electric-blue rounded-full flex items-center justify-center animate-pulse shadow-[0_10px_30px_rgba(57,255,20,0.4)]"
                style={{ transform: 'translateZ(30px)' }}
              >
                <div className="w-7 h-7 bg-background rounded-full flex items-center justify-center shadow-inner">
                  <div className="w-3 h-3 bg-neon-green rounded-full shadow-[0_0_10px_rgba(57,255,20,0.8)]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="space-y-6">
            <p className="text-electric-blue font-semibold text-xl tracking-wide uppercase">Hello, I'm</p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight">
              <span className="gradient-text">Lokesh Gavara</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground/80 font-medium">
              Machine Learning Enthusiast | Developer | Designer
            </h2>
            
            <p className="text-muted-foreground text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              I am a B.Tech student specializing in Computer Science and Engineering with a focus on 
              Artificial Intelligence and Machine Learning, passionate about cutting-edge technologies 
              and solving real-world problems through innovative solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-electric-blue hover:bg-electric-blue/80 text-background font-semibold px-10 py-4 rounded-full hover-glow text-lg shadow-lg hover:shadow-electric-blue/25 transition-all duration-300"
              size="lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-background px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg"
              size="lg"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Lokesh_Gavara_Resume.pdf';
                link.download = 'Lokesh_Gavara_Resume.pdf';
                link.click();
              }}
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
