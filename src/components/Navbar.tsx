import { useState } from 'react';
import { Menu, X, Bot, FileCode2, Smartphone, Brain, QrCode, Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-1 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Bot className="w-10 h-10 md:w-15 md:h-15 text-blue-700" />
            <span className="text-xl md:text-3xl font-bold text-gray-800">Autobotec</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <FileCode2 className="w-4 h-4 md:w-10 md:h-10 text-green-700" />
            <button
              onClick={() => scrollToSection('web-development')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {language === 'es' ? 'Desarrollo Web' : 'Web Development'}
            </button>
            <Smartphone className="w-4 h-4 md:w-10 md:h-10 text-fuchsia-700" />
            <button
              onClick={() => scrollToSection('mobile-development')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {language === 'es' ? 'Desarrollo Móvil' : 'Mobile Development'}
            </button>
            <Brain className="w-4 h-4 md:w-10 md:h-10 text-blue-700" />
            <button
              onClick={() => scrollToSection('ai-agents')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {language === 'es' ? 'Agentes IA' : 'AI Agents'}
            </button>
            <QrCode className="w-4 h-4 md:w-10 md:h-10 text-orange-700" />
            <button
              onClick={() => scrollToSection('digital-marketing')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {language === 'es' ? 'Marketing Digital' : 'Digital Marketing'}
            </button>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1 ml-4">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-md transition-colors ${
                  language === 'en' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Globe2 className="w-4 h-4" />
                <span className="text-sm font-medium">EN</span>
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-md transition-colors ${
                  language === 'es' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Globe2 className="w-4 h-4" />
                <span className="text-sm font-medium">ES</span>
              </button>
            </div>
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 py-3 space-y-3">
            {/* Language Toggle Mobile */}
            <div className="flex items-center justify-center space-x-2 bg-gray-100 rounded-lg p-1 mb-3">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-md transition-colors ${
                  language === 'en' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600'
                }`}
              >
                <Globe2 className="w-4 h-4" />
                <span className="text-sm font-medium">EN</span>
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-md transition-colors ${
                  language === 'es' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600'
                }`}
              >
                <Globe2 className="w-4 h-4" />
                <span className="text-sm font-medium">ES</span>
              </button>
            </div>

            <button
              onClick={() => scrollToSection('web-development')}
              className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-green hover:text-green transition-colors rounded-lg"
            >
              {language === 'es' ? 'Desarrollo Web' : 'Web Development'}
            </button>
            <button
              onClick={() => scrollToSection('mobile-development')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
            >
              {language === 'es' ? 'Desarrollo Móvil' : 'Mobile Development'}
            </button>
            <button
              onClick={() => scrollToSection('ai-agents')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
            >
              {language === 'es' ? 'Agentes IA' : 'AI Agents'}
            </button>
            <button
              onClick={() => scrollToSection('digital-marketing')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
            >
              {language === 'es' ? 'Marketing Digital' : 'Digital Marketing'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}