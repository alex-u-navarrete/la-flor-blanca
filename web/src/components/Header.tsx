'use client';

import Link from 'next/link';
import { Language, getTranslation } from '@/lib/i18n';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Header({ currentLang, onLanguageChange }: HeaderProps) {
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

          {/* CTA + Language Toggle */}
          <div className="flex items-center space-x-4">
            <LanguageToggle
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
            />
            <a
              href={`tel:${getTranslation(currentLang, 'phoneNumber')}`}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors"
            >
              {getTranslation(currentLang, 'phone')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            {/* TODO: Add mobile menu implementation */}
          </div>
        </div>
      </div>
    </header>
  );
}
