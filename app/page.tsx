'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Code2, 
  Terminal, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { ExperienceCard } from '@/components/ExperienceCard';
import { SkillBadge } from '@/components/SkillBadge';

import { PROJECTS } from '@/lib/data/projects';
import { EXPERIENCE } from '@/lib/data/experience';
import { SKILLS } from '@/lib/data/skills';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-orange-500 selection:text-black">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/30 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-900/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-orange-500 text-sm font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-4 h-4" /> Available for New Ventures
            </div>
            
            <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase text-white">
              Adrian <br />
              <span className="text-orange-500">Alejandrino</span>
            </h1>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="text-left max-w-sm">
                <p className="text-zinc-500 font-mono text-sm mb-2 uppercase tracking-widest">About Me</p>
                <p className="text-zinc-300 leading-relaxed font-medium">
                  Product Solutions Engineer specializing in the lifecycle of digital products. I bridge technical execution with business strategy through deep client discovery and rapid MVP prototyping.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <motion.a 
                    href="https://github.com/duriandurino"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: '#f97316' }}
                    className="p-4 bg-zinc-900 border border-zinc-800 rounded-full text-white transition-all"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/adrian-alejandrino-268102299/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: '#f97316' }}
                    className="p-4 bg-zinc-900 border border-zinc-800 rounded-full text-white transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="https://mail.google.com/mail/?view=cm&to=adrian.alejandrino.1115@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: '#f97316' }}
                    className="p-4 bg-zinc-900 border border-zinc-800 rounded-full text-white transition-all"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Crafting scalable enterprise systems and innovative freelance solutions.">
            The Work
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <div className="space-y-4">
              {EXPERIENCE.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} />
              ))}
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full group-hover:bg-orange-500/20 transition-all duration-700" />
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight italic">Technical Philosophy</h3>
              <div className="space-y-6 text-zinc-400">
                <div className="flex gap-4">
                  <Cpu className="text-orange-500 w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold text-white uppercase tracking-wider mb-1">Architecture First</p>
                    <p>Scaling requires strong foundations. I prioritize ERD optimization and clean system design from day zero.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Code2 className="text-orange-500 w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold text-white uppercase tracking-wider mb-1">Rapid Prototyping</p>
                    <p>Building MVPs that work. I leverage AI-assisted development and modern stacks to ship faster without technical debt.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Terminal className="text-orange-500 w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold text-white uppercase tracking-wider mb-1">IoT Integration</p>
                    <p>Bridging the physical and digital. Expert in connecting firmware with cloud APIs for seamless automation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-zinc-950/50 border-y border-zinc-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <SectionHeading subtitle="Competitive hackathon prototypes and self-initiated impact projects.">
              Milestones
            </SectionHeading>
            <div className="flex gap-2 mb-12">
              <span className="text-4xl font-black text-orange-500/20">01</span>
              <span className="text-4xl font-black text-orange-500">0{PROJECTS.length}</span>
            </div>
          </div>
          
          <ProjectCarousel projects={PROJECTS} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="A comprehensive toolkit for full-stack, solutions architecture, and embedded systems.">
            Capabilities
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-orange-500 font-mono text-xs font-black uppercase tracking-[0.2em] pl-2 border-l-2 border-orange-500">
                  {category}
                </h4>
                <div className="flex flex-col gap-2">
                  {items.map((skill, i) => (
                    <SkillBadge key={skill} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="pt-32 pb-16 px-6 bg-gradient-to-t from-orange-500/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-zinc-800 pt-16 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div>
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4">
                Let&apos;s Build <br /><span className="text-orange-500 italic">Something Real.</span>
              </h2>
              <p className="text-zinc-500 max-w-lg text-lg">
                Currently based in Cebu, PH. Open for product roles, architecture consulting, and technical advisory for startups.
              </p>
            </div>
            
            <motion.a 
              href="https://mail.google.com/mail/?view=cm&to=adrian.alejandrino.1115@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center px-12 py-8 bg-orange-500 text-black font-black text-2xl uppercase tracking-tighter rounded-3xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-4">
                Get in Touch <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.a>
          </div>

          <div className="mt-32 flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-8 text-zinc-600 text-sm font-mono uppercase tracking-widest">
            <p>© 2025 Adrian Alejandrino. Built with Next.js & Framer Motion.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/in/adrian-alejandrino-268102299/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/duriandurino" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="/documents/Adrian Alejandrino-CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CV.PDF</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
