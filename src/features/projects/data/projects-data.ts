import type { ProjectData } from '../type';

import edpCalendarImage from '@/assets/proyectos/EDPcalendarMain.png';
import edpExtra1 from '@/assets/proyectos/EDPCalendar.png';
import edpExtra2 from '@/assets/proyectos/EDPCalendar2.png';
import edpExtra3 from '@/assets/proyectos/CalendarEstadisticas.png';

import ajDentMainImage from '@/assets/proyectos/AjDENTMain.png';
import ajDentExtra1 from '@/assets/proyectos/AJDent2.png';
import ajDentExtra2 from '@/assets/proyectos/AJDent3.png';
import ajDentExtra3 from '@/assets/proyectos/AJDent4.png';

import EDPweb from '@/assets/proyectos/edpp.jpg';
import edpagency from '@/assets/proyectos/edpagency.png';
import edplol from '@/assets/proyectos/edpblacki.png';

export const projectsListUnsorted: Array<ProjectData> = [
  {
    id: 'EDP Calendar',
    slug: 'edp-calendar',
    imageUrl: edpCalendarImage,
    projectUrl: 'https://edp-calendar.vercel.app/',
    tags: ['Productividad', 'Freelance', 'Calendario'],
    Categoria: 'Gestión de Proyectos',
    date: '2026-05-08',
    galleryImages: [],
    keyFeatures: [
      { id: 'Sistema híbrido personal/negocios' },
      { id: 'Sistema de recordatorios por email' },
      { id: 'Estadísticas reales' },
    ],
    technologiesUsed: [
      { id: 'react', name: 'React' },
      { id: 'firebase', name: 'Firebase' },
      { id: 'nodejs', name: 'Node.js' },
    ],
    extraImage1: edpExtra1,
    extraImage2: edpExtra2,
    extraImage3: edpExtra3,
  },
  {
    id: 'AJ Dent',
    slug: 'aj-dent',
    imageUrl: ajDentMainImage,
    projectUrl: 'https://aj-dent.vercel.app/',
    tags: ['Clínica', 'Odontólogia', 'AJ Dent'],
    Categoria: 'Clínica Dental',
    date: '2026-04-12',
    galleryImages: [],
    keyFeatures: [
      { id: 'Sistema funcional' },
      { id: 'Integración con WhatsApp' },
      { id: 'Diseño moderno' },
    ],
    technologiesUsed: [
      { id: 'react', name: 'React' },
      { id: 'nodejs', name: 'Node.js' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
    extraImage1: ajDentExtra1,
    extraImage2: ajDentExtra2,
    extraImage3: ajDentExtra3,
  },
  {
    id: 'EDP.web',
    slug: 'edp-web',
    imageUrl: EDPweb,
    projectUrl: 'https://edpweb.vercel.app/',
    tags: ['Web', 'Agencia', 'EDP.web'],
    Categoria: 'Agencia de Páginas Web',
    date: '2026-01-06',
    galleryImages: [],
    keyFeatures: [
      { id: 'Aspectos de Marca' },
      { id: 'Contacto' },
    ],
    technologiesUsed: [
      { id: 'astro', name: 'Astro' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
    extraImage1: EDPweb,
    extraImage2: edpagency,
    extraImage3: edplol,
  },
];
