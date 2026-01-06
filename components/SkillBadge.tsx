'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, backgroundColor: 'rgba(249,115,22,0.1)' }}
    className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center gap-3 group transition-all"
  >
    <div className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-150 transition-transform" />
    <span className="text-zinc-300 font-medium">{skill}</span>
  </motion.div>
);
