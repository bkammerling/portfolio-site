'use client';

import { useState } from 'react';
import { projects } from '@/lib/data';
import { Project } from '@/types';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'fullstack' | 'marketing'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on selected filter

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'frontend') return project.technologies.some(tech => 
      ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'].includes(tech)
    );
    if (filter === 'fullstack') return project.tags.includes('Full Stack') || project.role.includes('Full Stack');
    if (filter === 'marketing') return project.tags.includes('Marketing') || project.tags.includes('SaaS');
    return true;
  });

  const FilterButton = ({ 
    active, 
    onClick, 
    children 
  }: { 
    active: boolean; 
    onClick: () => void; 
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1 transition-colors ${
        active
          ? 'bg-black text-white'
          : 'text-gray-600 hover:text-black border border-gray-300 hover:border-black'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-black mb-4">
            Projects
          </h1>
          <p className="text-gray-600 max-w-2xl">
            A collection of projects showcasing my skills in frontend development, 
            full-stack applications, and marketing technology solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          <FilterButton
            active={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            All ({projects.length})
          </FilterButton>
          <FilterButton
            active={filter === 'frontend'}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </FilterButton>
          <FilterButton
            active={filter === 'fullstack'}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </FilterButton>
          <FilterButton
            active={filter === 'marketing'}
            onClick={() => setFilter('marketing')}
          >
            Marketing
          </FilterButton>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border-b border-gray-200 pb-8 last:border-b-0 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-medium text-black mb-2 hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-600 text-sm underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-600 text-sm underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-2">
                    {project.year}
                  </div>
                  <div className="space-y-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <div
                        key={tag}
                        className="text-xs text-gray-600"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {project.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8 border-b border-gray-200 pb-6">
                <div>
                  <h2 className="text-2xl font-medium text-black mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{selectedProject.year}</span>
                    <span>•</span>
                    <span>{selectedProject.role}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-black text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div>
                  <h3 className="text-lg font-medium text-black mb-4">
                    Project Overview
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {selectedProject.longDescription && (
                    <>
                      <h3 className="text-lg font-medium text-black mb-4">
                        Detailed Description
                      </h3>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </>
                  )}

                  <h3 className="text-lg font-medium text-black mb-4">
                    Links
                  </h3>
                  <div className="flex gap-4">
                    {selectedProject.links.live && (
                      <a
                        href={selectedProject.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
                      >
                        View Live Demo
                      </a>
                    )}
                    {selectedProject.links.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-300 text-black px-6 py-3 hover:bg-gray-50 transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <h3 className="text-lg font-medium text-black mb-4">
                    Technologies Used
                  </h3>
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {selectedProject.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="px-3 py-2 bg-gray-100 text-gray-700 text-sm text-center"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  <h3 className="text-lg font-medium text-black mb-4">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                    <>
                      <h3 className="text-lg font-medium text-black mb-4">
                        Key Challenges
                      </h3>
                      <div className="space-y-2 text-gray-600">
                        {selectedProject.challenges.map((challenge, index) => (
                          <div key={index} className="border-l-2 border-gray-200 pl-4">
                            <p className="text-sm">{challenge}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {selectedProject.impact && selectedProject.impact.length > 0 && (
                    <>
                      <h3 className="text-lg font-medium text-black mb-4 mt-8">
                        Impact
                      </h3>
                      <div className="space-y-2 text-gray-600">
                        {selectedProject.impact.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-black mt-1">•</span>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}