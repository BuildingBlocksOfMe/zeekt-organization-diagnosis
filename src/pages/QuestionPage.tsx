import { Question } from '../types';
import { ProgressBar } from '../components/ProgressBar';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales';

interface QuestionPageProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (optionId: string) => void;
}

export function QuestionPage({ 
  question, 
  currentIndex, 
  totalQuestions, 
  onAnswer 
}: QuestionPageProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const handleOptionClick = (optionId: string) => {
    onAnswer(optionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* プログレスバー */}
        <ProgressBar current={currentIndex + 1} total={totalQuestions} />

        {/* 質問カード */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
            {question.text}
          </h2>

          {/* 選択肢 */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-primary-400 hover:bg-primary-50 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-700">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="flex-1 text-gray-700 text-lg">
                    {option.text}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ヒント */}
        <p className="text-center text-sm text-gray-500">
          {t.question.hint}
        </p>
      </div>
    </div>
  );
}


