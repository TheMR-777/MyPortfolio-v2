import React from 'react';
import { SOCIALS } from '../constants';
import { Github, Linkedin, Mail, Smartphone, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 md:px-20 border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Build the Impossible.</h2>
            <p className="text-secondary text-lg max-w-md mb-12">
              Currently open to opportunities where I can leverage Systems Architecture, C++, and AI to solve complex engineering challenges.
            </p>
            
            <a 
              href={`mailto:${SOCIALS.email}`}
              className="inline-flex items-center space-x-3 text-white border-b border-white pb-1 hover:text-success hover:border-success transition-colors text-xl"
            >
              <span>Say Hello</span>
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
               <div>
                  <h4 className="font-mono text-xs text-secondary uppercase mb-4">Contact</h4>
                  <ul className="space-y-4">
                    <li>
                      <a href={`mailto:${SOCIALS.email}`} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                        <Mail size={16} />
                        <span>{SOCIALS.email}</span>
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${SOCIALS.phone}`} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                        <Smartphone size={16} />
                        <span>{SOCIALS.phone}</span>
                      </a>
                    </li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-mono text-xs text-secondary uppercase mb-4">Social</h4>
                  <ul className="space-y-4">
                    <li>
                      <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={16} />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                  </ul>
               </div>
            </div>
            
            <div className="flex justify-between items-end text-xs text-secondary font-mono border-t border-white/5 pt-8">
              <div>© 2025 Muhammad Ammar Khan.</div>
              <div>Designed with First Principles.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;