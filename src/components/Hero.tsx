import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Hi, I'm <span className="highlight">Carlos</span>
        </h1>
        <p>
          Junior Developer passionate about creating beautiful and functional web applications
          <br/><br/>
          <span className='highlight'>Esta pagina esta actualmente en desarrollo.</span>
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            Ver Proyectos
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
}; 
