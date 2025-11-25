import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INTERESTS } from '../constants';

const SystemContext: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Generate some static stars for the background
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    size: Math.random() * 2 + 1
  }));

  return (
    <section className="relative py-24 px-6 md:px-20 bg-black overflow-hidden border-t border-white/5">
      {/* Starfield Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-12">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
            <h2 className="font-mono text-sm text-success tracking-widest uppercase">
                System_Context_Variables
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INTERESTS.map((interest, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative p-6 bg-white/[0.03] border border-white/5 hover:border-success/30 transition-all duration-300 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-success/5 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />
                    
                    <div className="relative z-10">
                        <div className="font-mono text-xs text-secondary mb-2 group-hover:text-success transition-colors">
                            const {interest.key} =
                        </div>
                        <div className="text-xl font-bold text-gray-200 mb-4 group-hover:text-white group-hover:translate-x-2 transition-all">
                            "{interest.value}"
                        </div>
                        <div className="text-sm text-gray-400 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                            // {interest.description}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SystemContext;