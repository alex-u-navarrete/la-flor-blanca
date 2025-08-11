'use client';

import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  return (
    <html lang={currentLang}>
      <head>
        <title>La Flor Blanca - Authentic Salvadoran Cuisine</title>
        <meta name="description" content="Authentic Salvadoran restaurant in Los Angeles serving traditional pupusas, plates, and beverages. Order online for pickup or delivery." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer currentLang={currentLang} />
      </body>
    </html>
  );
}