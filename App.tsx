import React, { useState, useEffect } from 'react';
import { textsData } from './data';
import { UserProgress, TextData } from './types';
import { TextReader } from './TextReader';
import { InteractiveGames } from './InteractiveGames';
import {
  Flame,
  Award,
  BookOpen,
  Gamepad2,
  Sparkles,
  HelpCircle,
  Search,
  Filter,
  Volume2,
  ChevronLeft,
  ChevronRight,
  BookOpenCheck,
  RotateCcw,
  Book,
  Trophy,
  ArrowLeft,
  ChevronDown,
  Info
} from 'lucide-react';

const LOCAL_STORAGE_KEY = 'es_hy_learning_progress_v1';

const MOTIVATIONAL_PROVERBS = [
  { es: "La unión hace la fuerza.", hy: "Միությունը ուժ է տալիս։", author: "Ժողովրդական" },
  { es: "Poco a poco se va lejos.", hy: "Քայլ առ քայլ հեռու կգնաս (Կաթիլ-կաթիլ լիճ է դառնում)։", author: "Ժողովրդական" },
  { es: "Quien busca, encuentra.", hy: "Ով փնտրում է, նա կգտնի։", author: "Ժողովրդական" },
  { es: "Más vale tarde que nunca.", hy: "Ավելի լավ է ուշ, քան երբեք։", author: "Ժողովրդական" },
  { es: "El saber no ocupa lugar.", hy: "Գիտելիքը տեղ չի զբաղեցնում։", author: "Ժողովրդական" }
];

