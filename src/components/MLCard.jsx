import Card from './Card';

const MLCard = ({ 
  title, 
  description, 
  image, 
  checklist = [],
  type = 'ficha' // 'ficha', 'carousel', 'landing'
}) => {
  return (
    <Card>
      {/* Imagen principal */}
      <div className="relative aspect-[4/3] bg-neutral-light rounded-lg overflow-hidden mb-4">
        <img 
          src={image || '/images/placeholder-ml.jpg'} 
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-semibold text-neutral-dark rounded-full shadow-sm">
            {type === 'ficha' && 'Ficha ML'}
            {type === 'carousel' && 'Carrusel'}
            {type === 'landing' && 'Landing Hero'}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-display font-semibold text-brand-secondary mb-2">
            {title}
          </h3>
          <p className="text-sm text-neutral-mid leading-relaxed">
            {description}
          </p>
        </div>

        {/* Checklist Visual */}
        {checklist.length > 0 && (
          <div className="space-y-2 bg-neutral-light/50 p-4 rounded-lg">
            <p className="text-xs font-semibold text-neutral-dark uppercase tracking-wide mb-2">
              Foco UX
            </p>
            {checklist.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <svg 
                  className="w-5 h-5 text-feedback-success flex-shrink-0 mt-0.5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="text-xs text-neutral-dark">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default MLCard;
