import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4 mb-16"
        >
           <h2 className="text-3xl md:text-4xl font-bold">Professional Journey</h2>
           <div className="flex-1 h-[1px] bg-white/10"></div>
        </motion.div>

        <div className="space-y-16">
          {EXPERIENCE.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-3 font-mono text-sm text-secondary">
                {exp.period}
              </div>
              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                <h4 className="text-lg text-success mb-4">{exp.role}</h4>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-secondary text-sm md:text-base flex items-start">
                      <span className="mr-2 text-success/50">▹</span>
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono rounded-full text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;