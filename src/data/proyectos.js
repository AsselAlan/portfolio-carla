// Data de proyectos centralizada
export const projects = [
  {
    id: 'homebanking-provincia',
    title: 'Homebanking',
    subtitle: 'Provincia',
    description: 'Proyecto realizado en el marco de un Curso de UX/UI Avanzado.',
    image: '/images/homebanking-provincia/card.png',  // Imagen para el grid
    cover: '/images/homebanking-provincia/cover.png', // Imagen principal del detalle
    gallery: ['/images/homebanking-provincia/detail-01.png'],  // Imágenes agregadas
    category: 'uxui',
    tools: ['Ai', 'Fg'],
    numero: '01',
    year: '2024',
    size: 'large-horizontal',
    linkPrototipo: 'https://www.figma.com/proto/uKiS6W847wONiUhU9lm5nY/Homebanking-Provincia?page-id=441%3A426&node-id=441-1045&starting-point-node-id=441%3A1045&scaling=scale-down-width&content-scaling=fixed&t=1Hz2mIzp9cSk6M0T-1',
    linkPresentacion: 'https://drive.google.com/drive/u/0/folders/1Aw5xY0sV5o7PA494eqCmVSR8Fn2lPxoY',
  },
  {
    id: 'limansky-ml',
    title: 'Limansky',
    subtitle: 'La Espumería',
    description: 'Fichas de producto para Mercado Libre.',
    image: '/images/limansky-ml/card.png',  // Imagen para el grid
    cover: '/images/limansky-ml/cover.png', // Imagen principal del detalle
    gallery: ['/images/limansky-ml/detail-01.png'],
    category: 'branding',
    tools: ['Ai'],
    numero: '04',
    year: '2025',
    size: 'small',
  },
  {
    id: 'limansky-serta',
    title: 'Limansky',
    subtitle: 'Serta',
    description: 'Campaña el marco del Hot Sale Argentina 2025.',
    image: '/images/limansky-serta/card.png',  // Imagen para el grid
    cover: '/images/limansky-serta/cover.png', // Imagen principal del detalle
    gallery: ['/images/limansky-serta/detail-01.jpg','/images/limansky-serta/detail-02.jpg'],
    category: 'branding',
    tools: ['Ai', 'Ps', 'Ae'],
    hasAnimations: true,
    linkAnimaciones: 'https://drive.google.com/drive/folders/1CvT9mEaWAtv881aN3AcBGgYLwTVMAosy',
    numero: '04',
    year: '2025',
    size: 'large',
  },
  {
    id: 'parfumerie-beauty',
    title: 'Parfumerie',
    subtitle: '',
    description: 'Key visual en el marco de una campaña por la semana de la belleza.',
    image: '/images/parfumerie-beauty/card.png',  // Imagen para el grid
    cover: '/images/parfumerie-beauty/cover.webp', // Imagen principal del detalle
    gallery: ['/images/parfumerie-beauty/detail-01.jpg', '/images/parfumerie-beauty/detail-02.jpg'],
    category: 'branding',
    tools: ['Ai', 'Ps', 'Ae'],
    numero: '03',
    year: '2024',
    size: 'large',
  },
  {
    id: 'ojo-emergente',
    title: 'Ojo Emergente',
    subtitle: '',
    description: 'Ojo Emergente es una productora argentina, fundada Agata Muras. Con el objetivo de aportar información clave para la audiencia LGBTIQ+, y abordar contenidos diversos y contemporáneos, difundir proyectos musicales.',
    additionalDescription: 'Además, crear oportunidades laborales para artistas mujeres y personas del colectivo LGBTIQ+.',
    image: '/images/ojo-emergente/card.png',  // Imagen para el grid
    cover: '/images/ojo-emergente/cover.png', // Imagen principal del detalle
    gallery: ['/images/ojo-emergente/detail-01.png', '/images/ojo-emergente/detail-02.jpg'],
    category: 'branding',
    tools: ['Ai', 'Ps', 'Ae'],
    numero: '02',
    year: '2024',
    size: 'medium',
  },
  {
    id: 'parfumerie-bff',
    title: 'Parfumerie',
    subtitle: '',
    description: 'Key visual en el marco de una campaña para el día de la amistad.',
    image: '/images/parfumerie-bff/card.png',  // Imagen para el grid
    cover: '/images/parfumerie-bff/cover.png', // Imagen principal del detalle
    gallery: ['/images/parfumerie-bff/detail-01.jpg', '/images/parfumerie-bff/detail-02.jpg'],
    category: 'branding',
    tools: ['Ai', 'Ps', 'Ae'],
    hasAnimations: true,
    linkAnimaciones: 'https://drive.google.com/drive/u/0/folders/1JYk7aEYGAmxHgN-LpXaMr1RgTEtknLEs',
    numero: '03',
    year: '2024',
    size: 'medium',
  },
  {
    id: 'bafici',
    title: 'Bafici',
    subtitle: 'Festival de Cine Independiente',
    description: 'Proyecto realizado como tesis final de la carrera.',
    image: '/images/bafici/card.jpg',  // Imagen para el grid
    cover: '/images/bafici/cover.jpg', // Imagen principal del detalle
    gallery: ['/images/bafici/detail-01.png', '/images/bafici/detail-02.png'],
    category: 'branding',
    tools: ['Ai', 'Ps', 'Ae', 'Fg'],
    numero: '01',
    year: '2023',
    size: 'large',
  },
];

// Función helper para obtener proyecto por ID
export const getProjectById = (id) => {
  return projects.find(p => p.id === id);
};

// Función helper para obtener herramientas con sus colores
export const getToolIcon = (tool) => {
  const icons = {
    'Ai': { bg: 'bg-[#FF9A00]', name: 'Ai', icon: '/images/tools/ai.png' },
    'Ps': { bg: 'bg-[#31A8FF]', name: 'Ps', icon: '/images/tools/ps.png' },
    'Ae': { bg: 'bg-[#9999FF]', name: 'Ae', icon: '/images/tools/ae.png' },
    'Pr': { bg: 'bg-[#9999FF]', name: 'Pr', icon: '/images/tools/pr.png' },
    'Id': { bg: 'bg-[#FF3366]', name: 'Id', icon: '/images/tools/id.png' },
    'Fg': { bg: 'bg-[#A259FF]', name: 'Fg', icon: '/images/tools/fg.png' },
  };
  return icons[tool] || { bg: 'bg-gray-400', name: tool, icon: null };
};
