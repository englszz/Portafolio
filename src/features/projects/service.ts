// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';


// 1. IMPORTACIONES DE IMÁGENES


// EDP Calendar
import edpCalendarImage from '@/assets/proyectos/EDPcalendarMain.png';
import edpExtra1 from '@/assets/proyectos/EDPCalendar.png';
import edpExtra2 from '@/assets/proyectos/EDPCalendar2.png';
import edpExtra3 from '@/assets/proyectos/CalendarEstadisticas.png';

// AJ Dent
import ajDentMainImage from '@/assets/proyectos/AjDENTMain.png';
import ajDentExtra1 from '@/assets/proyectos/AJDent2.png';
import ajDentExtra2 from '@/assets/proyectos/AJDent3.png';
import ajDentExtra3 from '@/assets/proyectos/AJDent4.png';

// Reviews
import reviewsMainImage from '@/assets/proyectos/REVEWWHITE.jpg';
import reviewsExtra1 from '@/assets/proyectos/lilwayne.png';
import reviewsExtra2 from '@/assets/proyectos/music.png';
import reviewsExtra3 from '@/assets/proyectos/description.png';

// EDP.web
import EDPweb from '@/assets/proyectos/edpp.jpg';
import edpweb from '@/assets/proyectos/edpnegro.png';
import edpagency from '@/assets/proyectos/edpagency.png';
import edplol from '@/assets/proyectos/edpblacki.png';


import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';
import { Target } from 'lucide-react';

