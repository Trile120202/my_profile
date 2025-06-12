'use client';
import { motion } from 'framer-motion';
import { useYearsExperience } from '@/hooks/useYearsExperience';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 }
};

const skills = [
  "AWS", "Docker", "Kubernetes", "CI/CD",
  "Terraform", "Jenkins", "GitHub Actions", "Ansible",
  "Python", "Linux", "Monitoring", "Cloud Architecture"
];

export default function About() {
  const startDate = new Date('2024-10-01'); // Your start date
  const years = useYearsExperience(startDate);
  
  const stats = [
    { label: 'Years Experience', value: `${years}+` },
     ];

  return (
    <section id="about" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center px-6"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 bg-clip-text text-transparent 
                   bg-gradient-to-r from-sky-400 to-blue-500"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80
                       backdrop-blur-sm p-6 rounded-xl 
                       border border-slate-700/50"
            >
              <motion.div 
                className="text-3xl font-bold bg-clip-text text-transparent 
                        bg-gradient-to-r from-sky-400 to-blue-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-slate-300 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="space-y-6 text-lg leading-relaxed
                   bg-gradient-to-br from-slate-800/80 to-slate-900/80
                   backdrop-blur-sm p-8 rounded-2xl 
                   border border-slate-700/50 mb-16"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-1 bg-gradient-to-b from-sky-400 to-blue-500 h-full"></div>
            <div className="space-y-6 text-slate-300">
              <p>
                I graduated with a degree in Software Engineering and began working at SaigonBPO 
                in late October 2024 as a System Engineer.
              </p>
              <p>
                In this role, I have been responsible for managing and maintaining system infrastructure
                while also developing internal automation tools to improve operational efficiency.
              </p>
              <p className="mb-12">
                With a solid foundation in system administration and scripting, I am currently on a 
                career path toward becoming a DevOps Engineer. I actively explore and apply DevOps 
                practices such as CI/CD, containerization, and infrastructure automation to bridge 
                the gap between development and operations.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="relative space-y-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-16 bg-clip-text text-transparent 
                       bg-gradient-to-r from-sky-400 to-blue-500">
            Tech Stack
          </h3>
          <motion.div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={skillItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative z-20"
              >
                <span className="relative block 
                             bg-gradient-to-br from-slate-800/80 to-slate-900/80
                             backdrop-blur-sm px-6 py-3 rounded-xl 
                             border border-slate-700/50
                             text-slate-300 font-medium
                             hover:border-sky-500/50 hover:text-white
                             transition-all duration-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
