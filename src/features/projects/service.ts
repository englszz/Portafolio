import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import { projectsListUnsorted } from './data/projects-data';
import { skillsList } from './data/skills-data';
import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  const i18nData = ui[lang]?.projectsContent?.[project.id as keyof typeof ui[typeof defaultLanguage]['projectsContent']]
    ?? ui[defaultLanguage].projectsContent[project.id as keyof typeof ui[typeof defaultLanguage]['projectsContent']];

  if (!i18nData) {
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}.`
    );
    return {
      ...project,
      title: project.id,
      description: '',
      imageAltText: 'Imagen del proyecto ' + project.id,
      categoryText: project.Categoria,
      dateText: project.date,
      detailedDescription: '',
      keyFeaturesTranslated: [],
      galleryImagesTranslated: [],
      challenges: '',
      learnings: '',
      extraImage1: (project as any).extraImage1,
      extraImage2: (project as any).extraImage2,
      extraImage3: (project as any).extraImage3,
    };
  }

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const featureTranslations = (i18nData.keyFeatures as Record<string, { title: string; description: string }> | undefined)?.[kf.id];
      return {
        ...kf,
        title: featureTranslations?.title ?? kf.id,
        description: featureTranslations?.description ?? kf.id,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => ({
      ...gi,
      alt: `Imagen de ${project.id}`,
      caption: '',
    })) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.Categoria,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription: i18nData.detailedDescription ?? '',
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData.challenges ?? '',
    learnings: i18nData.learnings ?? '',
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
  if (!project) return undefined;
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  const currentLang = lang ?? defaultLanguage;

  return skillsList.map((skill) => {
    const skillTranslations = ui[currentLang]?.skillsContent?.[skill.id as keyof typeof ui[typeof defaultLanguage]['skillsContent']]
      ?? ui[defaultLanguage].skillsContent[skill.id as keyof typeof ui[typeof defaultLanguage]['skillsContent']];

    if (!skillTranslations) {
      console.warn(
        `Translation missing for skill ID: ${skill.id} in language: ${lang}.`
      );
      return {
        ...skill,
        title: skill.id,
        description: '',
      };
    }

    return {
      ...skill,
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}
