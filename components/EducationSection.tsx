import React from 'react';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
  url?: string;
}

interface Skill {
  name: string;
  level: string; // e.g., Beginner, Intermediate, Advanced
}

interface Achievement {
  title: string;
  year: string;
  description?: string;
}

const educationData: Education[] = [
  {
    degree: 'BTech Student - 3rd Year',
    institution: 'S.B.N.I.T.M., Jaipur ',
    year: '2023 - Present',
    description: 'Currently pursuing Bachelor of Technology with a focus on web development and engineering principles.'
  },
  {
    degree: 'Certified Professional UI/UX Designer',
    institution: 'Adobe Inc.',
    year: '2024',
    description: 'Completed professional certification in UI/UX design with Adobe Dreamweaver, focusing on user-centered design principles.',
    url: 'https://www.linkedin.com/posts/vaibhav-dadhich_adobe-professional-certification-of-dreamweaver-activity-7278473760872022017-i5t1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUrAhABqXv6u_e8wrt5meUERL0lwq8I-bw'
  },
  {
    degree: 'Certified SOC Analyst',
    institution: 'EC Council',
    year: '2025',
    description: 'Certified SOC Analyst with expertise in cybersecurity, threat detection, and incident response.',
    url: 'https://www.linkedin.com/posts/vaibhav-dadhich_cybersecurity-socanalyst-csa-activity-7314255046408314882-qlOS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUrAhABqXv6u_e8wrt5meUERL0lwq8I-bw'
  }
];

const skillsData: Skill[] = [
  { name: 'Hindi', level: 'Fluent' },
  { name: 'English', level: 'Fluent' },
  { name: 'French', level: 'Intermediate' },
  { name: 'German', level: 'Beginner' },
  { name: 'UI/UX Design', level: 'Professional' },
  { name: 'SOC Analysis', level: 'Professional' }
];

const achievementsData: Achievement[] = [];

const EducationSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 bg-gray-900 rounded-lg shadow-md text-gray-100">
      <h2 className="text-3xl font-extrabold mb-8 border-b-4 border-indigo-500 inline-block pb-2">
        Education, Achievements & Skills
      </h2>
      <div className="space-y-12">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Educational Qualifications</h3>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-6">
                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                <p className="text-indigo-400 font-semibold">
                  {edu.url ? (
                    <a href={edu.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {edu.institution}
                    </a>
                  ) : (
                    edu.institution
                  )} &middot; <span className="text-gray-400">{edu.year}</span>
                </p>
                {edu.description && (
                  <p className="mt-2 leading-relaxed">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
          <div className="space-y-6">
            {achievementsData.map((ach, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-6">
                <h4 className="text-xl font-semibold">{ach.title}</h4>
                <p className="text-green-400 font-semibold">{ach.year}</p>
                {ach.description && (
                  <p className="mt-2 leading-relaxed">{ach.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillsData.map((skill, index) => (
              <li key={index} className="bg-gray-800 rounded-md shadow p-4 flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-indigo-400 font-semibold">{skill.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
