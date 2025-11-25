import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.05] pointer-events-none" />
      
      {/* Gradient Mesh Effect */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-success/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center space-x-2"
        >
          <div className="h-[1px] w-12 bg-success"></div>
          <span className="font-mono text-success text-sm tracking-widest uppercase">System Architect & Security Engineer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          Muhammad <br />
          <span className="text-secondary">Ammar Khan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed mb-12"
        >
          Creating what hasn't been built before. From age 3 to industry leader, 
          I engineer solutions at the intersection of <span className="text-white">Advanced C++</span>, <span className="text-white">Cryptography</span>, and <span className="text-white">Artificial Intelligence</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex space-x-6"
        >
          <a href="#work" className="group relative px-8 py-3 bg-white text-black font-semibold text-sm tracking-wide uppercase overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Work</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </a>
          <a href="#contact" className="px-8 py-3 border border-white/20 text-white font-semibold text-sm tracking-wide uppercase hover:bg-white/5 transition-all">
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-secondary"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;