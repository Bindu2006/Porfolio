import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Award, Zap, Globe } from 'lucide-react';

const hackathonItems = [
  {
    title: 'RGUKT Hackathon',
    level: 'College Level',
    place: 'Top 2',
    id: 1,
    icon: <Award color="#00fff7" size={32} />,
    skills: ['App Development', 'Java', 'Kotlin', 'Firebase'],
    color: 'from-cyan-400 to-pink-400',
    description: '',
  },
  {
    title: 'Hactivate2025 By Geeks for Geeks',
    level: 'National Level',
    place: 'Top 5',
    id: 2,
    icon: <Zap color="#FF1493" size={32} />,
    skills: ['Frontend Development', 'Agentic AI'],
    color: 'from-pink-400 to-cyan-400',
    description: '',
  },
  {
    title: 'TeckZite’25 Hackathon',
    level: 'State Level',
    place: '3rd Place',
    id: 3,
    icon: <Globe color="#8A2BE2" size={32} />,
    skills: ['Web development', 'React', 'MongoDB', 'Gen AI', 'NLP'],
    color: 'from-purple-400 to-cyan-400',
    description: '',
  },
  {
    title: 'Smart India Hackathon',
    level: 'National Level',
    place: 'Shortlisted for round 2',
    id: 4,
    icon: <Trophy color="#FF1493" size={32} />,
    skills: ['Web development', 'Artificial Intelligence'],
    color: 'from-pink-400 to-purple-400',
    description: '',
  },
];

const imageItems = [
  '/images/Anurag -1.jpeg',
  '/images/Anurag-2.jpeg',
  '/images/Anurag-3.jpeg',
  '/images/Health assiatnt AI-1.jpeg',
  '/images/Health Assistant AI -2.jpeg',
  '/images/Rgukt-2.jpeg',
  '/images/Rgujt-1.jpeg',
  '/images/Teckzite.jpeg',
  '/images/tec.jpeg',
  '/images/te.jpeg',
  '/images/Teck.jpeg',
].map((src, idx) => ({
  id: idx,
  src,
}));

function useResponsiveSlides(itemsLength: number) {
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsLength]);
  return visible;
}

function CardSlider<T>({ items, renderCard, autoPlay = true, interval = 3500 }: {
  items: T[];
  renderCard: (item: T) => React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
}) {
  const visible = useResponsiveSlides(items.length);
  const [start, setStart] = useState<number>(0);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoPlay) return;
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setStart((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearTimeout(timeout.current);
  }, [start, autoPlay, interval, items.length]);

  const handlePrev = () => setStart((prev) => (prev - 1 + items.length) % items.length);
  const handleNext = () => setStart((prev) => (prev + 1) % items.length);

  // Calculate the number of groups (pages)
  const numGroups = Math.ceil(items.length / visible);
  const currentGroup = Math.floor(start / visible);

  // Prepare slides for the current group
  const slides = [];
  for (let i = 0; i < visible; i++) {
    const idx = (start + i) % items.length;
    slides.push(
      <div key={(items[idx] as any).id} className="flex-shrink-0 w-full sm:w-[320px] px-2">
        {renderCard(items[idx])}
      </div>
    );
  }

  // Calculate translateX for sliding effect
  const translateX = `-${currentGroup * 100}%`;

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="flex items-center justify-center gap-2 mb-2">
        <button onClick={handlePrev} className="rounded-full p-2 bg-gray-800 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition disabled:opacity-50" aria-label="Previous">
          &lt;
        </button>
        <button onClick={handleNext} className="rounded-full p-2 bg-gray-800 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition disabled:opacity-50" aria-label="Next">
          &gt;
        </button>
      </div>
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX})` }}
        >
          {Array.from({ length: numGroups }).map((_, groupIdx) => (
            <div key={groupIdx} className="flex">
              {Array.from({ length: visible }).map((_, i) => {
                const idx = (groupIdx * visible + i) % items.length;
                return (
                  <div key={(items[idx] as any).id} className="flex-shrink-0 w-full sm:w-[320px] px-2">
                    {renderCard(items[idx])}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-3 justify-center">
        {Array.from({ length: numGroups }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStart(idx * visible)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
              idx === currentGroup
                ? 'bg-gradient-to-r from-cyan-400 to-pink-400 border-pink-400 scale-110'
                : 'bg-gray-700 border-cyan-400 opacity-60'
            }`}
            aria-label={`Go to group ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Hackathons, competitions, and recognition in data science and AI
            </p>
          </div>
          <div className="flex flex-col gap-12 items-center justify-center">
            {/* Hackathon Card Slider */}
            <CardSlider
              items={hackathonItems}
              autoPlay={true}
              interval={4000}
              renderCard={(item) => (
                <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-cyan-400/60 shadow-lg rounded-xl p-6 flex flex-col items-center gap-2">
                  {item.icon}
                  <div className="text-lg font-bold bg-gradient-to-r bg-clip-text text-transparent " style={{ backgroundImage: `linear-gradient(to right, #00fff7, #FF1493, #8A2BE2)` }}>{item.title}</div>
                  <div className="flex gap-2 text-xs text-gray-400 mb-1">
                    <span className="font-semibold text-cyan-400">{item.level}</span>
                    <span className="font-semibold text-pink-400">{item.place}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {item.skills && item.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-400 to-pink-400 text-white border border-cyan-400/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            />
            {/* Images Card Slider */}
            <CardSlider
              items={imageItems}
              autoPlay={true}
              interval={4000}
              renderCard={(item) => (
                <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-cyan-400/60 shadow-lg rounded-xl p-2 flex flex-col items-center justify-center">
                  <img src={item.src} alt="Achievement" className="w-full h-48 object-cover rounded-lg border border-cyan-400/40" />
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;