const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-brand-accent">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 h-screen">
          {/* Lado Izquierdo - Nuevo fondo SVG */}
          <div className="relative flex items-center justify-center bg-[#C4ADF4]" style={{
            clipPath: 'inset(0)',
            overflow: 'hidden'
          }}>
            {/* SVG de fondo posicionado */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: 'url(/images/hero-background.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            {/* Contenido texto */}
            <div className="relative z-10 px-8 lg:px-16 text-left">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-black leading-none mb-2">
                Hey!
              </h1>
              <p className="text-4xl md:text-5xl lg:text-6xl font-light text-black">
                Bienvenidx
              </p>
            </div>
          </div>

          {/* Lado Derecho - Negro con presentación */}
          <div className="relative bg-black flex items-center justify-center px-8 lg:px-16">
            {/* Contenido principal */}
            <div className="text-start max-w-lg relative">
              {/* Símbolo superior izquierda - pegado arriba del texto */}
              <div className="absolute -top-8 -left-12 text-white">
                <svg width="48" height="36" viewBox="0 0 68 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.20178 49.1074C9.20349 39.382 12.6587 29.197 22.9631 25.2703C29.2608 22.8704 36.1902 24.7626 42.6294 25.4432C56.0167 26.8581 64.9526 14.2807 60.2262 2.41716" stroke="white" strokeWidth="12.6921"/>
                </svg>
              </div>
              
              <p className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
                Soy Calu,<br />
                <span className="font-bold">
                  diseñadora en<br />
                  comunicación<br />
                  visual
                </span>
              </p>
              
              {/* Símbolo inferior derecha - pegado abajo del texto */}
              <div className="absolute -bottom-8 right-2 text-white">
                <svg width="48" height="48" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="29.7684" cy="29.5848" r="24.0481" stroke="white" strokeWidth="10.0201"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
