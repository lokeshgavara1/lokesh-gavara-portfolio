
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-800/50 bg-background/50 backdrop-blur-xl relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-10">
            <h3 className="text-3xl font-bold font-poppins mb-4">
              <span className="gradient-text hover:scale-105 transition-transform duration-300 cursor-pointer">Lokesh Gavara</span>
            </h3>
            <p className="text-gray-400 text-xl">Machine Learning Enthusiast | Developer | Designer</p>
          </div>
          
          <div className="flex justify-center space-x-10 mb-12">
            {[
              { name: 'LinkedIn', href: 'https://linkedin.com/in/lokeshgavara5' },
              { name: 'GitHub', href: 'https://github.com/lokeshgavara1' },
              { name: 'Email', href: 'mailto:lokeshgavara5@gmail.com' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-electric-blue transition-all duration-300 font-medium text-lg relative group transform hover:scale-110"
              >
                {social.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-electric-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-800/50 pt-10">
            <p className="text-gray-500 text-lg">
              © 2024 Lokesh Gavara. All rights reserved. Built with passion and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
