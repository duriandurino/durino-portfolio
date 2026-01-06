'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="grid md:grid-cols-2 min-h-[500px]"
          >
            {/* Project Image */}
            <div className="relative h-64 md:h-auto bg-zinc-800 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-black/60 z-10" />
              <Image 
                src={projects[index].imageUrl} 
                alt={projects[index].title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
              <div className="z-20 text-white flex flex-col items-center">
                <span className="text-xs font-bold bg-orange-500 px-3 py-1 rounded-full mb-2 uppercase tracking-widest">
                  {projects[index].year}
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight italic">
                {projects[index].title}
              </h3>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                {projects[index].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[index].tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-orange-400 text-xs rounded-full font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <Link 
                  href={`/projects/${projects[index].slug}`}
                  className="flex items-center gap-2 text-white font-bold hover:text-orange-500 transition-colors uppercase text-sm tracking-widest group/btn"
                >
                  View Details <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute -bottom-6 right-8 flex gap-2">
        <button 
          onClick={prev}
          aria-label="Previous project"
          className="p-4 bg-zinc-900 border border-zinc-800 text-white rounded-full hover:bg-orange-500 hover:text-black transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          aria-label="Next project"
          className="p-4 bg-orange-500 text-black rounded-full hover:bg-white transition-all shadow-xl shadow-orange-500/20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
