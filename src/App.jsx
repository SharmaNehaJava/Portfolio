import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Skills from './components/Skills.jsx';
import Blogs from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import ParticleCurser from './components/ParticleCurser.jsx'; // Import the ParticleCursor component

const App = () => {
  return (
    <Router>
      <div className="bg-black">
        <ParticleCurser /> {/* Add the ParticleCursor component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
