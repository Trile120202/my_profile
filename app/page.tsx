// A basic setup for a Next.js personal portfolio
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/5">
          <nav className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
          </nav>
        </header>

        <main className="flex-1">
          <div className="max-w-5xl mx-auto px-6">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
        </main>

        <footer className="text-center py-6 text-slate-400 bg-transparent backdrop-blur-sm border-t border-white/5">
          © 2025 Trí Lê Minh. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
