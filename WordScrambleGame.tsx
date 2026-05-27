import React, { useState, useEffect } from 'react';
import { Sentence, TextData } from './types';
import { Sparkles, HelpCircle, RotateCcw, CheckCircle, Flame, ArrowRight, Lightbulb } from 'lucide-react';

interface WordScrambleGameProps {
  text: TextData;
  onWin: () => void;
}

export const WordScrambleGame: React.FC<WordScrambleGameProps> = ({ text, onWin }) => {
  const [selectedSentence, setSelectedSentence] = useState<Sentence | null>(null);
  const [shuffledWords, setShuffledWords] = useState<{ id: string; word: string }[]>([]);
  const [placedWords, setPlacedWords] = useState<{ id: string; word: string }[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailure, setIsFailure] = useState<boolean>(false);
  const [streakCount, setStreakCount] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);

  useEffect(() => {
    startNewRound();
  }, [text]);

  const startNewRound = () => {
    const eligibleSentences = text.sentences.filter(s => s.spanish.split(' ').length >= 3);
    const chosen = eligibleSentences.length > 0 
      ? eligibleSentences[Math.floor(Math.random() * eligibleSentences.length)]
      : text.sentences[0];

    setSelectedSentence(chosen);
    setPlacedWords([]);
    setIsSuccess(false);
    setIsFailure(false);
    setShowHint(false);

    if (chosen) {
      const words = chosen.spanish.split(/\s+/).map((word, i) => ({
        id: `${word}-${i}-${Math.random()}`,
        word: word
      }));
      
      const shuffled = [...words].sort(() => Math.random() - 0.5);
      setShuffledWords(shuffled);
    }
  };

  const handleSelectWord = (wordObj: { id: string; word: string }) => {
    if (isSuccess) return;
    setShuffledWords(prev => prev.filter(w => w.id !== wordObj.id));
    setPlacedWords(prev => [...prev, wordObj]);
    setIsFailure(false);
  };

  const handleRemoveWord = (wordObj: { id: string; word: string }) => {
    if (isSuccess) return;
    setPlacedWords(prev => prev.filter(w => w.id !== wordObj.id));
    setShuffledWords(prev => [...prev, wordObj]);
    setIsFailure(false);
  };

  const checkAnswer = () => {
    if (!selectedSentence) return;
    const constructed = placedWords.map(w => w.word).join(' ');
    const original = selectedSentence.spanish;

    const normalize = (str: string) => str.replace(/[.,:;¡!¿?]/g, '').toLowerCase().trim();

    if (normalize(constructed) === normalize(original)) {
      setIsSuccess(true);
      setIsFailure(false);
      setStreakCount(prev => prev + 1);
      onWin();
    } else {
      setIsFailure(true);
    }
  };

  const handleGiveHint = () => {
    if (!selectedSentence) return;
    setShowHint(true);
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between" id="word-scramble-container">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-850 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Խաղ 1: Բառերի շարք (Word Unscramble)
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Դասավորե՛ք իսպաներեն բառերը ճիշտ հերթականությամբ։
            </p>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 text-amber-800 px-3 py-1.5 rounded-full border border-amber-100 font-bold">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span className="text-xs font-bold font-mono">{streakCount} շարք</span>
          </div>
        </div>

        {/* Translation prompts */}
        <div className="bg-[#f0f7ff]/70 border-l-4 border-blue-500 rounded-2xl p-5 mb-6">
          <div className="text-xs text-primary-brand font-bold uppercase tracking-wider mb-1.5">Թարգմանությունը (Armenian Prompt)</div>
          <p className="text-base md:text-lg font-semibold font-arm text-slate-800 leading-normal">
            "{selectedSentence?.armenian}"
          </p>
        </div>

        {/* Constructed Spanish Sentence Placeholder */}
        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-5 min-h-[90px] flex flex-wrap items-center gap-2.5 bg-slate-50/50 mb-5 transition-colors">
          {placedWords.length === 0 && (
            <span className="text-slate-400 text-xs md:text-sm select-none font-medium pl-2">
              Կտտացրեք ներքևի բառերի վրա՝ նախադասությունը կազմելու համար...
            </span>
          )}
          {placedWords.map((wordObj) => (
            <button
              key={wordObj.id}
              onClick={() => handleRemoveWord(wordObj)}
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium text-sm md:text-base px-3.5 py-1.5 rounded-xl cursor-copy shadow-sm border border-blue-700 flex items-center gap-1 transition active:translate-y-0.5"
            >
              {wordObj.word}
            </button>
          ))}
        </div>

        {/* Shuffled Word Selection Pool */}
        <div className="mb-6">
          <div className="text-xs font-semibold text-slate-400 mb-2">Հասանելի բառեր`</div>
          <div className="flex flex-wrap gap-2.5">
            {shuffledWords.map((wordObj) => (
              <button
                key={wordObj.id}
                onClick={() => handleSelectWord(wordObj)}
                className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-705 font-semibold text-sm md:text-base px-3.5 py-1.5 rounded-xl cursor-default transition shadow-xs active:translate-y-0.5"
              >
                {wordObj.word}
              </button>
            ))}
          </div>
        </div>

        {/* Hints & Feedback */}
        {showHint && selectedSentence && (
          <div className="bg-amber-50 text-amber-900 border border-amber-200 rounded-xl p-3 text-xs mb-4 animate-fadeIn flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Հուշում:</span> Նախադասությունը սկսվում է{' '}
              <strong className="text-amber-805 font-mono">"{selectedSentence.spanish.split(' ')[0]}"</strong> բառով։
            </div>
          </div>
        )}

        {isSuccess && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-900 animate-fadeIn mb-4">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="font-bold text-sm">Հիանալի՛ է, ճիշտ է։</span>
            </div>
            <p className="text-xs text-emerald-700 italic font-mono mt-1">
              Spanish: "{selectedSentence?.spanish}"
            </p>
          </div>
        )}

        {isFailure && selectedSentence && (
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-rose-950 animate-shake mb-4">
            <div className="flex items-center gap-2 mb-1">
              <HelpCircle className="w-5 h-5 text-rose-600" />
              <span className="font-bold text-sm">Սխալ պատասխան (Incorrect Answer)</span>
            </div>
            <p className="text-xs text-rose-700 font-sans font-medium">
              Ճիշտ տարբերակն է (The correct version is):
            </p>
            <p className="text-sm font-bold text-[#15803d] font-sans mt-1 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100 select-all">
              "{selectedSentence.spanish}"
            </p>
            <p className="text-xs text-rose-600 mt-2 font-medium">
              Փորձե՛ք կրկին կամ վերականգնե՛ք բառերը՝ ինքնուրույն դասավորելու համար։
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6 gap-3">
        <div className="flex gap-2">
          <button
            id="btn-scramble-reset"
            onClick={() => {
              setShuffledWords([...shuffledWords, ...placedWords].sort(() => Math.random() - 0.5));
              setPlacedWords([]);
              setIsFailure(false);
            }}
            className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-xs rounded-xl transition"
            title="Մաքրել կազմածը"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Վերսկսել
          </button>

          {!showHint && !isSuccess && (
            <button
              id="btn-scramble-hint"
              onClick={handleGiveHint}
              className="flex items-center gap-1.5 px-3 py-2 border border-amber-200 bg-amber-50/50 hover:bg-amber-50 text-amber-700 font-medium text-xs rounded-xl transition"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              Հուշում
            </button>
          )}
        </div>

        {isSuccess ? (
          <button
            id="btn-scramble-next"
            onClick={startNewRound}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition"
          >
            Հաջորդը
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            id="btn-scramble-check"
            onClick={checkAnswer}
            disabled={placedWords.length === 0}
            className={`flex items-center gap-1.5 font-semibold text-xs px-5 py-2.5 rounded-xl transition ${
              placedWords.length === 0
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-primary-brand hover:bg-primary-brand-hover text-white'
            }`}
          >
            Ստուգել
          </button>
        )}
      </div>
    </div>
  );
};
