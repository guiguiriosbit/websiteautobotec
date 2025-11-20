import { X, Globe, Zap, Palette, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureId: string;
}

const featureData = {
  'responsive-design': {
    icon: Globe,
    images: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    ],
    prefix: 'responsive'
  },
  'lightning-fast': {
    icon: Zap,
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    ],
    prefix: 'lightning'
  },
  'modern-ui': {
    icon: Palette,
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80',
    ],
    prefix: 'modern'
  },
  'secure-reliable': {
    icon: Shield,
    images: [
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
    ],
    prefix: 'secure'
  }
};

export default function FeatureModal({ isOpen, onClose, featureId }: FeatureModalProps) {
  const { t } = useLanguage();
  
  if (!isOpen) return null;

  const feature = featureData[featureId];
  if (!feature) return null;

  const Icon = feature.icon;
  const prefix = feature.prefix;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          {/* Header with image */}
          <div className="relative h-64 overflow-hidden">
            <img 
              src={feature.images[0]} 
              alt={t(`${prefix}.title`)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {t(`${prefix}.title`)}
                  </h2>
                  <p className="text-gray-200 mt-1">
                    {t(`${prefix}.description`)}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 max-h-96 overflow-y-auto">
            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('keyFeatures')}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      {t(`${prefix}.detail${num}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-8">
              <img 
                src={feature.images[1]} 
                alt={`${t(`${prefix}.title`)} showcase`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('benefits')}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{num}</span>
                    </div>
                    <p className="text-gray-700">
                      {t(`${prefix}.benefit${num}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              {t('close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}