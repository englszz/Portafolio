export const languages: Record<'en', { name: string; flag: string }> = {
  en: { name: 'Español', flag: 'do' },
} as const;

export const defaultLanguage = 'en';

export type LanguageCode = keyof typeof languages;

export const ui = {
  en: {
    projectsContent: {},
    skillsContent: {
      frontendDevelopment: {
        title: 'Desarrollo Web Front-End',
        description:
          'HTML, CSS, JavaScript, TypeScript, Astro y React. Construcción de interfaces modernas, responsivas y accesibles.',
      },
      backendDevelopment: {
        title: 'Inglés Intermedio',
        description: 'O&M — Nivel intermedio con enfoque en pronunciación, presentaciones orales y comunicación técnica.',
      },
      uiUxDesign: {
        title: 'Diseño UI/UX & Gráfico',
        description: 'Figma, identidad visual, paletas de color y diseño de marca.',
      },
      devOps: {
        title: 'MUNs – Liderazgo',
        description: 'Delegado y miembro de la mesa directiva en Modelo de las Naciones Unidas (2023–2026). Oratoria, negociación y liderazgo.',
      },
      softwareSkills: {
        title: 'Herramientas de Oficina',
        description: 'Excel, Canva/PowerPoint, Word. Gestión de documentos, presentaciones y análisis básico de datos.',
      },
    },
    site: {
      title: 'Engels Damirón',
      description:
        'Portafolio de Engels Smith Damirón — Futuro ingeniero en ciberseguridad con experiencia en soporte IT y desarrollo web.',
    },
    nav: {
      home: 'Inicio',
      blog: 'Trayectoria',
      contact: 'Contacto',
      projects: 'Proyectos',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    homePage: {
      pageTitle: 'Inicio | Engels Damirón',
      pageDescription:
        'Portafolio de Engels Smith Damirón — Futuro ingeniero en ciberseguridad, técnico en soporte IT y desarrollador web con proyectos reales.',
      heroGreeting: "Engels Damirón",
      heroSubtitlePart1: 'Soporte IT & Redes',
      heroSubtitlePart2: 'Desarrollo Web',
      heroSubtitlePart3: 'Ciberseguridad',
      heroIntroduction: 'Futuro ingeniero en ciberseguridad con experiencia práctica en soporte IT, redes y desarrollo web. Construyo soluciones reales, aprendo constantemente y busco aportar valor desde la tecnología.',
      heroViewWorkButton: 'Ver mis proyectos',
      heroContactButton: 'Contáctame',
      heroImageAlt:
        'Foto de perfil de Engels Damirón',
      featuredProjectsTitle: 'Proyectos destacados',
      featuredProjectsDescription:
        "Una selección de mis trabajos más recientes en desarrollo web y diseño.",
      projectCardViewProject: 'Ver proyecto',
      projectCardViewCode: 'Ver código',
      imageNotAvailable: 'Imagen no disponible',
      mySkillsTitle: 'Mis Habilidades',
      mySkillsDescription:
        'Habilidades técnicas, formación académica y experiencia que me definen.',
    },
    blogPage: {
      pageTitle: 'Trayectoria | Engels Damirón',
      pageDescription:
        'Logros, certificaciones, reconocimientos y experiencias de Engels Damirón en tecnología y MUNs.',
      title: 'Mi Trayectoria',
      description:
        'Medallas, reconocimientos, participaciones, experiencias y Modelos de Naciones Unidas (MUNs).',
      comingSoon: 'Pronto agregaré mis logros y certificaciones aquí.',
      heroImageAlt: 'Imagen del artículo: ',
      publishedOn: 'Publicado el: ',
      readMore: 'Leer más',
      readingTimeSuffix: 'min de lectura',
      searchPlaceholder: 'Buscar...',
      noTagFound: 'Categoría no encontrada.',
      selectTagCommandPlaceholder: 'Buscar categoría...',
      allTagsLabel: 'Todas las categorías',
      noPostsFound: 'No se encontraron publicaciones.',
    },
    blogPost: {
      publishedOn: 'Publicado el: ',
      updatedOn: 'Actualizado el: ',
      heroImageAlt: 'Imagen del artículo: ',
      backToList: 'Volver a trayectoria',
      readingTimeSuffix: 'min de lectura',
      relatedPostsTitle: 'Seguir leyendo',
      readMore: 'Leer más',
    },
    toc: {
      title: 'Tabla de contenidos',
    },
    contactPage: {
      pageTitle: 'Contacto | Engels Damirón',
      pageDescription:
        '¿Interesado en mis proyectos? Contáctame para más información.',

      title: 'Contáctame',
      description:
        '¿Interesado/a en mis proyectos? Escríbeme y con gusto te respondo.',
      formTitle: 'Nombre',
      firstNameLabel: 'Nombre',
      lastNameLabel: 'Apellido',
      emailLabel: 'Correo electrónico',
      messageLabel: 'Mensaje',
      sendButtonLabel: 'Enviar mensaje',
      firstNamePlaceholder: 'Tu nombre',
      lastNamePlaceholder: 'Tu apellido',
      emailPlaceholder: 'Tu correo electrónico',
      messagePlaceholder: 'Déjame un mensaje aquí...',

      calendarButtonLabel: 'Ver mi disponibilidad',
      calendarPlaceHolder:
        'La integración con Google Calendar estará disponible pronto...',
      orSeparatorText: 'O',
      toastSuccessMessageSent: '¡Mensaje enviado con éxito!',
      toastErrorFailedToSend: 'Error al enviar el mensaje.',
      toastErrorUnexpected: 'Ocurrió un error inesperado.',
      toastErrorDetails: 'Detalles del error:',
      toastErrorValidationFailed: 'El formulario tiene errores.',
    },
    projectDetailPage: {
      backToProjects: 'Volver a proyectos',
      categoryLabel: 'Categoría:',
      dateLabel: 'Fecha:',
      aboutTitle: 'Sobre este proyecto',
      keyFeaturesTitle: 'Aspectos Clave',
      galleryTitle: 'Galería',
      challengesTitle: 'Retos',
      learningsTitle: 'Aprendizajes',
      visitProjectButton: 'Ver proyecto',
      viewCodeButton: 'Ver código',
    },
    projectsPage: {
      title: 'Mis Proyectos',
      metaTitle: "Mis Proyectos | Engels Damirón",
      metaDescription: "Todos los proyectos de Engels Damirón — desarrollo web, diseño y emprendimiento.",
      noProjects: 'No hay proyectos para mostrar en este momento.',
      noProjectsDescription:
        "Pronto agregaré más proyectos aquí. ¡Vuelve pronto!",
    },
    notFoundPage: {
      pageTitle: 'Página no encontrada',
      title: '¡Oops! Página no encontrada.',
      message:
        'Aún estoy trabajando en esta sección. Mientras tanto, puedes regresar al inicio.',
      homeLink: 'Volver al inicio',
    },
    zodErrors: {
      invalid_type: 'Tipo inválido.',
      invalid_type_received_undefined: 'Este campo es obligatorio.',
      required_field_custom: 'El campo {fieldName} es obligatorio.',
      too_small_string_minimum: 'Debe tener al menos {minimum} caracteres.',
      too_big_string_maximum: 'No puede tener más de {maximum} caracteres.',
      invalid_string_email: 'Dirección de correo inválida.',
      invalid_string_url: 'URL inválida.',
      invalid_string_uuid: 'UUID inválido.',
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}

