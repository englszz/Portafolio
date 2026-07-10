import type { SkillData } from '../type';

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
    id: 'englishLevel',
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
    id: 'leadership',
    iconName: 'Network',
    technologies: [
      { id: 'git', name: 'Git' },
      { id: 'docker', name: 'Docker' },
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
