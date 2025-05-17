import { useEffect, useState } from 'react';
import { Project } from '../types';

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) throw new Error('Error al cargar los proyectos');
        const data = await response.json();
        setProjects(data.sort((a: Project, b: Project) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div className="container">Cargando proyectos...</div>;
  if (error) return <div className="container error">{error}</div>;

  return (
    <section className="projects">
      <div className="container">
        <h2>Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              <div 
                className="project-image"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
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
