import { createContext, useContext } from 'react';

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
    
    // Home page
    welcomeTo: 'Welcome to',
    homeHeroText: 'Experience authentic Salvadoran cuisine made with love and tradition in the heart of Los Angeles',
    viewMenu: 'View Menu',
    orderNow: 'Order Now',
    freshPupusas: 'Fresh Pupusas',
    freshPupusasDesc: 'Handmade daily with traditional recipes passed down through generations',
    traditionalDrinks: 'Traditional Drinks',
    traditionalDrinksDesc: 'Authentic horchata and other refreshing Salvadoran beverages',
    easyOrdering: 'Easy Ordering',
    easyOrderingDesc: 'Order online for pickup or delivery through our trusted partners',
    readyToTaste: 'Bring Salvadoran comfort food to your table',
    visitUsToday: 'Order fresh, handmade pupusas, plates, and drinks for pickup or delivery',
    
    // Menu page
    ourMenu: 'Our Menu',
    menuSubtitle: 'Discover our authentic Salvadoran dishes, made fresh daily with traditional recipes',
    
    // Order page
    orderOnline: 'Order Online',
    orderSubtitle: 'Choose your preferred way to enjoy La Flor Blanca',
    restaurantHours: 'Restaurant Hours',
    pickupDeliveryNote: 'Please note that pickup and delivery availability may vary during peak hours',
    
    // Contact page
    contactUs: 'Contact Us',
    contactSubtitle: 'Get in touch with La Flor Blanca - we\'d love to hear from you',
    visitUs: 'Visit Us',
    location: 'Location',
    quickActions: 'Quick Actions',
    orderOnlineBtn: 'Order Online',
    callForCatering: 'Call for Catering',
    interactiveMap: 'Interactive Map',
    mapComingSoon: 'Map integration coming soon',
    getDirections: 'Get Directions',
    planningSpecialEvent: 'Planning a Special Event?',
    cateringText: 'We offer catering services for your special occasions. Call us to discuss menu options and pricing.',
    
    // FAQ page
    faqTitle: 'Frequently Asked Questions',
    faqStillHaveQuestions: 'Still have questions?',
    faqCallOrVisit: 'Give us a call or visit our contact page',
    faqCallUs: 'Call Us',
    faqContactPage: 'Contact Page',
    
    // FAQ Questions and Answers
    faqDeliveryQ: 'Do you offer delivery?',
    faqDeliveryA: 'Yes! We partner with DoorDash, Uber Eats, and Grubhub for convenient delivery to your door. Visit our Order page to access all delivery options.',
    
    faqHoursQ: 'What are your hours?',
    faqHoursA: 'Monday: Closed\nTuesday - Thursday: 10:00 AM - 7:00 PM\nFriday - Sunday: 10:00 AM - 7:30 PM',
    
    faqReservationsQ: 'Do you take reservations?',
    faqReservationsA: 'We operate on a first-come, first-served basis and don\'t take reservations. However, you can place pickup orders online to skip the wait!',
    
    faqPaymentQ: 'What forms of payment do you accept?',
    faqPaymentA: 'We accept cash, all major credit cards, and mobile payments. For online orders, we use Square\'s secure payment system.',
    
    faqCateringQ: 'Do you offer catering?',
    faqCateringA: 'Yes! Please call us directly at (323) 735-1802 to discuss catering options for your event.',
    
    faqFreshQ: 'Are your pupusas made fresh?',
    faqFreshA: 'Absolutely! All our pupusas are made fresh to order using traditional recipes passed down through our family.',
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
    
    // Home page
    welcomeTo: 'Bienvenido a',
    homeHeroText: 'Experimenta la auténtica cocina salvadoreña hecha con amor y tradición en el corazón de Los Ángeles',
    viewMenu: 'Ver Menú',
    orderNow: 'Ordenar Ahora',
    freshPupusas: 'Pupusas Frescas',
    freshPupusasDesc: 'Hechas a mano diariamente con recetas tradicionales transmitidas por generaciones',
    traditionalDrinks: 'Bebidas Tradicionales',
    traditionalDrinksDesc: 'Horchata auténtica y otras bebidas salvadoreñas refrescantes',
    easyOrdering: 'Pedidos Fáciles',
    easyOrderingDesc: 'Ordena en línea para recoger o entrega a través de nuestros socios de confianza',
    readyToTaste: 'Lleva el sabor salvadoreño a tu mesa',
    visitUsToday: 'Ordena pupusas, platos y bebidas frescas para recoger o a domicilio',
    
    // Menu page
    ourMenu: 'Nuestro Menú',
    menuSubtitle: 'Descubre nuestros platos salvadoreños auténticos, hechos frescos diariamente con recetas tradicionales',
    
    // Order page
    orderOnline: 'Ordenar En Línea',
    orderSubtitle: 'Elige tu manera preferida de disfrutar La Flor Blanca',
    restaurantHours: 'Horarios del Restaurante',
    pickupDeliveryNote: 'Ten en cuenta que la disponibilidad de recogida y entrega puede variar durante las horas pico',
    
    // Contact page
    contactUs: 'Contáctanos',
    contactSubtitle: 'Ponte en contacto con La Flor Blanca - nos encantaría saber de ti',
    visitUs: 'Visítanos',
    location: 'Ubicación',
    quickActions: 'Acciones Rápidas',
    orderOnlineBtn: 'Ordenar En Línea',
    callForCatering: 'Llamar para Catering',
    interactiveMap: 'Mapa Interactivo',
    mapComingSoon: 'Integración de mapa próximamente',
    getDirections: 'Obtener Direcciones',
    planningSpecialEvent: '¿Planificando un Evento Especial?',
    cateringText: 'Ofrecemos servicios de catering para tus ocasiones especiales. Llámanos para discutir opciones de menú y precios.',
    
    // FAQ page
    faqTitle: 'Preguntas Frecuentes',
    faqStillHaveQuestions: '¿Aún tienes preguntas?',
    faqCallOrVisit: 'Llámanos o visita nuestra página de contacto',
    faqCallUs: 'Llámanos',
    faqContactPage: 'Página de Contacto',
    
    // FAQ Questions and Answers
    faqDeliveryQ: '¿Ofrecen entrega a domicilio?',
    faqDeliveryA: '¡Sí! Nos asociamos con DoorDash, Uber Eats y Grubhub para entrega conveniente a tu puerta. Visita nuestra página de Pedidos para acceder a todas las opciones de entrega.',
    
    faqHoursQ: '¿Cuáles son sus horarios?',
    faqHoursA: 'Lunes: Cerrado\nMartes - Jueves: 10:00 AM - 7:00 PM\nViernes - Domingo: 10:00 AM - 7:30 PM',
    
    faqReservationsQ: '¿Aceptan reservaciones?',
    faqReservationsA: 'Operamos por orden de llegada y no aceptamos reservaciones. ¡Sin embargo, puedes hacer pedidos en línea para recoger y evitar la espera!',
    
    faqPaymentQ: '¿Qué formas de pago aceptan?',
    faqPaymentA: 'Aceptamos efectivo, todas las principales tarjetas de crédito y pagos móviles. Para pedidos en línea, usamos el sistema de pago seguro de Square.',
    
    faqCateringQ: '¿Ofrecen servicio de catering?',
    faqCateringA: '¡Sí! Por favor llámanos directamente al (323) 735-1802 para discutir opciones de catering para tu evento.',
    
    faqFreshQ: '¿Sus pupusas están hechas frescas?',
    faqFreshA: '¡Absolutamente! Todas nuestras pupusas se hacen frescas al momento usando recetas tradicionales transmitidas por nuestra familia.',
  },
};

export function getTranslation(lang: Language, key: keyof typeof translations.en): string {
  return translations[lang][key];
}

// Language Context
interface LanguageContextType {
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
