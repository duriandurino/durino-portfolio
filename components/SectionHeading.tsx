'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, subtitle }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
    >
      {children}<span className="text-orange-500">.</span>
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-zinc-500 mt-4 max-w-xl text-lg font-medium"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
