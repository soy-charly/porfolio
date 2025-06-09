import { Skill } from '../types';
import { 
  SiReact, 
  SiGit, 
  SiDocker,
  SiFastapi
} from 'react-icons/si';

export const skills: Skill[] = [
  // Frontend Skills
  {
    name: "React",
    category: "Frontend",
    icon: SiReact,
    level: "Intermedio"
  },
  // Backend Skills
  {
    name:"FastAPI",
    category: "Backend",
    icon: SiFastapi,
    level: "Intermedio"
  },
  // Other Skills
  {
    name: "Git",
    category: "Other",
    icon: SiGit,
    level: "Avanzado"
  },
  {
    name: "Docker",
    category: "Other",
    icon: SiDocker,
    level: "Intermedio"
  }
]; 
