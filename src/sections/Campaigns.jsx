import SectionHeader from '../components/SectionHeader';
import CaseCard from '../components/CaseCard';

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Campaña Black Friday 2024',
      description: 'Key visual + despieces para todos los canales: feed, stories, banners web y email marketing.',
      keyVisual: '/images/kv_blackfriday.jpg',
      gif: '/images/kv_blackfriday.gif',
      deliverables: [
        'Concepto creativo: "Ofertas que no se repiten"',
        'Sistema visual: tipografía, paleta y elementos gráficos',
        'Ejecuciones: 15+ piezas para digital y print'
      ],
      tags: ['RetailCalendar', 'Temporada', 'Performance']
    },
    {
      id: 2,
      title: 'Lanzamiento Sneakers Limited',
      description: 'Campaña integral para lanzamiento de producto exclusivo.',
      keyVisual: '/images/kv_sneakers.jpg',
      gif: '/images/kv_sneakers.gif',
      deliverables: [
        'Concepto: "Edición limitada, estilo ilimitado"',
        'KV + animaciones para redes',
        'Landing page hero + banners'
      ],
      tags: ['Producto', 'Digital', 'Premium']
    },
    {
      id: 3,
      title: 'Campaña Verano 2025',
      description: 'Concepto de temporada con identidad fresca y aplicaciones omnicanal.',
      keyVisual: '/images/kv_verano.jpg',
      deliverables: [
        'Concepto estacional con códigos visuales únicos',
        'Sistema de piezas: stories, feed, carruseles ML',
        'Adaptaciones para puntos de venta físicos'
      ],
      tags: ['Estacional', 'Omnicanal', 'Retail']
    }
  ];

  return (
    <section id="campaigns" className="section-padding bg-neutral-light">
      <div className="container-custom">
        <SectionHeader 
          title="Campañas"
          subtitle="Key visual + despieces por canal + animaciones cortas. De concepto a sistema ejecutado."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {campaigns.map((campaign) => (
            <CaseCard 
              key={campaign.id}
              {...campaign}
            />
          ))}
        </div>

        {/* Info adicional */}
        <div className="mt-12 p-8 bg-white rounded-2xl shadow-sm">
          <h3 className="text-2xl font-display font-semibold text-brand-secondary mb-4">
            Mi proceso
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold">
                1
              </div>
              <h4 className="font-semibold text-neutral-dark">Concepto</h4>
              <p className="text-sm text-neutral-mid">
                Entiendo el objetivo y creo la idea central que comunica.
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold">
                2
              </div>
              <h4 className="font-semibold text-neutral-dark">Sistema</h4>
              <p className="text-sm text-neutral-mid">
                Diseño el KV y establezco las reglas visuales para todos los canales.
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold">
                3
              </div>
              <h4 className="font-semibold text-neutral-dark">Ejecución</h4>
              <p className="text-sm text-neutral-mid">
                Produzco todas las piezas optimizadas para cada plataforma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
