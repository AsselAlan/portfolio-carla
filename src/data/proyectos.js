// Data de proyectos centralizada
export const projects = [
  {
    id: 'homebanking-provincia',
    title: 'Homebanking',
    subtitle: 'DBT+Homebanking',
    description: 'Proyecto realizado en el marco de un Curso de UX/UI Avanzado.',
    image: '/images/homebanking-provincia.png',
    category: 'uxui',
    tools: ['Ai', 'Fg'],
    numero: '01',
    year: '2024',
    size: 'large-horizontal',
    linkPrototipo: '#',
    linkPresentacion: '#',
  },
  {
    id: 'limansky-ml',
    title: 'Fichas MeLi',
    subtitle: 'La Espumería',
    description: 'Fichas de producto para Mercado Libre.',
    image: '/images/limansky-ml.png',
    category: 'branding',
    tools: ['Ai'],
    numero: '04',
    year: '2025',
    size: 'small',
  },
  {
    id: 'limansky-serta',
    title: 'Key Visual',
    subtitle: 'Hot sale | Parfumerie',
    description: 'Campaña para el marco del Hot Sale Argentina 2025.',
    image: '/images/limansky-serta.png',
    category: 'branding',
    tools: ['Ai', 'Ps', 'Ae'],
    hasAnimations: true,
    numero: '04',
    year: '2025',
    size: 'large',
  },
  {
    id: 'parfumerie-beauty',
    title: 'Key Visual',
    subtitle: 'Beauty week | Parfumerie',
    description: 'Key visual en el marco de una campaña por la semana de la belleza.',
    image: '/images/parfumerie-beauty.webp',
    category: 'branding',
    tools: ['Ai', 'Ps', 'Ae'],
    numero: '03',
    year: '2024',
    size: 'large',
  },
  {
    id: 'ojo-emergente',
    title: 'Rebranding',
    subtitle: 'Op.Instagram',
    description: 'Ojo Emergente es una productora argentina fundada Agata Muras. Con el objetivo de aportar información clave para la audiencia LGBTIQ+, y abordar contenidos diversos y contemporáneos, difundir proyectos musicales.',
    additionalDescription: 'Además, crear oportunidades laborales para artistas mujeres y personas del colectivo LGBTIQ+.',
    image: '/images/ojo-emergente.png',
    category: 'branding',
    tools: ['Ai', 'Ps', 'Ae'],
    numero: '02',
    year: '2024',
    size: 'medium',
  },
  {
    id: 'parfumerie-bff',
    title: 'Key Visual',
    subtitle: 'Día del amigo | Parfumerie',
    description: 'Key visual en el marco de una campaña para el día de la amistad.',
    image: '/images/parfumerie-bff.png',
    category: 'branding',
    tools: ['Ai', 'Ps', 'Ae'],
    hasAnimations: true,
    numero: '03',
    year: '2024',
    size: 'medium',
  },
  {
    id: 'bafici',
    title: 'Proyecto de tesis',
    subtitle: 'Bafici',
    description: 'Proyecto realizado como tesis final de la carrera.',
    image: '/images/bafici.png',
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
    'Ai': { bg: 'bg-[#FF9A00]', name: 'Ai' },
    'Ps': { bg: 'bg-[#31A8FF]', name: 'Ps' },
    'Ae': { bg: 'bg-[#9999FF]', name: 'Ae' },
    'Pr': { bg: 'bg-[#9999FF]', name: 'Pr' },
    'Id': { bg: 'bg-[#FF3366]', name: 'Id' },
    'Fg': { bg: 'bg-[#A259FF]', name: 'Fg' },
  };
  return icons[tool] || { bg: 'bg-gray-400', name: tool };
};
