export interface Project {
  title: string;
  year: string;
  description: string;
  tags: string[];
  category: string;
  imageUrl: string; // URL to the project image (for carousel)
  slug: string; // URL-friendly identifier for detail page
  gallery: string[]; // Array of image URLs for detail page gallery
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  [category: string]: string[];
}
