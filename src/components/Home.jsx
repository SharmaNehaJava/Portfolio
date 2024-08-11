import React from 'react';
import Moon from './Moon'; // Import the Moon component
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-black relative h-screen flex flex-col items-center justify-center text-center">
      <div className="justify-center items-center">
        <Moon /> {/* Add the Moon component here */}
      </div>
      <nav className="absolute top-1 p-2 flex text-white font-serif space-x-4">
      <Link 
          to="/" 
          className="text-white font-serif transform transition-all duration-300 hover:scale-125 hover:opacity-100 hover:text-pink-500 hover:shadow-[0_0_15px_pink] active:scale-150 active:text-pink-600 active:shadow-[0_0_25px_pink] rounded-full p-1 px-2"
        >
          Home
        </Link>
        <Link 
          to="/skills" 
          className="text-white font-serif transform transition-all duration-300 hover:scale-125 hover:opacity-100 hover:text-pink-500 hover:shadow-[0_0_15px_pink] active:scale-150 active:text-pink-600 active:shadow-[0_0_25px_pink] rounded-full p-1 px-2"
        >
          Skills
        </Link>
        <Link 
          to="/projects" 
          className="text-white font-serif transform transition-all duration-300 hover:scale-125 hover:opacity-100 hover:text-pink-500 hover:shadow-[0_0_15px_pink] active:scale-150 active:text-pink-600 active:shadow-[0_0_25px_pink] rounded-full p-1 px-2"
        >
          Projects
        </Link>
        <Link 
          to="/contact" 
          className="text-white font-serif transform transition-all duration-300 hover:scale-125 hover:opacity-100 hover:text-pink-500 hover:shadow-[0_0_15px_pink] active:scale-150 active:text-pink-600 active:shadow-[0_0_25px_pink] rounded-full p-1 px-2"
        >
          Contact
        </Link>
        <Link 
          to="/blog" 
          className="text-white font-serif transform transition-all duration-300 hover:scale-125 hover:opacity-100 hover:text-pink-500 hover:shadow-[0_0_15px_pink] active:scale-150 active:text-pink-600 active:shadow-[0_0_25px_pink] rounded-full p-1 px-2"
        >
          Blogs
        </Link>
      </nav>
      <div
        className="absolute top-1/3 left-auto text-center justify-center items-center m-auto flex items-center text-white"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 200,
          fontStyle: 'normal',
          fontSize: '20vh', // 1/3 of the viewport height
        }}
      >
        NEHA SHARMA
      </div>
    </div>
  );
};

export default Home;
