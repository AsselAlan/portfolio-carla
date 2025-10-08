import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import MLCard from '../components/MLCard';

const Retail = () => {
  const [activeTab, setActiveTab] = useState('fichas');

  const retailProjects = {
    fichas: [
      {
        id: 1,
        title: 'Ficha Producto Tech',
        description: 'Optimizada para conversión con jerarquía clara y beneficios destacados.',
        image: '/images/ml_ficha_01.jpg',
        checklist: [
          'Jerarquía visual clara',
          'Beneficios en bullet points',
          'Prueba social visible',
          'CTA destacado'
        ],
        type: 'ficha'
      },
      {
        id: 2,
        title: 'Ficha Moda Premium',
        description: 'Fotografía hero + detalles de producto en grid limpio.',
        image: '/images/ml_ficha_02.jpg',
        checklist: [
          'Fotografía de alta calidad',
          'Detalles técnicos ordenados',
          'Tabla de talles clara',
          'Envío y garantía destacados'
        ],
        type: 'ficha'
      }
    ],
    carousels: [
      {
        id: 3,
        title: 'Carrusel Black Friday',
        description: 'Secuencia de 6 imágenes con storytelling de ofertas.',
        image: '/images/ml_carousel_01.jpg',
        checklist: [
          'Narrativa secuencial',
          'Descuentos destacados',
          'Urgencia visual',
          'Coherencia gráfica'
        ],
        type: 'carousel'
      },
      {
        id: 4,
        title: 'Carrusel Lanzamiento',
        description: 'Presentación de producto nuevo en 5 slides.',
        image: '/images/ml_carousel_02.jpg',
        checklist: [
          'Slide hero impactante',
          'Características clave',
          'Comparativas',
          'Call to action final'
        ],
        type: 'carousel'
      }
    ],
    landing: [
      {
        id: 5,
        title: 'Hero Banner Temporada',
        description: 'Imagen principal para landing de categoría.',
        image: '/images/ml_landing_01.jpg',
        checklist: [
          'Mensaje claro y directo',
          'Propuesta de valor visible',
          'CTA destacado',
          'Responsive design'
        ],
        type: 'landing'
      }
    ]
  };

  const tabs = [
    { id: 'fichas', label: 'Fichas ML', count: retailProjects.fichas.length },
    { id: 'carousels', label: 'Carruseles', count: retailProjects.carousels.length },
    { id: 'landing', label: 'Landing Hero', count: retailProjects.landing.length }
  ];

  return (
    <section id="retail" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader 
          title="Retail"
          subtitle="Fichas Mercado Libre, carruseles y landing hero. Foco en escaneabilidad y conversión."
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-neutral-light">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium transition-colors duration-300 border-b-2 ${
                activeTab === tab.id
                  ? 'border-brand-primary text-brand-primary'
                  : 'border-transparent text-neutral-mid hover:text-brand-secondary'
              }`}
            >
              {tab.label}
              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-neutral-light">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grid de proyectos según tab activa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {retailProjects[activeTab].map((project) => (
            <MLCard key={project.id} {...project} />
          ))}
        </div>

        {/* Nota UX */}
        <div className="mt-12 p-6 bg-brand-primary/5 border-l-4 border-brand-primary rounded-lg">
          <p className="text-sm text-neutral-dark leading-relaxed">
            <strong className="font-semibold">Nota UX:</strong> Todos los diseños priorizan la 
            escaneabilidad rápida, jerarquía visual clara y CTAs destacados. Cada pieza está 
            optimizada para mobile-first y testeo A/B.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Retail;
