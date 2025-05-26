import { Skill } from '../types';
import { 
  SiReact, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiGit, 
  SiDocker,
  SiFastapi
} from 'react-icons/si';

export const skills: Skill[] = [
  // Frontend Skills
  {
    name: "React",
    category: "Frontend",
    icon: SiReact
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: SiTypescript
  },
  {
    name: "HTML",
    category: "Frontend",
    icon: SiHtml5
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: SiCss3
  },
  // Backend Skills
  {
    name:"FastAPI",
    category: "Backend",
    icon: SiFastapi
  },/*
  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs
  },
  {
    name: "Express",
    category: "Backend",
    icon: SiExpress
  },*/
  // Other Skills
  {
    name: "Git",
    category: "Other",
    icon: SiGit
  },
  {
    name: "Docker",
    category: "Other",
    icon: SiDocker
  }
]; 
