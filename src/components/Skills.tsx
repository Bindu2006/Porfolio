import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Code, Database, Flame, Brain, BarChart2, Cloud, Wand2, BookOpen, Eye, Figma, Atom, FileSpreadsheet } from 'lucide-react';

const skills = [
  { name: 'Web Development', color: 'from-cyan-400 to-pink-400', icon: <Code color="#00fff7" size={22} /> },
  { name: 'MongoDB', color: 'from-green-400 to-cyan-400', icon: <Database color="#39FF14" size={22} /> },
  { name: 'Firebase', color: 'from-yellow-400 to-pink-400', icon: <Flame color="#FFDE59" size={22} /> },
  { name: 'SQL', color: 'from-blue-400 to-cyan-400', icon: <Database color="#00fff7" size={22} /> },
  { name: 'DSA (Java)', color: 'from-pink-400 to-purple-400', icon: <BookOpen color="#FF1493" size={22} /> },
  { name: 'Machine Learning', color: 'from-cyan-400 to-purple-400', icon: <Atom color="#00fff7" size={22} /> },
  { name: 'Deep Learning', color: 'from-purple-400 to-pink-400', icon: <Brain color="#8A2BE2" size={22} /> },
  { name: 'Artificial Intelligence', color: 'from-pink-400 to-cyan-400', icon: <Brain color="#FF1493" size={22} /> },
  { name: 'Data Science', color: 'from-cyan-400 to-purple-400', icon: <BarChart2 color="#00fff7" size={22} /> },
  { name: 'Computer Vision', color: 'from-purple-400 to-cyan-400', icon: <Eye color="#8A2BE2" size={22} /> },
  { name: 'Figma', color: 'from-pink-400 to-cyan-400', icon: <Figma color="#FF1493" size={22} /> },
  { name: 'Vertex AI', color: 'from-cyan-400 to-purple-400', icon: <Cloud color="#00fff7" size={22} /> },
  { name: 'Gen AI', color: 'from-purple-400 to-pink-400', icon: <Wand2 color="#8A2BE2" size={22} /> },
  { name: 'MS Excel', color: 'from-green-400 to-cyan-400', icon: <FileSpreadsheet color="#39FF14" size={22} /> },
];

const SkillsTicker = () => (
  <div className="overflow-x-hidden w-full py-4">
    <div className="flex whitespace-nowrap animate-scroll-ticker gap-6">
      {skills.concat(skills).map((skill, idx) => (
        <span
          key={idx}
          className={`px-6 py-2 rounded-full font-semibold text-white text-base shadow-md border border-white/10 flex items-center gap-2 bg-gradient-to-r ${skill.color}`}
        >
          <span>{skill.icon}</span>
          <span className="font-bold tracking-wide">{skill.name}</span>
        </span>
      ))}
    </div>
    <style>{`
      @keyframes scroll-ticker {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll-ticker {
        animation: scroll-ticker 18s linear infinite;
      }
    `}</style>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-cyan-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              My core skills and technologies
            </p>
          </div>
          <ScrollReveal direction="up" delay={200}>
            <SkillsTicker />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;