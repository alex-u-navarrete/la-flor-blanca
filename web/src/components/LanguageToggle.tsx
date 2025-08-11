'use client';
import { Language, getTranslation } from '@/lib/i18n';

interface LanguageToggleProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageToggle({
  currentLang,
  onLanguageChange,
}: LanguageToggleProps) {
  const toggleLang = currentLang === 'en' ? 'es' : 'en';

  return (
    <button
      onClick={() => onLanguageChange(toggleLang)}
      className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
      aria-label={`Switch to ${toggleLang === 'es' ? 'Spanish' : 'English'}`}
    >
      {getTranslation(currentLang, 'language')}
    </button>
  );
}
