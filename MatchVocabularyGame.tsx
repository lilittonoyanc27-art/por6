import React, { useState, useEffect } from 'react';
import { TextData, VocabItem } from './types';
import { Gamepad2, CheckCircle2, RotateCcw, Award } from 'lucide-react';

interface MatchVocabularyGameProps {
  text: TextData;
  onWin: () => void;
}

interface CardItem {
  id: string; // unique card id
  vocabId: string; // vocabulary reference id
  text: string;
  lang: 'es' | 'hy';
  isMatched: boolean;
}

export const MatchVocabularyGame: React.FC<MatchVocabularyGameProps> = ({ text, onWin }) => {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [matchedCount, setMatchedCount] = useState<number>(0);
  const [wrongSelectionId, setWrongSelectionId] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [totalAttempts, setTotalAttempts] = useState<number>(0);

  useEffect(() => {
    initGame();
  }, [text]);

  const initGame = () => {
    const vocabList = [...text.vocabulary];
    const selectedVocab: VocabItem[] = [];
    
    const shuffledVocab = vocabList.sort(() => Math.random() - 0.5);
    const limit = Math.min(5, shuffledVocab.length);
    for (let i = 0; i < limit; i++) {
      selectedVocab.push(shuffledVocab[i]);
    }

    const cardList: CardItem[] = [];
    selectedVocab.forEach((item) => {
      cardList.push({
        id: `es-${item.id}`,
        vocabId: item.id,
        text: item.spanish,
        lang: 'es',
        isMatched: false
      });
      cardList.push({
        id: `hy-${item.id}`,
        vocabId: item.id,
        text: item.armenian,
        lang: 'hy',
        isMatched: false
      });
    });

    setCards(cardList.sort(() => Math.random() - 0.5));
    setSelectedCardId(null);
    setMatchedCount(0);
    setWrongSelectionId(null);
    setIsCompleted(false);
    setTotalAttempts(0);
  };

  const handleCardClick = (card: CardItem) => {
    if (card.isMatched || isCompleted) return;
    
    if (selectedCardId === card.id) {
      setSelectedCardId(null);
      return;
    }

    setWrongSelectionId(null);

    if (selectedCardId === null) {
      setSelectedCardId(card.id);
      return;
    }

    const firstCard = cards.find(c => c.id === selectedCardId);
    if (!firstCard) return;

    setTotalAttempts(prev => prev + 1);

    if (firstCard.lang !== card.lang && firstCard.vocabId === card.vocabId) {
      setCards(prev => prev.map(c => {
        if (c.vocabId === card.vocabId) {
          return { ...c, isMatched: true };
        }
        return c;
      }));
      setMatchedCount(prev => {
        const next = prev + 1;
        const totalUniquePairs = cards.length / 2;
        if (next === totalUniquePairs) {
          setIsCompleted(true);
          onWin();
        }
        return next;
      });
      setSelectedCardId(null);
    } else {
      setWrongSelectionId(card.id);
      setTimeout(() => {
        setWrongSelectionId(null);
        setSelectedCardId(null);
      }, 1000);
    }
  };

  const activePairsCount = cards.length / 2;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-205 flex flex-col justify-between h-full" id="vocabulary-matching-container">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-primary-brand" />
              Խաղ 2: Բառերի համընկնում (Vocabulary Matcher)
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Գտե՛ք իսպաներեն և հայերեն համապատասխան բառերի զույգերը։
            </p>
          </div>
          <span className="text-xs font-bold bg-highlight-main text-primary-brand px-3 py-1 rounded-full font-mono">
            Attempts: {totalAttempts}
          </span>
        </div>

        {/* State Bar */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-slate-500">
            Առաջընթաց՝ {matchedCount} / {activePairsCount} զույգ
          </span>
          <span className="text-xs font-semibold text-emerald-600">
            {Math.round((matchedCount / activePairsCount) * 100)}%
          </span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-6">
          <div 
            className="h-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${(matchedCount / activePairsCount) * 100}%` }}
          />
        </div>

        {/* The Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {cards.map((card) => {
            const isSelected = selectedCardId === card.id;
            const isWrong = wrongSelectionId === card.id || (isWrongOfSelected(card.id));

            function isWrongOfSelected(id: string) {
              return wrongSelectionId !== null && selectedCardId === id;
            }

            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(card)}
                disabled={card.isMatched}
                className={`p-4 rounded-2xl min-h-[90px] border text-center font-semibold transition-all duration-200 select-none flex flex-col justify-center items-center cursor-pointer relative overflow-hidden ${
                  card.isMatched
                    ? 'bg-emerald-50 border-emerald-250 text-emerald-700 opacity-60'
                    : isWrong
                    ? 'bg-rose-50 border-rose-300 text-rose-800 animate-shake shadow-xs'
                    : isSelected
                    ? 'bg-[#f0f7ff]/95 border-primary-brand text-primary-brand ring-2 ring-primary-brand/20 scale-102 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                }`}
              >
                {/* Visual Label Language indicator */}
                <span className={`absolute top-1.5 left-2 px-1.5 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase ${
                  card.lang === 'es' ? 'bg-amber-100 text-amber-900' : 'bg-blue-100 text-[#1d4ed8] font-arm'
                }`}>
                  {card.lang === 'es' ? 'ES' : 'HY'}
                </span>

                <div className={`text-sm md:text-base leading-snug break-words max-w-full font-bold ${
                  card.lang === 'hy' ? 'font-arm text-slate-700 font-semibold' : 'font-sans text-amber-900'
                }`}>
                  {card.text}
                </div>

                {card.isMatched && (
                  <span className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    Գտնված է
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Victory Celebration Area */}
        {isCompleted && (
          <div className="mt-8 bg-emerald-50 border border-emerald-250 rounded-3xl p-5 text-center">
            <Award className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-emerald-900">Հրաշալի՛ է, բոլոր զույգերը համընկան։</h4>
            <p className="text-xs text-emerald-700 mt-1 leading-normal font-arm font-medium">
              Դուք անցաք այս բառախաղը {totalAttempts} փորձով։ 30 XP ավելացավ ձեր առաջընթացին։
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-8">
        <span className="text-xs text-slate-400">
          * Կտտացրե՛ք իսպաներեն բառին, ապա համապատասխան հայերեն թարգմանությանը։
        </span>
        <button
          id="btn-match-reset"
          onClick={initGame}
          className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-xs rounded-xl transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Խաղալ Նորից
        </button>
      </div>
    </div>
  );
};
