
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-poppins">
              <span className="gradient-text">Lokesh Gavara</span>
            </h3>
            <p className="text-gray-400 mt-2">Machine Learning Enthusiast | Developer | Designer</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { name: 'LinkedIn', href: 'https://linkedin.com/in/lokeshgavara5' },
              { name: 'GitHub', href: 'https://github.com/lokeshgavara1' },
              { name: 'Email', href: 'mailto:lokeshgavara5@gmail.com' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-electric-blue transition-colors duration-300 font-medium"
              >
                {social.name}
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2024 Lokesh Gavara. All rights reserved. Built with passion and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
