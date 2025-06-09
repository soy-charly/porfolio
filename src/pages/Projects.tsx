import { projects } from '../data/projects';

export const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2>Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundPosition: 'top',
                }}
              />
              <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
                )}
                {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Ver Demo
                </a>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
