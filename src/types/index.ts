import { IconType } from 'react-icons';

export type SkillLevel = 'Aprendiendo' | 'Básico' | 'Medio' | 'Avanzado';

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Other';
  icon: IconType;
}

export interface Language {
  name: string;
  icon: IconType;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
} 
