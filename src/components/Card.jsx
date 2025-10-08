const Card = ({ children, className = '', hover = true, onClick }) => {
  const hoverClasses = hover 
    ? 'hover:shadow-xl hover:-translate-y-1' 
    : '';

  return (
    <div 
      className={`card-base p-6 transition-all duration-300 ${hoverClasses} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
