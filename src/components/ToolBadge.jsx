const ToolBadge = ({ name, level = 5, icon }) => {
  const maxLevel = 5;
  
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Icono o inicial */}
      <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
        {icon ? (
          <img src={icon} alt={name} className="w-6 h-6" />
        ) : (
          <span className="text-brand-primary font-bold text-lg">
            {name.substring(0, 2)}
          </span>
        )}
      </div>

      {/* Nombre y nivel */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-neutral-dark text-sm mb-1">
          {name}
        </p>
        
        {/* Barras de nivel */}
        <div className="flex gap-1">
          {[...Array(maxLevel)].map((_, index) => (
            <div
              key={index}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                index < level 
                  ? 'bg-brand-primary' 
                  : 'bg-neutral-light'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolBadge;
