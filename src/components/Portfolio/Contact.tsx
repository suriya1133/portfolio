import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

interface ContactProps {
  scale: number;
}

const Contact: React.FC<ContactProps> = ({ scale }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'msurya200311@gmail.com',
      href: 'mailto:msurya200311@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7799140315',
      href: 'tel:+917799140315'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Chittoor, Andhra Pradesh, India',
      href: 'https://maps.app.goo.gl/qNY2uwtmaFaNVPW2A'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/surya-m-b48bb126a',
      href: 'https://www.linkedin.com/in/surya-m-b48bb126a'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/suriya1133',
      href: 'https://github.com/suriya1133'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
    `);
    
    const mailtoLink = `mailto:msurya200311@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Prepared!",
      description: "Your email client should open shortly.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in-up visible">
          Get In Touch
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="portfolio-card fade-in-up visible">
            <CardHeader>
              <CardTitle className="text-2xl font-bold portfolio-text-gradient text-center">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/20 focus:border-primary min-h-[120px] resize-y"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="portfolio-card fade-in-up visible">
            <CardHeader>
              <CardTitle className="text-2xl font-bold portfolio-text-gradient text-center">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/10 rounded-lg hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 hover:translate-x-2 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary uppercase tracking-wide">
                        {info.title}
                      </h4>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {info.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-3">Let's collaborate!</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question, want to work together, or just want to say hi, 
                  I'd love to hear from you!
                </p>
              </div>

              <div className="flex flex-col items-center mt-6">
                <a
                  href="/resume_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="hero" size="lg">
                    Download Resume
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
