import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Intro from './components/Intro.jsx';
import SkillsPage from './components/SkillsPage.jsx';
import Blogs from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Work from './components/Work.jsx'

const App = () => {
  return (
    <Router>
      <div className="bg-black">
        <Home />
        <Intro/>
        <SkillsPage/>
        <Work/>
        <Blogs/>
        <Contact/>
       
      </div>
    </Router>
  );
};

export default App;
