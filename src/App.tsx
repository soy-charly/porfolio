import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Languages } from './pages/Languages';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/languages" element={<Languages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
