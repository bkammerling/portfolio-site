import Link from 'next/link';
import { projects } from '@/lib/data';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-black mb-8">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-medium text-black mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-600 text-sm underline"
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
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Year & Tags */}
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div>
          <Link
            href="/projects"
            className="text-black hover:text-gray-600 font-medium underline"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}