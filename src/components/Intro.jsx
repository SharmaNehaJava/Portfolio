import React, { useState } from 'react';

const Intro = () => {
  const [hovered, setHovered] = useState(false);

  // Handle hover effect
  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div
      id="intro"
      className="min-h-screen w-screen flex flex-col lg:flex-row items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url('/stars.jpg')` }} // Background image
    >
      {/* Left side layered divs */}
      <div
        className="flex justify-center items-center h-auto w-full lg:w-1/2 mb-8 lg:mb-0" // Adjust layout on smaller screens
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {/* Outermost background circle */}
        <div className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-gray-900 z-0 flex justify-center items-center overflow-hidden">
          {/* Rotating rectangle (changes to square on hover) */}
          <div
            className={`absolute bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-500 ease-in-out transform ${
              hovered ? 'w-[350px] h-[350px]' : 'w-[200px] h-[400px]'
            } rotate-360`}
            style={{ animation: 'rotate 10s linear infinite' }}
          ></div>

          {/* Circular div with the profile picture */}
          <img
            src="pic1.jpg" // Profile image path
            alt="Neha Sharma"
            className="w-[230px] h-[230px] md:w-[290px] md:h-[290px] z-10 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Right side content */}
      <div className="flex-1 text-white px-4 lg:px-8 text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500">Neha Sharma</h1>
        <h2 className="text-lg lg:text-xl text-blue-400 mb-8">
          Full Stack Web Developer | B.Tech in Computer Science
        </h2>
        <p className="text-base lg:text-lg mb-6 text-justify">
          A software engineer who is organized, focused, and eager to take on new challenges.
        </p>
        <p className="text-base lg:text-lg mb-6 text-justify">
          Proficient in Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, and full-stack development using the MERN stack. I am constantly learning and applying new technologies in real-world projects.
        </p>

        {/* Flex container for social media icons and links */}
        <div className="flex justify-center lg:justify-start space-x-8 mb-8">
          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-2">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/60/linkedin.png"
                alt="linkedin"
              />
            </div>
            <a
              href="https://www.linkedin.com/in/nehasharma1782/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 underline mt-2"
            >
              LinkedIn
            </a>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-2">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/ios-glyphs/60/github.png"
                alt="github"
              />
            </div>
            <a
              href="https://github.com/SharmaNehaJava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 underline mt-2"
            >
              GitHub
            </a>
          </div>

          {/* LeetCode */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-2">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png"
                alt="leetcode"
              />
            </div>
            <a
              href="https://leetcode.com/u/neha_sharma_1782/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 underline mt-2"
            >
              LeetCode
            </a>
          </div>
        </div>
      </div>

      {/* Inline styles for rotation animation */}
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .rotate-360 {
          animation: rotate 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Intro;
