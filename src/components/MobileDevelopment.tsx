import { Smartphone, Tablet, Watch, Wifi } from 'lucide-react';

export default function MobileDevelopment() {
  const platforms = [
    {
      icon: Smartphone,
      title: 'iOS & Android',
      description: 'Native and cross-platform apps that deliver seamless experiences on both platforms.',
      bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
    },
    {
      icon: Tablet,
      title: 'Tablet Optimized',
      description: 'Fully optimized interfaces for tablets with intuitive touch interactions.',
      bgImage: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80'
    },
    {
      icon: Watch,
      title: 'Wearables',
      description: 'Extend your app ecosystem to smartwatches and wearable devices.',
      bgImage: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80'
    },
    {
      icon: Wifi,
      title: 'Offline-First',
      description: 'Apps that work flawlessly even without an internet connection.',
      bgImage: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80'
    },
  ];

  return (
    <section id="mobile-development" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black-600 mb-4 md:mb-6">
            Mobile Development
          </h2>
          <p className="text-lg md:text-xl text-black-600 max-w-3xl mx-auto">
            Create engaging mobile experiences that users love. We develop high-performance apps for iOS and Android platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="relative bg-blue-200 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Imagen de fondo */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${platform.bgImage})`
                }}
              ></div>
              
              {/* Overlay blanco semi-transparente */}
              <div className="absolute inset-0 bg-white opacity-45 group-hover:opacity-92 transition-all"></div>
              
              {/* Contenido */}
              <div className="relative z-10 p-6 md:p-8">
                <platform.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold text-black-900 mb-3">
                  {platform.title}
                </h3>
                <p className="text-black-600 leading-relaxed">
                  {platform.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative bg-blue-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Imagen de fondo para la sección de approach */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80)'
            }}
          ></div>
          
          {/* Overlay blanco */}
          <div className="absolute inset-0 bg-blue-200 opacity-75"></div>
          
          {/* Contenido */}
          <div className="relative z-10 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black-900 mb-6 md:mb-8">Our Mobile Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-black-900 mb-2">Discovery</h4>
                <p className="text-black-600">Understanding your vision and defining the perfect mobile strategy.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-black-900 mb-2">Development</h4>
                <p className="text-black-600">Agile development with continuous feedback and iterations.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-black-900 mb-2">Launch & Scale</h4>
                <p className="text-black-600">Deploy to app stores and scale with ongoing support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
