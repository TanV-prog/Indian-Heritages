'use client';

import React, { useState } from 'react';
import { LEARNING_MODULES, QUIZ_QUESTIONS, LearningModule, QuizQuestion } from '@/lib/heritage-data';
import { BookOpen, HelpCircle, Check, X, RotateCcw, ArrowRight } from 'lucide-react';

export default function LearningSection() {
  const [selectedModule, setSelectedModule] = useState<LearningModule>(LEARNING_MODULES[0]);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const currentQuestion: QuizQuestion = QUIZ_QUESTIONS[currentQuizIdx] || QUIZ_QUESTIONS[0];

  const handleSelectOption = (idx: number) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(idx);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setQuizScore(quizScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    if (currentQuizIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizIdx(currentQuizIdx + 1);
    } else {
      // Loop or finish
      setCurrentQuizIdx(0);
      setQuizScore(0);
    }
  };

  return (
    <section id="learn" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E8D8BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A735A] font-medium mb-3">
            <span>Pedagogical Heritage Modules</span>
            <span aria-hidden="true">·</span>
            <span>Educational Commons</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#35443A] font-semibold tracking-tight">
            Learn From India&apos;s Heritage
          </h2>
          <p className="mt-3 text-base text-[#35443A]/85 leading-relaxed">
            Educational curricula designed for students and researchers exploring traditional ecological knowledge, zero-chemical metallurgy, and living craft mathematics.
          </p>
        </div>

        {/* Learning Modules Grid and Active Reader */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Module Selector Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8A735A] block mb-1">
              Select Study Curriculum:
            </span>
            {LEARNING_MODULES.map((mod) => {
              const isSelected = selectedModule.id === mod.id;
              return (
                <div
                  key={mod.id}
                  onClick={() => setSelectedModule(mod)}
                  className={`p-5 rounded-sm border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#E8D8BD]/30 border-[#5F806B] shadow-xs'
                      : 'bg-[#FAF7F0] border-[#E8D8BD] hover:border-[#8FAF9A]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#8A735A] mb-1 font-medium">
                    <span className="uppercase text-[#5F806B] font-semibold">
                      {mod.category}
                    </span>
                    <span>{mod.readTime}</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#35443A]">
                    {mod.title}
                  </h4>
                  <p className="mt-2 text-xs text-[#35443A]/75 line-clamp-2 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Module Deep Reader Canvas (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-[#FAF7F0] border border-[#E8D8BD] rounded-sm space-y-8 shadow-2xs">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#5F806B] font-semibold uppercase tracking-wider mb-1">
                <BookOpen className="w-4 h-4" />
                <span>Curriculum Document</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#35443A]">
                {selectedModule.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#35443A]/85 leading-relaxed font-sans first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-[#5F806B]">
                {selectedModule.introduction}
              </p>
            </div>

            {/* Key Facts Definition Grid */}
            <div className="pt-6 border-t border-[#E8D8BD]/80">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8A735A] mb-3">
                Key Ecological & Cultural Facts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedModule.keyFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#F8F4EC] border border-[#E8D8BD] rounded-xs text-xs text-[#35443A]/90 leading-relaxed"
                  >
                    <span className="font-bold text-[#5F806B] mr-1.5">0{idx + 1}.</span>
                    {fact}
                  </div>
                ))}
              </div>
            </div>

            {/* Traditional Process Steps */}
            <div className="pt-6 border-t border-[#E8D8BD]/80">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8A735A] mb-3">
                Traditional Process Methodology
              </h4>
              <div className="space-y-2.5">
                {selectedModule.traditionalProcess.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#FAF7F0] border-l-2 border-[#5F806B] border-y border-r border-[#E8D8BD] rounded-r-xs text-xs text-[#35443A] leading-relaxed"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural Significance Callout */}
            <div className="pt-6 border-t border-[#E8D8BD]/80 p-4 bg-[#F1F6F3] rounded-sm border border-[#8FAF9A]/60">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#5F806B] block mb-1">
                Ethical & Community Significance
              </span>
              <p className="text-xs sm:text-sm text-[#35443A] leading-relaxed italic font-serif">
                {selectedModule.culturalSignificance}
              </p>
            </div>
          </div>

        </div>

        {/* Interactive Mini Quiz Component */}
        <div className="p-6 sm:p-10 bg-[#F8F4EC] border border-[#E8D8BD] rounded-sm max-w-4xl mx-auto shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#E8D8BD] gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#5F806B] text-[#FAF7F0] flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#5F806B]">
                  Knowledge Checkpoint
                </span>
                <h4 className="font-serif text-lg font-bold text-[#35443A]">
                  Heritage Mini Quiz
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-[#8A735A]">
              <span>
                Question {currentQuizIdx + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <span>·</span>
              <span>Score: {quizScore}</span>
            </div>
          </div>

          {/* Question Text */}
          <div className="py-6">
            <h5 className="font-serif text-lg sm:text-xl font-semibold text-[#35443A] leading-snug">
              {currentQuestion.question}
            </h5>

            {/* Options */}
            <div className="mt-6 space-y-3">
              {currentQuestion.options.map((opt, idx) => {
                let optionStyle =
                  'bg-[#FAF7F0] border-[#E8D8BD] text-[#35443A] hover:border-[#8FAF9A]';

                if (selectedAnswer === idx) {
                  optionStyle = 'bg-[#FAF7F0] border-[#5F806B] ring-1 ring-[#5F806B]';
                }

                if (isAnswerSubmitted) {
                  if (idx === currentQuestion.correctAnswer) {
                    optionStyle = 'bg-green-50 border-green-600 text-green-900 font-semibold';
                  } else if (selectedAnswer === idx) {
                    optionStyle = 'bg-red-50 border-red-500 text-red-900';
                  } else {
                    optionStyle = 'bg-[#FAF7F0]/60 border-[#E8D8BD]/60 text-[#35443A]/50';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswerSubmitted}
                    type="button"
                    className={`w-full p-4 rounded-xs border text-left text-xs sm:text-sm transition-colors flex items-center justify-between cursor-pointer ${optionStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswerSubmitted && idx === currentQuestion.correctAnswer && (
                      <Check className="w-4 h-4 text-green-700 shrink-0 ml-2" />
                    )}
                    {isAnswerSubmitted && selectedAnswer === idx && idx !== currentQuestion.correctAnswer && (
                      <X className="w-4 h-4 text-red-700 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation when submitted */}
            {isAnswerSubmitted && (
              <div className="mt-5 p-4 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-xs text-[#35443A] leading-relaxed">
                <span className="font-semibold text-[#5F806B] block mb-1">
                  Archival Explanation:
                </span>
                {currentQuestion.explanation}
              </div>
            )}
          </div>

          {/* Quiz Action Footer */}
          <div className="pt-4 border-t border-[#E8D8BD] flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedAnswer(null);
                setIsAnswerSubmitted(false);
              }}
              className="inline-flex items-center gap-1.5 text-xs text-[#8A735A] hover:text-[#35443A]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset this Question</span>
            </button>

            {!isAnswerSubmitted ? (
              <button
                onClick={handleCheckAnswer}
                disabled={selectedAnswer === null}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] disabled:opacity-40 rounded-sm cursor-pointer shadow-xs"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#35443A] hover:bg-black rounded-sm cursor-pointer shadow-xs"
              >
                <span>{currentQuizIdx < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'Restart Quiz'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
