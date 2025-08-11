'use client';

import { useLanguage, getTranslation } from '@/lib/i18n';

export default function FAQPage() {
  const { currentLang } = useLanguage();

  const faqItems = [
    {
      question: getTranslation(currentLang, 'faqDeliveryQ'),
      answer: getTranslation(currentLang, 'faqDeliveryA'),
    },
    {
      question: getTranslation(currentLang, 'faqHoursQ'),
      answer: getTranslation(currentLang, 'faqHoursA'),
    },
    {
      question: getTranslation(currentLang, 'faqReservationsQ'),
      answer: getTranslation(currentLang, 'faqReservationsA'),
    },
    {
      question: getTranslation(currentLang, 'faqPaymentQ'),
      answer: getTranslation(currentLang, 'faqPaymentA'),
    },
    {
      question: getTranslation(currentLang, 'faqCateringQ'),
      answer: getTranslation(currentLang, 'faqCateringA'),
    },
    {
      question: getTranslation(currentLang, 'faqFreshQ'),
      answer: getTranslation(currentLang, 'faqFreshA'),
    },
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {getTranslation(currentLang, 'faqTitle')}
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-8">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {item.question}
              </h2>
              <div className="text-gray-600">
                {item.answer.split('\n').map((line, lineIndex) => (
                  <p key={lineIndex} className="mb-2 last:mb-0">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            {getTranslation(currentLang, 'faqStillHaveQuestions')}
          </h3>
          <p className="text-blue-700 mb-4">
            {getTranslation(currentLang, 'faqCallOrVisit')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${getTranslation(currentLang, 'phoneNumber')}`}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {getTranslation(currentLang, 'faqCallUs')}
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {getTranslation(currentLang, 'faqContactPage')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
