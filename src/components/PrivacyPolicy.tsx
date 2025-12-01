import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 pt-20">
      {/* Header */}
      <div className="w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>{t('privacy.backHome')}</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-center">{t('privacy.title')}</h1>
          <p className="text-gray-400 mt-4 text-center">{t('privacy.effectiveDate')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-invert max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section1.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('privacy.section1.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section2.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">{t('privacy.section2.intro')}</p>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">{t('privacy.section2.personalData')}</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>{t('privacy.section2.item1')}</li>
              <li>{t('privacy.section2.item2')}</li>
              <li>{t('privacy.section2.item3')}</li>
              <li>{t('privacy.section2.item4')}</li>
              <li>{t('privacy.section2.item5')}</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">{t('privacy.section2.automatic')}</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>{t('privacy.section2.item6')}</li>
              <li>{t('privacy.section2.item7')}</li>
              <li>{t('privacy.section2.item8')}</li>
              <li>{t('privacy.section2.item9')}</li>
              <li>{t('privacy.section2.item10')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section3.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">{t('privacy.section3.intro')}</p>
            
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>{t('privacy.section3.item1')}</li>
              <li>{t('privacy.section3.item2')}</li>
              <li>{t('privacy.section3.item3')}</li>
              <li>{t('privacy.section3.item4')}</li>
              <li>{t('privacy.section3.item5')}</li>
              <li>{t('privacy.section3.item6')}</li>
              <li>{t('privacy.section3.item7')}</li>
              <li>{t('privacy.section3.item8')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section4.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">{t('privacy.section4.intro')}</p>
            
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>{t('privacy.section4.item1')}</li>
              <li>{t('privacy.section4.item2')}</li>
              <li>{t('privacy.section4.item3')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section5.title')}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t('privacy.section5.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section6.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('privacy.section6.intro')}
            </p>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <p className="text-gray-300"><strong>{t('privacy.contact.company')}</strong></p>
              <p className="text-gray-300">{t('privacy.contact.email')}<a href="mailto:info@autobotec.net" className="text-blue-400 hover:text-blue-300">info@autobotec.net</a></p>
              <p className="text-gray-300">{t('privacy.contact.phone')}<a href="tel:+19295038328" className="text-blue-400 hover:text-blue-300">+1 (929) 607-7050</a></p>
              <p className="text-gray-300">{t('privacy.contact.address')}</p>
            </div>
          </section>

          <section className="mb-8 pt-8 border-t border-slate-800">
            <p className="text-gray-400 text-sm">
              {t('privacy.lastUpdated')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
