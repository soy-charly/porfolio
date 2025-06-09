import { skills } from '../data/skills';

export const Skills = () => {
  const getSkillsByCategory = (category: 'Frontend' | 'Backend' | 'Other') => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section className="skills">
      <div className="container">
        <h2>Habilidades</h2>
        
        {/* Frontend Skills */}
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-grid">
            {getSkillsByCategory('Frontend').map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="skill-card">
                  <Icon className="skill-icon" />
                  <h4>{skill.name}</h4>
                  <p className="skill-level">{skill.level}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills-category">
          <h3>Backend</h3>
          <div className="skills-grid">
            {getSkillsByCategory('Backend').map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="skill-card">
                  <Icon className="skill-icon" />
                  <h4>{skill.name}</h4>
                  <p className="skill-level">{skill.level}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Skills */}
        <div className="skills-category">
          <h3>Otras Habilidades</h3>
          <div className="skills-grid">
            {getSkillsByCategory('Other').map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="skill-card">
                  <Icon className="skill-icon" />
                  <h4>{skill.name}</h4>
                  <p className="skill-level">{skill.level}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
