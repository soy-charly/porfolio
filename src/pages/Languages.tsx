import { Language } from '../types';
import { languages } from '../data/languages';

export const Languages = () => {
  const getLanguagesByLevel = (level: Language['level']) => {
    return languages.filter(lang => lang.level === level);
  };

  return (
    <section className="languages">
      <div className="container">
        <h2>Lenguajes de Programación</h2>
        
        {/* Avanzado */}
        <div className="languages-category">
          <h3>Nivel Avanzado</h3>
          <div className="languages-grid">
            {getLanguagesByLevel('Avanzado').map((lang, index) => {
              const Icon = lang.icon;
              return (
                <div key={index} className="language-card">
                  <Icon className="language-icon" />
                  <h4>{lang.name}</h4>
                  <span className="language-level">{lang.level}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Intermedio */}
        <div className="languages-category">
          <h3>Nivel Intermedio</h3>
          <div className="languages-grid">
            {getLanguagesByLevel('Intermedio').map((lang, index) => {
              const Icon = lang.icon;
              return (
                <div key={index} className="language-card">
                  <Icon className="language-icon" />
                  <h4>{lang.name}</h4>
                  <span className="language-level">{lang.level}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Básico */}
        <div className="languages-category">
          <h3>Nivel Básico</h3>
          <div className="languages-grid">
            {getLanguagesByLevel('Básico').map((lang, index) => {
              const Icon = lang.icon;
              return (
                <div key={index} className="language-card">
                  <Icon className="language-icon" />
                  <h4>{lang.name}</h4>
                  <span className="language-level">{lang.level}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}; 
