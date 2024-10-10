import React from 'react';
import SkillItem from './SkillItem'; // Import the new SkillItem component

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
    <div id="skills-section" className="relative w-full h-auto bg-gray-950 p-8 h-screen">
      <h1 className='text-white font-semibold text-2xl flex items-center justify-center underline m-4'>SKILLS</h1>
      {/* Skill Divs */}
      <div className="relative flex flex-wrap gap-6 justify-center items-center">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
