import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Intro from './components/Intro.jsx';
import SkillsPage from './components/SkillsPage.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Work from './components/Work.jsx'
// import Login from './components/Login.jsx';
// import Register from './components/Register.jsx';

const App = () => {
  return (
    <Router>
      <div className="bg-black">
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <Home />
        {/* <Login />
        <Register/> */}
        <Intro/>
        <SkillsPage/>
        <Work/>
        <Blog/>
        <Contact/>
      </div>
    </Router>
  );
};

export default App;
``