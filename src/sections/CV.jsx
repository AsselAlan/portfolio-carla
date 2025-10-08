import SectionHeader from '../components/SectionHeader';

const CV = () => {
  const education = [
    {
      year: '2018',
      title: 'Bachillerato en Ciencias Naturales',
      institution: 'Escuela de Enseñanzas Secundarias N°1',
      location: 'Argentina',
    },
    {
      year: '2019 - 2024',
      title: 'Diseñadora en Comunicación Visual',
      institution: 'Facultad de Artes, Universidad Nacional de La Plata',
      location: 'Argentina',
      highlight: true, // Destacar la formación principal
    },
    {
      year: '2024',
      title: 'Curso UX/UI Avanzado',
      institution: 'Coder House',
      location: 'Titulación: 10',
    },
  ];

  return (
    <section id="cv" className="min-h-screen section-padding bg-brand-accent">
      <div className="container-custom">
        <SectionHeader 
          title="Formación"
          subtitle="Mi camino académico"
        />

        <div className="max-w-5xl mx-auto mt-16">
          {/* Grid de Educación */}
          <div className="grid gap-8 mb-16">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${
                  edu.highlight ? 'border-2 border-brand-primary' : ''
                }`}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    {/* Año */}
                    <div className="flex-shrink-0">
                      <div className="inline-block bg-brand-primary/10 text-brand-primary px-6 py-2 rounded-full">
                        <span className="font-bold text-lg">{edu.year}</span>
                      </div>
                    </div>

                    {/* Badge destacado */}
                    {edu.highlight && (
                      <div className="inline-block bg-brand-primary text-brand-secondary px-4 py-1 rounded-full text-xs font-semibold">
                        Título Principal
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-secondary leading-tight">
                      {edu.title}
                    </h3>
                    <p className="text-lg text-gray-700 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500">
                      {edu.location}
                    </p>
                  </div>

                  {/* Línea decorativa */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Sección de descarga */}
          <div className="bg-brand-secondary rounded-3xl p-12 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿Necesitás mi CV completo?
              </h3>
              <p className="text-white/80 text-lg mb-8">
                Descargá mi curriculum vitae en formato PDF con toda mi información profesional
              </p>

              <a 
                href="/cv-carla-lucero.pdf" 
                download="CV-Carla-Lucero.pdf"
                className="inline-flex items-center gap-3 bg-white text-brand-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-primary hover:text-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
