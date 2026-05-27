import React, { useState } from 'react';
import { Sentence, TextData } from './types';
import { Volume2, BookOpen, Layers, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';

interface TextReaderProps {
  text: TextData;
  onMarkAsRead: () => void;
  isRead: boolean;
}

export const TextReader: React.FC<TextReaderProps> = ({ text, onMarkAsRead, isRead }) => {
  const [selectedSentenceId, setSelectedSentenceId] = useState<string | null>(null);
  const [readingProgress, setReadingProgress] = useState<string[]>([]);
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);

  const selectedSentence = text.sentences.find(s => s.id === selectedSentenceId);

  const handleSentenceClick = (sentence: Sentence) => {
    setSelectedSentenceId(sentence.id);
    if (!readingProgress.includes(sentence.id)) {
      setReadingProgress(prev => [...prev, sentence.id]);
    }
    // Auto-TTS Spanish pronunciation
    playTTS(sentence.spanish, sentence.id);
  };

  const playTTS = (textStr: string, id: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textStr);
      utterance.lang = 'es-ES';
      utterance.onstart = () => setIsPlayingAudio(id);
      utterance.onend = () => setIsPlayingAudio(null);
      utterance.onerror = () => setIsPlayingAudio(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  const currentReadPercentage = Math.round(
    (readingProgress.length / text.sentences.length) * 100
  );

  const resetProgress = () => {
    setReadingProgress([]);
    setSelectedSentenceId(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="text-reader-container">
      {/* Left Column: Spanish Text Reader */}
      <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
        <div>
          {/* Header Controls */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-4 mb-6 gap-2">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                text.category === 'grammar' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
              }`}>
                {text.category === 'grammar' ? 'Քերականություն (Grammar)' : 'Ընթերցում (Reading)'}
              </span>
              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-150 text-slate-800">
                {text.level}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="btn-reset-reader"
                onClick={resetProgress}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition flex items-center gap-1 text-xs font-semibold"
                title="Վերսկսել ընթերցանությունը"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Վերսկսել
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-400 mb-4 font-normal italic">
            💡 Կտտացրեք ցանկացած նախադասության վրա՝ լսելու արտասանությունը և տեսնելու հայերեն թարգմանությունը։
          </p>

          {/* Interactive Text Body in normal readable font sizes */}
          <div className="leading-relaxed text-base md:text-lg md:leading-relaxed font-sans text-slate-800 space-y-4">
            {text.sentences.map((sentence, index) => {
              const isSelected = selectedSentenceId === sentence.id;
              const isRead = readingProgress.includes(sentence.id);

              return (
                <div key={sentence.id} className="block border-b border-slate-50 pb-2 mb-2 last:border-0 last:pb-0">
                  <span
                    id={`sentence-${sentence.id}`}
                    onClick={() => handleSentenceClick(sentence)}
                    className={`inline-block cursor-pointer transition-all duration-200 rounded-md px-2 py-1 ${
                      isSelected
                        ? 'bg-amber-100 text-amber-950 font-semibold scale-[1.01] shadow-xs outline-2 outline-amber-300'
                        : isRead
                        ? 'bg-slate-50/70 border-b border-dashed border-emerald-305 text-slate-705'
                        : 'hover:bg-slate-105 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    {sentence.spanish}
                  </span>
                  
                  {/* Selected Translation is shown right under the selected sentence */}
                  {isSelected && (
                    <div className="block text-sm md:text-base text-primary-brand mt-2 mb-3 font-arm font-semibold bg-[#f0f7ff]/75 p-3 rounded-xl border-l-4 border-blue-500 leading-normal animate-fadeIn">
                      {sentence.armenian}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Reading Progress and Read Completion */}
        <div className="mt-8 border-t border-slate-100 pt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500">Ընթերցման առաջընթաց՝</span>
            <span className="text-xs font-bold text-emerald-600">{currentReadPercentage}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${currentReadPercentage}%` }}
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-slate-400">
              {readingProgress.length} / {text.sentences.length} նախադասություն
            </span>

            {currentReadPercentage === 100 || isRead ? (
              <span className="flex items-center gap-1.5 font-semibold text-xs text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Կարդացված է
              </span>
            ) : (
              <button
                id="btn-complete-reading"
                onClick={onMarkAsRead}
                className="flex items-center gap-1.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs px-4 py-2 rounded-xl shadow-xs cursor-pointer transition"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Ավարտել ընթերցանությունը
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Sentence Detail & Instant Translation Widget on White Background */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        {/* Translation Card is now an elegant white card with 100% visible text */}
        <div className="bg-white text-slate-800 rounded-3xl p-6 shadow-sm border border-slate-205 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500 flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                Արտասանություն և Թարգմանություն
              </span>
              {selectedSentence && (
                <button
                  id="btn-play-selected-tts"
                  onClick={() => playTTS(selectedSentence.spanish, selectedSentence.id)}
                  className="p-1 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition text-xs flex items-center gap-1 font-semibold"
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio === selectedSentence.id ? 'animate-bounce' : ''}`} />
                  Լսել
                </button>
              )}
            </div>

            {selectedSentence ? (
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-amber-800 font-bold mb-1">Español</div>
                  <blockquote className="text-lg md:text-xl font-bold leading-relaxed font-sans select-all text-slate-900">
                    "{selectedSentence.spanish}"
                  </blockquote>
                </div>
                
                <div className="border-t border-slate-100 pt-4">
                  <div className="text-xs text-blue-700 font-bold mb-1">Հայերեն թարգմանություն (Armenian)</div>
                  <blockquote className="text-base md:text-lg font-semibold text-slate-700 leading-relaxed font-arm select-all">
                    {selectedSentence.armenian}
                  </blockquote>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center text-slate-450">
                <Layers className="w-12 h-12 stroke-1 mb-3 text-slate-350" />
                <p className="text-sm font-semibold text-slate-500">Նախադասություն ընտրված չէ</p>
                <p className="text-xs text-slate-400 mt-1 max-w-[240px]">
                  Ձախ կողմից սեղմեք նախադասության վրա՝ թարգմանությունը այստեղ տեսնելու համար։
                </p>
              </div>
            )}
          </div>

          {selectedSentence && (
            <div className="mt-8 border-t border-slate-100 pt-4 flex items-center justify-end">
              <button
                id="btn-next-sentence"
                onClick={() => {
                  const currentIndex = text.sentences.findIndex(s => s.id === selectedSentenceId);
                  const nextIndex = (currentIndex + 1) % text.sentences.length;
                  handleSentenceClick(text.sentences[nextIndex]);
                }}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-xs font-bold bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl transition"
              >
                Հաջորդ նախադասությունը
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Quick Words Widget */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary-brand" />
            Հիմնական բառապաշար ({text.vocabulary.length} բառ)
          </h4>
          <div className="divide-y divide-slate-100 max-h-[220px] overflow-y-auto pr-1">
            {text.vocabulary.map((vocab) => (
              <div key={vocab.id} className="py-2.5 flex justify-between items-start text-sm gap-3">
                <div>
                  <span className="font-bold text-amber-800 font-sans">{vocab.spanish}</span>
                  {vocab.exampleEs && (
                    <p className="text-slate-400 text-xs mt-0.5 italic">{vocab.exampleEs}</p>
                  )}
                </div>
                <div className="text-right">
                  <span className="font-semibold text-slate-700 font-arm text-sm">{vocab.armenian}</span>
                  {vocab.exampleHy && (
                    <p className="text-slate-450 text-xs mt-0.5 font-arm">{vocab.exampleHy}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
