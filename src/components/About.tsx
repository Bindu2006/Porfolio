import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CardSwap, { Card } from './CardSwap';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-cyan-400" size={24} />,
      title: "Data Science",
      description: "Extracting meaningful insights from complex datasets using statistical methods"
    },
    {
      icon: <Palette className="text-pink-400" size={24} />,
      title: "Machine Learning",
      description: "Building predictive models and intelligent systems that learn from data"
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Deep Learning",
      description: "Developing neural networks for complex pattern recognition and AI applications"
    },
    {
      icon: <Users className="text-purple-400" size={24} />,
      title: "Data Analysis",
      description: "Transforming raw data into actionable business insights and visualizations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="down">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate 3rd year B.Tech student at RGUKT, Nuzvid, with a deep fascination 
                  for the world of data and artificial intelligence. My journey began with curiosity 
                  about how machines can learn and make decisions, evolving into a dedicated pursuit 
                  of expertise in data science and AI technologies.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in machine learning algorithms, data analysis, and deep learning frameworks. 
                  I love exploring cutting-edge AI research and implementing innovative solutions. 
                  When I'm not analyzing datasets, you'll find me working on ML projects, 
                  participating in data science competitions, or learning about the latest AI breakthroughs.
                </p>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            {/* Card slider for desktop/tablet only */}
            <div className="hidden lg:block relative min-h-[280px]">
              <CardSwap width={320} height={260} cardDistance={36} verticalDistance={40} delay={5000} pauseOnHover={false}>
                <Card customClass="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-cyan-400/60 shadow-lg">
                  <div className="flex flex-col items-center justify-center h-full p-6">
                    <div className="mb-4">
                      {/* Web Dev Animation */}
                      <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="15" width="44" height="30" rx="6" fill="#18181b" stroke="#00fff7" strokeWidth="2.5" />
                        <rect x="14" y="21" width="32" height="18" rx="3" fill="#23272f" stroke="#FF1493" strokeWidth="2" />
                        <rect x="18" y="25" width="24" height="10" rx="2" fill="#18181b" stroke="#8A2BE2" strokeWidth="1.5" />
                        <circle cx="16" cy="19" r="2" fill="#00fff7" />
                        <circle cx="22" cy="19" r="2" fill="#FF1493" />
                        <circle cx="28" cy="19" r="2" fill="#8A2BE2" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">Web Development</h3>
                    <p className="text-gray-300 text-center text-sm">Building beautiful, responsive, and interactive websites using modern frameworks and best practices.</p>
                  </div>
                </Card>
                <Card customClass="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-pink-400/60 shadow-lg">
                  <div className="flex flex-col items-center justify-center h-full p-6">
                    <div className="mb-4">
                      {/* AI Animation */}
                      <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="30" cy="30" rx="20" ry="20" fill="#18181b" stroke="#FF1493" strokeWidth="2.5" />
                        <ellipse cx="30" cy="30" rx="12" ry="12" fill="#23272f" stroke="#00fff7" strokeWidth="2" />
                        <circle cx="30" cy="30" r="5" fill="#8A2BE2" />
                        <path d="M30 18v-4M30 46v-4M18 30h-4M46 30h-4" stroke="#FF1493" strokeWidth="2" strokeLinecap="round" />
                        <path d="M22 22l-3-3M38 38l3 3M22 38l-3 3M38 22l3-3" stroke="#00fff7" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-pink-400 mb-2">Artificial Intelligence</h3>
                    <p className="text-gray-300 text-center text-sm">Designing intelligent systems that can learn, reason, and solve complex problems using AI and neural networks.</p>
                  </div>
                </Card>
                <Card customClass="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-cyan-400/60 shadow-lg">
                  <div className="flex flex-col items-center justify-center h-full p-6">
                    <div className="mb-4">
                      {/* Data Science Animation */}
                      <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="12" y="20" width="36" height="20" rx="6" fill="#18181b" stroke="#00fff7" strokeWidth="2.5" />
                        <rect x="18" y="26" width="24" height="8" rx="3" fill="#23272f" stroke="#FF1493" strokeWidth="2" />
                        <rect x="24" y="30" width="12" height="4" rx="2" fill="#8A2BE2" />
                        <circle cx="30" cy="24" r="2" fill="#00fff7" />
                        <circle cx="36" cy="24" r="2" fill="#FF1493" />
                        <circle cx="24" cy="24" r="2" fill="#8A2BE2" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">Data Science</h3>
                    <p className="text-gray-300 text-center text-sm">Extracting insights from data, building predictive models, and making data-driven decisions for real-world impact.</p>
                  </div>
                </Card>
                <Card customClass="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-purple-400/60 shadow-lg">
                  <div className="flex flex-col items-center justify-center h-full p-6">
                    <div className="mb-4">
                      {/* Data Analytics Animation */}
                      <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="25" width="40" height="10" rx="5" fill="#18181b" stroke="#8A2BE2" strokeWidth="2.5" />
                        <rect x="16" y="28" width="8" height="4" rx="2" fill="#00fff7" />
                        <rect x="28" y="28" width="8" height="4" rx="2" fill="#FF1493" />
                        <rect x="40" y="28" width="8" height="4" rx="2" fill="#8A2BE2" />
                        <circle cx="20" cy="32" r="2" fill="#00fff7" />
                        <circle cx="32" cy="32" r="2" fill="#FF1493" />
                        <circle cx="44" cy="32" r="2" fill="#8A2BE2" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-purple-400 mb-2">Data Analytics</h3>
                    <p className="text-gray-300 text-center text-sm">Analyzing and visualizing data to uncover trends, patterns, and actionable business insights.</p>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;