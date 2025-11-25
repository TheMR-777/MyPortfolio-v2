import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { SOCIALS } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["0px", "10px"]);

  const navItems = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Work", href: "#work" },
    { name: "Research", href: "#research" },
    { name: "Expertise", href: "#expertise" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        style={{ backgroundColor: `rgba(5, 5, 5, ${bgOpacity})`, backdropFilter: backdropBlur }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center border-b border-white/0"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xl font-bold tracking-tighter"
        >
          MAK<span className="text-success">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-light text-secondary hover:text-white transition-colors uppercase tracking-widest"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
          <div className="flex space-x-6 mt-8">
            <a href={SOCIALS.github} target="_blank" rel="noreferrer"><Github /></a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
            <a href={`mailto:${SOCIALS.email}`}><Mail /></a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;