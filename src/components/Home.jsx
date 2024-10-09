import React from 'react';
import { Link } from 'react-scroll'; // Import from react-scroll
import Moon from './Moon'; // Import the Moon component
import AudioPlayer from '../components/AudioPlayer'; // Import the AudioPlayer component

const Home = () => {
  return (
    <div className="bg-black relative h-screen flex flex-col items-center justify-center text-center">
      <div className="justify-center items-center mx-auto">
        <Moon /> {/* Add the Moon component here */}
      </div>

      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-65 p-4 z-10 flex justify-center items-center">
        {/* Centered Navigation Links */}
        <div className="flex space-x-6 justify-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white font-serif transform transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/SkillPage"
            smooth={true}
            duration={500}
            className="text-white font-serif transform transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:underline"
          >
            Skills
          </Link>
          <Link
            to="projects-section"
            smooth={true}
            duration={500}
            className="text-white font-serif transform transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:underline"
          >
            Projects
          </Link>
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            className="text-white font-serif transform transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:underline"
          >
            Contact
          </Link>
          <Link
            to="blog-section"
            smooth={true}
            duration={500}
            className="text-white font-serif transform transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:underline"
          >
            Blogs
          </Link>
        </div>

        {/* Audio Player in the top right */}
        <div className="absolute right-4 top-4">
        <a
          href="/neha_resume.pdf" // Update this to your actual resume link
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif underline text-blue-400 hover:text-fuchsia-400 transition-all duration-300 px-4 py-2 m-10 rounded-full shadow-lg"
        >
          Resume
        </a>
          {/* <AudioPlayer /> */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="absolute lg:top-1/3 left-auto text-center justify-center m-auto items-center">
        <h1 className="text-blue-300 hover:opacity-100 hover:text-blue-500"
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
        <h4 className="font-sans text-white transform transition-transform duration-500 hover:scale-110">
  FULL STACK WEB DEVELOPER | FREELANCER
</h4>

      </div>

      
    </div>
  );
};

export default Home;
