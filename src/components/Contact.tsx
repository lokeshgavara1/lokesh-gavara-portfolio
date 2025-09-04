
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendEmail, EmailData } from '@/services/emailService';
import { Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const emailData: EmailData = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await sendEmail(emailData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Clear form on successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
      
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Ready to collaborate? Let's discuss your next project or opportunity
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <Card className="professional-card border-electric-blue/20 group hover:border-electric-blue/40">
              <CardContent className="p-10 lg:p-12">
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
            <Card className="professional-card border-neon-green/20 group hover:border-neon-green/40">
              <CardContent className="p-10 lg:p-12">
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
                      disabled={isLoading}
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
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-background/50 border-gray-600 focus:border-electric-blue min-h-[150px] text-lg rounded-xl transition-all duration-300 hover:border-gray-500 resize-none"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-electric-blue hover:bg-electric-blue/80 text-black font-semibold py-4 rounded-xl hover-glow text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-electric-blue/25"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
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
