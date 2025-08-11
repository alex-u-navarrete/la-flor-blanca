'use client';

import { Language, getTranslation } from '@/lib/i18n';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, 'restaurantName')}
            </h3>
            <p className="text-gray-600 mb-2">
              {getTranslation(currentLang, 'tagline')}
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">
              {getTranslation(currentLang, 'hours')}
            </h4>
            <p className="text-gray-600">
              {getTranslation(currentLang, 'hoursText')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">
              {getTranslation(currentLang, 'contact')}
            </h4>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">{getTranslation(currentLang, 'phone')}:</span>{' '}
                <a
                  href={`tel:${getTranslation(currentLang, 'phoneNumber')}`}
                  className="text-amber-600 hover:text-amber-700"
                >
                  {getTranslation(currentLang, 'phoneNumber')}
                </a>
              </p>
              <p className="text-gray-600">
                <span className="font-medium">{getTranslation(currentLang, 'address')}:</span>{' '}
                {getTranslation(currentLang, 'addressText')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {getTranslation(currentLang, 'restaurantName')}. 
            {currentLang === 'en' ? ' All rights reserved.' : ' Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
