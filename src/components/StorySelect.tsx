import { useState } from 'react';
import { Story } from '../types';
import { stories } from '../data/stories';

interface Props {
  onSelectStory: (story: Story) => void;
  onBack: () => void;
  completedStories: string[];
}

type Category = 'all' | 'old-testament' | 'new-testament' | 'parables';

export default function StorySelect({ onSelectStory, onBack, completedStories }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { id: Category; label: string; icon: string }[] = [
    { id: 'all', label: 'All Stories', icon: '📚' },
    { id: 'old-testament', label: 'Old Testament', icon: '📜' },
    { id: 'new-testament', label: 'New Testament', icon: '✝️' },
    { id: 'parables', label: 'Parables', icon: '🐑' },
  ];

  const filteredStories = activeCategory === 'all'
    ? stories
    : stories.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 text-sm transition-all"
          >
            <span>←</span>
            <span>Home</span>
          </button>
          <h1 className="text-lg font-bold text-white">Choose a Story</h1>
          <div className="text-xs text-white/40">
            {completedStories.length}/{stories.length} ✨
          </div>
        </div>

        {/* Category tabs */}
        <div className="max-w-4xl mx-auto px-4 pb-3 flex gap-2 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-white/15 text-white border border-white/20'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70 border border-transparent'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Stories grid */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredStories.map(story => (
            <StoryCard
              key={story.id}
              story={story}
              isCompleted={completedStories.includes(story.id)}
              onSelect={() => onSelectStory(story)}
            />
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12 text-white/40">
            <div className="text-4xl mb-3">📭</div>
            <p>No stories in this category yet.</p>
          </div>
        )}
      </div>

      {/* Bottom info */}
      <div className="max-w-4xl mx-auto px-4 py-6 text-center">
        <p className="text-white/30 text-xs">
          📖 {stories.length} interactive Bible stories covering Genesis through Revelation! Each story includes NIV Bible verses, interactive choices, and reflections to bring you closer to Jesus.
        </p>
      </div>
    </div>
  );
}

function StoryCard({ story, isCompleted, onSelect }: { story: Story; isCompleted: boolean; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-left"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
      <div className="absolute inset-0 bg-slate-800/80"></div>

      {/* Content */}
      <div className="relative p-5">
        {/* Icon and completion */}
        <div className="flex items-start justify-between mb-3">
          <div className="text-4xl">{story.icon}</div>
          {isCompleted && (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">
              <span>✓</span>
              <span>Done</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-yellow-200 transition-colors">
          {story.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm mb-3 line-clamp-2">
          {story.description}
        </p>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`px-2 py-0.5 rounded-full text-xs bg-gradient-to-r ${story.color} text-white/90`}>
            {story.category === 'old-testament' ? '📜 OT' : story.category === 'new-testament' ? '✝️ NT' : '🐑 Parable'}
          </span>
          <span className="px-2 py-0.5 rounded-full text-xs bg-white/10 text-white/50">
            {story.ageGroup === 'kids' ? '👶 Kids' : '👨‍👩‍👧‍👦 All Ages'}
          </span>
          <span className="px-2 py-0.5 rounded-full text-xs bg-white/10 text-white/50">
            {story.scenes.length} scenes
          </span>
        </div>
      </div>
    </button>
  );
}
