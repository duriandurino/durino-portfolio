'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import type { Experience } from '@/lib/types';

interface ExperienceCardProps {
  exp: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 border-l border-zinc-800 last:pb-0"
  >
    <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
    <span className="text-xs font-mono text-orange-500 mb-2 block uppercase tracking-widest">{exp.period}</span>
    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{exp.role}</h3>
    <p className="text-orange-500/80 font-bold mb-4 flex items-center gap-2 italic">
      <Layers className="w-4 h-4" /> {exp.company}
    </p>
    <ul className="space-y-3">
      {exp.bullets.map((bullet, i) => (
        <li key={i} className="text-zinc-400 flex gap-2 leading-relaxed">
          <span className="text-orange-500 mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-orange-500" />
          {bullet}
        </li>
      ))}
    </ul>
  </motion.div>
);
