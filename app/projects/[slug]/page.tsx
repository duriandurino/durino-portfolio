import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

import { getProjectBySlug, getAllProjectSlugs } from '@/lib/utils/projects';
import { ProjectGallery } from '@/components/ProjectGallery';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Adrian Alejandrino`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.imageUrl],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900/80 backdrop-blur-md hover:bg-orange-500 text-white hover:text-black rounded-full font-bold transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </div>

      {/* Project Header */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-orange-500 text-black text-xs font-bold rounded-full uppercase tracking-widest">
              {project.year}
            </span>
            <span className="text-zinc-500 text-sm font-mono uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">
            {project.title}<span className="text-orange-500">.</span>
          </h1>

          <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-4xl mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white/5 border border-white/10 text-orange-400 text-sm rounded-full font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-16" />

        {/* Gallery Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-8">
            Project Gallery<span className="text-orange-500">.</span>
          </h2>
          
          <ProjectGallery images={project.gallery} projectTitle={project.title} />
        </div>
      </div>
    </div>
  );
}

