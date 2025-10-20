import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // URLパラメータをチェック
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'ja' || urlLang === 'en') {
      return urlLang;
    }

    // LocalStorageをチェック
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'ja' || savedLang === 'en') {
      return savedLang;
    }

    // デフォルトは英語
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // HTMLタグのlang属性を更新
    document.documentElement.lang = lang;
    
    // メタタグとタイトルを更新
    if (lang === 'ja') {
      document.title = 'ゼークトの組織論診断サイト';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'ゼークトの組織論に基づいた性格診断ツール。あなたは参謀型？指揮官型？兵士型？それとも危険型？');
      }
    } else {
      document.title = "Seeckt's Organization Theory Diagnosis";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', "Seeckt's Organization Theory Diagnosis - Discover your personality type based on organizational theory. Are you Staff, Commander, Soldier, or Danger type?");
      }
    }
    
    // URLパラメータを更新
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
  };

  useEffect(() => {
    // 初期表示時にHTMLのlang属性とメタタグを設定
    document.documentElement.lang = language;
    
    if (language === 'ja') {
      document.title = 'ゼークトの組織論診断サイト';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'ゼークトの組織論に基づいた性格診断ツール。あなたは参謀型？指揮官型？兵士型？それとも危険型？');
      }
    } else {
      document.title = "Seeckt's Organization Theory Diagnosis";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', "Seeckt's Organization Theory Diagnosis - Discover your personality type based on organizational theory. Are you Staff, Commander, Soldier, or Danger type?");
      }
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

