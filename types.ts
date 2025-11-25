export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  impact: string;
  tech: string[];
  link?: string;
}

export interface PhilosophyItem {
  title: string;
  content: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Publication {
  title: string;
  journal: string;
  authors: string;
  link: string;
  year: string;
}

export interface Article {
  title: string;
  link: string;
  id: string;
}

export interface Interest {
  key: string;
  value: string;
  description: string;
}