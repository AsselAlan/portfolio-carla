import SectionHeader from '../components/SectionHeader';

const SobreMi = () => {
  const servicios = [
    { name: 'Branding' },
    { name: 'ux/ui' },
    { name: 'Diseño web' },
    { name: 'Editorial' },
  ];

  return (
    <section id="sobre-mi" className="min-h-screen" style={{ backgroundColor: '#C4ADF4' }}>
      {/* SOBRE MÍ - 60vh */}
      <div className='2xl:max-w-9xl md:max-w-7xl mx-auto px-6 md:px-12 2xl:px-0'>
      <div className="mt-12 pb-24 pt-24 flex items-center">
        <div className="w-full">
          {/* Grid: Título a la izquierda, contenido a la derecha */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] 2xl:grid-cols-[700px_1fr]">
            {/* Título izquierda */}
            <div>
              <h2 className="text-3xl md:text-4xl pb-6 font-light text-brand-secondary uppercase tracking-wide">
                SOBRE MÍ
              </h2>
            </div>

            {/* Contenido derecha */}
            <div className="max-w-xl justify-content-end">
              <div className="space-y-4 text-brand-secondary leading-relaxed text-xl 2xl:text-2xl">
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
      </div>

      {/* Divider */}
      <div className="w-full">
        <hr className="border-t border-brand-secondary/30" />
      </div>

      {/* SERVICIOS - 100vh */}
      <div className="pt-12 pb-24 flex items-center">
        <div className="w-full">
          {/* Título */}
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-brand-secondary uppercase tracking-wide">
              SERVICIOS
            </h3>
          </div>

          {/* Pills - Layout específico - Tamaño ajustado */}
          <div className="space-y-6">
            {/* Primera fila: Branding + ux/ui */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="bg-white border-2 border-brand-secondary rounded-full px-14 md:px-20 lg:px-28 xl:px-32 py-7 md:py-10 lg:py-12 xl:py-14 text-brand-secondary text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light hover:bg-brand-secondary hover:text-white transition-all duration-300 cursor-pointer">
                Branding
              </div>
              <div className="bg-white border-2 border-brand-secondary rounded-full px-14 md:px-20 lg:px-28 xl:px-32 py-7 md:py-10 lg:py-12 xl:py-14 text-brand-secondary text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light hover:bg-brand-secondary hover:text-white transition-all duration-300 cursor-pointer">
                ux/ui
              </div>
            </div>

            {/* Segunda fila: Diseño web + Editorial */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="bg-white border-2 border-brand-secondary rounded-full px-14 md:px-20 lg:px-28 xl:px-32 py-7 md:py-10 lg:py-12 xl:py-14 text-brand-secondary text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light hover:bg-brand-secondary hover:text-white transition-all duration-300 cursor-pointer">
                Diseño web
              </div>
              <div className="bg-white border-2 border-brand-secondary rounded-full px-14 md:px-20 lg:px-28 xl:px-32 py-7 md:py-10 lg:py-12 xl:py-14 text-brand-secondary text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light hover:bg-brand-secondary hover:text-white transition-all duration-300 cursor-pointer">
                Editorial
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default SobreMi;