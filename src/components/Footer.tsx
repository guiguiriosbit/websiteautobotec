
import { Bot, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {

  const year = new Date().getFullYear();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 md:mb-6">
              <Bot className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
              <span className="text-xl md:text-2xl font-bold">Autobotec.net</span>
            </div>
            <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed">
              Transforming businesses through innovative digital solutions. We craft experiences that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61584420652358" aria-label="Facebook" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/home" aria-label="Twitter" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('web-development')}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('mobile-development')}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Mobile Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ai-agents')}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  AI Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('digital-marketing')}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Digital Marketing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@autobotec.net" className="text-white hover:text-blue-400 transition-colors break-all">
                  info@autobotec.net
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+19295538328" className="text-white hover:text-blue-400 transition-colors">
                  +1 (929) 607-7050
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  37-09 75 st Jackson htgs <br />
                  NY 11372, USA
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Our Team</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              A passionate group of developers, designers, and strategists dedicated to creating exceptional digital experiences.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Join Our Team
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              &copy; {year} Autobotec.net. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-white hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-white hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
