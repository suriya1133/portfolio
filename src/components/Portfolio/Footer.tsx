import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  scale: number;
}

const Footer: React.FC<FooterProps> = ({ scale }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 border-t border-primary/20 bg-card/30 backdrop-blur-sm"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} M Surya. Made with
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            and lots of coffee.
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;