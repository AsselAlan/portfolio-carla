const SectionHeader = ({ title, subtitle, align = 'left' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`max-w-3xl mb-16 ${alignmentClasses[align]}`}>
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-secondary mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
