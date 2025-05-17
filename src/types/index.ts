export type SkillLevel = 'Aprendiendo' | 'Básico' | 'Medio' | 'Avanzado';

export interface Skill {
  _id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Other';
  level: SkillLevel;
  icon: string; // SVG string
  description: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  createdAt: string;
  updatedAt: string;
} 
