import { ArrowLeft, Zap, Gauge, Rocket, TrendingUp } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function LightningFastPage({ onBack }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>

          {/* Header */}
          <div className="text-center mb-16">
            <Zap className="w-20 h-20 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lightning Fast Performance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimized performance with cutting-edge technologies for blazing speed.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '<1s', label: 'Load Time', icon: Gauge },
              { value: '99+', label: 'PageSpeed Score', icon: TrendingUp },
              { value: '60fps', label: 'Smooth Animations', icon: Zap },
              { value: '100%', label: 'Core Web Vitals', icon: Rocket }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Performance Optimization
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Code Splitting</h3>
                    <p className="text-gray-600 text-sm">Dynamic imports for faster initial load times</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Image Optimization</h3>
                    <p className="text-gray-600 text-sm">Next-gen formats with lazy loading</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">CDN Distribution</h3>
                    <p className="text-gray-600 text-sm">Global edge network for minimal latency</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Caching Strategy</h3>
                    <p className="text-gray-600 text-sm">Smart caching for repeat visits</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Speed Matters
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Website speed directly impacts user experience, conversion rates, and search engine rankings. 
                Studies show that a 1-second delay in page load time can reduce conversions by 7%.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We optimize every aspect of your website to ensure lightning-fast performance, 
                keeping your users engaged and your business growing.
              </p>
              <div className="bg-blue-600 text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Performance Impact</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 53% of mobile users abandon sites that take over 3 seconds to load</li>
                  <li>• Fast sites rank higher in Google search results</li>
                  <li>• Better performance = higher conversion rates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}