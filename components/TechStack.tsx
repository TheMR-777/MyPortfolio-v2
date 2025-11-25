import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section id="expertise" className="py-24 px-6 md:px-20 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-6">Technical Arsenal</h2>
            <p className="text-secondary text-sm leading-relaxed mb-8">
              My expertise spans from low-level memory management in C++ to high-level distributed systems architecture. 
              I specialize in bridging the gap between hardware constraints and user experience.
            </p>
            <div className="p-6 bg-white/5 border border-white/5">
                <div className="text-4xl font-bold text-white mb-2">3.73</div>
                <div className="text-xs font-mono text-secondary uppercase tracking-widest">CGPA (Honors)</div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILLS.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="font-mono text-success mb-6 uppercase tracking-widest text-sm border-b border-white/10 pb-2">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-white/20 mr-3 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;