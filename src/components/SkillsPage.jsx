import React, { useEffect } from 'react';

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

  useEffect(() => {
    const floatingDivs = document.querySelectorAll('.animate-skill');

    floatingDivs.forEach(div => {
      let moveX = 1;
      let moveY = 1;
      const animation = () => {
        // Set current position of each div
        const currentX = parseFloat(div.getAttribute('data-x')) || 0;
        const currentY = parseFloat(div.getAttribute('data-y')) || 0;

        // Move slightly up/down and left/right
        const newX = currentX + moveX * 0.05;
        const newY = currentY + moveY * 0.05;

        // Reverse direction on limits
        if (newX > 1 || newX < -1) moveX *= -1;
        if (newY > 1 || newY < -1) moveY *= -1;

        // Apply transformation
        div.style.transform = `translate(${newX}px, ${newY}px)`;
        div.setAttribute('data-x', newX);
        div.setAttribute('data-y', newY);

        requestAnimationFrame(animation);
      };

      animation();
    });
  }, []);

  return (
    <div className="relative w-full h-auto bg-gray-950">
      {/* Skill Divs */}
      <div className="relative z-10 flex flex-wrap gap-6 p-4 justify-center items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="animate-skill group flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-2 transition-transform group-hover:scale-110"
            />
            <p className="text-base font-semibold text-white transition-opacity duration-300 group-hover:opacity-80">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
