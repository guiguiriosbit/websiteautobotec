import { useLanguage } from '../../contexts/LanguageContext';


interface EngineerProfile {
  name: string;
  role: string;
  avatar: string;
  description: string;
}

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}


const engineers = [
  {
    name: {
      es: 'Juan Carlos Agudelo',
      en: 'Juan Carlos Agudelo',
    },
    role: {
      es: 'Ingeniero Frontend',
      en: 'Frontend Engineer',
    },
    avatar: '/img/avatar1.png',
    description: {
      es: 'Especialista en React, UI/UX y accesibilidad. Apasionado por crear interfaces intuitivas.',
      en: 'Specialist in React, UI/UX, and accessibility. Passionate about creating intuitive interfaces.'
    }
  },
  {
    name: {
      es: 'Juan Guillermo Rios C',
      en: 'Juan Guillermo Rios C',
    },
    role: {
      es: 'Ingeniero Backend',
      en: 'Backend Engineer',
    },
    avatar: '/img/avatar2.png',
    description: {
      es: 'Experto en Node.js, APIs y bases de datos. Le encanta optimizar el rendimiento.',
      en: 'Expert in Node.js, APIs, and databases. Loves optimizing performance.'
    }
  },
  {
    name: {
      es: 'Jorge Giovanny Rios',
      en: 'Jorge Giovanny Rios',
    },
    role: {
      es: 'Ingeniero DevOps',
      en: 'DevOps Engineer',
    },
    avatar: '/img/avatar3.png',
    description: {
      es: 'Automatización, CI/CD y cloud. Siempre buscando la máxima eficiencia operativa.',
      en: 'Automation, CI/CD, and cloud. Always seeking maximum operational efficiency.'
    }
  }
];

export default function TeamModal({ isOpen, onClose }: TeamModalProps) {
  const { language, t } = useLanguage();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-blue-50 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn border-2 border-blue-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-2xl font-bold focus:outline-none"
          aria-label={language === 'es' ? 'Cerrar' : 'Close'}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          {language === 'es' ? 'Nuestro Equipo' : 'Our Team'}
        </h2>
        <div className="flex flex-col gap-6">
          {engineers.map((eng, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-blue-100">
              <img
                src={eng.avatar}
                alt={eng.name[language]}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-300"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-blue-900 text-lg">{eng.name[language]}</div>
                <div className="text-blue-700 text-sm mb-1">{eng.role[language]}</div>
                <div className="text-gray-700 text-sm">{eng.description[language]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
