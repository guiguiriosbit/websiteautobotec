import { Bot, Brain, MessageSquare, TrendingUp, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import FeatureModal from './modals/FeatureModal';
import ContactFormModal from './modals/ContactFormModal';

export default function AIAgents() {
  const { t } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactFormFeatures, setContactFormFeatures] = useState<Array<{
    id: string;
    labelEn: string;
    labelEs: string;
  }>>([]);

  const capabilities = [
    {
      id: 'automation',
      icon: Bot,
      bgImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80'
    },
    {
      id: 'ml',
      icon: Brain,
      bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
    },
    {
      id: 'conversational',
      icon: MessageSquare,
      bgImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80'
    },
    {
      id: 'predictive',
      icon: TrendingUp,
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
  ];

  return (
    <section id="ai-agents" className="py-16 md:py-24 bg-white relative z-[1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            {t('ai.title')}
          </h2>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            {t('ai.subtitle')}
          </p>
        </div>

        {/* Cuadrícula de capacidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              onClick={() => setSelectedFeature(capability.id)}
              tabIndex={0}
              role="button"
              aria-label={t(`${capability.id}.title`)}
              className="relative rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden group cursor-pointer outline-none focus:ring-4 focus:ring-blue-400"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${capability.bgImage})` }}
              ></div>
              
              <div className="absolute inset-0 bg-blue-600 opacity-50 group-hover:opacity-30 transition-all backdrop-blur-[2px]"></div>
              
              <div className="relative z-10 p-6 md:p-8 flex flex-col items-center">
                <capability.icon className="w-10 h-10 md:w-12 md:h-12 text-white mb-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:underline">
                  {t(`${capability.id}.title`)}
                </h3>
                <p className="text-white font-medium leading-relaxed">
                  {t(`${capability.id}.description`)}
                </p>
                <p className="text-blue-200 font-bold mt-4 group-hover:underline">
                  {t('learnMore')} →
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de tecnologías */}
        <div className="relative rounded-2xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80)' }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-blue-900 opacity-75"></div>

          <div className="relative z-10 p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                {t('ai.ready')}
              </h3>
              <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100">
                {t('ai.powered')}
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {['GPT-4', 'Claude', 'OLLaMA', 'Gemini', 'Make', 'n8n'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-lg font-medium text-sm md:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Botón de Solicitar Información */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={() => {
              setContactFormFeatures([
                { id: 'automation', labelEn: 'Intelligent Automation', labelEs: 'Automatización Inteligente' },
                { id: 'ml', labelEn: 'Machine Learning', labelEs: 'Aprendizaje Automático' },
                { id: 'conversational', labelEn: 'Conversational AI', labelEs: 'IA Conversacional' },
                { id: 'predictive', labelEn: 'Predictive Analytics', labelEs: 'Análisis Predictivo' },
              ]);
              setIsContactFormOpen(true);
            }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-6 h-6" />
            <span className="text-lg">{t('requestInfo')}</span>
          </button>

          {/* Modal de contacto (USANDO PORTAL → FUNCIONA EN TODOS LOS NAVEGADORES) */}
          <ContactFormModal
            isOpen={isContactFormOpen}
            onClose={() => setIsContactFormOpen(false)}
            features={contactFormFeatures}
          />
        </div>

        {/* Modal de funcionalidades */}
        {selectedFeature && (
          <FeatureModal
            isOpen={!!selectedFeature}
            onClose={() => setSelectedFeature(null)}
            featureId={selectedFeature}
          />
        )}
      </div>
    </section>
  );
}