const projectsListUnsorted: Array<ProjectData> = [
  // PROYECTO 2: EDP Calendar
  {
    id: 'EDP Calendar',
    slug: 'edp-calendar',
    imageUrl: edpCalendarImage,
    projectUrl: 'https://edp-calendar.vercel.app/',
    tags: ['Productividad', 'Freelance', 'Calendario'],
    Categoria: 'Gestión de Proyectos',
    date: '2026-01-15',
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

  // ✅ PROYECTO 3: REVIEWS (NUEVO - REEMPLAZA A NUTRI MARKET EN LOS TOP 3)
  {
    id: 'ЯEVIEW',
    slug: 'reviews-project',
    imageUrl: reviewsMainImage,
    projectUrl: 'https://music-reviews-three.vercel.app/',
    tags: ['Reviews', 'Música', 'Opinión'],
    Categoria: 'Plataforma de Reviews',
    date: '2026-11-10',
    galleryImages: [],
    keyFeatures: [
      { id: 'Reseñas de música' },
      { id: 'Sistema de calificación' },
      { id: 'Interfaz moderna' },
    ],
    technologiesUsed: [
      { id: 'react', name: 'React' },
      { id: 'nodejs', name: 'Node.js' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
    extraImage1: reviewsExtra1,
    extraImage2: reviewsExtra2,
    extraImage3: reviewsExtra3,
  },

  {
    id: 'AJ Dent',
    slug: 'aj-dent',
    imageUrl: ajDentMainImage,
    projectUrl: 'https://aj-dent.vercel.app/',
    tags: ['Clínica', 'Odontólogia', 'AJ Dent'],
    Categoria: 'Clínica Dental',
    date: '2026-11-20',
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
    date: '2026-12-01',
    galleryImages: [],
    keyFeatures: [
      { id: 'Aspectos de Marca' },
      { id: 'Contacto' },
    ],
    technologiesUsed: [
      { id: 'astro', name: 'Astro' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
    extraImage1: edpweb,
    extraImage2: edpagency,
    extraImage3: edplol,
  },

];


export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  type ProjectIdKey =
    keyof (typeof ui)[typeof defaultLanguage]['projectsContent'];
  const currentProjectId = project.id as ProjectIdKey;

  const projectContentSource = ui[lang]?.projectsContent?.[currentProjectId]
    ? ui[lang].projectsContent
    : ui[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  if (!i18nData) {
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );

    let detailedDescription = 'Detailed description missing.';
    let challenges = 'Challenges information missing.';
    let learnings = 'Learnings information missing.';

    switch (project.id) {
      case 'ЯEVIEW':
        detailedDescription = 'Reviews es una plataforma diseñada para compartir y descubrir reseñas de música. El proyecto nació de la necesidad de crear un espacio organizado donde los usuarios pudieran expresar sus opiniones sobre álbumes, canciones y artistas. Me encargué del diseño completo de la interfaz y la experiencia de usuario.';
        challenges = 'El principal desafío fue crear un sistema de calificación intuitivo y una interfaz que permitiera navegar fácilmente entre diferentes categorías musicales. También fue complejo mantener un diseño limpio que no abrumara al usuario con información.';
        learnings = 'Este proyecto me permitió mejorar mis habilidades en diseño de interfaces interactivas y sistemas de organización de contenido. Aprendí a pensar en la experiencia del usuario desde múltiples perspectivas.';
        break;
      case 'EDP Calendar':
        detailedDescription = 'EDP Calendar nació de la necesidad de tener una sola herramienta que combinara organización personal y gestión de proyectos freelance. La idea era simple: no depender de tres apps distintas para manejar tareas del día, proyectos de clientes y métricas de productividad.';
        challenges = 'El mayor reto fue el sistema de notificaciones. iOS bloquea las notificaciones push en apps web, lo que obligó a replantear toda la arquitectura y optar por recordatorios vía email con un servidor externo. Configurar Firebase Cloud Functions, manejar permisos de Google Cloud y resolver conflictos de versiones en las dependencias consumió la mayor parte del tiempo de desarrollo.';
        learnings = 'Que la solución más obvia no siempre es la correcta. Empezar con notificaciones push parecía lo natural, pero las limitaciones de iOS llevaron a una solución más robusta y multiplataforma. También que separar las credenciales del código desde el inicio ahorra horas de dolores de cabeza con GitHub y la seguridad del proyecto.';
        break;
      default:
        detailedDescription = 'Review es una plataforma web enfocada en reseñas de canciones. Nació de mi pasión por la música y de la idea de crear un espacio donde las personas puedan compartir opiniones, descubrir nuevos temas desde la perspectiva de otros oyentes y analizar la música más allá de simplemente escucharla.';
        challenges = 'Uno de los principales retos fue estructurar la plataforma de forma que las reseñas fueran claras, útiles y fáciles de navegar. También representó un desafío diseñar una interfaz que se sintiera moderna pero sencilla, asegurando que los usuarios pudieran interactuar sin fricción. Además, trabajar la lógica para manejar contenido dinámico y organizado fue un punto importante durante el desarrollo.';
        learnings = 'Este proyecto me permitió mejorar mis habilidades tanto en diseño de interfaces como en desarrollo funcional de aplicaciones web. Aprendí a pensar más en la experiencia del usuario, en cómo presentar información de manera atractiva y eficiente, y a estructurar mejor proyectos que combinan intereses personales con soluciones tecnológicas reales.';
        break;
      case 'EDP.web':
        detailedDescription = 'EDP.web es el sitio web de una agencia de desarrollo web que busca transmitir profesionalismo y modernidad desde el primer momento. El objetivo principal era crear una landing page elegante y minimalista que convierta visitantes en clientes potenciales, mostrando los servicios de la agencia de forma clara y atractiva.';
        challenges = 'Quería que cuando alguien cambiara de modo claro a oscuro, el logo también cambiara automáticamente de negro a blanco. Suena simple, pero conseguir que se viera fluido y sin errores me tomó varios intentos. Al final logré que funcionara perfecto y ahora parece mágico.';
        learnings = 'Menos es más. Al limitarme a solo blanco y negro, tuve que ser más creativo con los espacios, tamaños de texto y organización. Aprendí que un diseño simple y bien ejecutado siempre gana contra uno sobrecargado de efectos y colores.';
        break;
      case 'AJ Dent':
        detailedDescription = 'Sitio web desarrollado para AJ Dent, enfocado en presentar servicios odontológicos de forma clara, moderna y orientada a conversión. La web prioriza la experiencia del usuario, con acceso rápido a información clave y contacto directo vía WhatsApp para agendar citas sin fricción. El despliegue se realizó usando Vercel, permitiendo una carga rápida y disponibilidad constante.';
        challenges = 'Uno de los principales retos fue estructurar el contenido de forma clara sin sobrecargar al usuario, organizando servicios, precios y llamadas a la acción de manera estratégica. También representó un desafío lograr un diseño que no solo fuera visualmente atractivo, sino que realmente impulsara la conversión, especialmente a través de WhatsApp. Además, se trabajó en la optimización responsive para garantizar una experiencia fluida en dispositivos móviles, junto con el ajuste fino de detalles visuales como tipografía, espaciado y jerarquía.';
        learnings = 'Este proyecto me permitió entender que una web no debe centrarse únicamente en el diseño, sino en su capacidad de generar resultados reales. Aprendí a pensar en la experiencia del usuario como un flujo completo, guiándolo hacia una acción concreta de forma simple y directa. También reforcé mis habilidades en optimización de interfaces, toma de decisiones enfocadas en conversión y despliegue de proyectos funcionales con buen rendimiento.';
        break;
    }

    const getFallbackDescription = (featureId: string) => {
      switch (featureId) {
        case 'Reseñas de música': return 'Sistema completo para publicar y leer reviews de álbumes y canciones.';
        case 'Sistema de calificación': return 'Permite a los usuarios calificar y valorar contenido musical de forma intuitiva.';
        case 'Interfaz moderna': return 'Diseño limpio y contemporáneo enfocado en la experiencia del usuario.';
        case 'Sistema híbrido personal/negocios': return 'El usuario puede alternar entre su vida personal y sus proyectos de clientes con sus propias estadísticas, presupuestos en RD$ y USD, y seguimiento de progreso.';
        case 'Sistema de recordatorios por email': return 'Sin depender de notificaciones push de iOS, los recordatorios llegan directamente al correo del usuario mediante un servidor en Render y Resend.';
        case 'Estadísticas reales': return 'No solo cuánto falta, sino cuánto se ha avanzado, con gráficas de distribución por categoría, prioridad y actividad semanal.';
        case 'Aspectos de Marca': return 'Esquema de colores blanco/negro, no elementos innecesarios y Espaciado generoso (breathing room)';
        case 'Contacto': return 'Hacer que validara emails, previniera errores y fuera intuitivo tanto en computadora como en celular fue todo un desafío de usabilidad.';
        case 'Sistema funcional': return 'Gestión de citas y servicios de la clínica de forma organizada.';
        case 'Integración con WhatsApp': return 'Botón directo para agendar citas vía WhatsApp de manera rápida.';
        case 'Diseño moderno': return 'Interfaz limpia y profesional que transmite confianza a los pacientes.';

        default: return featureId;
      }
    };

    const getFallbackShortDescription = (projectId: string) => {
      switch (projectId) {
        case 'EDP.web': return 'Sitio web minimalista e interactivo para una agencia de desarrollo web moderna.';
        case 'ЯEVIEW': return 'Plataforma web para compartir reseñas y opiniones sobre canciones y álbumes.';
        case 'EDP Calendar': return 'Calendario híbrido para gestión personal y proyectos freelance con recordatorios por email.';
        case 'AJ Dent': return 'Landing page moderna y funcional para una clínica dental con integración de citas.';
        default: return 'Proyecto de diseño y desarrollo web enfocado en la experiencia de usuario.';
      }
    };

    return {
      ...project,
      title: project.id,
      description: getFallbackShortDescription(project.id),
      imageAltText: 'Imagen del proyecto ' + project.id,
      categoryText: project.Categoria,
      dateText: project.date,
      detailedDescription,
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: getFallbackDescription(kf.id),
        })) ?? [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges,
      learnings,
      extraImage1: (project as any).extraImage1,
      extraImage2: (project as any).extraImage2,
      extraImage3: (project as any).extraImage3,
    };
  }

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<string, { title: string; description: string } | undefined>;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: kf.id,
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<string, { alt: string; caption: string } | undefined>;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi,
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.Categoria,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription:
      i18nData?.detailedDescription ?? 'Detailed description missing',
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData?.challenges ?? 'Challenges information missing',
    learnings: i18nData?.learnings ?? 'Learnings information missing',
    extraImage1: (project as any).extraImage1,
    extraImage2: (project as any).extraImage2,
    extraImage3: (project as any).extraImage3,
  };
}

export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

export const skillsList: Array<SkillData> = [
  {
    id: 'frontendDevelopment',
    iconName: 'MonitorSmartphone',
    technologies: [
      { id: 'html', name: 'HTML' },
      { id: 'css', name: 'CSS' },
      { id: 'javascript', name: 'JavaScript' },
      { id: 'typescript', name: 'TypeScript' },
    ],
  },
  {
    id: 'backendDevelopment',
    iconName: 'ServerCog',
    technologies: [
      { id: 'nodejs', name: 'Node.js' },
      { id: 'restapi', name: 'REST APIs' },
    ],
  },
  {
    id: 'uiUxDesign',
    iconName: 'PenTool',
    technologies: [
      { id: 'figma', name: 'Figma' },
      { id: 'responsive', name: 'Responsive Design' },
    ],
  },
  {
    id: 'devOps',
    iconName: 'Network',
    technologies: [
      { id: 'git', name: 'Git' },
      { id: 'docker', name: 'Docker' },
    ],
  },
  {
    id: 'softwareSkills',
    iconName: 'PenTool',
    technologies: [
      { id: 'excel', name: 'Excel' },
      { id: 'canva-powerpoint', name: 'Canva / PowerPoint' },
      { id: 'word', name: 'Word' },
    ],
  },
  {
    id: 'Habilidades Técnicas',
    iconName: 'MonitorSmartphone',
    technologies: [
      { id: 'cert1', name: 'Certificación 1' },
      { id: 'cert2', name: 'Certificación 2' },
    ],
  },
];

export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  const currentLang = lang ?? defaultLanguage;

  return skillsList.map((skill) => {
    type SkillIdKey =
      keyof (typeof ui)[typeof defaultLanguage]['skillsContent'];

    const currentSkillId = skill.id as SkillIdKey;

    const skillContentSource = ui[currentLang]?.skillsContent?.[currentSkillId]
      ? ui[currentLang].skillsContent
      : ui[defaultLanguage].skillsContent;

    const skillTranslations = skillContentSource[currentSkillId];

    if (!skillTranslations) {
      console.warn(
        `Translation missing for skill ID: ${skill.id} in language: ${lang}. Using default values.`
      );
      return {
        ...skill,
        title: skill.id,
        description:
          'Soporte técnico a equipos y redes, mantenimiento de sistemas, organización de recursos tecnológicos e instalación de software.',
      };
    }

    return {
      ...skill,
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}