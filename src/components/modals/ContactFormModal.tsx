import { useState } from 'react';
import { X, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { createPortal } from 'react-dom';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  features: Array<{
    id: string;
    labelEn: string;
    labelEs: string;
  }>;
}

// ===== CONFIGURACIÓN DE CONTACTO =====
const CONTACT_CONFIG = {
  // Número de WhatsApp (formato internacional sin + ni espacios)
  whatsappNumber: '19296077050',
  
  // Endpoint de Formspree
  formspreeEndpoint: 'https://formspree.io/f/xrbdddop',
};

export default function ContactFormModal({ isOpen, onClose, features }: ContactFormModalProps) {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    feature: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Simple math captcha
  const [captchaQuestion] = useState(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCaptchaAnswer(value);
    setCaptchaVerified(parseInt(value) === captchaQuestion.answer);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = t('contactForm.required');
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = t('contactForm.required');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === 'es' ? 'Formato de correo inválido' : 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t('contactForm.required');
    }
    if (!formData.feature) {
      newErrors.feature = t('contactForm.required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ===== FUNCIÓN PARA ENVIAR EMAIL (FORMSPREE) =====
  const sendEmail = async () => {
    const selectedFeature = features.find(f => f.id === formData.feature);
    const featureLabel = selectedFeature 
      ? (language === 'es' ? selectedFeature.labelEs : selectedFeature.labelEn)
      : formData.feature;

    const response = await fetch(CONTACT_CONFIG.formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        feature: featureLabel,
        message: formData.message || 'Sin mensaje adicional',
        _subject: `Nuevo contacto: ${featureLabel}`
      })
    });

    if (!response.ok) throw new Error('Error sending email');
  };

  // ===== FUNCIÓN PARA ENVIAR WHATSAPP =====
  const sendWhatsApp = () => {
    const selectedFeature = features.find(f => f.id === formData.feature);
    const featureLabel = selectedFeature 
      ? (language === 'es' ? selectedFeature.labelEs : selectedFeature.labelEn)
      : formData.feature;

    const message = `
*Nuevo Contacto desde el Formulario*

👤 *Nombre:* ${formData.firstName} ${formData.lastName}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.phone}
🎯 *Interesado en:* ${featureLabel}
${formData.message ? `\n💬 *Mensaje:*\n${formData.message}` : ''}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp en nueva ventana
    window.open(whatsappUrl, '_blank');
  };

  // ===== FUNCIÓN PRINCIPAL DE ENVÍO =====
  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }

    if (!captchaVerified) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Enviar por email
      await sendEmail();
      
      // Enviar por WhatsApp
      sendWhatsApp();
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          feature: '',
          message: ''
        });
        setCaptchaAnswer('');
        setCaptchaVerified(false);
        setSubmitStatus('idle');
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-6">
      
      <div 
        className="absolute inset-0"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-2xl w-full">

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-white" />
            <h3 className="text-2xl font-bold text-white">
              {t('contactForm.title')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border-l-4 border-green-500 px-6 py-4 flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <p className="text-green-800 font-medium">
              {t('contactForm.success')}
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border-l-4 border-red-500 px-6 py-4 flex items-center space-x-3">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <p className="text-red-800 font-medium">
              {t('contactForm.error')}
            </p>
          </div>
        )}

        <div className="px-6 py-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contactForm.firstName')} *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contactForm.lastName')} *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contactForm.email')} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contactForm.phone')} *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('contactForm.feature')} *
            </label>
            <select
              name="feature"
              value={formData.feature}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.feature ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">{t('contactForm.selectFeature')}</option>
              {features.map(feature => (
                <option key={feature.id} value={feature.id}>
                  {language === 'es' ? feature.labelEs : feature.labelEn}
                </option>
              ))}
            </select>
            {errors.feature && (
              <p className="mt-1 text-sm text-red-600">{errors.feature}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('contactForm.message')}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('contactForm.captcha')} {captchaQuestion.num1} + {captchaQuestion.num2}? *
            </label>
            <input
              type="number"
              value={captchaAnswer}
              onChange={handleCaptchaChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                captchaAnswer && !captchaVerified ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {captchaAnswer && captchaVerified && (
              <p className="mt-1 text-sm text-green-600 flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                {language === 'es' ? '¡Correcto!' : 'Correct!'}
              </p>
            )}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              {t('close')}
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || submitStatus === 'success'}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('contactForm.sending') : t('contactForm.submit')}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}