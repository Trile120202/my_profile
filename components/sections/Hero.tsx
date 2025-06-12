"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-48 h-48 mb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/20">
          <Image
            src="/profile.jpg"
            alt="Lê Minh Trí"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-7xl font-bold mb-8 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 hover:from-sky-500 hover:via-blue-600 hover:to-cyan-500 transition-all duration-300">
            Lê Minh Trí
          </span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl font-semibold mb-8 bg-gradient-to-r from-sky-200 to-blue-100 bg-clip-text text-transparent tracking-wide"
      >
        DevOps Engineer
      </motion.p>
      <div className="space-x-4 flex items-center">
        <Button
          onClick={scrollToAbout}
          className="group bg-gradient-to-r from-blue-500 to-cyan-500 
                     hover:from-blue-600 hover:to-cyan-600
                     text-white font-medium px-6 py-3
                     transition-all duration-300 ease-out
                     transform hover:scale-105
                     flex items-center gap-3"
        >
          Learn More
          <motion.svg
            className="w-5 h-5"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </Button>
      </div>
    </motion.section>
  );
}
