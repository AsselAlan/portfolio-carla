/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ✅ Breakpoint extra para monitores anchos
      screens: {
        '3xl': '1920px',
      },

      // ✅ Anchos máximos extendidos (para usar 2xl:max-w-9xl, 3xl:max-w-10xl, etc.)
      maxWidth: {
        '8xl': '88rem',   // ~1408px
        '9xl': '96rem',   // ~1536px
        '10xl': '104rem', // ~1664px
      },

      // 🔧 Colores, tipografías y animaciones: tus valores existentes (sin cambios)
      colors: {
        brand: {
          primary: '#C4A7E7',
          secondary: '#1C1C1E',
          accent: '#EDE8E1',
          cream: '#F5F2ED',
        },
        neutral: {
          light: '#FAFAFA',
          mid: '#B8B8B8',
          dark: '#2B2B2B',
        },
        surface: {
          DEFAULT: '#FAFAFA',
          contrast: '#FFFFFF',
        },
        text: {
          DEFAULT: '#000000',
          muted: '#6B7280',
        },
        feedback: {
          success: '#28A745',
          error: '#DC3545',
          warning: '#FFC107',
          info: '#0D6EFD',
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Helvetica Neue', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Helvetica Neue', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        condensed: ['Helvetica Neue Condensed', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        ultralight: '100',
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        heavy: '800',
        black: '900',
        ultra: '950',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        3: '.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },

    // ✅ Container centrado con padding consistente por breakpoint
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem', // px-6
        md: '3rem',        // px-12
        xl: '4rem',        // px-16
        '2xl': '5rem',
        '3xl': '6rem',
      },
    },
  },
  plugins: [],
}
