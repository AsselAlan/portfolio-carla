import Card from './Card';

const CaseCard = ({ 
  image, 
  title, 
  description, 
  tags = [], 
  keyVisual, 
  deliverables = [],
  gif 
}) => {
  return (
    <Card className="overflow-hidden">
      {/* Key Visual Principal */}
      <div className="relative aspect-video bg-neutral-light rounded-lg overflow-hidden mb-4">
        <img 
          src={keyVisual || image || '/images/placeholder-campaign.jpg'} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-display font-semibold text-brand-secondary mb-2">
            {title}
          </h3>
          <p className="text-neutral-mid leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Qué hice */}
        {deliverables.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-neutral-dark">Qué hice:</p>
            <ul className="text-sm text-neutral-mid space-y-1">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-primary mr-2">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mini thumbnails de piezas */}
        {gif && (
          <div className="flex gap-2 mt-4">
            <div className="flex-1 aspect-square bg-neutral-light rounded-md overflow-hidden">
              <img 
                src={gif} 
                alt={`Animación de ${title}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-light">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-medium rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default CaseCard;
