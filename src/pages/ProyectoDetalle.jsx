import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById, getToolIcon } from '../data/proyectos';

const ProyectoDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscar el proyecto por ID (ahora son strings únicos)
  const project = getProjectById(id);

  const handleBack = () => {
    navigate('/', { replace: true });
    // Esperar un poco para que la navegación se complete y luego hacer scroll
    setTimeout(() => {
      const proyectosSection = document.getElementById('proyectos');
      if (proyectosSection) {
        proyectosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Scroll al inicio cuando se carga el componente
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-brand-accent">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-secondary mb-4">Proyecto no encontrado</h2>
          <button
            onClick={handleBack}
            className="text-brand-primary hover:underline"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-brand-accent">
      {/* Header con breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="2xl:max-w-9xl md:max-w-7xl mx-auto px-6 md:px-12 2xl:px-0 py-6">
          <button
            onClick={handleBack}
            className="text-sm text-brand-secondary hover:text-brand-primary transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a proyectos
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="2xl:max-w-9xl md:max-w-7xl mx-auto px-6 md:px-12 2xl:px-0 py-6">
        {/* Categoría y nombre */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm text-gray-600 capitalize">
            {project.category === 'uxui' ? 'UX/UI' : project.category}
          </span>
          <span className="text-sm text-gray-600">
            Carla Lucero
          </span>
        </div>
        
        {/* Contenido principal: Info + Cover */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 min-h-[600px]">
          {/* Columna izquierda - Info */}
          <div className="flex flex-col h-full">
            <div className="space-y-8 flex-1 pb-3">
              {/* Título */}
              <div>
                <h1 className="text-3xl font-bold text-brand-secondary mb-1 leading-tight">
                  {project.title}
                </h1>
                {project.subtitle && project.subtitle.trim() !== '' && (
                  <p className="text-base text-brand-secondary font-light">
                    {project.subtitle}
                  </p>
                )}
              </div>

              {/* Descripción */}
              <div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                {project.additionalDescription && (
                  <p className="text-sm text-gray-700 leading-relaxed mt-4">
                    {project.additionalDescription}
                  </p>
                )}
              </div>

              {/* Herramientas */}
              <div>
                <h3 className="text-xs text-brand-secondary mb-3 tracking-wide">
                  Herramientas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => {
                    const toolData = getToolIcon(tool);
                    return (
                      <div
                        key={index}
                        className="w-12 h-12 flex items-center justify-center"
                      >
                        {toolData.icon ? (
                          <img 
                            src={toolData.icon} 
                            alt={toolData.name}
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          <div className={`w-10 h-10 ${toolData.bg} flex items-center justify-center shadow-sm`}>
                            <span className="text-white font-bold text-xs">
                              {toolData.name}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Links (solo para UX/UI) */}
              {project.linkPrototipo && project.linkPrototipo !== '#' && (
                <div className="space-y-2">
                  <a 
                    href={project.linkPrototipo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs text-brand-secondary hover:text-brand-primary transition-colors font-bold underline"
                  >
                    Link prototipo
                  </a>
                  {project.linkPresentacion && project.linkPresentacion !== '#' && (
                    <a 
                      href={project.linkPresentacion}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs text-brand-secondary hover:text-brand-primary transition-colors font-bold underline"
                    >
                      Link presentación
                    </a>
                  )}
                </div>
              )}

              {/* Animaciones */}
              {project.linkAnimaciones && (
                <div>
                  <a 
                    href={project.linkAnimaciones}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-secondary hover:text-brand-primary transition-colors font-bold underline"
                  >
                    Animaciones
                  </a>
                </div>
              )}
            </div>

            {/* Número de proyecto - Pegado al fondo */}
            <div className="mt-auto">
              <p className="text-xs text-gray-500 tracking-wide">
                Proyecto {project.numero}
              </p>
            </div>
          </div>

          {/* Columna derecha - Imagen Cover */}
          <div className="w-full">
            <img 
              src={project.cover} 
              alt={project.title}
              className="w-full h-auto shadow-2xl"
            />
          </div>
        </div>
        
        {/* Imágenes adicionales - Ancho completo */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16 space-y-8">
            {project.gallery.map((imageUrl, index) => (
              <div key={index} className="w-full">
                <img 
                  src={imageUrl} 
                  alt={`${project.title} - Detalle ${index + 1}`}
                  className="w-full h-auto shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProyectoDetalle;
