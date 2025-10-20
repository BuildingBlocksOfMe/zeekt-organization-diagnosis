import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales';

interface TopPageProps {
  onStart: () => void;
}

export function TopPage({ onStart }: TopPageProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 px-4">
      <div className="max-w-2xl w-full text-center animate-fade-in">
        {/* メインタイトル */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up">
          {t.top.title}
        </h1>
        
        {/* サブタイトル */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {t.top.subtitle}
        </p>

        {/* 説明文 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {t.top.description}
            <br />
            {t.top.instruction}
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <div className="font-bold text-green-800 mb-1">{t.top.type1Title}</div>
              <div className="text-green-600">{t.top.type1Desc}</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <div className="font-bold text-blue-800 mb-1">{t.top.type2Title}</div>
              <div className="text-blue-600">{t.top.type2Desc}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
              <div className="font-bold text-gray-800 mb-1">{t.top.type3Title}</div>
              <div className="text-gray-600">{t.top.type3Desc}</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
              <div className="font-bold text-red-800 mb-1">{t.top.type4Title}</div>
              <div className="text-red-600">{t.top.type4Desc}</div>
            </div>
          </div>
        </div>

        {/* 開始ボタン */}
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {t.common.startButton}
        </button>

        {/* 注意事項 */}
        <p className="text-sm text-gray-500 mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {t.common.disclaimer}
        </p>
      </div>
    </div>
  );
}


