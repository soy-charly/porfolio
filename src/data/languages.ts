import { Language } from '../types';
import { 
  SiJavascript,
  SiPython,
  SiTypescript,
  SiCss3,
  SiHtml5,
} from 'react-icons/si';

export const languages: Language[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: "Avanzado"
  },
    {
    name: "TypeScript",
    icon: SiTypescript,
    level: "Intermedio"
  },
  {
    name: "HTML",
    icon: SiHtml5,
    level: "Avanzado"
  },
  {
    name: "CSS",
    icon: SiCss3,
    level: "Intermedio"
  },
  {
    name: "Python",
    icon: SiPython,
    level: "Intermedio"
  },

]; 
