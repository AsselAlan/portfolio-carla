import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'SOBRE MI', href: '#sobre-mi' },
    { name: 'PROYECTOS', href: '#proyectos' },
    { name: 'CONTACTO', href: '#contact' },
    { name: 'CV', href: '#cv' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-brand-accent z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity"
              aria-label="Menu"
            >
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
            </button>

            {/* Logo Central */}
            <a href="#hero" className="font-cursive text-3xl text-black">
              calu
            </a>

            {/* Contacto */}
            <a
              href="#contact"
              className="text-black text-xs font-medium hover:opacity-70 transition-opacity tracking-wider"
            >
              CONTACTO
            </a>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-brand-accent z-[60] flex flex-col">
          {/* Header del menú */}
          <div className="max-w-7xl w-full mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Hamburger Menu (X cuando está abierto) */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity"
                aria-label="Cerrar Menu"
              >
                <span className="w-6 h-0.5 bg-black transform rotate-45 translate-y-1"></span>
                <span className="w-6 h-0.5 bg-black transform -rotate-45 -translate-y-1"></span>
              </button>

              {/* Logo Central */}
              <a href="#hero" className="font-cursive text-3xl text-black" onClick={() => setIsMenuOpen(false)}>
                calu
              </a>

              {/* Contacto */}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-black text-xs font-medium hover:opacity-70 transition-opacity tracking-wider"
              >
                CONTACTO
              </a>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex items-start justify-start px-6 pt-12 md:px-12 md:pt-20">
            <div className="space-y-4 md:space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-5xl md:text-6xl lg:text-7xl text-black font-light hover:opacity-70 transition-opacity leading-tight"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
