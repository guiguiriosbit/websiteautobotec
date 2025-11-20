// import { useState } from 'react';
// import { Globe, Palette, Zap, Shield } from 'lucide-react';

// // Importar páginas de detalles (estas las crearemos después)
// import ResponsiveDesignPage from './pages/responsive-desing';
// import LightningFastPage from './pages/lightning-fast';
// import ModernUIPage from './pages/modern-ui';
// import SecureReliablePage from './pages/secure-reliable';

// export default function WebDevelopment() {
//   const [currentPage, setCurrentPage] = useState('home');

//   const features = [
//     {
//       id: 'responsive-design',
//       icon: Globe,
//       title: 'Responsive Design',
//       description: 'Beautiful websites that work flawlessly on all devices and screen sizes.',
//       bgImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
//       component: ResponsiveDesignPage
//     },
//     {
//       id: 'lightning-fast',
//       icon: Zap,
//       title: 'Lightning Fast',
//       description: 'Optimized performance with cutting-edge technologies for blazing speed.',
//       bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
//       component: LightningFastPage
//     },
//     {
//       id: 'modern-ui',
//       icon: Palette,
//       title: 'Modern UI/UX',
//       description: 'Stunning interfaces designed with user experience at the forefront.',
//       bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
//       component: ModernUIPage
//     },
//     {
//       id: 'secure-reliable',
//       icon: Shield,
//       title: 'Secure & Reliable',
//       description: 'Built with security best practices and robust architecture.',
//       bgImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
//       component: SecureReliablePage
//     },
//   ];

//   // Renderizar página de detalle si no estamos en home
//   if (currentPage !== 'home') {
//     const selectedFeature = features.find(f => f.id === currentPage);
//     if (selectedFeature) {
//       const PageComponent = selectedFeature.component;
//       return <PageComponent onBack={() => setCurrentPage('home')} />;
//     }
//   }

//   // Home Page
//   return (
//     <section id="web-development" className="py-16 md:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
//             Web Development
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             We build powerful, scalable web applications that deliver exceptional user experiences and drive business results.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               onClick={() => setCurrentPage(feature.id)}
//               className="relative p-6 md:p-8 rounded-xl overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 group cursor-pointer"
//             >
//               {/* Imagen de fondo */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
//                 style={{
//                   backgroundImage: `url(${feature.bgImage})`
//                 }}
//               ></div>
              
//               {/* Overlay semi-transparente */}
//               <div className="absolute inset-0 bg-white bg-opacity-95 group-hover:bg-opacity-75 transition-all"></div>
              
//               {/* Contenido */}
//               <div className="relative z-10">
//                 <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-4" />
//                 <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//                 <p className="text-blue-600 font-medium mt-4 group-hover:underline">
//                   Learn more →
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 md:mt-16 relative rounded-2xl overflow-hidden">
//           {/* Imagen de fondo */}
//           <img 
//             src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80" 
//             alt="Technology background"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
          
//           {/* Overlay azul semi-transparente */}
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-75"></div>
          
//           {/* Contenido */}
//           <div className="relative z-10 p-8 md:p-12 text-white">
//             <h3 className="text-2xl md:text-3xl font-bold mb-4">Technologies We Master</h3>
//             <div className="flex flex-wrap gap-3 md:gap-4">
//               {['React', 'Vue.js', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'].map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm rounded-lg font-medium text-sm md:text-base"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useNavigate } from 'react-router-dom';
import { Globe, Palette, Zap, Shield } from 'lucide-react';

export default function WebDevelopment() {
  const navigate = useNavigate();

  const features = [
    {
      id: 'responsive-design',
      icon: Globe,
      title: 'Responsive Design',
      description: 'Beautiful websites that work flawlessly on all devices and screen sizes.',
      bgImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    },
    {
      id: 'lightning-fast',
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technologies for blazing speed.',
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    },
    {
      id: 'modern-ui',
      icon: Palette,
      title: 'Modern UI/UX',
      description: 'Stunning interfaces designed with user experience at the forefront.',
      bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    },
    {
      id: 'secure-reliable',
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and robust architecture.',
      bgImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
    },
  ];

  return (
    <section id="web-development" className="py-16 md:py-24 bg-white scroll-target">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Web Development
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We build powerful, scalable web applications that deliver exceptional user experiences and drive business results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => navigate(`/web-development/${feature.id}`)}
              className="relative p-6 md:p-8 rounded-xl overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 group cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              ></div>
              <div className="absolute inset-0 bg-white bg-opacity-70 group-hover:bg-opacity-45 transition-all"></div>
              <div className="relative z-10">
                <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <p className="text-blue-600 font-medium mt-4 group-hover:underline">Learn more →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
