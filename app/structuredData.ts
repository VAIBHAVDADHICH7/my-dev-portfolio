import projects from './projects/projectsData';

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vaibhav Dadhich",
  "url": "https://www.vaibhavdadhich.me",
  "sameAs": [
    "https://github.com/VAIBHAVDADHICH7",
    "https://linkedin.com/in/vaibhav-dadhich"
  ],
  "jobTitle": "Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Vaibhav Dadhich Portfolio"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.vaibhavdadhich.me",
  "name": "Vaibhav Dadhich Portfolio",
  "description": "Personal portfolio website built with Next.js showcasing projects, blog, and interactive playground."
};

const projectSchemas = projects.map(project => ({
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.description,
  "url": project.demo || project.github,
  "keywords": project.tags.join(", "),
  "creator": {
    "@type": "Person",
    "name": "Vaibhav Dadhich"
  }
}));

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    websiteSchema,
    ...projectSchemas
  ]
};
