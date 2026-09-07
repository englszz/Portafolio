import type { SkillData } from '../type';

export const skillsList: Array<SkillData> = [
  {
    id: 'frontendDevelopment',
    iconName: 'MonitorSmartphone',
    technologies: [
      { id: 'html5', name: 'HTML' },
      { id: 'css3', name: 'CSS' },
      { id: 'javascript', name: 'JavaScript' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'astro', name: 'Astro' },
      { id: 'react', name: 'React' },
    ],
  },
  {
    id: 'itSupport',
    iconName: 'ServerCog',
    technologies: [],
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
    id: 'officeTools',
    iconName: 'PenTool',
    technologies: [
      { id: 'excel', name: 'Excel' },
      { id: 'canva-powerpoint', name: 'Canva / PowerPoint' },
      { id: 'word', name: 'Word' },
    ],
  },
];
