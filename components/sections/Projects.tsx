'use client';
import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Cloud Infrastructure Automation',
		description:
			'Automated AWS infrastructure deployment using Terraform and Ansible. Implemented Infrastructure as Code practices reducing deployment time by 70%.',
		tech: ['AWS', 'Terraform', 'Ansible', 'Python'],
		link: 'https://github.com/example/cloud-infra',
		image: '/projects/cloud.png',
	},
	{
		title: 'CI/CD Pipeline Implementation',
		description:
			'Built robust CI/CD pipelines using GitHub Actions and Docker',
		tech: ['GitHub Actions', 'Docker', 'Node.js', 'MongoDB'],
		image: '/projects/cicd.png',
	},
	{
		title: 'Kubernetes Cluster Management',
		description: 'Designed and maintained production-grade K8s clusters',
		tech: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana'],
		image: '/projects/kubernetes.png',
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.2 },
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	show: { y: 0, opacity: 1 },
};

export default function Projects() {
	return (
		<section id="projects" className="py-32">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="relative max-w-7xl mx-auto px-6"
			>
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent 
                     bg-gradient-to-r from-sky-400 to-blue-500"
				>
					Featured Projects
				</motion.h2>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: '-100px' }}
					className="grid grid-cols-1 md:grid-cols-3 gap-6"
				>
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							variants={item}
							className="group relative overflow-hidden rounded-xl 
                       bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-1
                       border border-slate-700/50 hover:border-sky-500/50 
                       transition-all duration-300"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-500/10 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

							<div className="relative p-5 h-full backdrop-blur-sm">
								<div className="flex items-start justify-between mb-4">
									<h3 className="text-xl font-bold text-slate-200 flex-1 mr-2">
										{project.title}
									</h3>
									<motion.a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-400 hover:text-white transition-colors"
										whileHover={{ scale: 1.1 }}
									>
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											/>
										</svg>
									</motion.a>
								</div>

								<p className="text-sm text-slate-300 mb-4 leading-relaxed">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 text-xs rounded-full
                               bg-gradient-to-r from-sky-500/10 to-blue-500/10
                               border border-sky-500/20 
                               text-sky-300
                               transition-all duration-300"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}
