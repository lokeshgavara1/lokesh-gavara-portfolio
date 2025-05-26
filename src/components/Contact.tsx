
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
    { label: "Phone", value: "8143760855", href: "tel:8143760855" },
    { label: "Email", value: "lokeshgavara5@gmail.com", href: "mailto:lokeshgavara5@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/lokeshgavara5", href: "https://linkedin.com/in/lokeshgavara5" },
    { label: "GitHub", value: "github.com/lokeshgavara1", href: "https://github.com/lokeshgavara1" },
    { label: "Location", value: "Visakhapatnam Rural Mandal", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or opportunity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <Card className="glass-effect border-electric-blue/20 hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-electric-blue mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-electric-blue rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <a 
                          href={info.href}
                          className="text-white hover:text-electric-blue transition-colors duration-300"
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
            <Card className="glass-effect border-neon-green/20 hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-neon-green mb-8">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background/50 border-gray-600 focus:border-electric-blue"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-background/50 border-gray-600 focus:border-electric-blue"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-background/50 border-gray-600 focus:border-electric-blue min-h-[120px]"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-electric-blue hover:bg-electric-blue/80 text-black font-semibold py-3 rounded-full hover-glow"
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
