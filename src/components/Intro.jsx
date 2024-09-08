import React from 'react';

const Intro = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold mb-4">Neha Sharma</h1>
      <h2 className="text-2xl text-blue-400 mb-8">Full Stack Web Developer | B.Tech in Computer Science</h2>
      
      <p className="text-lg text-center max-w-4xl mb-6">
        A software engineer who is organized, focused, and eager to take on new challenges. I have strong problem-solving abilities
        and a drive to investigate novel directions in computer science engineering. Adept at creating complex initiatives with an emphasis 
        on effectiveness and excellence.
      </p>

      <div className="flex space-x-4 mb-8">
        <a
          href="https://www.linkedin.com/in/nehasharma1782/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SharmaNehaJava"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          GitHub
        </a>
        <a
          href="https://leetcode.com/u/neha_sharma_1782/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          LeetCode
        </a>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold mb-4">Summary</h3>
        <p className="max-w-4xl text-center">
          Proficient in Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, and full-stack development 
          using the MERN stack. I am constantly learning and applying new technologies in real-world projects.
        </p>
      </div>
    </div>
  );
};

export default Intro;
