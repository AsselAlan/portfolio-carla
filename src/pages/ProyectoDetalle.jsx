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
        <div className="max-w-7xl mx-auto px-6 py-6">
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
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[350px_1fr] gap-16">
          {/* Columna izquierda - Info */}
          <div className="space-y-12">
            {/* Título */}
            <div>
              <h1 className="text-4xl font-bold text-brand-secondary mb-2 leading-tight">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="text-xl text-brand-secondary font-light">
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
              <h3 className="text-xs font-semibold text-brand-secondary mb-4 tracking-wide uppercase">
                Herramientas
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, index) => {
                  const toolData = getToolIcon(tool);
                  return (
                    <div
                      key={index}
                      className={`w-10 h-10 rounded-lg ${toolData.bg} flex items-center justify-center shadow-sm`}
                    >
                      <span className="text-white font-bold text-xs">
                        {toolData.name}
                      </span>
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
                  className="block text-xs text-brand-secondary hover:text-brand-primary transition-colors underline"
                >
                  Link prototipo →
                </a>
                {project.linkPresentacion && project.linkPresentacion !== '#' && (
                  <a 
                    href={project.linkPresentacion}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs text-brand-secondary hover:text-brand-primary transition-colors underline"
                  >
                    Link presentación →
                  </a>
                )}
              </div>
            )}

            {/* Número de proyecto */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-500 tracking-wide">
                Proyecto {project.numero}
              </p>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="flex items-start justify-center">
            <div className="w-full">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectoDetalle;
