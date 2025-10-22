import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'SOBRE MÍ', path: '/sobre-mi' },
    { name: 'PROYECTOS', path: '/', isScroll: true, targetId: 'proyectos' },
    { name: 'CONTACTO', path: '/contacto' },
    { name: 'CV', path: '/cv', isDownload: true },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    
    // Si es un link con scroll a sección
    if (item.isScroll) {
      // Si no estamos en home, navegar primero
      if (location.pathname !== '/') {
        navigate('/');
        // Esperar a que se cargue y hacer scroll
        setTimeout(() => {
          const element = document.getElementById(item.targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Ya estamos en home, solo scroll
        const element = document.getElementById(item.targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <>
      {/* Navbar cerrado */}
      <nav className="fixed top-0 left-0 right-0 bg-brand-accent z-50 border-b border-black/10">
        <div className="flex items-center justify-between px-6 md:px-12 h-16">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-secondary hover:text-brand-primary transition-colors p-2 -ml-2"
            aria-label="Toggle menu"
          >
            <svg width="28" height="14" viewBox="0 0 35 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[35px] md:h-[18px]">
              <path d="M0 2H34.4687" stroke="currentColor" strokeWidth="2.09497"/>
              <path d="M0 9.0705H34.4687" stroke="currentColor" strokeWidth="2.09497"/>
              <path d="M0 16.141H34.4687" stroke="currentColor" strokeWidth="2.09497"/>
            </svg>
          </button>

          {/* Logo Centro */}
          <Link 
            to="/" 
            className="absolute left-1/2 transform -translate-x-1/2 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/images/calu-logo.svg" 
              alt="Calu"
              className="h-6 md:h-7 w-auto"
            />
          </Link>

          {/* Contacto Derecha */}
          <Link
            to="/contacto"
            className="text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors uppercase tracking-wider"
          >
            CONTACTO
          </Link>
        </div>
      </nav>

      {/* Menu fullscreen */}
      <div
        className={`fixed inset-0 bg-brand-accent z-[60] transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header del menu */}
          <div className="flex items-center justify-between px-6 md:px-12 h-16 border-b border-black/10">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-brand-secondary hover:text-brand-primary transition-colors p-2 -ml-2"
              aria-label="Close menu"
            >
              <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[31px] md:h-[31px]">
                <path d="M2 2L28.5695 29" stroke="currentColor" strokeWidth="4"/>
                <path d="M2 29L29 2.86105" stroke="currentColor" strokeWidth="4"/>
              </svg>
            </button>

            {/* Logo Centro */}
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="absolute left-1/2 transform -translate-x-1/2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/calu-logo.svg" 
                alt="Calu"
                className="h-6 md:h-7 w-auto"
              />
            </Link>

            {/* Contacto Derecha */}
            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors uppercase tracking-wider"
            >
              CONTACTO
            </Link>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex items-center px-6 md:px-12">
            <nav className="space-y-8 md:space-y-12 w-full pl-0">
              {navItems.map((item) => (
                item.isDownload ? (
                  <a
                    key={item.path}
                    href="/cv.pdf"
                    download="CV-Carla-Lucero.pdf"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-5xl md:text-7xl lg:text-8xl font-light text-brand-secondary hover:text-brand-primary transition-colors duration-300 tracking-tight text-left"
                  >
                    {item.name}
                  </a>
                ) : item.isScroll ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="block text-5xl md:text-7xl lg:text-8xl font-light text-brand-secondary hover:text-brand-primary transition-colors duration-300 tracking-tight text-left w-full"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => handleNavClick(item)}
                    className={`block text-5xl md:text-7xl lg:text-8xl font-light transition-colors duration-300 tracking-tight text-left ${
                      isActive(item.path)
                        ? 'text-brand-primary'
                        : 'text-brand-secondary hover:text-brand-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
