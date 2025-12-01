import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function TermsOfService() {
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
            <span>{t('terms.backHome')}</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-center">{t('terms.title')}</h1>
          <p className="text-gray-400 mt-4 text-center">{t('terms.effectiveDate')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-invert max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('terms.section1.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('terms.section1.para1')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section1.para2')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('terms.section2.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">{t('terms.section2.intro')}</p>
            
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>{t('terms.section2.item1')}</li>
              <li>{t('terms.section2.item2')}</li>
              <li>{t('terms.section2.item3')}</li>
              <li>{t('terms.section2.item4')}</li>
              <li>{t('terms.section2.item5')}</li>
              <li>{t('terms.section2.item6')}</li>
              <li>{t('terms.section2.item7')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('terms.section3.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('terms.section3.para1')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section3.para2')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('terms.section4.title')}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section4.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('terms.section5.title')}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section5.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('terms.section6.title')}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section6.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('terms.section7.title')}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section7.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('terms.section8.title')}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section8.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('terms.section9.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('terms.section9.intro')}
            </p>
            
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>{t('terms.section9.item1')}</li>
              <li>{t('terms.section9.item2')}</li>
              <li>{t('terms.section9.item3')}</li>
              <li>{t('terms.section9.item4')}</li>
              <li>{t('terms.section9.item5')}</li>
              <li>{t('terms.section9.item6')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('terms.section10.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('terms.section10.intro')}
            </p>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <p className="text-gray-300"><strong>{t('terms.contact.company')}</strong></p>
              <p className="text-gray-300">{t('terms.contact.email')}<a href="mailto:info@autobotec.net" className="text-blue-400 hover:text-blue-300">info@autobotec.net</a></p>
              <p className="text-gray-300">{t('terms.contact.phone')}<a href="tel:+19295038328" className="text-blue-400 hover:text-blue-300">+1 (929) 607-7050</a></p>
              <p className="text-gray-300">{t('terms.contact.address')}</p>
            </div>
          </section>

          <section className="mb-8 pt-8 border-t border-slate-800">
            <p className="text-gray-400 text-sm">
              {t('terms.lastUpdated')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
