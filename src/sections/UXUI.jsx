import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const UXUI = () => {
  const uxProjects = [
    {
      id: 1,
      title: 'App E-commerce',
      description: 'Flujo completo desde listado hasta confirmación de compra.',
      screens: [
        '/images/ux_ecommerce_01.jpg',
        '/images/ux_ecommerce_02.jpg',
        '/images/ux_ecommerce_03.jpg'
      ],
      prototypeUrl: 'https://figma.com/proto/placeholder-01'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Interfaz de métricas y reportes para gestión de campañas.',
      screens: [
        '/images/ux_dashboard_01.jpg',
        '/images/ux_dashboard_02.jpg',
        '/images/ux_dashboard_03.jpg'
      ],
      prototypeUrl: 'https://figma.com/proto/placeholder-02'
    },
    {
      id: 3,
      title: 'Onboarding Mobile',
      description: 'Flujo de registro e introducción a la app.',
      screens: [
        '/images/ux_onboarding_01.jpg',
        '/images/ux_onboarding_02.jpg',
        '/images/ux_onboarding_03.jpg'
      ],
      prototypeUrl: 'https://figma.com/proto/placeholder-03'
    }
  ];

  const deliverables = [
    'Tokens de diseño (colores, tipografías, espaciados)',
    'Componentes documentados con estados (hover, active, disabled)',
    'Specs de desarrollo (medidas, interacciones, animaciones)',
    'Guidelines de uso y patrones de interfaz',
    'Assets exportados en formatos optimizados'
  ];

  return (
    <section id="uxui" className="section-padding bg-neutral-light">
      <div className="container-custom">
        <SectionHeader 
          title="UX/UI"
          subtitle="Prototipos Figma, microcopys y handoff con specs. Del wireframe al desarrollo."
        />

        {/* Grid de proyectos */}
        <div className="space-y-8 mb-12">
          {uxProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Contenido */}
                <div className="space-y-4 p-2">
                  <h3 className="text-2xl font-display font-semibold text-brand-secondary">
                    {project.title}
                  </h3>
                  <p className="text-neutral-mid leading-relaxed">
                    {project.description}
                  </p>
                  <a 
                    href={project.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-primary transition-colors font-medium"
                  >
                    Abrir prototipo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Screens */}
                <div className="grid grid-cols-3 gap-4">
                  {project.screens.map((screen, index) => (
                    <div 
                      key={index}
                      className="aspect-[9/16] bg-neutral-light rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <img 
                        src={screen}
                        alt={`${project.title} - Pantalla ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Handoff Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-2xl font-display font-semibold text-brand-secondary mb-6">
            Handoff completo
          </h3>
          <p className="text-neutral-mid mb-6">
            Cada proyecto incluye documentación técnica para facilitar la implementación:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-neutral-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UXUI;
