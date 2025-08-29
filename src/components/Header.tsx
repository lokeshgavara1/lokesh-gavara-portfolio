
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass-effect py-4 backdrop-blur-xl shadow-2xl border-b border-white/10' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold font-poppins">
          <span className="gradient-text hover:scale-105 transition-transform duration-300 cursor-pointer">Lokesh Gavara</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase() === 'projects' ? 'portfolio' : item.toLowerCase())}
              className="text-foreground hover:text-electric-blue transition-all duration-300 font-medium relative group py-2"
            >
              {item}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-electric-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          ))}
        </nav>
        
        <Button 
          onClick={() => scrollToSection('contact')}
          className="bg-electric-blue hover:bg-electric-blue/80 text-black font-semibold px-8 py-3 rounded-full hover-glow transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-electric-blue/25"
        >
          Let's Connect
        </Button>
      </div>
    </header>
  );
};

export default Header;
