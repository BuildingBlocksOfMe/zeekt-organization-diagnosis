import { DiagnosisResult } from '../types';
import { MatrixChart } from '../components/MatrixChart';
import { ShareButtons } from '../components/ShareButtons';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales';

interface ResultPageProps {
  result: DiagnosisResult;
  onRestart: () => void;
}

export function ResultPage({ result, onRestart }: ResultPageProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const typeInfo = t.typeInfos[result.type];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* 結果タイトル */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block px-6 py-2 rounded-full bg-white shadow-md mb-4">
            <span className="text-sm font-semibold text-gray-600">{t.result.diagnosisResult}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {result.title}
          </h1>
          <div 
            className="inline-block px-8 py-3 rounded-full text-2xl font-bold text-white shadow-lg"
            style={{ backgroundColor: typeInfo.color }}
          >
            {typeInfo.name}
          </div>
        </div>

        {/* 説明カード */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.result.yourCharacteristics}</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {result.description}
          </p>
        </div>

        {/* マトリクス図 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t.result.yourPosition}</h2>
          <MatrixChart 
            abilityScore={result.abilityScore} 
            actionScore={result.actionScore} 
          />
          <div className="text-center text-gray-600 mt-4">
            {t.result.abilityScore}: <span className="font-bold">{result.abilityScore}</span> / 
            {t.result.actionScore}: <span className="font-bold">{result.actionScore}</span>
          </div>
        </div>

        {/* 強み */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.result.strengths}</h2>
          <ul className="space-y-3">
            {typeInfo.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 弱み・注意点 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.result.weaknesses}</h2>
          <ul className="space-y-3">
            {typeInfo.weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-sm font-bold">
                  !
                </span>
                <span className="text-gray-700">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* アドバイス */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.result.recommendations}</h2>
          <ul className="space-y-3">
            {result.advice.map((advice, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-700">{advice}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SNSシェア */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <ShareButtons 
            resultTitle={result.title}
          />
        </div>

        {/* もう一度診断するボタン */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <button
            onClick={onRestart}
            className="bg-gray-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            {t.common.restartButton}
          </button>
        </div>
      </div>
    </div>
  );
}

