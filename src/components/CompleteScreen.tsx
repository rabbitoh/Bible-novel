import { Story } from '../types';

interface Props {
  story: Story;
  onBackToStories: () => void;
  onReplay: () => void;
}

export default function CompleteScreen({ story, onBackToStories, onReplay }: Props) {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Confetti-like elements */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-fall"
            style={{
              top: `-5%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: ['#fbbf24', '#a78bfa', '#34d399', '#f472b6', '#60a5fa'][i % 5],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-md">
        {/* Celebration icon */}
        <div className="text-7xl mb-6 animate-bounce-slow">
          🎉
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Story Complete!
        </h1>
        <p className="text-purple-200 text-lg mb-2">
          {story.icon} {story.title}
        </p>
        <p className="text-purple-300/70 text-sm mb-8">
          Great job! You've finished this Bible story.
        </p>

        {/* Achievement */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-8 border border-white/10">
          <div className="text-yellow-300 text-sm font-medium mb-1">⭐ Achievement Unlocked</div>
          <div className="text-white text-lg font-bold">{story.title} Explorer</div>
          <div className="text-white/50 text-xs mt-1">You completed this story and learned God's Word!</div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={onReplay}
            className="w-full px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            🔄 Replay Story
          </button>
          <button
            onClick={onBackToStories}
            className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-yellow-500/25"
          >
            📚 More Stories →
          </button>
        </div>

        {/* Encouragement */}
        <div className="mt-8 text-center">
          <p className="text-purple-300/50 text-xs italic">
            "Well done, good and faithful servant!" — Matthew 25:21
          </p>
        </div>
      </div>
    </div>
  );
}
