
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { label: "Phone", value: "8143760855", href: "tel:8143760855", icon: "📱" },
    { label: "Email", value: "lokeshgavara5@gmail.com", href: "mailto:lokeshgavara5@gmail.com", icon: "✉️" },
    { label: "LinkedIn", value: "linkedin.com/in/lokeshgavara5", href: "https://linkedin.com/in/lokeshgavara5", icon: "💼" },
    { label: "GitHub", value: "github.com/lokeshgavara1", href: "https://github.com/lokeshgavara1", icon: "🚀" },
    { label: "Location", value: "Visakhapatnam Rural Mandal", href: "#", icon: "📍" }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate? Let's discuss your next project or opportunity
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <Card className="glass-effect border-electric-blue/20 hover-glow group hover:border-electric-blue/40 transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-electric-blue/20 rounded-xl flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-electric-blue rounded-lg"></div>
                  </div>
                  <h3 className="text-3xl font-semibold text-electric-blue">Contact Information</h3>
                </div>
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-6 group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 100}ms`}}>
                      <div className="w-16 h-16 bg-electric-blue/20 rounded-2xl flex items-center justify-center text-2xl">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                        <a 
                          href={info.href}
                          className="text-white hover:text-electric-blue transition-colors duration-300 text-lg font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="glass-effect border-neon-green/20 hover-glow group hover:border-neon-green/40 transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-xl flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-neon-green rounded-lg"></div>
                  </div>
                  <h3 className="text-3xl font-semibold text-neon-green">Send Message</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background/50 border-gray-600 focus:border-electric-blue h-14 text-lg rounded-xl transition-all duration-300 hover:border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-background/50 border-gray-600 focus:border-electric-blue h-14 text-lg rounded-xl transition-all duration-300 hover:border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-background/50 border-gray-600 focus:border-electric-blue min-h-[150px] text-lg rounded-xl transition-all duration-300 hover:border-gray-500 resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-electric-blue hover:bg-electric-blue/80 text-black font-semibold py-4 rounded-xl hover-glow text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-electric-blue/25"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
