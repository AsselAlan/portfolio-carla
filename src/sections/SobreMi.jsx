import { useEffect } from 'react';

const SobreMi = () => {
  const servicios = [
    { name: 'Branding' },
    { name: 'ux/ui' },
    { name: 'Diseño web' },
    { name: 'Editorial' },
  ];

  // Scroll al inicio cuando se carga el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section id="sobre-mi" className="min-h-screen py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#C4ADF4' }}>
      <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 md:px-8">
        
        {/* SOBRE MÍ */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr] gap-8 md:gap-12 lg:gap-16">
            {/* Título */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-brand-secondary uppercase tracking-wide">
                SOBRE MÍ
              </h2>
            </div>

            {/* Contenido */}
            <div className="max-w-3xl">
              <div className="space-y-4 md:space-y-6 text-brand-secondary leading-relaxed text-base md:text-lg">
                <p>
                  Para mis amigos Calu, para mi familia Carli.{' '}
                  <strong className="font-bold">
                    Soy Carla, diseñadora en comunicación visual
                  </strong>
                  , recibida en abril de 2024 en la Facultad de Artes de La Plata.
                </p>

                <p>
                  Vengo de un pueblo llamado Pipinas, a los 17 años me tuve que mudar a La Plata, 
                  para comenzar una nueva etapa y estudiar diseño.
                </p>

                <p>
                  Si buscas alguien creativo, comprometido y curioso, estoy acá para ayudarte.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <hr className="border-t border-brand-secondary/30" />
        </div>

        {/* SERVICIOS */}
        <div>
          {/* Título */}
          <div className="mb-10 md:mb-16 lg:mb-20">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-brand-secondary uppercase tracking-wide">
              SERVICIOS
            </h3>
          </div>

          {/* Pills Grid - Sistema completamente responsive y encapsulado */}
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {servicios.map((servicio, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-brand-secondary rounded-full 
                    text-brand-secondary font-normal 
                    hover:bg-brand-secondary hover:text-white 
                    transition-all duration-300 
                    cursor-pointer
                    text-center
                    flex items-center justify-center
                    w-full
                    px-6 py-3
                    text-xl
                    sm:px-8 sm:py-4 sm:text-2xl
                    md:px-12 md:py-6 md:text-3xl
                    lg:px-16 lg:py-8 lg:text-4xl
                    xl:px-20 xl:py-10 xl:text-5xl
                    2xl:px-24 2xl:py-12 2xl:text-6xl"
                >
                  {servicio.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
