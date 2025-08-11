'use client';

import menuData from '../../../data/menu.json';
import { useLanguage, getTranslation } from '@/lib/i18n';

export default function MenuPage() {
  const { currentLang } = useLanguage();
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{getTranslation(currentLang, 'ourMenu')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {getTranslation(currentLang, 'menuSubtitle')}
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-12">
          {menuData.categories.map((category) => (
            <section key={category.id}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                {category.name[currentLang]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name[currentLang]}
                      </h3>
                      <span className="text-lg font-bold text-amber-600">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {item.description[currentLang]}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/order"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {getTranslation(currentLang, 'orderNow')}
          </a>
        </div>
      </div>
    </div>
  );
}
