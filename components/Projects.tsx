import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Shield, Cpu } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-20 bg-background relative">
      {/* Decorative background element */}
      <div className="absolute left-0 top-20 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Works</h2>
          <p className="text-secondary max-w-xl">
            A curated selection of projects demonstrating full-stack engineering, security research, and architectural innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-none border-l-2 border-l-transparent hover:border-l-success transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-lg text-success">
                  {index % 3 === 0 ? <Layers size={24} /> : index % 3 === 1 ? <Cpu size={24} /> : <Shield size={24} />}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-2 group-hover:text-success transition-colors">{project.title}</h3>
              <div className="font-mono text-xs text-secondary mb-4 uppercase tracking-wider">{project.role}</div>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[60px]">
                {project.description}
              </p>

              <div className="mb-6 pl-4 border-l border-white/10">
                <p className="text-sm text-gray-300 italic">"{project.impact}"</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono text-gray-500">#{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;