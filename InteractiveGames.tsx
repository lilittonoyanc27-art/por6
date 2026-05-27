import React, { useState } from 'react';
import { TextData } from './types';
import { WordScrambleGame } from './WordScrambleGame';
import { MatchVocabularyGame } from './MatchVocabularyGame';
import { QuizGame } from './QuizGame';
import { Sparkles, Gamepad2, HelpCircle, Check, Trophy, Award } from 'lucide-react';

interface InteractiveGamesProps {
  text: TextData;
  onXPChange: (xpGained: number) => void;
  onGameCompleted: (type: 'scramble' | 'match' | 'quiz', score?: number) => void;
  completedStatus: {
    scramble: boolean;
    match: boolean;
    quizScore: number;
  };
}

export const InteractiveGames: React.FC<InteractiveGamesProps> = ({
  text,
  onXPChange,
  onGameCompleted,
  completedStatus
}) => {
  const [activeTab, setActiveTab] = useState<'scramble' | 'match' | 'quiz'>('scramble');

  const handleScrambleWin = () => {
    if (!completedStatus.scramble) {
      onXPChange(20);
      onGameCompleted('scramble');
    }
  };

  const handleMatchWin = () => {
    if (!completedStatus.match) {
      onXPChange(30);
      onGameCompleted('match');
    }
  };

  const handleQuizWin = (score: number) => {
    onXPChange(score * 15);
    onGameCompleted('quiz', score);
  };

  const totalCompleted = 
    (completedStatus.scramble ? 1 : 0) + 
    (completedStatus.match ? 1 : 0) + 
    (completedStatus.quizScore > 0 ? 1 : 0);

  return (
    <div className="space-y-6" id="interactive-games-wrapper">
      {/* Game Selection Tabs */}
      <div className="bg-slate-50 p-2 rounded-2xl flex flex-wrap gap-2 border border-slate-150">
        <button
          id="btn-tab-scramble"
          onClick={() => setActiveTab('scramble')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'scramble'
              ? 'bg-white text-primary-brand shadow-sm border border-slate-200'
              : 'text-slate-500 hover:text-slate-700 hover:bg-white/40'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="hidden sm:inline font-arm">🧩 Բառերի շարք</span>
          <span className="sm:hidden font-arm">Շարք</span>
          {completedStatus.scramble && (
            <span className="bg-emerald-100 text-emerald-800 p-0.5 rounded-full" title="Completed">
              <Check className="w-3 h-3 stroke-[3]" />
            </span>
          )}
        </button>

        <button
          id="btn-tab-match"
          onClick={() => setActiveTab('match')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'match'
              ? 'bg-white text-primary-brand shadow-sm border border-slate-200'
              : 'text-slate-500 hover:text-slate-700 hover:bg-white/40'
          }`}
        >
          <Gamepad2 className="w-4 h-4 text-primary-brand" />
          <span className="hidden sm:inline font-arm">🔗 Համընկնում</span>
          <span className="sm:hidden font-arm">Համընկնում</span>
          {completedStatus.match && (
            <span className="bg-emerald-100 text-emerald-800 p-0.5 rounded-full" title="Completed">
              <Check className="w-3 h-3 stroke-[3]" />
            </span>
          )}
        </button>

        <button
          id="btn-tab-quiz"
          onClick={() => setActiveTab('quiz')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'quiz'
              ? 'bg-white text-primary-brand shadow-sm border border-slate-200'
              : 'text-slate-500 hover:text-slate-700 hover:bg-white/40'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-purple-500" />
          <span className="hidden sm:inline font-arm">🎓 Վիկտորինա</span>
          <span className="sm:hidden font-arm">Վիկտորինա</span>
          {completedStatus.quizScore > 0 && (
            <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full text-[9px]" title="Score">
              {completedStatus.quizScore}/3
            </span>
          )}
        </button>
      </div>

      {/* Cumulative Progress Card - changed to gorgeous white-based high-contrast banner with 100% visible text */}
      {totalCompleted === 3 && (
        <div className="bg-white rounded-3xl p-6 text-slate-800 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <Trophy className="w-12 h-12 text-yellow-550 fill-yellow-100 shrink-0 mx-auto" />
            <div>
              <h4 className="text-lg font-bold font-arm text-slate-900">Գերազանց Տիրապետում (Perfect Mastery)</h4>
              <p className="text-xs text-slate-500 mt-1">
                Դուք հաջողությամբ ավարտեցիք բոլոր 3 խաղերը այս տեքստի համար և տիրապետում եք նյութին։
              </p>
            </div>
          </div>
          <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-2xl border border-blue-105 flex items-center gap-1 font-bold">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-extrabold">+100 Master XP!</span>
          </div>
        </div>
      )}

      {/* Active Game Window */}
      <div className="transition-all duration-300 min-h-[360px]">
        {activeTab === 'scramble' && (
          <WordScrambleGame text={text} onWin={handleScrambleWin} />
        )}
        
        {activeTab === 'match' && (
          <MatchVocabularyGame text={text} onWin={handleMatchWin} />
        )}

        {activeTab === 'quiz' && (
          <QuizGame text={text} onQuizComplete={handleQuizWin} />
        )}
      </div>
    </div>
  );
};
