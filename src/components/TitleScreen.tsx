import { useState, useEffect } from 'react';

interface Props {
  onStart: () => void;
}

export default function TitleScreen({ onStart }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-purple-400/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Cross/Book icon */}
        <div className="text-7xl md:text-8xl mb-6 animate-float">
          📖✝️
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight">
          <span className="bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent">
            Bible Stories
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-purple-200 mb-2 font-light">
          Visual Novel Edition
        </h2>
        <p className="text-purple-300/80 text-sm md:text-base max-w-md mx-auto mb-8">
          Experience every book of the Bible through interactive storytelling — from Genesis to Revelation. 
          Perfect for kids and adults alike!
        </p>

        {/* Start button */}
        <button
          onClick={onStart}
          className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl text-gray-900 font-bold text-lg shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">Begin Your Journey</span>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative z-10 ml-2">→</span>
        </button>

        {/* Features */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-sm mx-auto">
          <div className="text-center">
            <div className="text-2xl mb-1">🎮</div>
            <div className="text-purple-300/60 text-xs">68 Stories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">📖</div>
            <div className="text-purple-300/60 text-xs">NIV Verses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">🌍</div>
            <div className="text-purple-300/60 text-xs">Genesis→Revelation</div>
          </div>
        </div>
      </div>

      {/* Bottom verse */}
      <div className={`absolute bottom-6 text-center px-6 transition-all duration-1000 delay-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-purple-300/50 text-xs italic max-w-md">
          "Your word is a lamp for my feet, a light on my path." — Psalm 119:105
        </p>
      </div>
    </div>
  );
}