export default function App() {
  // --- Progress State & Saving ---
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing progress statistics:", e);
      }
    }
    // Default initial progress
    return {
      readTexts: [],
      completedGames: {},
      streak: 1,
      lastActive: new Date().toISOString().split('T')[0],
      xp: 0
    };
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // --- Active Text & Workspace Toggles ---
  const [selectedTextId, setSelectedTextId] = useState<string | null>(() => {
    return textsData[0]?.id || null;
  });
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<'read' | 'games'>('read');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // --- Filters ---
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'general' | 'grammar'>('all');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'A1' | 'A2' | 'B1'>('all');

  // --- Widget States ---
  const [proverbIndex, setProverbIndex] = useState<number>(0);
  const [showCheatsheet, setShowCheatsheet] = useState<boolean>(false);

  useEffect(() => {
    // Select random proverb on mount
    setProverbIndex(Math.floor(Math.random() * MOTIVATIONAL_PROVERBS.length));
    
    // Check streak
    const todayStr = new Date().toISOString().split('T')[0];
    if (progress.lastActive && progress.lastActive !== todayStr) {
      const lastActiveDate = new Date(progress.lastActive);
      const todayDate = new Date(todayStr);
      const diffTime = Math.abs(todayDate.getTime() - lastActiveDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        // Increment streak
        setProgress(prev => ({
          ...prev,
          streak: prev.streak + 1,
          lastActive: todayStr
        }));
      } else if (diffDays > 1) {
        // Reset streak
        setProgress(prev => ({
          ...prev,
          streak: 1,
          lastActive: todayStr
        }));
      }
    }
  }, []);

  const currentText = textsData.find(t => t.id === selectedTextId);

  // --- Sequential Lesson Navigation ---
  const currentIndex = currentText ? textsData.findIndex(t => t.id === currentText.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < textsData.length - 1;

  const handlePrevLesson = () => {
    if (hasPrev) {
      setSelectedTextId(textsData[currentIndex - 1].id);
      setActiveWorkspaceTab('read');
      setIsMobileSidebarOpen(false);
    }
  };

  const handleNextLesson = () => {
    if (hasNext) {
      setSelectedTextId(textsData[currentIndex + 1].id);
      setActiveWorkspaceTab('read');
      setIsMobileSidebarOpen(false);
    }
  };

  // --- Actions ---
  const handleMarkAsRead = (textId: string) => {
    if (!progress.readTexts.includes(textId)) {
      setProgress(prev => ({
        ...prev,
        readTexts: [...prev.readTexts, textId],
        xp: prev.xp + 50 // 50 XP upon complete reading
      }));
    }
  };

  const handleGameCompleted = (textId: string, type: 'scramble' | 'match' | 'quiz', score?: number) => {
    setProgress(prev => {
      const currentGames = prev.completedGames[textId] || { scramble: false, match: false, quizScore: 0 };
      const nextGames = { ...currentGames };
      
      if (type === 'scramble') {
        nextGames.scramble = true;
      } else if (type === 'match') {
        nextGames.match = true;
      } else if (type === 'quiz' && score !== undefined) {
        nextGames.quizScore = Math.max(nextGames.quizScore, score);
      }

      return {
        ...prev,
        completedGames: {
          ...prev.completedGames,
          [textId]: nextGames
        }
      };
    });
  };

  const handleAddXP = (gained: number) => {
    setProgress(prev => ({
      ...prev,
      xp: prev.xp + gained
    }));
  };

  const handleResetAllData = () => {
    if (window.confirm("Ցանկանո՞ւմ եք ջնջել ձեր ողջ առաջընթացը և սկսել կրկին։")) {
      const newProgress: UserProgress = {
        readTexts: [],
        completedGames: {},
        streak: 1,
        lastActive: new Date().toISOString().split('T')[0],
        xp: 0
      };
      setProgress(newProgress);
      setSelectedTextId(null);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProgress));
    }
  };

  // --- Helper Calculations ---
  const activeCompletedStatus = currentText ? (progress.completedGames[currentText.id] || { scramble: false, match: false, quizScore: 0 }) : { scramble: false, match: false, quizScore: 0 };

  const getFluencyRank = (xp: number) => {
    if (xp < 100) return { title: "Սկսնակ / Principiante 🥚", color: "text-slate-500 bg-slate-100 border border-slate-200" };
    if (xp < 300) return { title: "Ճամփորդ / Explorador 🚶", color: "text-amber-800 bg-amber-50 border border-amber-250 border-amber-200" };
    if (xp < 600) return { title: "Կիրթ / Hablante 💬", color: "text-primary-brand bg-highlight-main border border-blue-200" };
    return { title: "Գիտակ / Maestro 🏆", color: "text-white bg-gradient-to-r from-blue-600 to-indigo-700 shadow-sm" };
  };

  const currentRank = getFluencyRank(progress.xp);

  // --- Speak proverb ---
  const playProverbTTS = (textStr: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textStr);
      utterance.lang = 'es-ES';
      window.speechSynthesis.speak(utterance);
    }
  };

  // --- Filter Logic ---
  const filteredTexts = textsData.filter(text => {
    const matchesSearch = 
      text.titleEs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      text.titleHy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      text.descriptionEs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      text.descriptionHy.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || text.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || text.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans text-slate-850 bg-white">
      
      {/* ==========================================
         1. PERSISTENT SIDEBAR ON DESKTOP (FLAT LESSONS LIST)
         ========================================== */}
      <aside className="hidden lg:flex flex-col w-[340px] xl:w-[380px] shrink-0 border-r border-slate-200 bg-white h-screen sticky top-0 overflow-y-auto shrink-0 shadow-xs z-10">
        
        {/* Brand & Logo Header */}
        <div className="p-5 border-b border-slate-150 bg-slate-50/50 shrink-0">
          <div className="flex items-center gap-3 select-none">
            <div className="w-10 h-10 rounded-2xl bg-[#2563eb] flex items-center justify-center text-white shadow-md shadow-blue-100 text-lg">
              🇪🇸
            </div>
            <div>
              <h1 className="text-lg font-bold font-display tracking-tight text-slate-900">
                LinguArm <span className="text-sm font-normal text-slate-400">🇦🇲</span>
              </h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-arm">
                Spanish-Armenian Reader
              </p>
            </div>
          </div>
        </div>

        {/* User Level and XP Dashboard */}
        <div className="px-5 py-4 border-b border-slate-100 shrink-0 space-y-2.5 bg-white">
          <div className="flex gap-2">
            {/* Streak */}
            <div className="flex-1 flex items-center justify-center gap-1.5 bg-rose-50 border border-rose-100 text-rose-700 py-1.5 rounded-xl text-xs font-bold font-mono shadow-xs" title="Ակտիվության օրեր">
              <Flame className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>{progress.streak} օր</span>
            </div>
            {/* Experience state */}
            <div className="flex-1 flex items-center justify-center gap-1.5 bg-highlight-main border border-blue-100 text-primary-brand py-1.5 rounded-xl text-xs font-bold font-mono shadow-xs" title="Ընդհանուր XP">
              <Award className="w-4 h-4 text-primary-brand" />
              <span>{progress.xp} XP</span>
            </div>
          </div>
          {/* Level Title Status */}
          <div className={`py-1.5 px-3 rounded-xl text-center text-[11px] font-extrabold shadow-none border border-slate-100 flex items-center justify-center gap-1.5 ${currentRank.color}`}>
            <span className="font-display">Մակարդակ`</span>
            <span>{currentRank.title}</span>
          </div>
        </div>

        {/* Filter & Search controls Area */}
        <div className="p-4 border-b border-slate-100 bg-white shrink-0 space-y-3">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Փնտրել տեքստեր (իսպ / հայ)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 border rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-primary-brand transition border-slate-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Filter Category */}
            <div className="relative flex items-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
                className="w-full pl-2 pr-6 py-1.5 border rounded-xl text-[11px] bg-slate-50 focus:bg-white focus:outline-primary-brand cursor-pointer border-slate-200 appearance-none font-semibold text-slate-600"
              >
                <option value="all">Բոլոր նյութերը</option>
                <option value="general">Տեքստեր</option>
                <option value="grammar">Քերականություն</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 pointer-events-none" />
            </div>

            {/* Filter Level */}
            <div className="relative flex items-center">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as any)}
                className="w-full pl-2 pr-6 py-1.5 border rounded-xl text-[11px] bg-slate-50 focus:bg-white focus:outline-primary-brand cursor-pointer border-slate-200 appearance-none font-semibold text-slate-600"
              >
                <option value="all">Բոլոր մակարդակները</option>
                <option value="A1">A1 - Սկսնակ</option>
                <option value="A2">A2 - Միջինից ցածր</option>
                <option value="B1">B1 - Միջին</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Lessons List (Flat representation, no folder nesting) */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100 bg-white">
          {filteredTexts.length > 0 ? (
            filteredTexts.map((text) => {
              const isActive = selectedTextId === text.id;
              const isRead = progress.readTexts.includes(text.id);
              const completed = progress.completedGames[text.id] || { scramble: false, match: false, quizScore: 0 };

              return (
                <button
                  key={text.id}
                  onClick={() => {
                    setSelectedTextId(text.id);
                    setActiveWorkspaceTab('read');
                  }}
                  className={`w-full text-left p-4 transition-all duration-150 border-l-4 flex flex-col gap-1 cursor-pointer select-none border-b border-dashed border-b-slate-100 ${
                    isActive
                      ? 'bg-blue-50/50 border-primary-brand'
                      : 'bg-white border-transparent hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                      text.category === 'grammar' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {text.category === 'grammar' ? text.tenseLabel || 'Քերականություն' : 'Ընթերցանություն'}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 font-mono">{text.level}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-800 font-sans truncate w-full">
                    {text.titleEs}
                  </h3>
                  <h4 className="text-xs font-semibold text-slate-500 font-arm truncate w-full leading-relaxed">
                    {text.titleHy}
                  </h4>

                  {/* Indicators */}
                  <div className="flex items-center justify-between mt-2.5">
                    {isRead ? (
                      <span className="flex items-center gap-0.5 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-100">
                        <BookOpenCheck className="w-3 h-3" />
                        Կարդացված
                      </span>
                    ) : (
                      <span className="text-[9px] text-slate-400 font-medium font-arm">Չընթերցված</span>
                    )}

                    <div className="flex gap-1 items-center">
                      <span className={`w-1.5 h-1.5 rounded-full ${completed.scramble ? 'bg-amber-500' : 'bg-slate-200'}`} title="🧩 Բառերի շարք" />
                      <span className={`w-1.5 h-1.5 rounded-full ${completed.match ? 'bg-primary-brand' : 'bg-slate-200'}`} title="🔗 Բառերի համընկնում" />
                      <span className={`w-1.5 h-1.5 rounded-full ${completed.quizScore > 0 ? 'bg-purple-500' : 'bg-slate-200'}`} title="🎓 Վիկտորինա" />
                    </div>
                  </div>
                </button>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-400">
              <Book className="w-10 h-10 mx-auto stroke-1 text-slate-300 mb-2" />
              <p className="text-xs font-semibold">Համապատասխան նյութ չկա</p>
            </div>
          )}
        </div>

        {/* Side Panel Footer controls */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 shrink-0 flex items-center justify-between text-[10px] text-slate-400">
          <button
            onClick={handleResetAllData}
            className="font-bold hover:text-rose-600 transition flex items-center gap-1 font-arm cursor-pointer"
          >
            <RotateCcw className="w-2.5 h-2.5" />
            Մաքրել առաջընթացը
          </button>
          <span className="font-mono">Aprende v1.2</span>
        </div>
      </aside>

      {/* ==========================================
         2. COMPACT MOBILE HEADER (FOR FLAT LEVEL ACCESS)
         ========================================== */}
      <header className="lg:hidden shrink-0 bg-white border-b border-slate-200 p-4 sticky top-0 z-30 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">🇪🇸</span>
          <div>
            <h1 className="text-sm font-bold font-sans text-slate-900">LinguArm 🇦🇲</h1>
            <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Bilingual Spanish Reader</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* XP Badge compact */}
          <span className="bg-blue-50 text-primary-brand text-[10px] font-bold px-2 py-1 rounded-lg">
            {progress.xp} XP
          </span>

          {/* Collapsible drawer trigger */}
          <button
            onClick={() => setIsMobileSidebarOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[11px] font-bold rounded-xl shadow-xs transition cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Դասեր ({filteredTexts.length})
          </button>
        </div>
      </header>

      {/* ==========================================
         3. MOBILE COLLAPSIBLE DRAWER OVERLAY
         ========================================== */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Mask Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          {/* Drawer Wrapper */}
          <div className="relative w-[320px] max-w-[85vw] h-full bg-white flex flex-col shadow-xl z-10 animate-fadeIn">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-150 flex items-center justify-between bg-slate-50">
              <span className="text-xs font-bold text-slate-600 font-arm">Ընտրեք ուսումնական նյութը</span>
              <button 
                onClick={() => setIsMobileSidebarOpen(false)}
                className="p-1 px-2.5 text-xs font-bold bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg cursor-pointer"
              >
                Փակել
              </button>
            </div>

            {/* Quick search inside drawer */}
            <div className="p-3 bg-white border-b border-slate-100 space-y-2">
              <div className="relative flex items-center">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Որոնել..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 border rounded-xl text-xs bg-slate-50 focus:bg-white text-slate-800"
                />
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as any)}
                  className="w-full px-2 py-1 border rounded-lg text-[10px] bg-slate-50 text-slate-705 text-slate-700"
                >
                  <option value="all">Բոլոր նյութերը</option>
                  <option value="general">Տեքստեր</option>
                  <option value="grammar">Քերականություն</option>
                </select>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value as any)}
                  className="w-full px-2 py-1 border rounded-lg text-[10px] bg-slate-50 text-slate-707 text-slate-700"
                >
                  <option value="all">Բոլոր մակարդակները</option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                </select>
              </div>
            </div>

            {/* Scrollable Document listing */}
            <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
              {filteredTexts.map((text) => {
                const isActive = selectedTextId === text.id;
                const isRead = progress.readTexts.includes(text.id);
                const completed = progress.completedGames[text.id] || { scramble: false, match: false, quizScore: 0 };

                return (
                  <button
                    key={text.id}
                    onClick={() => {
                      setSelectedTextId(text.id);
                      setActiveWorkspaceTab('read');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full text-left p-4 transition-all text-xs border-l-4 block ${
                      isActive ? 'bg-blue-50/50 border-primary-brand' : 'bg-white border-transparent hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex justify-between items-center text-[9px] text-slate-400 mb-1">
                      <span>{text.category === 'grammar' ? 'Քերականություն' : 'Ընթերցում'}</span>
                      <span className="font-mono font-bold">{text.level}</span>
                    </div>
                    <h4 className="font-bold text-slate-800 truncate">{text.titleEs}</h4>
                    <p className="text-[10px] font-arm font-semibold text-slate-500 truncate mt-0.5">{text.titleHy}</p>
                    <div className="flex items-center justify-between mt-2.5">
                      {isRead ? (
                        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">Կարդացված</span>
                      ) : (
                        <span className="text-[9px] text-slate-400 font-arm">Չընթերցված</span>
                      )}
                      
                      <div className="flex gap-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${completed.scramble ? 'bg-amber-500' : 'bg-slate-200'}`} />
                        <span className={`w-1.5 h-1.5 rounded-full ${completed.match ? 'bg-primary-brand' : 'bg-slate-200'}`} />
                        <span className={`w-1.5 h-1.5 rounded-full ${completed.quizScore > 0 ? 'bg-purple-500' : 'bg-slate-200'}`} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
         4. MAIN CONTENT WORKSPACE & REFERENCE BENTO FOOTE
         ========================================== */}
      <main className="flex-1 lg:h-screen lg:overflow-y-auto px-4 py-6 md:p-8 space-y-6 flex flex-col justify-between">
        
        <div className="space-y-6">
          {/* Active Lesson Header controls */}
          {currentText ? (
            <div className="bg-white dark:bg-slate-900 p-4 font-sans md:p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-brand flex items-center justify-center font-bold text-sm shrink-0">
                  {currentText.level}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400">Ակտիվ դաս`</span>
                    <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-highlight-main text-primary-brand">
                      {currentText.category === 'grammar' ? 'Քերականություն' : 'Ընթերցանություն'}
                    </span>
                  </div>
                  <h2 className="text-base md:text-lg font-extrabold text-slate-900 font-sans leading-tight break-words">
                    {currentText.titleEs} — <span className="font-arm font-semibold text-slate-600 text-sm md:text-base">{currentText.titleHy}</span>
                  </h2>
                </div>
                
                {/* Visual arrow headers for easy switching */}
                <div className="flex items-center gap-1 shrink-0 ml-auto sm:ml-2">
                  <button
                    onClick={handlePrevLesson}
                    disabled={!hasPrev}
                    className={`p-1.5 rounded-lg border transition ${
                      hasPrev 
                        ? 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 active:bg-slate-150 cursor-pointer' 
                        : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
                    }`}
                    title="Նախորդ դասը"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextLesson}
                    disabled={!hasNext}
                    className={`p-1.5 rounded-lg border transition ${
                      hasNext 
                        ? 'bg-blue-50 border-blue-200 text-[#2563eb] hover:bg-blue-100 active:bg-blue-150 cursor-pointer font-bold' 
                        : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
                    }`}
                    title="Հաջորդ դասը"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Text Reader vs Interactive Games tabs selector */}
              <div className="bg-slate-100 p-1 rounded-xl flex gap-1 self-stretch sm:self-auto shrink-0">
                <button
                  id="btn-workspace-tab-read"
                  onClick={() => setActiveWorkspaceTab('read')}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeWorkspaceTab === 'read'
                      ? 'bg-white text-primary-brand shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                  📖 Ընթերցանություն
                </button>
                <button
                  id="btn-workspace-tab-games"
                  onClick={() => setActiveWorkspaceTab('games')}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeWorkspaceTab === 'games'
                      ? 'bg-white text-primary-brand shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Gamepad2 className="w-3.5 h-3.5 text-amber-500" />
                  🎮 Խաղեր
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-3xl text-center text-slate-400 border border-slate-100">
              <Book className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-bold">Ընտրեք որևէ դաս ձախ ցանկից սկսելու համար։</p>
            </div>
          )}

          {/* Central Active component window (Reader or Games) */}
          {currentText && (
            <div className="min-h-[500px]">
              {activeWorkspaceTab === 'read' ? (
                <TextReader
                  text={currentText}
                  onMarkAsRead={() => handleMarkAsRead(currentText.id)}
                  isRead={progress.readTexts.includes(currentText.id)}
                />
              ) : (
                <InteractiveGames
                  text={currentText}
                  onXPChange={handleAddXP}
                  onGameCompleted={(type, score) => handleGameCompleted(currentText.id, type, score)}
                  completedStatus={activeCompletedStatus}
                />
              )}
            </div>
          )}

          {/* Persistent Progress & Sequential Lesson Navigation Bar */}
          {currentText && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-medium font-arm">
                Դասընթացի առաջընթաց՝ <span className="font-bold text-slate-800 font-sans">{(currentIndex + 1)} / {textsData.length}</span> դասերից
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handlePrevLesson}
                  disabled={!hasPrev}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 border rounded-xl text-xs font-bold transition-all ${
                    hasPrev
                      ? 'bg-white border-slate-250 text-slate-700 hover:bg-slate-50 active:bg-slate-100 cursor-pointer shadow-xs'
                      : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Նախորդ դասը
                </button>
                
                <button
                  onClick={handleNextLesson}
                  disabled={!hasNext}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2 border rounded-xl text-xs font-bold transition-all ${
                    hasNext
                      ? 'bg-[#2563eb] border-blue-600 text-white hover:bg-[#1d4ed8] active:bg-[#1e40af] cursor-pointer shadow-md shadow-blue-105'
                      : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
                  }`}
                >
                  Հաջորդ դասը
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bento references footer block (Stack/Grid) */}
        <div className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
            
            {/* Proverbo display widget */}
            <div className="bg-white text-slate-800 rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <span className="text-xs uppercase font-bold text-amber-800 tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Օրվա Ասացվածքը (Proverbio del Día)
                  </span>
                  <button
                    onClick={() => playProverbTTS(MOTIVATIONAL_PROVERBS[proverbIndex].es)}
                    className="px-2.5 py-1 text-[11px] bg-slate-100 hover:bg-slate-205 text-slate-700 rounded-lg transition font-semibold"
                    title="Լսել ասացվածքը"
                  >
                    Լսել 🗣️
                  </button>
                </div>
                
                <blockquote className="text-base md:text-lg font-bold font-sans italic text-slate-900 leading-relaxed select-all">
                  "{MOTIVATIONAL_PROVERBS[proverbIndex].es}"
                </blockquote>
                
                <p className="text-sm text-slate-700 font-arm font-semibold mt-3 leading-normal border-l-2 border-indigo-505 border-indigo-500 pl-3">
                  {MOTIVATIONAL_PROVERBS[proverbIndex].hy}
                </p>
              </div>

              <div className="mt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Հեղինակ` {MOTIVATIONAL_PROVERBS[proverbIndex].author}</span>
                <button
                  onClick={() => setProverbIndex((proverbIndex + 1) % MOTIVATIONAL_PROVERBS.length)}
                  className="text-indigo-600 hover:text-indigo-800 font-bold"
                >
                  Հաջորդը →
                </button>
              </div>
            </div>

            {/* Grammar auxiliary helper cheatsheet */}
            <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                  <Book className="w-4 h-4 text-indigo-500" />
                  Քերականական Օգնական
                </h3>
                <p className="text-xs text-slate-450 leading-relaxed mb-4">
                  Արագ վերանայե՛ք իսպաներեն հիմնական անցյալ ժամանակների օժանդակ բայերն ու ձևերը:
                </p>

                <button
                  onClick={() => setShowCheatsheet(!showCheatsheet)}
                  className="w-full flex items-center justify-between bg-indigo-50 hover:bg-indigo-100 text-indigo-750 font-bold text-xs py-3 px-4 rounded-xl transition cursor-pointer"
                >
                  <span>{showCheatsheet ? 'Թաքցնել տեղեկատուն' : 'Բացել վերանայման աղյուսակը'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showCheatsheet ? 'rotate-180' : ''}`} />
                </button>

                {showCheatsheet && (
                  <div className="mt-4 space-y-4 pt-4 border-t border-slate-100 animate-fadeIn text-[11px] leading-relaxed max-h-[160px] overflow-y-auto pr-1">
                    
                    <div className="space-y-1">
                      <strong className="text-amber-800 font-sans block">1. Pretérito Perfecto (haber + participio):</strong>
                      <code className="block bg-slate-50 p-2 rounded-lg text-slate-600 font-mono text-[10px]">
                        yo he, tú has, él ha, nosotros hemos, vosotros habéis, ellos han + -ado / -ido
                      </code>
                    </div>

                    <div className="space-y-1">
                      <strong className="text-indigo-800 font-sans block">2. Pretérito Indefinido (ավարտված անցյալ):</strong>
                      <code className="block bg-slate-50 p-2 rounded-lg text-slate-600 font-mono text-[10px]">
                        Hablar: hablé, hablaste, habló... | Comer: comí, comiste, comió...
                      </code>
                    </div>

                    <div className="space-y-1">
                      <strong className="text-purple-800 font-sans block">3. Pretérito Imperfecto (նկարագրություն):</strong>
                      <code className="block bg-slate-50 p-2 rounded-lg text-slate-600 font-mono text-[10px]">
                        Vivía, vivías, vivía... | Jugaba, jugabas, jugaba...
                      </code>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Simple footer bar info */}
          <footer className="border-t border-slate-150 py-4 mt-4 text-center text-xs text-slate-400 font-sans flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-arm leading-normal text-left">
              Aprende Español &copy; 2026 — Spanish to Armenian Interactive Bilingual Reader
            </p>
            <div className="flex gap-2">
              <span className="text-slate-400">Offline-first Persistence</span>
              <span>•</span>
              <span className="text-slate-400">Speech Pronunciation Guidance</span>
            </div>
          </footer>
        </div>

      </main>

    </div>
  );
}
