import { useState } from 'react';
import { TopPage } from './pages/TopPage';
import { QuestionPage } from './pages/QuestionPage';
import { ResultPage } from './pages/ResultPage';
import { questions } from './data/questions';
import { Answer, DiagnosisResult } from './types';
import { generateDiagnosisResult } from './utils/scoring';

type AppState = 'top' | 'question' | 'result';

function App() {
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

  const handleAnswer = (answer: Answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      // 次の質問へ
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 全ての質問が終了したら結果を計算
      const diagnosisResult = generateDiagnosisResult(newAnswers);
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
      {appState === 'top' && <TopPage onStart={handleStart} />}
      
      {appState === 'question' && (
        <QuestionPage
          question={questions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      
      {appState === 'result' && result && (
        <ResultPage result={result} onRestart={handleRestart} />
      )}
    </>
  );
}

export default App;


