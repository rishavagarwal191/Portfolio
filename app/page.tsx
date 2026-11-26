'use client';

import { useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import InteractiveLab from '@/components/InteractiveLab';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';
import ProjectModal from '@/components/ProjectModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [modalProject, setModalProject] = useState<'gurgaon' | 'rag' | null>(null);

  return (
    <>
      {/* Animated Particle Canvas & Glowing Orbs */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenModal={(key) => setModalProject(key)} />
        <InteractiveLab />
        <Journey />
        <Contact />
      </main>

      {/* Deep Dive Architecture Modal */}
      <ProjectModal
        projectKey={modalProject}
        onClose={() => setModalProject(null)}
      />

      {/* Footer */}
      <Footer />
    </>
  );
}
