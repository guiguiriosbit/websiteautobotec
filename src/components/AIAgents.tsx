import { Bot, Brain, MessageSquare, TrendingUp } from 'lucide-react';

export default function AIAgents() {
  const capabilities = [
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'Automate complex workflows with AI-powered agents that learn and adapt to your business needs.',
      bgImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Leverage advanced ML models to extract insights and make data-driven decisions.',
      bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Build sophisticated chatbots and virtual assistants that understand natural language.',
      bgImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends and outcomes with AI models trained on your data.',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
  ];

  return (
    <section id="ai-agents" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            AI Agents
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations and deliver intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="relative rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Imagen de fondo */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${capability.bgImage})`
                }}
              ></div>
              
              {/* Overlay azul semi-transparente */}
              <div className="absolute inset-0 bg-blue-600 opacity-75 group-hover:opacity-70 transition-all"></div>
              
              {/* Contenido */}
              <div className="relative z-10 p-6 md:p-8">
                <capability.icon className="w-10 h-10 md:w-12 md:h-12 text-white mb-4 drop-shadow-lg" />
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-blue-50 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          {/* Imagen de fondo para sección de tecnologías */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80)'
            }}
          ></div>
          
          {/* Overlay azul oscuro */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-blue-900 opacity-75"></div>
          
          {/* Contenido */}
          <div className="relative z-10 p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Ready for the AI Revolution?
              </h3>
              <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100">
                Our AI agents are powered by cutting-edge technologies including GPT-4, Claude, OLLaMA, and custom-trained models tailored to your specific needs.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {['GPT-4', 'Claude', 'OLLaMA', 'TensorFlow', 'PyTorch', 'LangChain'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-lg font-medium text-sm md:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}