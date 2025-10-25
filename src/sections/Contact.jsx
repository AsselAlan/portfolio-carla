import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Scroll al inicio cuando se carga el componente
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section id="contacto" className="min-h-screen bg-brand-accent relative overflow-hidden flex flex-col justify-center py-16 md:py-24 lg:py-32">
      {/* SVG Línea Superior */}
      <div className="absolute top-20  right-0 w-64 md:w-80 lg:w-96 opacity-80 pointer-events-none">
        <svg 
          width="145" 
          height="75" 
          viewBox="0 0 145 75" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <path 
            d="M8.38449 45.0767C31.8508 26.5233 57.1805 7.61217 88.6751 15.2637C107.923 19.9399 121.553 36.0627 136.014 48.4348C166.078 74.1569 208.666 58.5796 216.977 21.9775" 
            stroke="#C4ADF4" 
            strokeWidth="27.0382"
          />
        </svg>
      </div>

      {/* SVG Línea Inferior */}
      <div className="absolute bottom-0 left-0 w-48 md:w-60 lg:w-72 opacity-80 pointer-events-none">
        <svg 
          width="96" 
          height="82" 
          viewBox="0 0 96 82" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <path 
            d="M-3 17.5107C18.7456 17.5107 40.3335 21.0081 56.2363 36.9992C70.6335 51.4764 77.8184 70.5814 77.8184 89.035" 
            stroke="#C4ADF4" 
            strokeWidth="35.0213"
          />
        </svg>
      </div>

      <div className="container-custom pt-6 md:pt-0 relative z-10">
        {/* Título principal */}
        <div className="text-start mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-secondary mb-4">
            Trabajemos{' '}
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-secondary">
            juntos
          </span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-12 bg-white rounded-3xl shadow-sm">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-2">
                ¡Mensaje enviado!
              </h3>
              <p className="text-gray-600">
                Te responderé a la brevedad.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-brand-secondary mb-2"
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border bg-brand-accent ${
                        errors.name 
                          ? 'border-feedback-error focus:ring-feedback-error' 
                          : 'border-black focus:ring-brand-primary focus:border-brand-primary'
                      } focus:ring-2 focus:outline-none transition-all`}
                      placeholder=""
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-feedback-error">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-brand-secondary mb-2"
                    >
                      Correo electrónico*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border bg-brand-accent ${
                        errors.email 
                          ? 'border-feedback-error focus:ring-feedback-error' 
                          : 'border-black focus:ring-brand-primary focus:border-brand-primary'
                      } focus:ring-2 focus:outline-none transition-all`}
                      placeholder=""
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-feedback-error">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-brand-secondary mb-2"
                  >
                    Contame más*
                  </label>
                  <p className="text-sm text-gray-600 mb-3">
                    Me encantaría saber más sobre su marca y organización, sus necesidades y cualquier detalle sobre presupuesto y cronograma.
                  </p>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border bg-brand-accent ${
                      errors.message 
                        ? 'border-feedback-error focus:ring-feedback-error' 
                        : 'border-black focus:ring-brand-primary focus:border-brand-primary'
                    } focus:ring-2 focus:outline-none transition-all resize-none`}
                    placeholder=""
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-feedback-error">{errors.message}</p>
                  )}
                </div>

                {/* Botón Submit */}
                <button
                  type="submit"
                  className="w-full bg-brand-secondary text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-brand-primary hover:text-brand-secondary transition-all duration-300"
                >
                  Enviar
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;