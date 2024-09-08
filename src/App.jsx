import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Intro from './components/Intro.jsx';
import Skills from './components/SkillsPage.jsx';
import Blogs from './components/Blog.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <Router>
      <div className="bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
        <Intro/>
        <Skills/>
        <Contact/>
       
      </div>
    </Router>
  );
};

export default App;
