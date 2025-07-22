import * as React from 'react';
import { Card } from '@/components/ui/card';

interface AboutProps {
  scale: number;
}

const About: React.FC<AboutProps> = ({ scale }) => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'CSS3',
     'Next.js', 'Express', 'PostgreSQL', 'Java', 'SQL'
  ];

  return (
    <section
      id="about"
      className="py-20 px-6"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in-up visible">
          About Me
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 fade-in-up visible">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Surya,  a Computer Science student specializing in Artificial Intelligence, I have a strong 
interest in Full Stack Development and Software Engineering. My proficiency in OOPs enables me to build 
user-friendly web interfaces and solve complex problems efficiently. I’m enthusiastic about contributing my 
technical skills to dynamic teams while continuously learning and adapting to emerging technologies.
              </p>
              <p>
                My journey in web development started with a curiosity about how things work on the internet, 
                and it has evolved into a career focused on creating seamless user experiences and robust applications.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Technologies I work with:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-primary/10 border border-primary/20 text-primary text-center py-2 px-4 rounded-full text-sm font-medium hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image/Avatar */}
          <div className="flex justify-center fade-in-up visible">
            <div className="relative group">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-8xl text-primary-foreground shadow-2xl group-hover:shadow-portfolio-glow-lg transition-all duration-500 group-hover:scale-105 floating-animation">
                👨‍💻
              </div>
              
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-110 group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-125 group-hover:scale-140 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;