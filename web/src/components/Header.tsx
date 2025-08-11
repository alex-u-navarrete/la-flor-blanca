'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Language, getTranslation } from '@/lib/i18n';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Header({ currentLang, onLanguageChange }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigation = [
    { name: getTranslation(currentLang, 'home'), href: '/' },
    { name: getTranslation(currentLang, 'menu'), href: '/menu' },
    { name: getTranslation(currentLang, 'order'), href: '/order' },
    { name: getTranslation(currentLang, 'faq'), href: '/faq' },
    { name: getTranslation(currentLang, 'contact'), href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-amber-600">
                🌸
              </div>
              <span className="text-xl font-bold text-gray-900">
                {getTranslation(currentLang, 'restaurantName')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Language Toggle (hidden on mobile to avoid duplication with mobile menu) */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
            />
            <a
              href={`tel:${getTranslation(currentLang, 'phoneNumber')}`}
              className="text-amber-600 font-medium hover:text-amber-700"
            >
              {getTranslation(currentLang, 'phone')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {/* Hamburger / X icon */}
              {isMobileOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-700"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-start gap-3">
              <LanguageToggle currentLang={currentLang} onLanguageChange={(lang) => { onLanguageChange(lang); }} />
              <span className="text-gray-300">|</span>
              <a
                href={`tel:${getTranslation(currentLang, 'phoneNumber')}`}
                className="text-blue-700 font-medium hover:text-blue-800"
                onClick={() => setIsMobileOpen(false)}
              >
                {getTranslation(currentLang, 'phone')}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
