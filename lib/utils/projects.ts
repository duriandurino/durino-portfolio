import { PROJECTS } from '@/lib/data/projects';
import type { Project } from '@/lib/types';

/**
 * Get a single project by its slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(project => project.slug === slug);
}

/**
 * Get all project slugs (for static generation)
 */
export function getAllProjectSlugs(): string[] {
  return PROJECTS.map(project => project.slug);
}

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  return PROJECTS;
}
