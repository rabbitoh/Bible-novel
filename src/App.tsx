import { useState, useEffect } from 'react';
import { Screen, Story } from './types';
import TitleScreen from './components/TitleScreen';
import StorySelect from './components/StorySelect';
import VisualNovel from './components/VisualNovel';
import CompleteScreen from './components/CompleteScreen';

export default function App() {
  const [screen, setScreen] = useState<Screen>('title');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [completedStories, setCompletedStories] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bible-vn-completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('bible-vn-completed', JSON.stringify(completedStories));
    } catch {
      // Ignore storage errors
    }
  }, [completedStories]);

  const handleSelectStory = (story: Story) => {
    setSelectedStory(story);
    setScreen('novel');
  };

  const handleComplete = () => {
    if (selectedStory && !completedStories.includes(selectedStory.id)) {
      setCompletedStories(prev => [...prev, selectedStory.id]);
    }
    setScreen('complete');
  };

  const handleReplay = () => {
    setScreen('novel');
  };

  const handleBackToStories = () => {
    setSelectedStory(null);
    setScreen('stories');
  };

  return (
    <div className="w-full h-full">
      {screen === 'title' && (
        <TitleScreen onStart={() => setScreen('stories')} />
      )}
      {screen === 'stories' && (
        <StorySelect
          onSelectStory={handleSelectStory}
          onBack={() => setScreen('title')}
          completedStories={completedStories}
        />
      )}
      {screen === 'novel' && selectedStory && (
        <VisualNovel
          key={selectedStory.id + Date.now()}
          story={selectedStory}
          onComplete={handleComplete}
          onBack={handleBackToStories}
        />
      )}
      {screen === 'complete' && selectedStory && (
        <CompleteScreen
          story={selectedStory}
          onBackToStories={handleBackToStories}
          onReplay={handleReplay}
        />
      )}
    </div>
  );
}
