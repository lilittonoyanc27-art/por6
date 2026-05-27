export interface Sentence {
  id: string;
  spanish: string;
  armenian: string;
}

export interface VocabItem {
  id: string;
  spanish: string;
  armenian: string;
  exampleEs?: string;
  exampleHy?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TextData {
  id: string;
  titleEs: string;
  titleHy: string;
  descriptionEs: string;
  descriptionHy: string;
  sentences: Sentence[];
  vocabulary: VocabItem[];
  quizzes: QuizQuestion[];
  category: 'general' | 'grammar';
  tenseLabel?: string; // e.g. "Pretérito Perfecto"
  level: string; // e.g. "A1", "A2", "B1"
}

export interface UserProgress {
  readTexts: string[]; // IDs of texts read
  completedGames: {
    [textId: string]: {
      scramble: boolean;
      match: boolean;
      quizScore: number; // max score achieved out of total questions
    };
  };
  streak: number;
  lastActive: string | null; // Date string
  xp: number; // Experience points
}
