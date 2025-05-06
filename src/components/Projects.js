function Projects() {
  const projects = [
    {
      name: 'TCP Chat App',
      description: 'A client-server chat application built with Java sockets.',
      tech: ['Java', 'Sockets', 'Networking'],
      image: 'https://via.placeholder.com/300',
      live: 'https://example.com',
      github: 'https://github.com/shoaib-akhtar/tcp-chat',
    },
    {
      name: 'Portfolio Website',
      description: 'My personal portfolio showcasing my skills.',
      tech: ['React', 'CSS', 'JavaScript'],
      image: 'https://via.placeholder.com/300',
      live: 'https://yourportfolio.com',
      github: 'https://github.com/shoaib-akhtar/portfolio',
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech:</strong> {project.tech.join(', ')}
            </p>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-button">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-button github">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;