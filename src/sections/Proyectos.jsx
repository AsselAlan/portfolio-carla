import { useNavigate } from 'react-router-dom';
import { projects } from '../data/proyectos';

const Proyectos = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/proyecto/${projectId}`);
  };

  return (
    <section id="proyectos" className="py-24 md:py-32 bg-neutral-light">
      <div className="max-w-[95%] xl:max-w-[90%] mx-auto px-2">
        {/* Layout personalizado con CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 auto-rows-auto">
          {projects.map((project) => {
            // Determinar clases según el tamaño
            let gridClasses = '';
            let aspectClasses = '';
            
            switch(project.size) {
              case 'large-horizontal':
                gridClasses = 'md:col-span-12'; // Ancho completo
                aspectClasses = 'aspect-[30/9]'; // Súper panorámico, muy bajo
                break;
              case 'large':
                gridClasses = 'md:col-span-7'; // 7 columnas
                aspectClasses = 'aspect-[16/10]'; // Menos alto que antes (era 4/3)
                break;
              case 'medium':
                gridClasses = 'md:col-span-5'; // 5 columnas
                aspectClasses = 'aspect-[4/3]';
                break;
              case 'small':
                gridClasses = 'md:col-span-5'; // 5 columnas
                aspectClasses = 'aspect-[16/9]';
                break;
              default:
                gridClasses = 'md:col-span-6';
                aspectClasses = 'aspect-[4/3]';
            }

            return (
              <div
                key={project.id}
                className={`${gridClasses} group cursor-pointer`}
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Imagen */}
                <div className={`relative overflow-hidden mb-4 bg-white shadow-sm hover:shadow-xl transition-all duration-300 ${aspectClasses}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Info debajo */}
                <div className="flex items-start justify-between text-sm gap-4">
                  <p className="text-brand-secondary font-light">
                    {project.subtitle && project.subtitle.trim() !== '' ? 
                      `${project.title} | ${project.subtitle}` : 
                      project.title
                    }
                  </p>
                  <p className="text-gray-500 font-light flex-shrink-0">
                    {project.year}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
