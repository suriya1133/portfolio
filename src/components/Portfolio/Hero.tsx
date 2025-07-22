import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

interface HeroProps {
  scale: number;
}

const Hero: React.FC<HeroProps> = ({ scale }) => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Software Developer',
    'Full Stack Developer',
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const title = titles[titleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < title.length) {
        setCurrentTitle(title.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentTitle(title.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === title.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 fade-in-up visible">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
          M Surya
        </h1>
        
        <div className="text-2xl md:text-4xl mb-8 h-12 flex items-center justify-center">
          <span className="portfolio-text-gradient font-semibold">
            {currentTitle}
            <span className="animate-type-cursor">|</span>
          </span>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          I create beautiful, responsive websites and applications that deliver 
          exceptional user experiences with cutting-edge technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToContact}
            className="group"
          >
            Let's Work Together
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
          
          <Button
            variant="glass"
            size="xl"
            onClick={() => window.open('#projects', '_self')}
          >
            View Projects
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;