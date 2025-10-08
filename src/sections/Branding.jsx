import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Modal from '../components/Modal';

const Branding = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const brandingProjects = [
    {
      id: 1,
      title: 'Sistema de Identidad Completo',
      description: 'Marca, manual, papelería y aplicaciones digitales.',
      image: '/images/branding_01.jpg',
      tags: ['Sistema', 'Guía rápida'],
    },
    {
      id: 2,
      title: 'Kit de Lanzamiento Startup',
      description: 'Logo, paleta, tipografía y templates listos para usar.',
      image: '/images/branding_02.jpg',
      tags: ['Kit lanzamiento', 'Templates'],
    },
    {
      id: 3,
      title: 'Rebranding Corporativo',
      description: 'Renovación de imagen, guía de estilo y assets.',
      image: '/images/branding_03.jpg',
      tags: ['Rebranding', 'Corporativo'],
    },
    {
      id: 4,
      title: 'Identidad E-commerce',
      description: 'Sistema visual adaptado para retail digital.',
      image: '/images/branding_04.jpg',
      tags: ['E-commerce', 'Digital'],
    },
    {
      id: 5,
      title: 'Marca Personal',
      description: 'Identidad para profesionales independientes.',
      image: '/images/branding_05.jpg',
      tags: ['Personal', 'Profesional'],
    },
    {
      id: 6,
      title: 'Submarca de Producto',
      description: 'Sistema de submarca integrado a marca madre.',
      image: '/images/branding_06.jpg',
      tags: ['Submarca', 'Producto'],
    },
  ];

  const displayedProjects = showAll ? brandingProjects : brandingProjects.slice(0, 3);

  return (
    <section id="branding" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader 
          title="Branding"
          subtitle="Sistemas, guías rápidas y kits de lanzamiento. Desde el concepto hasta las piezas finales."
        />

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProjects.map((project) => (
            <Card 
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] bg-neutral-light rounded-lg overflow-hidden mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <h3 className="text-xl font-display font-semibold text-brand-secondary mb-2">
                {project.title}
              </h3>
              
              <p className="text-neutral-mid text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Botón Ver más */}
        {!showAll && brandingProjects.length > 3 && (
          <div className="text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="btn-secondary"
              aria-label="Ver más proyectos de branding"
            >
              Ver más branding
            </button>
          </div>
        )}

        {/* Modal para ver proyecto completo */}
        <Modal 
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
        >
          {selectedProject && (
            <div className="space-y-6">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full rounded-lg"
              />
              <div>
                <p className="text-neutral-mid leading-relaxed mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Branding;
