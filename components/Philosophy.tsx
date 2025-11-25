import React from 'react';
import { motion } from 'framer-motion';
import { PHILOSOPHY } from '../constants';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 px-6 md:px-20 relative bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering Philosophy</h2>
          <div className="h-1 w-20 bg-success"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PHILOSOPHY.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="font-mono text-xs text-success mb-4">0{index + 1}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-secondary leading-relaxed text-sm md:text-base">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;