import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Let’s Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-xl mx-auto">
              I’m always open to new opportunities, collaborations, or just a friendly chat. Reach out via any of the platforms below!
            </p>
          </div>
          <div className="bg-gray-800/60 p-8 rounded-2xl border border-cyan-400/20 shadow-lg flex flex-col items-center gap-6">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" size={22} />
                <span className="text-white font-medium">svbsathwika2006@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-pink-400" size={22} />
                <span className="text-white font-medium">+91 6303112330</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-purple-400" size={22} />
                <span className="text-white font-medium">RGUKT, Nuzvid, AP</span>
              </div>
            </div>
            <div className="flex gap-6 mt-4">
              <a href="mailto:svbsathwika2006@gmail.com" className="text-cyan-400 hover:text-white bg-cyan-400/10 border border-cyan-400 rounded-full p-3 transition-all duration-300" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/venkata-bindu-sathwika-somisetty-69353b282" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white bg-pink-400/10 border border-pink-400 rounded-full p-3 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Bindu2006" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white bg-cyan-400/10 border border-cyan-400 rounded-full p-3 transition-all duration-300" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://leetcode.com/u/svbsathwika/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white bg-yellow-400/10 border border-yellow-400 rounded-full p-3 transition-all duration-300" aria-label="LeetCode">
                <SiLeetcode size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;