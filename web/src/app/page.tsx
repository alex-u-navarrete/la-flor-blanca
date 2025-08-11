'use client';

import { useLanguage, getTranslation } from '@/lib/i18n';

export default function HomePage() {
  const { currentLang } = useLanguage();
  return (
    <div className="min-h-[calc(100vh-200px)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {getTranslation(currentLang, 'welcomeTo')}{' '}
            <span className="text-amber-600">{getTranslation(currentLang, 'restaurantName')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {getTranslation(currentLang, 'homeHeroText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              {getTranslation(currentLang, 'viewMenu')}
            </a>
            <a
              href="/order"
              className="bg-white text-amber-600 border-2 border-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              {getTranslation(currentLang, 'orderNow')}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🫓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {getTranslation(currentLang, 'freshPupusas')}
              </h3>
              <p className="text-gray-600">
                {getTranslation(currentLang, 'freshPupusasDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🥤</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {getTranslation(currentLang, 'traditionalDrinks')}
              </h3>
              <p className="text-gray-600">
                {getTranslation(currentLang, 'traditionalDrinksDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {getTranslation(currentLang, 'easyOrdering')}
              </h3>
              <p className="text-gray-600">
                {getTranslation(currentLang, 'easyOrderingDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {getTranslation(currentLang, 'readyToTaste')}
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            {getTranslation(currentLang, 'visitUsToday')}
          </p>
          <a
            href="/order"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            {getTranslation(currentLang, 'orderNow')}
          </a>
        </div>
      </section>
    </div>
  );
}