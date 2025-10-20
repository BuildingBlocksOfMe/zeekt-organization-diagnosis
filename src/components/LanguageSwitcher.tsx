import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex gap-2 bg-white rounded-full shadow-lg p-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
            language === 'en'
              ? 'bg-primary-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('ja')}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
            language === 'ja'
              ? 'bg-primary-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          日本語
        </button>
      </div>
    </div>
  );
}

