export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  technologies: string[];
  links: {
    live?: string;
    github?: string;
    case_study?: string;
  };
  featured: boolean;
  year: number;
  role: string;
  challenges?: string[];
  impact?: string[];
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
  location: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'marketing' | 'tools' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}