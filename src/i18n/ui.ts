export const languages: Record<'es', { name: string; flag: string }> = {
  es: { name: 'Español', flag: 'do' },
} as const;

export const defaultLanguage = 'es';

export type LanguageCode = keyof typeof languages;

export const ui = {
  es: {
    projectsContent: {
      'EDP Calendar': {
        title: 'EDP Calendar',
        description: 'Calendario híbrido para gestión personal y proyectos freelance con recordatorios por email.',
        imageAltText: 'Imagen del proyecto EDP Calendar',
        categoryText: 'Gestión de Proyectos',
        dateText: '8 de mayo, 2026',
        detailedDescription: 'EDP Calendar nació de la necesidad de tener una sola herramienta que combinara organización personal y gestión de proyectos freelance. La idea era simple: no depender de tres apps distintas para manejar tareas del día, proyectos de clientes y métricas de productividad.',
        keyFeatures: {
          'Sistema híbrido personal/negocios': {
            title: 'Sistema híbrido personal/negocios',
            description: 'El usuario puede alternar entre su vida personal y sus proyectos de clientes con sus propias estadísticas, presupuestos en RD$ y USD, y seguimiento de progreso.',
          },
          'Sistema de recordatorios por email': {
            title: 'Sistema de recordatorios por email',
            description: 'Sin depender de notificaciones push de iOS, los recordatorios llegan directamente al correo del usuario mediante un servidor en Render y Resend.',
          },
          'Estadísticas reales': {
            title: 'Estadísticas reales',
            description: 'No solo cuánto falta, sino cuánto se ha avanzado, con gráficas de distribución por categoría, prioridad y actividad semanal.',
          },
        },
        challenges: 'El mayor reto fue el sistema de notificaciones. iOS bloquea las notificaciones push en apps web, lo que obligó a replantear toda la arquitectura y optar por recordatorios vía email con un servidor externo. Configurar Firebase Cloud Functions, manejar permisos de Google Cloud y resolver conflictos de versiones en las dependencias consumió la mayor parte del tiempo de desarrollo.',
        learnings: 'Que la solución más obvia no siempre es la correcta. Empezar con notificaciones push parecía lo natural, pero las limitaciones de iOS llevaron a una solución más robusta y multiplataforma. También que separar las credenciales del código desde el inicio ahorra horas de dolores de cabeza con GitHub y la seguridad del proyecto.',
      },
      'AJ Dent': {
        title: 'AJ Dent',
        description: 'Landing page moderna y funcional para una clínica dental con integración de citas.',
        imageAltText: 'Imagen del proyecto AJ Dent',
        categoryText: 'Clínica Dental',
        dateText: '12 de abril, 2026',
        detailedDescription: 'Sitio web desarrollado para AJ Dent, enfocado en presentar servicios odontológicos de forma clara, moderna y orientada a conversión. La web prioriza la experiencia del usuario, con acceso rápido a información clave y contacto directo vía WhatsApp para agendar citas sin fricción. El despliegue se realizó usando Vercel, permitiendo una carga rápida y disponibilidad constante.',
        keyFeatures: {
          'Sistema funcional': {
            title: 'Sistema funcional',
            description: 'Gestión de citas y servicios de la clínica de forma organizada.',
          },
          'Integración con WhatsApp': {
            title: 'Integración con WhatsApp',
            description: 'Botón directo para agendar citas vía WhatsApp de manera rápida.',
          },
          'Diseño moderno': {
            title: 'Diseño moderno',
            description: 'Interfaz limpia y profesional que transmite confianza a los pacientes.',
          },
        },
        challenges: 'Uno de los principales retos fue estructurar el contenido de forma clara sin sobrecargar al usuario, organizando servicios, precios y llamadas a la acción de manera estratégica. También representó un desafío lograr un diseño que no solo fuera visualmente atractivo, sino que realmente impulsara la conversión, especialmente a través de WhatsApp. Además, se trabajó en la optimización responsive para garantizar una experiencia fluida en dispositivos móviles, junto con el ajuste fino de detalles visuales como tipografía, espaciado y jerarquía.',
        learnings: 'Este proyecto me permitió entender que una web no debe centrarse únicamente en el diseño, sino en su capacidad de generar resultados reales. Aprendí a pensar en la experiencia del usuario como un flujo completo, guiándolo hacia una acción concreta de forma simple y directa. También reforcé mis habilidades en optimización de interfaces, toma de decisiones enfocadas en conversión y despliegue de proyectos funcionales con buen rendimiento.',
      },
      'EDP.web': {
        title: 'EDP.web',
        description: 'Sitio web minimalista e interactivo para una agencia de desarrollo web moderna.',
        imageAltText: 'Imagen del proyecto EDP.web',
        categoryText: 'Agencia de Páginas Web',
        dateText: '6 de enero, 2026',
        detailedDescription: 'EDP.web es el sitio web de una agencia de desarrollo web que busca transmitir profesionalismo y modernidad desde el primer momento. El objetivo principal era crear una landing page elegante y minimalista que convierta visitantes en clientes potenciales, mostrando los servicios de la agencia de forma clara y atractiva.',
        keyFeatures: {
          'Aspectos de Marca': {
            title: 'Aspectos de Marca',
            description: 'Esquema de colores blanco/negro, no elementos innecesarios y espaciado generoso.',
          },
          'Contacto': {
            title: 'Contacto',
            description: 'Hacer que validara emails, previniera errores y fuera intuitivo tanto en computadora como en celular fue todo un desafío de usabilidad.',
          },
        },
        challenges: 'Quería que cuando alguien cambiara de modo claro a oscuro, el logo también cambiara automáticamente de negro a blanco. Suena simple, pero conseguir que se viera fluido y sin errores me tomó varios intentos. Al final logré que funcionara perfecto y ahora parece mágico.',
        learnings: 'Menos es más. Al limitarme a solo blanco y negro, tuve que ser más creativo con los espacios, tamaños de texto y organización. Aprendí que un diseño simple y bien ejecutado siempre gana contra uno sobrecargado de efectos y colores.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Desarrollo Web Front-End',
        description:
          'HTML, CSS, JavaScript, TypeScript, Astro y React. Construcción de interfaces modernas, responsivas y accesibles.',
      },
      englishLevel: {
        title: 'Inglés Intermedio',
        description: 'O&M — Nivel intermedio-alto con enfoque en pronunciación, presentaciones orales y comunicación técnica.',
      },
      uiUxDesign: {
        title: 'Diseño UI/UX & Gráfico',
        description: 'Figma, identidad visual, paletas de color y diseño de marca.',
      },
      leadership: {
        title: 'MUNs – Liderazgo',
        description: 'Delegado y miembro de la mesa directiva en Modelo de las Naciones Unidas (2023–2026). Oratoria, negociación y liderazgo.',
      },
      officeTools: {
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

