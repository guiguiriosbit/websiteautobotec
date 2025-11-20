import { ArrowLeft, Shield, Lock, Server, CheckCircle } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function SecureReliablePage({ onBack }) {
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
            <Shield className="w-20 h-20 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Secure & Reliable
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with security best practices and robust architecture.
            </p>
          </div>

          {/* Security Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Lock,
                title: 'SSL/TLS Encryption',
                description: 'All data transmitted between your users and servers is encrypted with industry-standard protocols.'
              },
              {
                icon: Shield,
                title: 'OWASP Protection',
                description: 'Defense against the top 10 web application security risks including SQL injection and XSS attacks.'
              },
              {
                icon: Server,
                title: 'Secure Hosting',
                description: 'Enterprise-grade infrastructure with automated backups, DDoS protection, and 24/7 monitoring.'
              },
              {
                icon: CheckCircle,
                title: 'Regular Audits',
                description: 'Continuous security testing and vulnerability assessments to keep your application safe.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Reliability Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Industry-Leading Reliability
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: '99.99%', label: 'Uptime Guarantee' },
                { value: '24/7', label: 'Monitoring & Support' },
                { value: '<5min', label: 'Mean Time to Recovery' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-lg text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Best Practices */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Security Best Practices
              </h2>
              <ul className="space-y-4">
                {[
                  'Multi-factor authentication (MFA)',
                  'Role-based access control (RBAC)',
                  'Encrypted data at rest and in transit',
                  'Regular security patches and updates',
                  'Comprehensive logging and monitoring',
                  'Incident response procedures'
                ].map((practice, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Compliance & Standards</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                We build applications that meet industry standards and compliance requirements, 
                ensuring your business is protected and your users' data is secure.
              </p>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-1">GDPR Compliant</h3>
                  <p className="text-sm text-blue-100">European data protection standards</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-1">SOC 2 Type II</h3>
                  <p className="text-sm text-blue-100">Security, availability, and confidentiality</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-1">PCI DSS</h3>
                  <p className="text-sm text-blue-100">Payment card industry standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}