import { useState } from 'react';
import { Globe, Palette, Zap, Shield, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import FeatureModal from './modals/FeatureModal';
import ContactFormModal from './modals/ContactFormModal';

export default function WebDevelopment() {
  const { t } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const features = [
    {
      id: 'responsive-design',
      icon: Globe,
      bgImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    },
    {
      id: 'lightning-fast',
      icon: Zap,
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    },
    {
      id: 'modern-ui',
      icon: Palette,
      bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    },
    {
      id: 'secure-reliable',
      icon: Shield,
      bgImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
    },
  ];

  const getFeatureKey = (id: string) => {
    const keyMap: Record<string, string> = {
      'responsive-design': 'responsive',
      'lightning-fast': 'lightning',
      'modern-ui': 'modern',
      'secure-reliable': 'secure'
    };
    return keyMap[id] || id;
  };

  return (
    <section id="web-development" className="py-16 md:py-24 bg-white scroll-target">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {t('webdev.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('webdev.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const featureKey = getFeatureKey(feature.id);
            return (
              <div
                key={index}
                onClick={() => setSelectedFeature(feature.id)}
                className="relative p-6 md:p-8 rounded-xl overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 group cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${feature.bgImage})` }}
                ></div>
                <div className="absolute inset-0 bg-white bg-opacity-70 group-hover:bg-opacity-45 transition-all"></div>
                <div className="relative z-10">
                  <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    {t(`${featureKey}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`${featureKey}.description`)}
                  </p>
                  <p className="text-blue-600 font-medium mt-4 group-hover:underline">
                    {t('learnMore')} →
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Request Information Button */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={() => setIsContactFormOpen(true)}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-6 h-6" />
            <span className="text-lg">{t('requestInfo')}</span>
          </button>
        </div>

        {/* Technologies Section */}
        <div className="mt-12 md:mt-16 relative rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80" 
            alt="Technology background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-75"></div>
          <div className="relative z-10 p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('webdev.technologies')}
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {['React', 'Vue.js', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm rounded-lg font-medium text-sm md:text-base"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedFeature && (
        <FeatureModal
          isOpen={!!selectedFeature}
          onClose={() => setSelectedFeature(null)}
          featureId={selectedFeature}
        />
      )}

      <ContactFormModal
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </section>
  );
}