import { useEffect, useState } from 'react';
import { Skill } from '../types';

export const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills');
        if (!response.ok) throw new Error('Error al cargar las habilidades');
        const data = await response.json();
        setSkills(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const getSkillsByCategory = (category: Skill['category']) => {
    return skills.filter(skill => skill.category === category);
  };

  const getLevelColor = (level: Skill['level']) => {
    const colors = {
      'Aprendiendo': '#f59e0b',
      'Básico': '#3b82f6',
      'Medio': '#8b5cf6',
      'Avanzado': '#10b981'
    };
    return colors[level];
  };

  if (loading) return <div className="container">Cargando habilidades...</div>;
  if (error) return <div className="container error">{error}</div>;

  return (
    <section className="skills">
      <div className="container">
        <h2>Habilidades</h2>
        
        {/* Frontend Skills */}
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-grid">
            {getSkillsByCategory('Frontend').map((skill) => (
              <div key={skill._id} className="skill-card">
                <div 
                  className="skill-icon"
                  dangerouslySetInnerHTML={{ __html: skill.icon }}
                />
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
                <div 
                  className="skill-level"
                  style={{ backgroundColor: getLevelColor(skill.level) }}
                >
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills-category">
          <h3>Backend</h3>
          <div className="skills-grid">
            {getSkillsByCategory('Backend').map((skill) => (
              <div key={skill._id} className="skill-card">
                <div 
                  className="skill-icon"
                  dangerouslySetInnerHTML={{ __html: skill.icon }}
                />
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
                <div 
                  className="skill-level"
                  style={{ backgroundColor: getLevelColor(skill.level) }}
                >
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="skills-category">
          <h3>Otras Habilidades</h3>
          <div className="skills-grid">
            {getSkillsByCategory('Other').map((skill) => (
              <div key={skill._id} className="skill-card">
                <div 
                  className="skill-icon"
                  dangerouslySetInnerHTML={{ __html: skill.icon }}
                />
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
                <div 
                  className="skill-level"
                  style={{ backgroundColor: getLevelColor(skill.level) }}
                >
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 
