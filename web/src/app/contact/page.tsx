'use client';

import { useLanguage, getTranslation } from '@/lib/i18n';

export default function ContactPage() {
  const { currentLang } = useLanguage();
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{getTranslation(currentLang, 'contactUs')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {getTranslation(currentLang, 'contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, 'visitUs')}
            </h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{getTranslation(currentLang, 'phone')}</h3>
                  <a
                    href={`tel:${getTranslation(currentLang, 'phoneNumber')}`}
                    className="text-amber-600 hover:text-amber-700"
                  >
                    {getTranslation(currentLang, 'phoneNumber')}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{getTranslation(currentLang, 'address')}</h3>
                  <p className="text-gray-600">
                    {getTranslation(currentLang, 'addressText')}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🕐</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{getTranslation(currentLang, 'hours')}</h3>
                  <p className="text-gray-600">
                    {getTranslation(currentLang, 'hoursText')}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {getTranslation(currentLang, 'quickActions')}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/order"
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-center"
                >
                  {getTranslation(currentLang, 'orderOnlineBtn')}
                </a>
                <a
                  href={`tel:${getTranslation(currentLang, 'phoneNumber')}`}
                  className="bg-white text-amber-600 border-2 border-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors text-center"
                >
                  {getTranslation(currentLang, 'callForCatering')}
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, 'location')}
            </h2>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-lg font-medium">{getTranslation(currentLang, 'interactiveMap')}</p>
                <p className="text-sm">
                  {getTranslation(currentLang, 'mapComingSoon')}
                </p>
              </div>
            </div>
            
            {/* Directions */}
            <div className="mt-6">
              <a
                href="https://maps.google.com/?q=La+Flor+Blanca+Los+Angeles"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                {getTranslation(currentLang, 'getDirections')}
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-amber-50 border border-amber-200 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-amber-800 mb-4">
              {getTranslation(currentLang, 'planningSpecialEvent')}
            </h3>
            <p className="text-amber-700 mb-4">
              {getTranslation(currentLang, 'cateringText')}
            </p>
            <a
              href={`tel:${getTranslation(currentLang, 'phoneNumber')}`}
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              {getTranslation(currentLang, 'callForCatering')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
