import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CyberpunkOverlay: React.FC = () => {
  const [hexStream, setHexStream] = useState<string[]>([]);
  const [breachStatus, setBreachStatus] = useState("SECURING_CONNECTION");
  
  // Generate random hex codes
  useEffect(() => {
    const interval = setInterval(() => {
      const hex = Math.random().toString(16).substring(2, 4).toUpperCase();
      setHexStream(prev => [hex, ...prev.slice(0, 15)]);
      
      const statuses = ["BREACH DETECTED", "DAEMON UPLOAD", "ICE BREAKER", "NETRUNNER_V2", "SIGNAL_LOST"];
      if (Math.random() > 0.98) { // Reduced frequency
        setBreachStatus(statuses[Math.floor(Math.random() * statuses.length)]);
      }
    }, 150); // Slower interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden font-display select-none">
      {/* Scanlines - More subtle */}
      <div className="scanlines"></div>
      
      {/* Top Left: Breach Protocol Stream */}
      <div className="absolute top-24 left-6 font-mono text-xs text-cp-blue opacity-60 w-32">
        <div className="border-b border-cp-blue mb-1 text-cp-yellow">:: BUFFER_01 ::</div>
        {hexStream.map((hex, i) => (
          <div key={i} className="flex justify-between" style={{ opacity: 1 - i * 0.06 }}>
             <span>{hex}</span> <span>55</span> <span>BD</span> <span>7A</span>
          </div>
        ))}
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-full h-full p-4">
         <div className="w-full h-full border-2 border-cp-yellow opacity-10" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 50px 0, 50px 50px, 0 50px)" }}></div>
      </div>
      
      {/* Top Right: System Status - Static/Stable */}
      <div className="absolute top-8 right-8 text-right">
        <div className="text-2xl font-bold tracking-widest uppercase text-cp-blue" style={{ textShadow: "0 0 5px rgba(0, 240, 255, 0.5)" }}>
            {breachStatus}
        </div>
        <div className="flex justify-end gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <div 
                    key={i}
                    className="w-2 h-2 bg-cp-yellow opacity-80"
                />
            ))}
        </div>
      </div>

      {/* Bottom Left: Memory Dump */}
      <div className="absolute bottom-8 left-8 text-cp-red font-mono text-[10px] tracking-widest bg-black/50 p-2 border-l-2 border-cp-red opacity-80">
        <div>MEM_ADDR: 0x99A2</div>
        <div>ICE_LEVEL: CRITICAL</div>
        <div>NET_STATUS: OPEN</div>
      </div>

      {/* Bottom Right: Year Stamp */}
      <div className="absolute bottom-8 right-8 flex flex-col items-end opacity-60">
        <h1 className="text-6xl font-black text-cp-yellow italic" style={{ textShadow: "2px 2px 0px #00F0FF" }}>
            2077
        </h1>
        <div className="text-xs text-cp-blue uppercase tracking-[0.5em] bg-black px-2 border border-cp-blue">Night City OS v2.1</div>
      </div>
    </div>
  );
};

export default CyberpunkOverlay;