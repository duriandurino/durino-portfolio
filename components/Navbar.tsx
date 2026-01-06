'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          <span className="text-white">ADRIAN</span>
          <span className="text-orange-500">.A</span>
        </motion.div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
          {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-500 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <motion.a
          href="mailto:adrian.alejandrino.1115@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-orange-400 transition-colors flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">HIRE ME</span>
        </motion.a>
      </div>
    </nav>
  );
};
