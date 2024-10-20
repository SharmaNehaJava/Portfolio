import React from 'react';

const SkillItem = ({ skill }) => {
  return (
    <div
      className="flex flex-col items-center rounded-md p-2 shadow-lg transition-transform duration-300 transform hover:scale-105 bg-gray-800 mx-auto w-32 h-32 flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/star.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-16 h-16 mb-2 object-contain" // Adjust size for responsiveness
      />
      <p className="text-lg font-semibold text-white text-center">{skill.name}</p>
    </div>
  );
};

export default SkillItem;
