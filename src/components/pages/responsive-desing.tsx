import { ArrowLeft, Globe, Smartphone, Tablet, Monitor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function ResponsiveDesignPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>

          {/* Header */}
          <div className="text-center mb-16">
            <Globe className="w-20 h-20 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Responsive Design
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beautiful websites that work flawlessly on all devices and screen sizes.
            </p>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Responsive Design Matters
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                In today's multi-device world, your website needs to look and function perfectly 
                whether your users are on a smartphone, tablet, laptop, or desktop computer.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Responsive design ensures that your content adapts seamlessly to any screen size, 
                providing an optimal viewing experience that keeps users engaged and drives conversions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Improved user experience across all devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Better SEO rankings with mobile-first indexing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Reduced bounce rates and increased engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Cost-effective single codebase maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Device Showcase */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Optimized for Every Screen
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Smartphone, name: 'Mobile', size: '320px+' },
                { icon: Tablet, name: 'Tablet', size: '768px+' },
                { icon: Monitor, name: 'Desktop', size: '1024px+' },
                { icon: Monitor, name: 'Large', size: '1440px+' }
              ].map((device, index) => (
                <div key={index} className="text-center">
                  <device.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{device.name}</h3>
                  <p className="text-sm text-gray-600">{device.size}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
