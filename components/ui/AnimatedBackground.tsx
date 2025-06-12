'use client';
import { motion } from 'framer-motion';

// Fixed code strings to avoid hydration mismatch
const fixedCodeStrings = [
  '10110101', '11100111', '10011010', '11010110',
  '10101011', '11001100', '10110011', '11010101',
  '10101110', '11001011', '10111010', '11010011',
  '10101101', '11100110', '10110101', '11010110',
  '10111001', '11001010', '10110110', '11010101',
  '10101011', '11001110', '10110101', '11010011',
  '10101110'
];

// Pre-calculate positions to avoid hydration mismatch
const floatingElements = Array.from({ length: 20 }).map((_, i) => ({
  left: `${(i * 5) % 100}%`,
  top: `${(i * 7) % 100}%`,
  duration: 15 + (i % 5) * 2
}));

// DevOps symbols for floating elements
const devopsIcons = ['⚙️', '🔄', '🚀', '⛓️', '📦', '🔧', '🎯', '🔗'];

// Network nodes positions
const nodes = Array.from({ length: 12 }).map((_, i) => ({
  x: `${(i * 15 + Math.sin(i) * 10) % 100}%`,
  y: `${(i * 20 + Math.cos(i) * 15) % 100}%`,
}));

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/50 to-black" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-500/5 to-transparent animate-pulse" />

      {/* Brighter network nodes */}
      <div className="absolute inset-0">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-sky-400/40"
            style={{ left: node.x, top: node.y }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            {/* Brighter connection lines */}
            {nodes.slice(i + 1, i + 3).map((target, j) => (
              <motion.div
                key={j}
                className="absolute h-px bg-gradient-to-r from-sky-400/30 to-blue-400/30"
                style={{
                  width: '150px',
                  transformOrigin: '0 0',
                  transform: `rotate(${Math.atan2(
                    parseInt(target.y) - parseInt(node.y),
                    parseInt(target.x) - parseInt(node.x)
                  )}rad)`,
                }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Code rain effect */}
      <div className="absolute inset-0 opacity-30">
        {fixedCodeStrings.map((str, i) => (
          <motion.div
            key={i}
            className="absolute text-[10px] font-mono text-blue-500/40 whitespace-nowrap"
            style={{
              left: `${(i * 4)}%`,
              top: '-20px',
            }}
            animate={{
              y: ['0%', '200%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + (i % 5) * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.3,
            }}
          >
            {str}
          </motion.div>
        ))}
      </div>

      {/* Grid with glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a365d20_1px,transparent_1px),linear-gradient(to_bottom,#1a365d20_1px,transparent_1px)] 
                    bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Floating tech icons */}
      <div className="absolute inset-0">
        {floatingElements.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
            style={{
              left: pos.left,
              top: pos.top,
              filter: 'blur(1px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
              y: ['0%', '100%'],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* DevOps floating icons */}
      <div className="absolute inset-0">
        {devopsIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${(i * 12) % 100}%`,
              top: '-20px',
            }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + (i % 5) * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Enhanced glowing orbs */}
      <motion.div
        className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-indigo-400/20 blur-[120px]"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-400/20 via-sky-400/20 to-blue-400/20 blur-[120px]"
        animate={{
          opacity: [0.6, 0.4, 0.6],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Subtle overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
    </div>
  );
}
