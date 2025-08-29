import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import awsLogo from '@/assets/aws-logo.png';
import googleLogo from '@/assets/google-logo.png';
import deloitteLogo from '@/assets/deloitte-logo.png';
import nasscomLogo from '@/assets/nasscom-logo.png';
import infosysLogo from '@/assets/infosys-logo.png';
import unstopLogo from '@/assets/unstop-logo.png';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      date: "Jan 2025",
      logo: awsLogo,
      color: "electric-blue",
      description: "Cloud fundamentals and AWS services expertise"
    },
    {
      title: "Certificate of Excellence – Engineering June Series Daily Quiz",
      issuer: "Unstop",
      date: "Jun 2025",
      logo: unstopLogo,
      color: "neon-pink",
      description: "Excellence in engineering problem-solving challenges"
    },
    {
      title: "Data Analytics Job Simulation Program",
      issuer: "Deloitte",
      date: "Jun 2025",
      logo: deloitteLogo,
      color: "neon-green",
      description: "Professional data analytics and business intelligence"
    },
    {
      title: "Data Science with AI/ML using Python (Gold)",
      issuer: "NASSCOM",
      date: "Aug 2025",
      logo: nasscomLogo,
      color: "electric-blue",
      description: "Advanced data science and machine learning with Python"
    },
    {
      title: "Professional Machine Learning Engineer (Guide Followed)",
      issuer: "Google",
      date: "Jul 2025",
      logo: googleLogo,
      color: "neon-green",
      description: "Machine learning engineering best practices and implementation"
    },
    {
      title: "Python and Artificial Intelligence & Machine Learning",
      issuer: "Infosys Springboard",
      date: "Jun 2025",
      logo: infosysLogo,
      color: "neon-pink",
      description: "Comprehensive AI/ML development with Python"
    }
  ];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/6 w-72 h-72 bg-neon-pink/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Professional certifications and achievements that validate my expertise in various technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className={`glass-effect border-${cert.color}/20 hover-glow animate-fade-in group hover:border-${cert.color}/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105`} 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-${cert.color}/20 rounded-2xl flex items-center justify-center p-3`}>
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Badge className={`bg-${cert.color}/20 text-${cert.color} border-${cert.color}/30 px-4 py-2 text-sm font-semibold`}>
                    {cert.date}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold text-${cert.color} leading-tight group-hover:text-white transition-colors duration-300`}>
                    {cert.title}
                  </h3>
                  
                  <p className="text-white font-medium text-lg">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                
                <div className={`mt-6 w-full h-1 bg-gradient-to-r from-${cert.color}/20 to-${cert.color}/60 rounded-full group-hover:from-${cert.color}/40 group-hover:to-${cert.color}/80 transition-all duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse"></div>
            <p className="text-gray-300 font-medium">
              Continuously expanding knowledge through professional development
            </p>
            <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;