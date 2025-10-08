const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-secondary text-white py-16">
      <div className="container-custom">
        {/* Logo grande */}
        <div className="text-center mb-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-6xl md:text-7xl font-script hover:text-brand-primary transition-colors inline-block"
          >
            calu
          </button>
        </div>

        {/* Links de navegación */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-medium">
          <button 
            onClick={() => scrollToSection('sobre-mi')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            SOBRE MI
          </button>
          <button 
            onClick={() => scrollToSection('proyectos')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            PROYECTOS
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            CONTACTO
          </button>
          <a 
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            CV
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://instagram.com/calu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 border-2 border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://behance.net/calu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 border-2 border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
            aria-label="Behance"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/calu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 border-2 border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

        {/* Email */}
        <div className="text-center mb-12">
          <a 
            href="mailto:hola@calu.com"
            className="text-gray-400 hover:text-white transition-colors text-lg"
          >
            hola@calu.com
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © {currentYear} Calu. Diseñadora en comunicación visual.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
