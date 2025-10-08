const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-brand-accent">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 h-screen">
          {/* Lado Izquierdo - Lila con formas orgánicas */}
          <div className="relative bg-[#D6C9F6] overflow-hidden flex items-center justify-center">
            {/* Formas orgánicas decorativas */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 600" preserveAspectRatio="none">
              {/* Forma superior */}
              <path
                d="M 0 0 Q 100 100 200 80 T 400 100 L 500 0 Z"
                fill="#FFFFFF"
                opacity="0.9"
              />
              {/* Forma ondulada central */}
              <path
                d="M 0 150 Q 150 250 300 200 T 500 250 L 500 400 Q 350 350 200 400 T 0 350 Z"
                fill="#FFFFFF"
                opacity="0.9"
              />
              {/* Forma inferior */}
              <path
                d="M 0 500 Q 100 450 200 480 T 400 460 L 500 600 L 0 600 Z"
                fill="#FFFFFF"
                opacity="0.9"
              />
            </svg>

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
            {/* Símbolo decorativo superior izquierda */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 lg:top-12 lg:left-12 text-white text-7xl md:text-8xl lg:text-9xl font-light leading-none">
              <svg width="68" height="51" viewBox="0 0 68 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.20178 49.1074C9.20349 39.382 12.6587 29.197 22.9631 25.2703C29.2608 22.8704 36.1902 24.7626 42.6294 25.4432C56.0167 26.8581 64.9526 14.2807 60.2262 2.41716" stroke="white" strokeWidth="12.6921"/>
              </svg>
            </div>

            {/* Contenido principal */}
            <div className="text-start max-w-lg">
              <p className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
                Soy Calu,{' '}<br />
                <span className="font-bold">
                  diseñadora en comunicación visual
                </span>
              </p>
            </div>

            {/* Símbolo decorativo inferior derecha */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 text-white text-8xl md:text-9xl lg:text-[10rem] font-light leading-none">
              <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="29.7684" cy="29.5848" r="24.0481" stroke="white" strokeWidth="10.0201"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
