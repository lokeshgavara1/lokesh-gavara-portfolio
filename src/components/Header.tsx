
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold font-poppins">
          <span className="gradient-text">Lokesh Gavara</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Experience', 'Skills', 'Portfolio', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-foreground hover:text-electric-blue transition-colors duration-300 font-medium"
            >
              {item}
            </button>
          ))}
        </nav>
        
        <Button 
          onClick={() => scrollToSection('contact')}
          className="bg-electric-blue hover:bg-electric-blue/80 text-black font-semibold px-6 py-2 rounded-full hover-glow"
        >
          Let's Connect
        </Button>
      </div>
    </header>
  );
};

export default Header;
