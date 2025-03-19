import React from 'react';
import SkillItem from './SkillItem'; // Import the SkillItem component

const skills = [
  { name: 'HTML', icon: '/html.png' },
  { name: 'CSS', icon: '/css.png' },
  { name: 'JavaScript', icon: '/javascript.png' },
  { name: 'TypeScript', icon: '/typescript.png' },
  { name: 'React', icon: '/react.png' },
  { name: 'Node.js', icon: '/nodejs.png' },
  { name: 'MongoDB', icon: '/mongo-db.png' },
  { name: 'SQL', icon: '/sql.png' },
  { name: 'Postgres', icon: '/postgresql.svg' },
  { name: 'Java', icon: '/java.png' },
  { name: 'C', icon: '/c.jpeg' },
  { name: 'Python', icon: 'https://img.icons8.com/color/48/python--v1.png' },
];

const SkillsPage = () => {
  return (
    <div id="skills-section" className="relative w-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-16 min-h-screen rounded-full border-t-2 border-b-2 border-blue-500">
      <h1 className="text-white font-bold text-3xl lg:text-5xl flex items-center justify-center mb-8 ">
        SKILLS
      </h1>

      {/* Skill Grid for responsiveness */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center items-center">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
