import { Target, Search, BarChart3, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import FeatureModal from './modals/FeatureModal';
import ContactFormModal from './modals/ContactFormModal';

export default function DigitalMarketing() {
  const { t } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactFormFeatures, setContactFormFeatures] = useState<Array<{
    id: string;
    labelEn: string;
    labelEs: string;
  }>>([]);

  const services = [
    {
      id: 'strategic',
      icon: Target,
      bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    {
      id: 'seo',
      icon: Search,
      bgImage: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=800&q=80'
    },
    {
      id: 'analytics',
      icon: BarChart3,
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      id: 'email',
      icon: Mail,
      bgImage: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80'
    },
  ];

  return (
    <section id="digital-marketing" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            {t('marketing.title')}
          </h2>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            {t('marketing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedFeature(service.id)}
              tabIndex={0}
              role="button"
              aria-label={t(`${service.id}.title`)}
              className="relative rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden group cursor-pointer outline-none focus:ring-4 focus:ring-orange-400"
            >
              {/* Imagen de fondo */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.bgImage})`
                }}
              ></div>
              
              {/* Overlay naranja/rojo semi-transparente */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 opacity-50 group-hover:opacity-30 transition-all backdrop-blur-[2px]"></div>
              
              {/* Contenido */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col items-center">
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-white mb-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:underline">
                  {t(`${service.id}.title`)}
                </h3>
                <p className="text-white font-medium leading-relaxed">
                  {t(`${service.id}.description`)}
                </p>
                <p className="text-orange-200 font-bold mt-4 group-hover:underline">
                  {t('learnMore')} →
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Imagen de fondo */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80)'
              }}
            ></div>
            
            {/* Overlay blanco */}
            <div className="absolute inset-0 bg-white opacity-75"></div>
            
            {/* Contenido */}
            <div className="relative z-10 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('marketing.channels')}
              </h3>
              <ul className="space-y-4">
                {[
                  'Social Media Marketing',
                  'Content Marketing',
                  'Pay-Per-Click Advertising',
                  'Influencer Partnerships',
                  'Video Marketing',
                  'Conversion Rate Optimization',
                ].map((channel, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                    </div>
                    <span className="text-gray-700 text-base md:text-lg">{channel}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative rounded-2xl shadow-xl overflow-hidden">
            {/* Imagen de fondo */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80)'
              }}
            ></div>
            
            {/* Overlay naranja/rojo */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 opacity-75"></div>
            
            {/* Contenido */}
            <div className="relative z-10 p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {t('marketing.why')}
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                  <p className="text-orange-100">{t('marketing.campaigns')}</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                  <p className="text-orange-100">{t('marketing.satisfaction')}</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">3x</div>
                  <p className="text-orange-100">{t('marketing.roi')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de Solicitar Información */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={() => {
              setContactFormFeatures([
                { id: 'strategic', labelEn: 'Strategic Planning', labelEs: 'Planificación Estratégica' },
                { id: 'seo', labelEn: 'SEO & SEM', labelEs: 'SEO y SEM' },
                { id: 'analytics', labelEn: 'Analytics & Insights', labelEs: 'Analítica e Información' },
                { id: 'email', labelEn: 'Email Marketing', labelEs: 'Email Marketing' },
              ]);
              setIsContactFormOpen(true);
            }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-6 h-6" />
            <span className="text-lg">{t('requestInfo')}</span>
          </button>

          {/* Modal de contacto */}
          <ContactFormModal
            isOpen={isContactFormOpen}
            onClose={() => setIsContactFormOpen(false)}
            features={contactFormFeatures}
          />
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
    </section>
  );
}