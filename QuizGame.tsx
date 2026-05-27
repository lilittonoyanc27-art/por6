import React, { useState } from 'react';
import { TextData } from './types';
import { HelpCircle, Check, X, ArrowRight, RotateCcw, Trophy, Award, BookOpen } from 'lucide-react';

interface QuizGameProps {
  text: TextData;
  onQuizComplete: (score: number) => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({ text, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const currentQuestion = text.quizzes[currentQuestionIndex];

  const handleOptionClick = (optionIndex: number) => {
    if (isAnswered) return;
    
    setSelectedOptionIndex(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex === currentQuestion.correctIndex;
    if (isCorrect) {
      setCorrectAnswersCount(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOptionIndex(null);
    setIsAnswered(false);

    if (currentQuestionIndex + 1 < text.quizzes.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
      onQuizComplete(correctAnswersCount);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswered(false);
    setCorrectAnswersCount(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    const percentage = Math.round((correctAnswersCount / text.quizzes.length) * 100);
    return (
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 text-center flex flex-col justify-between h-full" id="quiz-finished-view">
        <div className="py-8">
          <div className="relative inline-block mb-4">
            <Trophy className="w-16 h-16 text-amber-500 mx-auto fill-amber-100" />
            <div className="absolute -top-1 -right-1 bg-primary-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
              {correctAnswersCount}
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-800 font-arm">Վիկտորինան ավարտվեց:</h3>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Ձեր արդյունքը՝ {correctAnswersCount} ճիշտ պատասխան {text.quizzes.length}-ից ({percentage}%):
          </p>

          <div className="mt-6 inline-flex p-3 rounded-2xl bg-[#f0f7ff]/75 border border-blue-105 border-blue-100 text-left gap-3 max-w-sm mx-auto">
            <Award className="w-5 h-5 text-primary-brand shrink-0 mt-0.5" />
            <p className="text-xs text-slate-700 font-arm leading-normal font-semibold">
              Շնորհավորո՛ւմ ենք: Դուք վաստակեցիք <strong className="text-primary-brand font-mono font-bold">{correctAnswersCount * 15} XP</strong> և բարձրացրեցիք ձեր ընթերցանության մակարդակը։
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-5 gap-4">
          <button
            id="btn-quiz-retry"
            onClick={handleRestartQuiz}
            className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-xs rounded-xl transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Անցնել Կրկին
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between h-full" id="quiz-game-container">
      <div>
        {/* Progress Bar Header */}
        <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3 gap-2">
          <div>
            <h3 className="text-base font-bold text-slate-850 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary-brand" />
              Խաղ 3: Գիտելիքի ստուգում (Master Trivia)
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Պատասխանե՛ք տեքստի վերաբերյալ հարցերին։
            </p>
          </div>
          <span className="text-xs font-bold text-primary-brand bg-highlight-main px-2.5 py-1 rounded-full font-mono">
            Հարց {currentQuestionIndex + 1} / {text.quizzes.length}
          </span>
        </div>

        {/* Question Text */}
        <div className="mb-6">
          <div className="text-xs text-primary-brand uppercase tracking-widest font-bold mb-1">Հարց (Question)</div>
          <p className="text-base md:text-lg font-bold text-slate-900 font-sans leading-snug">
            {currentQuestion.question}
          </p>
        </div>

        {/* Options Stack */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOptionIndex === index;
            const isCorrectAnswer = index === currentQuestion.correctIndex;

            let optionStyle = 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-350 cursor-pointer';
            
            if (isAnswered) {
              if (isCorrectAnswer) {
                optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold cursor-default';
              } else if (isSelected) {
                optionStyle = 'border-rose-300 bg-rose-50 text-rose-800 font-bold cursor-default';
              } else {
                optionStyle = 'border-slate-100 bg-slate-50 text-slate-400 opacity-60 cursor-default';
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
                className={`w-full p-3.5 md:p-4 rounded-xl border text-left text-xs md:text-sm font-sans flex items-center justify-between transition-all duration-150 ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border text-[10px] font-bold flex items-center justify-center ${
                    isSelected 
                      ? 'bg-primary-brand border-primary-brand text-white' 
                      : 'border-slate-205 text-slate-500'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="font-semibold leading-snug">{option}</span>
                </div>

                {isAnswered && isCorrectAnswer && (
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
                {isAnswered && isSelected && !isCorrectAnswer && (
                  <X className="w-4 h-4 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Bilingual Explanation area */}
        {isAnswered && (
          <div className="bg-[#f0f7ff]/75 border border-blue-105 border-blue-100 text-slate-800 rounded-2xl p-4 animate-fadeIn">
            <div className="text-[10px] text-primary-brand font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              Բացատրություն (Bilingual Explanation)
            </div>
            <p className="text-xs font-arm font-semibold text-slate-700 leading-relaxed">
              {currentQuestion.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Footer Nav Controls */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-6">
        <span className="text-xs text-slate-400">
          * Մեկ պատասխան ընտրելուց հետո կտեսնեք ճիշտ տարբերակն ու բացատրությունը։
        </span>

        {isAnswered && (
          <button
            id="btn-quiz-next"
            onClick={handleNextQuestion}
            className="flex items-center gap-1.5 bg-primary-brand hover:bg-primary-brand-hover text-white font-semibold text-xs px-4 py-2 rounded-xl"
          >
            {currentQuestionIndex + 1 === text.quizzes.length ? 'Ավարտել' : 'Հաջորդ հարցը'}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
