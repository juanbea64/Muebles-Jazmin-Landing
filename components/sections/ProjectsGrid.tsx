'use client';

/**
 * ProjectsGrid Component
 * Grid of projects with modal functionality
 * Client Component (requires state for modal)
 */

import { useState } from 'react';
import Image from 'next/image';
import type { Project } from '@/lib/types';
import { ProjectModal } from '@/components/ui/ProjectModal';
import styles from './ProjectsGrid.module.css';

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className={styles.section}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article
              key={project.id}
              className={styles.project}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className={styles.title}>{project.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        images={selectedProject?.images || []}
      />
    </>
  );
}
