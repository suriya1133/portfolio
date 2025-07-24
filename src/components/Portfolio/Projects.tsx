import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  scale: number;
}

const Projects: React.FC<ProjectsProps> = ({ scale }) => {
  const projects = [
    {
      title: 'PhishCatcher 2.0',
      description: 'A real-time, client-side phishing detection system leveraging deep learning (BERT, CNN, LSTM) to block sophisticated spoofing attacks without relying solely on blacklists.',
      tech: ['React', 'BERT', 'CNN', 'LSTM', 'TensorFlow'],
      liveUrl: '#',
      githubUrl: 'https://github.com/suriya1133/PhishCatcher.git',
      gradient: 'from-red-500 to-yellow-600'
    },
    {
      title: 'AI-Driven Patient Follow-Up System',
      description: 'An intelligent telemedicine system analyzing lung cancer datasets and conversations using ML and NLP to predict outcomes and automate follow-up care.',
      tech: ['Python', 'NLP', 'Scikit-learn', 'React', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/suriya1133/AI-Driven-Patient-HealthChecker.git',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Restaurant Portfolio (Pizza Paradise)',
      description: 'A responsive static restaurant portfolio website showcasing menu, location, and testimonials to enhance online presence.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: 'https://github.com/suriya1133/portfolio.git',
      gradient: 'from-yellow-500 to-red-500'
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in-up visible">
          Featured Projects
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="portfolio-card group cursor-pointer relative overflow-hidden border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Top Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="glass"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.open('https://github.com/suriya1133', '_blank')}
          >
            View All Projects on GitHub
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
