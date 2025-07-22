import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import AnimatedText from './AnimatedText';
import ScrollReveal from './ScrollReveal';
import Particles from './Particles';

const Hero = () => {
  const roles = ['Web Developer','Frontend Developer','Data Science Enthusiast', 'Machine Learning Engineer', 'AI Developer', 'Data Analyst', 'Deep Learning Specialist'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated particle background */}
      <div className="absolute inset-0 z-0">
        <Particles
          className="absolute inset-0 w-full h-full"
          particleCount={150}
          particleColors={['#00FFFF', '#FF1493', '#8A2BE2']}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={250}
          moveParticlesOnHover={true}
          particleHoverFactor={0.9}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 h-full md:h-[28rem]">
          {/* Profile Picture */}
          <div className="mb-8 md:mb-0 flex-shrink-0 h-full flex items-center">
            <div className="w-40 h-40 md:w-72 md:h-72 mx-auto relative group flex items-center justify-center h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="/images/My profile.jpg" 
                alt="S.V.Bindu Sathwika"
                className="relative w-full h-full object-cover rounded-full border-4 border-gradient-to-r from-cyan-400 to-pink-400 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          {/* User Data */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left h-full justify-center">
            <ScrollReveal direction="up" delay={200}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
                S.V.Bindu Sathwika
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={400}>
              <div className="text-xl md:text-2xl text-gray-300 mb-8 font-light h-8">
                <AnimatedText 
                  texts={roles}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400"
                  speed={150}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={600}>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                3rd Year B.Tech Student at RGUKT, Nuzvid. Passionate about transforming data into insights 
                and building intelligent systems that solve real-world problems through AI and Machine Learning.And Building Intresting websites to solve real-world problems.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={800}>
              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center gap-6 mb-16">
                <a
                  href="https://drive.google.com/file/d/1WhENKEyL95sAlVch1YGU50cqLFGGPr7X/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
                  <Download size={20} className="group-hover:animate-bounce" />
                  Download Resume
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
                <div className="flex items-center gap-4">
                  <a href="https://github.com/Bindu2006" className="text-gray-400 hover:text-cyan-400 transform hover:scale-125 hover:rotate-12 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]" target="_blank" rel="noopener noreferrer">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/venkata-bindu-sathwika-somisetty-69353b282" className="text-gray-400 hover:text-pink-400 transform hover:scale-125 hover:rotate-12 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,20,147,0.5)]" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:svbsathwika2006@gmail.com" className="text-gray-400 hover:text-purple-400 transform hover:scale-125 hover:rotate-12 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(138,43,226,0.5)]">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      {/* Centered scroll down at the bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <ScrollReveal direction="up" delay={1000}>
          <div className="animate-bounce">
            <ChevronDown className="mx-auto text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]" size={32} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;