import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, BookOpen, ExternalLink, FileText, ChevronRight } from 'lucide-react';
import { PUBLICATIONS, NULL_BYTE_ARTICLES } from '../constants';

const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 px-6 md:px-20 bg-background relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
             Research & Publications
          </h2>
          <div className="h-1 w-20 bg-success"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Academic Publications */}
          <div>
            <div className="flex items-center gap-2 mb-8 text-secondary">
               <BookOpen size={20} />
               <span className="font-mono text-sm uppercase tracking-widest">Academic Research</span>
            </div>
            
            <div className="space-y-6">
              {PUBLICATIONS.map((pub, index) => (
                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="block group relative p-6 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="absolute top-6 right-6 text-white/20 group-hover:text-success transition-colors">
                    <ExternalLink size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-200 group-hover:text-white mb-2 pr-8 leading-snug">
                    {pub.title}
                  </h3>
                  <div className="text-sm text-success mb-2 font-mono">{pub.journal}</div>
                  <div className="text-xs text-secondary flex justify-between items-center">
                     <span>{pub.authors}</span>
                     <span className="bg-white/10 px-2 py-0.5 rounded text-gray-300">{pub.year}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Academic Context */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="mt-8 p-6 border-l border-white/10 bg-white/[0.01]"
            >
               <h4 className="text-sm font-bold text-gray-300 mb-2">Quantum Computing & Photonics</h4>
               <p className="text-sm text-secondary leading-relaxed">
                  Collaborated with visiting PhD professors on simulation tools for quantum phenomena and photon behavior using Python and MATLAB.
               </p>
            </motion.div>
          </div>

          {/* Null Byte Terminal */}
          <div>
             <div className="flex items-center gap-2 mb-8 text-secondary">
               <Terminal size={20} />
               <span className="font-mono text-sm uppercase tracking-widest">Security Research / Null Byte</span>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="null-byte-terminal bg-[#0c0c0c] border border-white/10 rounded-lg overflow-hidden shadow-2xl font-mono text-sm"
            >
               {/* Terminal Header */}
               <div className="terminal-header bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50 window-btn"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50 window-btn"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50 window-btn"></div>
                  <div className="ml-4 text-xs text-gray-500 terminal-title">h4ck3r_777@null-byte:~</div>
               </div>

               {/* Terminal Body */}
               <div className="p-6 space-y-4">
                  <div className="text-gray-400">
                     <span className="text-success prompt">➜</span> <span className="text-blue-400 path">~</span> ls -la ./published_articles
                  </div>
                  <div className="text-gray-500 mb-4 file-list-header">
                     total 10<br/>
                     drwxr-xr-x  2 h4ck3r  staff  Security_Research
                  </div>

                  <div className="space-y-1">
                     {NULL_BYTE_ARTICLES.map((article, i) => (
                        <motion.div
                           key={article.id}
                           initial={{ opacity: 0, x: -10 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: 0.2 + (i * 0.05) }}
                        >
                           <a 
                              href={article.link}
                              target="_blank" 
                              rel="noreferrer"
                              className="group flex items-center hover:bg-white/5 -mx-2 px-2 py-1 rounded transition-colors"
                           >
                              <span className="text-gray-600 w-16 opacity-50 perms">rw-r--r--</span>
                              <span className="text-gray-500 w-12 text-right mr-4 opacity-50 size">{article.id}</span>
                              <span className="text-gray-300 group-hover:text-success transition-colors truncate">
                                 {article.title}
                              </span>
                              <ExternalLink size={12} className="ml-2 opacity-0 group-hover:opacity-50 transition-opacity" />
                           </a>
                        </motion.div>
                     ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-dashed border-white/10 text-xs text-gray-500 status-bar">
                     <div className="flex justify-between">
                        <span>Status: <span className="text-success">Active</span></span>
                        <span>Role: <span className="text-blue-400">Community Leader</span></span>
                     </div>
                     <div className="mt-1">
                        Impact: <span className="text-white">2nd Most Read Article (2018-2020)</span>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-2 animate-pulse">
                     <span className="text-success prompt">➜</span> 
                     <span className="w-2 h-4 bg-gray-500 cursor"></span>
                  </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;