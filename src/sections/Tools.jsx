import SectionHeader from '../components/SectionHeader';
import ToolBadge from '../components/ToolBadge';

const Tools = () => {
  const tools = {
    design: [
      { name: 'Photoshop', level: 5 },
      { name: 'Illustrator', level: 5 },
      { name: 'InDesign', level: 4 },
      { name: 'After Effects', level: 4 },
      { name: 'Premiere Pro', level: 3 },
      { name: 'Figma', level: 5 }
    ],
    other: [
      { name: 'Lightroom', level: 4 },
      { name: 'XD', level: 3 },
      { name: 'Canva', level: 5 },
      { name: 'Procreate', level: 3 }
    ]
  };

  return (
    <section id="tools" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader 
          title="Herramientas"
          subtitle="Software y plataformas que domino para llevar adelante cada proyecto."
          align="center"
        />

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Herramientas principales */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-dark mb-6 text-center">
              Suite Adobe + Figma
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.design.map((tool, index) => (
                <ToolBadge key={index} {...tool} />
              ))}
            </div>
          </div>

          {/* Herramientas adicionales */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-dark mb-6 text-center">
              Complementarias
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tools.other.map((tool, index) => (
                <ToolBadge key={index} {...tool} />
              ))}
            </div>
          </div>

          {/* Skills adicionales */}
          <div className="bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-neutral-dark mb-6 text-center">
              También manejo
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML/CSS básico', 'Google Analytics', 'Meta Ads Manager', 'Notion', 'Trello', 'Slack'].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white text-neutral-dark text-sm font-medium rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
