const projects = [
  {
    title: "E-Commerce App",
    description:
      "A full stack e-commerce platform with product listings, cart, authentication, and payment integration using Stripe.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://yourapp.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true,
  },
  {
    title: "Task Manager",
    description:
      "A drag-and-drop task management app with real-time updates, user authentication, and team collaboration features.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://yourapp.com",
    githubUrl: "https://github.com/yourusername/taskmanager",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather app that shows real-time forecasts, hourly data, and a 7-day outlook using the OpenWeather API.",
    tags: ["JavaScript", "REST API", "CSS"],
    liveUrl: "https://yourapp.com",
    githubUrl: "https://github.com/yourusername/weather",
    featured: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-darkCard border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top — Title & Featured Badge */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-xs font-semibold bg-primary/20 text-primary px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-dark text-slate-300 border border-white/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom — Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-violet-400 font-medium transition-colors duration-200"
                >
                  {/* Globe Icon */}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                  Live Demo
                </a>
                
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white font-medium transition-colors duration-200"
                >
                  {/* GitHub Icon */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757
                    -1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 
                    3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 
                    0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 
                    3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 
                    2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                    1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 
                    2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 
                    24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;