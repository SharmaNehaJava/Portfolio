import React from 'react';
import Moon from './Moon'; // Import the Moon component

const Home = () => {
  return (
    <div className=" bg-black relative">
      <div className="justify-center items-center">
        <Moon /> {/* Add the Moon component here */}
      </div>
      <nav className="absolute top-1 p-2 flex text-white font-serif space-x-4">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blogs</Link>
        </nav>
    </div>
  );
};

export default Home;
