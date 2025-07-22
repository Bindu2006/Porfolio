import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'Local System Agent',
    description: 'An interactive Streamlit-based tool powered by OpenAI to manage and interact with local project files.',
    github: 'https://github.com/Bindu2006/Local-computer-Agent',
    demo: '',
  },
  {
    title: 'Mess Complaints App',
    description: 'A multilevel grievance redressal system built for RGUKT Nuzvid to improve the transparency and efficiency of handling mess-related complaints and feedback. The system ensures real-time updates, structured complaint resolution, communication with contractors, and statistical insights.',
    github: 'https://github.com/Bindu2006/Mess-app',
    demo: '',
  },
  {
    title: 'Virtual Health Assistant',
    description: 'Virtual Health Assistant (VHA) is an AI-driven platform designed to revolutionize healthcare access by providing accurate medical guidance, smart appointment scheduling, and personalized health and wellness support.',
    github: '',
    demo: 'https://drive.google.com/file/d/1xwemTHIBM6H7a7uw4aebYCWGIl2Ed_uA/view',
  },
  {
    title: 'Paper Prism AI',
    description: 'Automates research paper analysis for key insights. Visualizes trends for better understanding. Recommends top conferences based on research themes.',
    github: '',
    demo: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              A selection of my work in AI, automation, and web development
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <ScrollReveal key={project.title} direction="up" delay={idx * 120}>
                <div
                  className="group bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-cyan-400/40 hover:border-pink-400/60 shadow-lg rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.03]"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-white transition-all duration-300 font-medium text-sm group/link hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-pink-400 hover:text-white transition-all duration-300 font-medium text-sm group/link hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,20,147,0.5)]"
                      >
                        <ExternalLink size={18} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;