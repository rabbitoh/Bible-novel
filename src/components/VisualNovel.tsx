import { useState, useEffect, useCallback } from 'react';
import { Story } from '../types';

interface Props {
  story: Story;
  onComplete: () => void;
  onBack: () => void;
}

const backgrounds: Record<string, string> = {
  'void': 'bg-gradient-to-b from-gray-900 via-gray-800 to-black',
  'light-burst': 'bg-gradient-to-b from-yellow-200 via-yellow-100 to-white',
  'first-day': 'bg-gradient-to-b from-orange-300 via-yellow-200 to-blue-300',
  'sky-sea': 'bg-gradient-to-b from-blue-400 via-blue-300 to-cyan-200',
  'mountains': 'bg-gradient-to-b from-blue-400 via-green-300 to-green-600',
  'garden': 'bg-gradient-to-b from-blue-300 via-green-300 to-green-500',
  'stars': 'bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900',
  'ocean-creatures': 'bg-gradient-to-b from-cyan-400 via-blue-500 to-blue-800',
  'animals': 'bg-gradient-to-b from-green-300 via-green-400 to-amber-300',
  'eden': 'bg-gradient-to-b from-green-200 via-emerald-300 to-green-400',
  'battlefield': 'bg-gradient-to-b from-gray-400 via-amber-200 to-amber-400',
  'hillside': 'bg-gradient-to-b from-blue-300 via-green-300 to-green-500',
  'hillside-crowd': 'bg-gradient-to-b from-blue-200 via-green-200 to-green-400',
  'camp': 'bg-gradient-to-b from-orange-200 via-amber-200 to-green-300',
  'celebration': 'bg-gradient-to-b from-yellow-200 via-orange-200 to-pink-200',
  'corrupt-world': 'bg-gradient-to-b from-gray-700 via-gray-600 to-gray-800',
  'noah-field': 'bg-gradient-to-b from-green-300 via-green-400 to-amber-300',
  'building-ark': 'bg-gradient-to-b from-blue-300 via-amber-200 to-amber-400',
  'animals-boarding': 'bg-gradient-to-b from-green-300 via-amber-200 to-green-400',
  'flood': 'bg-gradient-to-b from-gray-600 via-blue-700 to-blue-900',
  'ark-inside': 'bg-gradient-to-b from-amber-600 via-amber-500 to-amber-700',
  'mountain-top': 'bg-gradient-to-b from-blue-300 via-gray-300 to-gray-500',
  'dove-olive': 'bg-gradient-to-b from-blue-300 via-blue-200 to-green-300',
  'rainbow': 'bg-gradient-to-b from-blue-300 via-pink-200 to-green-300',
  'wilderness': 'bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600',
  'shepherd-carrying': 'bg-gradient-to-b from-green-300 via-green-400 to-amber-300',
  'nazareth': 'bg-gradient-to-b from-blue-200 via-amber-100 to-amber-200',
  'road-bethlehem': 'bg-gradient-to-b from-orange-200 via-amber-200 to-amber-300',
  'bethlehem-full': 'bg-gradient-to-b from-gray-400 via-amber-200 to-amber-300',
  'stable': 'bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800',
  'fields-night': 'bg-gradient-to-b from-indigo-800 via-blue-900 to-green-900',
  'heavenly-host': 'bg-gradient-to-b from-yellow-200 via-white to-yellow-100',
  'wise-men': 'bg-gradient-to-b from-purple-800 via-indigo-700 to-amber-600',
  'palace': 'bg-gradient-to-b from-amber-300 via-yellow-200 to-amber-400',
  'daniel-room': 'bg-gradient-to-b from-blue-300 via-blue-200 to-amber-200',
  'lions-den': 'bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900',
  'lions-den-peaceful': 'bg-gradient-to-b from-blue-400 via-indigo-300 to-purple-400',
  'tomb-dark': 'bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900',
  'dark-sky': 'bg-gradient-to-b from-gray-700 via-gray-600 to-gray-800',
  'dawn': 'bg-gradient-to-b from-pink-300 via-orange-200 to-yellow-200',
  'earthquake': 'bg-gradient-to-b from-white via-yellow-100 to-orange-200',
  'glorious-light': 'bg-gradient-to-b from-yellow-100 via-white to-yellow-200',
};

const characterColors: Record<string, string> = {
  god: 'text-yellow-300',
  jesus: 'text-blue-200',
  angel: 'text-yellow-200',
  angels: 'text-yellow-200',
  david: 'text-green-300',
  goliath: 'text-red-300',
  saul: 'text-purple-300',
  noah: 'text-cyan-300',
  mary: 'text-pink-200',
  daniel: 'text-amber-300',
  darius: 'text-purple-200',
  shepherd: 'text-green-200',
  pharisee: 'text-gray-300',
  officials: 'text-red-200',
  disciple: 'text-blue-300',
  narrator: 'text-white',
};

const characterEmojis: Record<string, string> = {
  god: '✨',
  jesus: '✝️',
  angel: '😇',
  angels: '😇',
  david: '🧑',
  goliath: '👹',
  saul: '👑',
  noah: '👴',
  mary: '👩',
  daniel: '🧔',
  darius: '🤴',
  shepherd: '🧑‍🌾',
  pharisee: '🧐',
  officials: '😠',
  disciple: '🧑',
  narrator: '📖',
};

