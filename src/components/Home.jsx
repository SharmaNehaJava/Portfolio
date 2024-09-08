// src/pages/Home.js
import React from 'react';
import Moon from './Moon'; // Import the Moon component
import { Link } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer'; // Import the AudioPlayer component

const Home = () => {
  return (
    <div className="bg-black relative h-screen flex flex-col items-center justify-center text-center">
      <div className="justify-center items-center">
        <Moon /> {/* Add the Moon component here */}
      </div>
      <nav className="absolute top-1 p-2 flex text-white font-serif space-x-4">
        <Link 
          to="/" 
          className="text-white font-serif transform transition-all duration-300 hover:scale-125 hover:opacity-100 hover:text-blue-400 hover:underline active:scale-150 active:text-blue-400 rounded-full p-1 px-2"
        >
          Home
        </Link>
        <Link 
          to="/skills" 
          className="text-white font-serif transform transition-all duration-300 hover:scale-125 hover:opacity-100 hover:text-blue-400  active:scale-150 active:text-blue-400 hover:underline rounded-full p-1 px-2"
        >
          Skills
        </Link>
        <Link 
          to="/projects" 
          className="text-white font-serif transform transition-all duration-300 hover:scale-125 hover:opacity-100 hover:text-blue-400  active:scale-150 active:text-blue-400 hover:underline rounded-full p-1 px-2"
        >
          Projects
        </Link>
        <Link 
          to="/contact" 
          className="text-white font-serif transform transition-all duration-300 hover:scale-125 hover:opacity-100 hover:text-blue-400  active:scale-150 active:text-blue-400 hover:underline rounded-full p-1 px-2"
        >
          Contact
        </Link>
        <Link 
          to="/blog" 
          className="text-white font-serif transform transition-all duration-300 hover:scale-125 hover:opacity-100 hover:text-blue-400  active:scale-150 active:text-blue-400 hover:underline rounded-full p-1 px-2"
        >
          Blogs
        </Link>
      </nav>
      <div className="absolute lg:top-1/3 left-auto text-center justify-center m-auto items-center ">
        <h1 className='text-blue-300 hover:opacity-100 hover:text-blue-500 '
          style={{
            fontFamily: 'Bungee Hairline, sans-serif',
            fontOpticalSizing: 'auto',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '20vh', // 1/3 of the viewport height
          }}
        >
            NEHA SHARMA
        </h1> 
        <h4 className='font-sans text-white'>FULL STACK WEB DEVELOPER | FREELANCER</h4>
      </div>
      <AudioPlayer /> {/* Add the AudioPlayer component here */}
    </div>
  );
};

export default Home;
