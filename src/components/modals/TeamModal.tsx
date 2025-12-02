

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

const engineers: EngineerProfile[] = [
  {
    name: 'Ana Torres',
    role: 'Frontend Engineer',
    avatar: '/img/avatar1.png',
    description: 'Especialista en React, UI/UX y accesibilidad. Apasionada por crear interfaces intuitivas.'
  },
  {
    name: 'Carlos Gómez',
    role: 'Backend Engineer',
    avatar: '/img/avatar2.png',
    description: 'Experto en Node.js, APIs y bases de datos. Le encanta optimizar el rendimiento.'
  },
  {
    name: 'Lucía Ramírez',
    role: 'DevOps Engineer',
    avatar: '/img/avatar3.png',
    description: 'Automatización, CI/CD y cloud. Siempre buscando la máxima eficiencia operativa.'
  }
];

export default function TeamModal({ isOpen, onClose }: TeamModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-fuchsia-600 text-2xl font-bold focus:outline-none"
          aria-label="Cerrar"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-fuchsia-700">Nuestro Equipo</h2>
        <div className="flex flex-col gap-6">
          {engineers.map((eng, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-fuchsia-50 rounded-xl p-4 shadow-sm">
              <img
                src={eng.avatar}
                alt={eng.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-fuchsia-300"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-fuchsia-900 text-lg">{eng.name}</div>
                <div className="text-fuchsia-700 text-sm mb-1">{eng.role}</div>
                <div className="text-gray-700 text-sm">{eng.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
