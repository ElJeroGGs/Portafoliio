export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface DevOpsProject {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  status: "active" | "planned" | "completed";
}
