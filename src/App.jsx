import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import Skills from './components/Skills.jsx';
import Blogs from './components/Blog.jsx';
import Contact  from './components/Contact.jsx';
import Projects from './components/Projects.jsx';

const App = () => {
  return (
    <Router>
      <div className="bg-black">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blogs} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
