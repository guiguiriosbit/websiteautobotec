import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logoImg from '../img/n8n-make.jpeg';

export default function Hero() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slides = [
    {
      image: logoImg,
      titleKey: 'hero.slide1.title',
      highlightKey: 'hero.slide1.highlight',
      descriptionKey: 'hero.slide1.description'
    },
    {
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80',
      titleKey: 'hero.slide2.title',
      highlightKey: 'hero.slide2.highlight',
      descriptionKey: 'hero.slide2.description'
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80',
      titleKey: 'hero.slide3.title',
      highlightKey: 'hero.slide3.highlight',
      descriptionKey: 'hero.slide3.description'
    },
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80',
      titleKey: 'hero.slide4.title',
      highlightKey: 'hero.slide4.highlight',
      descriptionKey: 'hero.slide4.description'
    },
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
      titleKey: 'hero.slide5.title',
      highlightKey: 'hero.slide5.highlight',
      descriptionKey: 'hero.slide5.description'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full flex items-center justify-center overflow-hidden h-[60vh] md:h-[80vh] min-h-[400px] max-h-[900px]">
      {/* Galería de imágenes de fondo */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0
          }}
        >
          <img
            src={slide.image}
            alt="slide background"
            className="w-full h-full object-cover object-center transition-all duration-1000"
            style={{ aspectRatio: '16/9' }}
          />
        </div>
      ))}

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-[2]" />

      {/* Flechas de navegación */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-[4] bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-all shadow-lg"
        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        aria-label="Anterior"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-[4] bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-all shadow-lg"
        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % slides.length)}
        aria-label="Siguiente"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Indicadores de la galería */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[3] flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentImageIndex === index 
                ? 'bg-blue-500 w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Contenido sin fondo semitransparente */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-16 lg:px-8 py-6 md:py-10 flex flex-col items-center justify-center h-full">
        <div className="text-center flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 md:mb-8 drop-shadow-lg transition-all duration-500">
            {t(slides[currentImageIndex].titleKey)}
            <span className="block text-blue-400 mt-2">{t(slides[currentImageIndex].highlightKey)}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-4 transition-all duration-500">
            {t(slides[currentImageIndex].descriptionKey)}
          </p>
          <button
            onClick={() => scrollToSection('web-development')}
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}