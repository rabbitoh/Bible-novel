export interface Choice {
  text: string;
  nextScene: number;
  response?: string;
}

export interface DialogueLine {
  speaker?: string;
  text: string;
  choices?: Choice[];
  background?: string;
  character?: string;
  emotion?: string;
  verse?: string;
  reflection?: string;
}

export interface StoryScene {
  id: number;
  background: string;
  character?: string;
  dialogue: DialogueLine[];
}

export interface Story {
  id: string;
  title: string;
  description: string;
  category: 'old-testament' | 'new-testament' | 'parables';
  difficulty: 'easy' | 'medium' | 'hard';
  ageGroup: 'kids' | 'all';
  icon: string;
  color: string;
  scenes: StoryScene[];
}

export type Screen = 'title' | 'stories' | 'novel' | 'complete';
