import React from 'react';
import { PROJECTS } from '../../data/projects';
import type { Project } from '../../types';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCard } from './ProjectCard';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-14 sm:py-24 lg:py-36 bg-[#FAF9F6] border-b border-[#E6E4DF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Section Header */}
        <SectionHeader
          number="02"
          label="SELECTED WORK"
          title="Work that made"
          serifWord="the idea real."
          subtitle="Selected projects created with businesses and teams turning their next idea into something real."
        />

        {/* Editorial Case Study Showcase */}
        <div className="flex flex-col w-full mt-6 sm:mt-10 lg:mt-14">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} onSelect={onSelectProject} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
