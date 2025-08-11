export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    menu: 'Menu',
    order: 'Order',
    faq: 'FAQ',
    contact: 'Contact',
    
    // Common
    phone: 'Call Us',
    hours: 'Hours',
    address: 'Address',
    language: 'Español',
    
    // Restaurant info
    restaurantName: 'La Flor Blanca',
    tagline: 'Authentic Salvadoran Cuisine',
    hoursText: 'Mon: Closed • Tue-Thu: 10 AM - 7 PM • Fri-Sun: 10 AM - 7:30 PM',
    addressText: '1279 W. Jefferson Blvd, Los Angeles, CA 90007',
    phoneNumber: '(323) 735-1802',
  },
  es: {
    // Navigation
    home: 'Inicio',
    menu: 'Menú',
    order: 'Ordenar',
    faq: 'Preguntas',
    contact: 'Contacto',
    
    // Common
    phone: 'Llámanos',
    hours: 'Horarios',
    address: 'Dirección',
    language: 'English',
    
    // Restaurant info
    restaurantName: 'La Flor Blanca',
    tagline: 'Auténtica Cocina Salvadoreña',
    hoursText: 'Lun: Cerrado • Mar-Jue: 10 AM - 7 PM • Vie-Dom: 10 AM - 7:30 PM',
    addressText: '1279 W. Jefferson Blvd, Los Angeles, CA 90007',
    phoneNumber: '(323) 735-1802',
  },
};

export function getTranslation(lang: Language, key: keyof typeof translations.en): string {
  return translations[lang][key];
}
