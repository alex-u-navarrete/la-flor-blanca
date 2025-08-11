'use client';

import { Language } from '@/lib/i18n';

interface LanguagePromptProps {
  onSelect: (lang: Language) => void;
}

export default function LanguagePrompt({ onSelect }: LanguagePromptProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Choose your language</h2>
        <p className="text-gray-600 mb-6 text-center">Seleccione su idioma</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => onSelect('en')}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50"
            aria-label="Select English"
          >
            English
          </button>
          <button
            onClick={() => onSelect('es')}
            className="w-full rounded-lg bg-blue-600 text-white px-4 py-3 font-semibold hover:bg-blue-700"
            aria-label="Seleccionar Español"
          >
            Español
          </button>
        </div>
      </div>
    </div>
  );
}


