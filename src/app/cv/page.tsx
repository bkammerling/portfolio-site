import { workExperience, education, skills, personalInfo } from '@/lib/data';

export default function CVPage() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const handleDownloadCV = () => {
    // In a real app, this would download a PDF
    alert('CV download functionality would be implemented here!');
  };


  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8 mb-12">
          <div className="text-center">
            <h1 className="text-4xl font-light text-black mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {personalInfo.title}
            </p>
            <p className="text-gray-500 mb-8">
              {personalInfo.location} • {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-black mb-4">Summary</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            5+ years helping companies grow through a unique blend of technical expertise and marketing acumen. 
            Experienced in building scalable web applications, leading development teams, and driving user 
            acquisition strategies. Passionate about creating digital experiences that not only look great 
            but also deliver measurable business results.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-black mb-8">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((job) => (
              <div key={job.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <div className="lg:col-span-1">
                    <div className="text-sm text-gray-500 mb-1">{job.period}</div>
                    <div className="text-sm text-gray-500">{job.location}</div>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-black mb-1">
                      {job.role}
                    </h3>
                    <div className="text-gray-600 mb-3">
                      {job.company}
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 text-sm leading-relaxed">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-black mb-6">Education & Certifications</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-1">
                  <div className="text-sm text-gray-500">{edu.period}</div>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-lg font-medium text-black">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-gray-600">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-light text-black mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="text-lg font-medium text-black mb-4">
                  {category === 'frontend' ? 'Frontend Development' : 
                   category === 'backend' ? 'Backend Development' :
                   category === 'design' ? 'Design & UX' :
                   category === 'marketing' ? 'Marketing & Analytics' :
                   category === 'tools' ? 'Tools & DevOps' : category}
                </h3>
                <div className="space-y-2">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-gray-700">{skill.name}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 ${
                              i < 
                              (skill.level === 'expert' ? 4 : 
                               skill.level === 'advanced' ? 3 : 
                               skill.level === 'intermediate' ? 2 : 1)
                                ? 'bg-black' 
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}