import { Language } from '../types';
import { 
  SiJavascript,
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiPhp
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export const languages: Language[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: "Avanzado"
  },
  {
    name: "Python",
    icon: SiPython,
    level: "Intermedio"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: "Intermedio"
  },
  {
    name: "Java",
    icon: FaJava,
    level: "Básico"
  },
  {
    name: "C++",
    icon: SiCplusplus,
    level: "Básico"
  },
  {
    name: "PHP",
    icon: SiPhp,
    level: "Básico"
  }
]; 
