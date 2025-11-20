import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Web Development
    'webdev.title': 'Web Development',
    'webdev.subtitle': 'We build powerful, scalable web applications that deliver exceptional user experiences and drive business results.',
    'webdev.technologies': 'Technologies We Master',
    
    // Features
    'responsive.title': 'Responsive Design',
    'responsive.description': 'Beautiful websites that work flawlessly on all devices and screen sizes.',
    'lightning.title': 'Lightning Fast',
    'lightning.description': 'Optimized performance with cutting-edge technologies for blazing speed.',
    'modern.title': 'Modern UI/UX',
    'modern.description': 'Stunning interfaces designed with user experience at the forefront.',
    'secure.title': 'Secure & Reliable',
    'secure.description': 'Built with security best practices and robust architecture.',
    
    // Feature Details
    'responsive.detail1': 'Mobile-first approach ensuring perfect display on smartphones',
    'responsive.detail2': 'Tablet optimization with intuitive touch interfaces',
    'responsive.detail3': 'Desktop and large screen compatibility',
    'responsive.detail4': 'Fluid layouts that adapt to any screen size',
    'responsive.benefit1': 'Improved user experience across all devices',
    'responsive.benefit2': 'Better SEO rankings with mobile-first indexing',
    'responsive.benefit3': 'Reduced bounce rates and increased engagement',
    'responsive.benefit4': 'Cost-effective single codebase maintenance',
    
    'lightning.detail1': 'Code splitting for faster initial load times',
    'lightning.detail2': 'Image optimization with next-gen formats',
    'lightning.detail3': 'CDN distribution for minimal latency',
    'lightning.detail4': 'Smart caching strategies for repeat visits',
    'lightning.benefit1': 'Load times under 1 second',
    'lightning.benefit2': '99+ PageSpeed scores',
    'lightning.benefit3': 'Smooth 60fps animations',
    'lightning.benefit4': '100% Core Web Vitals compliance',
    
    'modern.detail1': 'Clean, contemporary design aesthetics',
    'modern.detail2': 'Intuitive navigation and user flows',
    'modern.detail3': 'Accessibility standards compliance',
    'modern.detail4': 'Engaging micro-interactions and animations',
    'modern.benefit1': 'Increased user satisfaction and retention',
    'modern.benefit2': 'Higher conversion rates',
    'modern.benefit3': 'Professional brand image',
    'modern.benefit4': 'Competitive market advantage',
    
    'secure.detail1': 'SSL/TLS encryption for all data transmission',
    'secure.detail2': 'OWASP top 10 protection',
    'secure.detail3': 'Regular security audits and updates',
    'secure.detail4': '99.99% uptime guarantee',
    'secure.benefit1': 'Protection against cyber threats',
    'secure.benefit2': 'Data privacy and compliance',
    'secure.benefit3': '24/7 monitoring and support',
    'secure.benefit4': 'Business continuity assurance',
    
    // Common
    'close': 'Close',
    'learnMore': 'Learn More',
    'keyFeatures': 'Key Features',
    'benefits': 'Benefits',
    'requestInfo': 'Request Information',
    
    // Contact Form
    'contactForm.title': 'Request Information',
    'contactForm.firstName': 'First Name',
    'contactForm.lastName': 'Last Name',
    'contactForm.email': 'Email',
    'contactForm.phone': 'Phone',
    'contactForm.feature': 'Feature of Interest',
    'contactForm.selectFeature': 'Select a feature',
    'contactForm.message': 'Message (Optional)',
    'contactForm.submit': 'Submit Request',
    'contactForm.sending': 'Sending...',
    'contactForm.success': 'Thank you! We will contact you soon.',
    'contactForm.error': 'Please complete the captcha verification.',
    'contactForm.required': 'This field is required',
    'contactForm.captcha': 'Verification: What is',

    // Mobile Development
    'mobiledev.title': 'Mobile Development',
    'mobiledev.subtitle': 'We create seamless mobile applications that provide exceptional user experiences on any device.',
    'mobiledev.technologies': 'Technologies We Excel Our Mobile ApproachIn',

    // Features
    'mobiledev.performance.ios.title': 'iOS & Android',
    'mobiledev.performance.ios.description': 'Native and cross-platform apps that deliver seamless experiences on both platforms.',
    'mobiledev.performance.tablet.title': 'Tablet Optimized',
    'mobiledev.performance.tablet.description': 'Fully optimized interfaces for tablets with intuitive touch interactions.',
    'mobiledev.performance.wearables.title': 'Wearables',
    'mobiledev.performance.wearables.description': 'Extend your app ecosystem to smartwatches and wearable devices.',
    'mobiledev.performance.offline.title': 'Offline-First',
    'mobiledev.performance.offline.description': 'Apps that work flawlessly even without an internet connection.',

    // Feature Details
    'mobiledev.performance.ios.benefit1': 'Native iOS development with Swift and Objective-C',
    'mobiledev.performance.ios.benefit2': 'Native Android development with Kotlin and Java',
    'mobiledev.performance.ios.benefit3': 'Cross-platform solutions using React Native and Flutter',
    'mobiledev.performance.ios.benefit4': 'Performance optimization for smooth user experiences',
   
    'mobiledev.performance.tablet.benefit1': 'Broader audience reach across platforms',
    'mobiledev.performance.tablet.benefit2': 'Consistent user experience on iOS and Android',
    'mobiledev.performance.tablet.benefit3': 'Faster development with shared codebases',
    'mobiledev.performance.tablet.benefit4': 'Easier maintenance and updates',

    'mobiledev.performance.wearables.benefit1': 'Increased user engagement through wearables',
    'mobiledev.performance.wearables.benefit2': 'Expanded app ecosystem',
    'mobiledev.performance.wearables.benefit3': 'Access to health and fitness data',
    'mobiledev.performance.wearables.benefit4': 'Innovative user experiences',

    'mobiledev.performance.offline.benefit1': 'Improved user experience without internet',
    'mobiledev.performance.offline.benefit2': 'Data synchronization when back online',
    'mobiledev.performance.offline.benefit3': 'Reduced data usage',
    'mobiledev.performance.offline.benefit4': 'Increased app reliability',
  },
  es: {
    // Web Development
    'webdev.title': 'Desarrollo Web',
    'webdev.subtitle': 'Construimos aplicaciones web potentes y escalables que ofrecen experiencias de usuario excepcionales e impulsan resultados empresariales.',
    'webdev.technologies': 'Tecnologías que Dominamos',
    
    // Features
    'responsive.title': 'Diseño Responsivo',
    'responsive.description': 'Sitios web hermosos que funcionan perfectamente en todos los dispositivos y tamaños de pantalla.',
    'lightning.title': 'Súper Rápido',
    'lightning.description': 'Rendimiento optimizado con tecnologías de vanguardia para velocidad extrema.',
    'modern.title': 'UI/UX Moderno',
    'modern.description': 'Interfaces impresionantes diseñadas con la experiencia del usuario como prioridad.',
    'secure.title': 'Seguro y Confiable',
    'secure.description': 'Construido con las mejores prácticas de seguridad y arquitectura robusta.',
    
    // Feature Details
    'responsive.detail1': 'Enfoque mobile-first asegurando visualización perfecta en smartphones',
    'responsive.detail2': 'Optimización para tablets con interfaces táctiles intuitivas',
    'responsive.detail3': 'Compatibilidad con escritorio y pantallas grandes',
    'responsive.detail4': 'Diseños fluidos que se adaptan a cualquier tamaño de pantalla',
    'responsive.benefit1': 'Experiencia de usuario mejorada en todos los dispositivos',
    'responsive.benefit2': 'Mejor posicionamiento SEO con indexación mobile-first',
    'responsive.benefit3': 'Tasas de rebote reducidas y mayor engagement',
    'responsive.benefit4': 'Mantenimiento rentable con un solo código base',
    
    'lightning.detail1': 'División de código para tiempos de carga iniciales más rápidos',
    'lightning.detail2': 'Optimización de imágenes con formatos de nueva generación',
    'lightning.detail3': 'Distribución CDN para latencia mínima',
    'lightning.detail4': 'Estrategias inteligentes de caché para visitas recurrentes',
    'lightning.benefit1': 'Tiempos de carga menores a 1 segundo',
    'lightning.benefit2': 'Puntuaciones PageSpeed de 99+',
    'lightning.benefit3': 'Animaciones suaves a 60fps',
    'lightning.benefit4': 'Cumplimiento 100% de Core Web Vitals',
    
    'modern.detail1': 'Estética de diseño limpia y contemporánea',
    'modern.detail2': 'Navegación intuitiva y flujos de usuario',
    'modern.detail3': 'Cumplimiento de estándares de accesibilidad',
    'modern.detail4': 'Micro-interacciones y animaciones atractivas',
    'modern.benefit1': 'Mayor satisfacción y retención de usuarios',
    'modern.benefit2': 'Tasas de conversión más altas',
    'modern.benefit3': 'Imagen de marca profesional',
    'modern.benefit4': 'Ventaja competitiva en el mercado',
    
    'secure.detail1': 'Encriptación SSL/TLS para toda transmisión de datos',
    'secure.detail2': 'Protección contra los top 10 de OWASP',
    'secure.detail3': 'Auditorías de seguridad y actualizaciones regulares',
    'secure.detail4': 'Garantía de disponibilidad del 99.99%',
    'secure.benefit1': 'Protección contra amenazas cibernéticas',
    'secure.benefit2': 'Privacidad de datos y cumplimiento normativo',
    'secure.benefit3': 'Monitoreo y soporte 24/7',
    'secure.benefit4': 'Garantía de continuidad del negocio',
    
    // Common
    'close': 'Cerrar',
    'learnMore': 'Más Información',
    'keyFeatures': 'Características Clave',
    'benefits': 'Beneficios',
    'requestInfo': 'Solicitar Información',
    
    // Contact Form
    'contactForm.title': 'Solicitar Información',
    'contactForm.firstName': 'Nombre',
    'contactForm.lastName': 'Apellido',
    'contactForm.email': 'Correo Electrónico',
    'contactForm.phone': 'Teléfono',
    'contactForm.feature': 'Característica de Interés',
    'contactForm.selectFeature': 'Seleccione una característica',
    'contactForm.message': 'Mensaje (Opcional)',
    'contactForm.submit': 'Enviar Solicitud',
    'contactForm.sending': 'Enviando...',
    'contactForm.success': '¡Gracias! Nos pondremos en contacto pronto.',
    'contactForm.error': 'Por favor complete la verificación captcha.',
    'contactForm.required': 'Este campo es requerido',
    'contactForm.captcha': 'Verificación: ¿Cuánto es',

    // Mobile Development
    'mobiledev.title': 'Mobile Development',
    'mobiledev.subtitle': 'We create seamless mobile applications that provide exceptional user experiences on any device.',
    'mobiledev.technologies': 'Technologies We Excel Our Mobile ApproachIn',

    // Features
    'mobiledev.performance.ios.title': 'iOS & Android',
    'mobiledev.performance.ios.description': 'Aplicaciones nativas y multiplataforma que ofrecen experiencias fluidas en ambas plataformas.',
    'mobiledev.performance.tablet.title': 'Tableta Personalizada',
    'mobiledev.performance.tablet.description': 'Interfaces totalmente optimizadas para tabletas con interacciones táctiles intuitivas.',
    'mobiledev.performance.wearables.title': 'Dispositivos Portátiles',
    'mobiledev.performance.wearables.description': 'Amplíe el ecosistema de su aplicación a relojes inteligentes y dispositivos portátiles.',
    'mobiledev.performance.offline.title': 'Sin Conexión',
    'mobiledev.performance.offline.description': 'Aplicaciones que funcionan perfectamente incluso sin conexión a Internet.',

    // Feature Details
    'mobiledev.performance.ios.benefit1': 'Native iOS development with Swift and Objective-C',
    'mobiledev.performance.ios.benefit2': 'Native Android development with Kotlin and Java',
    'mobiledev.performance.ios.benefit3': 'Cross-platform solutions using React Native and Flutter',
    'mobiledev.performance.ios.benefit4': 'Performance optimization for smooth user experiences',
   
    'mobiledev.performance.tablet.benefit1': 'Broader audience reach across platforms',
    'mobiledev.performance.tablet.benefit2': 'Consistent user experience on iOS and Android',
    'mobiledev.performance.tablet.benefit3': 'Faster development with shared codebases',
    'mobiledev.performance.tablet.benefit4': 'Easier maintenance and updates',

    'mobiledev.performance.wearables.benefit1': 'Increased user engagement through wearables',
    'mobiledev.performance.wearables.benefit2': 'Expanded app ecosystem',
    'mobiledev.performance.wearables.benefit3': 'Access to health and fitness data',
    'mobiledev.performance.wearables.benefit4': 'Innovative user experiences',

    'mobiledev.performance.offline.benefit1': 'Improved user experience without internet',
    'mobiledev.performance.offline.benefit2': 'Data synchronization when back online',
    'mobiledev.performance.offline.benefit3': 'Reduced data usage',
    'mobiledev.performance.offline.benefit4': 'Increased app reliability',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}