export default function VisualNovel({ story, onComplete, onBack }: Props) {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showChoices, setShowChoices] = useState(false);
  const [choiceResponse, setChoiceResponse] = useState<string | null>(null);
  const [choiceNextScene, setChoiceNextScene] = useState<number | null>(null);
  const [completedScenes, setCompletedScenes] = useState<number[]>([]);

  const currentScene = story.scenes[currentSceneIndex];
  const currentLine = currentScene?.dialogue[currentLineIndex];

  // Typewriter effect
  useEffect(() => {
    if (!currentLine) return;
    if (choiceResponse) return;

    setDisplayedText('');
    setIsTyping(true);
    setShowChoices(false);

    let index = 0;
    const text = currentLine.text;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        if (currentLine.choices) {
          setShowChoices(true);
        }
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [currentLine, currentLineIndex, currentSceneIndex, choiceResponse]);

  const skipTyping = useCallback(() => {
    if (isTyping && currentLine) {
      setDisplayedText(currentLine.text);
      setIsTyping(false);
      if (currentLine.choices) {
        setShowChoices(true);
      }
    }
  }, [isTyping, currentLine]);

  const advance = useCallback(() => {
    if (choiceResponse) {
      handleChoiceResponseDone();
      return;
    }

    if (isTyping) {
      skipTyping();
      return;
    }

    if (showChoices) return;

    if (currentLineIndex < currentScene.dialogue.length - 1) {
      setCurrentLineIndex(prev => prev + 1);
    } else {
      // Move to next scene
      if (!completedScenes.includes(currentSceneIndex)) {
        setCompletedScenes(prev => [...prev, currentSceneIndex]);
      }
      if (currentSceneIndex < story.scenes.length - 1) {
        setCurrentSceneIndex(prev => prev + 1);
        setCurrentLineIndex(0);
      } else {
        onComplete();
      }
    }
  }, [isTyping, showChoices, currentLineIndex, currentSceneIndex, currentScene, story, onComplete, skipTyping, completedScenes, choiceResponse]);

  const handleChoice = (choice: { nextScene: number; response?: string }) => {
    if (choice.response) {
      setChoiceResponse(choice.response);
      setChoiceNextScene(choice.nextScene);
    } else {
      setCurrentSceneIndex(choice.nextScene);
      setCurrentLineIndex(0);
    }
  };

  const handleChoiceResponseDone = () => {
    if (choiceNextScene !== null) {
      setCurrentSceneIndex(choiceNextScene);
      setCurrentLineIndex(0);
    } else if (currentLineIndex < currentScene.dialogue.length - 1) {
      setCurrentLineIndex(prev => prev + 1);
    } else {
      if (currentSceneIndex < story.scenes.length - 1) {
        setCurrentSceneIndex(prev => prev + 1);
        setCurrentLineIndex(0);
      } else {
        onComplete();
      }
    }
    setChoiceResponse(null);
    setChoiceNextScene(null);
  };

  if (!currentScene || !currentLine) return null;

  const bgClass = backgrounds[currentLine.background || currentScene.background] || 'bg-gray-900';
  const speakerColor = currentLine.speaker ? (characterColors[currentLine.character || 'narrator'] || 'text-white') : 'text-white';
  const speakerEmoji = currentLine.character ? (characterEmojis[currentLine.character] || '📖') : '📖';

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${bgClass} transition-all duration-1000`}>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white/10 blur-xl"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white/10 blur-lg"></div>
        </div>
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between p-3 bg-black/40 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-all"
        >
          <span>←</span>
          <span>Back</span>
        </button>
        <div className="text-white/80 text-sm font-medium">
          {story.icon} {story.title}
        </div>
        <div className="text-white/60 text-xs">
          Scene {currentSceneIndex + 1}/{story.scenes.length}
        </div>
      </div>

      {/* Main visual area */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        {/* Character display area */}
        {currentLine.character && !showChoices && !choiceResponse && (
          <div className="text-center animate-fade-in">
            <div className="text-6xl md:text-8xl mb-4 animate-bounce-slow">
              {speakerEmoji}
            </div>
            {currentLine.emotion && (
              <div className="text-white/60 text-sm italic">
                {currentLine.emotion}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Dialogue box */}
      <div className="relative z-10 p-4 pb-6">
        <div
          className="bg-black/70 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/10 cursor-pointer max-w-4xl mx-auto"
          onClick={choiceResponse ? handleChoiceResponseDone : advance}
        >
          {/* Speaker name */}
          {currentLine.speaker && (
            <div className={`font-bold text-lg mb-2 ${speakerColor}`}>
              {speakerEmoji} {currentLine.speaker}
            </div>
          )}

          {/* Dialogue text */}
          <div className="text-white text-base md:text-lg leading-relaxed min-h-[3rem]">
            {choiceResponse || displayedText}
            {isTyping && !choiceResponse && (
              <span className="inline-block w-0.5 h-5 bg-white ml-1 animate-pulse"></span>
            )}
          </div>

          {/* Verse reference */}
          {currentLine.verse && !isTyping && !choiceResponse && (
            <div className="mt-2 text-yellow-300/80 text-sm italic">
              📖 {currentLine.verse}
            </div>
          )}

          {/* Choices */}
          {showChoices && currentLine.choices && !choiceResponse && (
            <div className="mt-4 space-y-2" onClick={e => e.stopPropagation()}>
              {currentLine.choices.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChoice(choice)}
                  className="w-full text-left px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {choice.text}
                </button>
              ))}
            </div>
          )}

          {/* Click to continue indicator */}
          {!isTyping && !showChoices && !choiceResponse && (
            <div className="mt-3 text-right text-white/40 text-sm animate-pulse">
              Click to continue ▶
            </div>
          )}

          {/* Choice response continue */}
          {choiceResponse && (
            <div className="mt-3 text-right text-white/40 text-sm animate-pulse">
              Click to continue ▶
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
