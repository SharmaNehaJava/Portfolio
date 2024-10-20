import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import Moon from './Moon'; // Import the Moon component

const Home = () => {
  return (
    <div id="home-section" className="bg-black relative h-screen flex flex-col items-center justify-center text-center">
      <div className="justify-center items-center mx-auto">
        <Moon /> {/* Add the Moon component here */}
      </div>

      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 p-2 z-10 flex flex-col md:flex-row justify-between items-center">
        {/* Centered Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 mx-auto">
          <Link
            to="home-section"
            smooth={true}
            duration={500}
            className="text-white font-serif text-sm md:text-base transform transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:underline py-1"
          >
            Home
          </Link>
          <Link
            to="intro"
            smooth={true}
            duration={500}
            className="text-pink-300 font-serif text-sm md:text-base transform transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:underline py-1"
          >
            Intro
          </Link>
          <Link
            to="skills-section"
            smooth={true}
            duration={500}
            className="text-white font-serif text-sm md:text-base transform transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:underline py-1"
          >
            Skills
          </Link>
          <Link
            to="projects-section"
            smooth={true}
            duration={500}
            className="text-white font-serif text-sm md:text-base transform transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:underline py-1"
          >
            Projects
          </Link>
          <Link
            to="blog-section"
            smooth={true}
            duration={500}
            className="text-white font-serif text-sm md:text-base transform transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:underline py-1"
          >
            Blogs
          </Link>
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            className="text-white font-serif text-sm md:text-base transform transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:underline py-1"
          >
            Contact
          </Link>
        </div>

        {/* Resume Link in the top right */}
        <div className="absolute right-4 top-12">
          <a
            href="/neha_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif underline text-blue-400 hover:text-fuchsia-400 transition-all duration-300 px-4 py-1 rounded-full shadow-lg text-sm md:text-base"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="absolute lg:top-1/3 left-0 right-0 text-center justify-center mx-auto items-center">
        <h1
          className="text-blue-400 hover:opacity-100 hover:text-blue-600"
          style={{
            fontFamily: 'Bungee Hairline, sans-serif',
            fontOpticalSizing: 'auto',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '10vw', // Adjust font size to be responsive
          }}
        >
          NEHA SHARMA
        </h1>
        <h4 className="font-sans text-white transform transition-transform duration-500 hover:scale-110 text-lg md:text-xl">
          FULL STACK WEB DEVELOPER | FREELANCER
        </h4>
      </div>
    </div>
  );
};

export default Home;
