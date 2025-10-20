import { useState } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { TopPage } from './pages/TopPage';
import { QuestionPage } from './pages/QuestionPage';
import { ResultPage } from './pages/ResultPage';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { translations } from './locales';
import { Answer, DiagnosisResult } from './types';
import { generateDiagnosisResult } from './utils/scoring';

type AppState = 'top' | 'question' | 'result';

function AppContent() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [appState, setAppState] = useState<AppState>('top');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  const handleStart = () => {
    setAppState('question');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  const handleAnswer = (optionId: string) => {
    const currentQuestion = t.questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(opt => opt.id === optionId);
    
    if (!selectedOption) return;

    const answer: Answer = {
      questionId: currentQuestion.id,
      optionId: selectedOption.id,
      abilityScore: selectedOption.abilityScore,
      actionScore: selectedOption.actionScore,
    };

    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < t.questions.length - 1) {
      // 次の質問へ
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 全ての質問が終了したら結果を計算
      const diagnosisResult = generateDiagnosisResult(newAnswers, t.typeInfos);
      setResult(diagnosisResult);
      setAppState('result');
    }
  };

  const handleRestart = () => {
    setAppState('top');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <>
      <LanguageSwitcher />
      
      {appState === 'top' && <TopPage onStart={handleStart} />}
      
      {appState === 'question' && (
        <QuestionPage
          question={t.questions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          totalQuestions={t.questions.length}
          onAnswer={handleAnswer}
        />
      )}
      
      {appState === 'result' && result && (
        <ResultPage result={result} onRestart={handleRestart} />
      )}
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;


