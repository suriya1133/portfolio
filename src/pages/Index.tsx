import React, { useState, useEffect } from 'react';
import DynamicSizeControl from '@/components/DynamicSizeControl';
import Header from '@/components/Portfolio/Header';
import Hero from '@/components/Portfolio/Hero';
import About from '@/components/Portfolio/About';
import Projects from '@/components/Portfolio/Projects';
import Contact from '@/components/Portfolio/Contact';
import Footer from '@/components/Portfolio/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const [globalScale, setGlobalScale] = useState(1);

  // Initialize scroll animations
  useScrollAnimation();

  // Apply global scale to CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty('--global-scale', globalScale.toString());
  }, [globalScale]);

  return (
    <div className="min-h-screen bg-portfolio-gradient relative">
      {/* Dynamic Size Control */}
      <DynamicSizeControl 
        onScaleChange={setGlobalScale}
        currentScale={globalScale}
      />

      {/* Header */}
      <Header scale={globalScale} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero scale={globalScale} />

        {/* About Section */}
        <About scale={globalScale} />

        {/* Projects Section */}
        <Projects scale={globalScale} />

        {/* Contact Section */}
        <Contact scale={globalScale} />
      </main>

      {/* Footer */}
      <Footer scale={globalScale} />

      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-primary/4 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Index;
