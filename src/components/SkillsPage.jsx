import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
];

// Function to generate random initial positions within the screen boundaries
const getRandomPosition = (containerWidth, containerHeight) => {
  const x = Math.random() * (containerWidth - 100); // Random position on X-axis
  const y = Math.random() * (containerHeight - 100); // Random position on Y-axis
  return { x, y };
};

const SkillsPage = () => {
  const [positions, setPositions] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [containerRef, setContainerRef] = useState(null);

  useEffect(() => {
    if (containerRef) {
      const containerWidth = containerRef.offsetWidth;
      const containerHeight = containerRef.offsetHeight;
      setPositions(skills.map(() => getRandomPosition(containerWidth, containerHeight)));
    }
  }, [containerRef]);

  const handleMouseMove = (event) => {
    if (containerRef) {
      const rect = containerRef.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const calculateRepelEffect = (x, y, containerWidth, containerHeight) => {
    const distance = Math.sqrt((x - mousePosition.x) ** 2 + (y - mousePosition.y) ** 2);
    const maxDistance = 300; // Increase the distance for a bigger repulsion effect

    if (distance < maxDistance) {
      const angle = Math.atan2(y - mousePosition.y, x - mousePosition.x);
      const repelStrength = (maxDistance - distance) / maxDistance; // Strength of the repulsion
      const offsetX = Math.cos(angle) * repelStrength * 100; // Adjust movement range
      const offsetY = Math.sin(angle) * repelStrength * 100;

      const newX = Math.max(0, Math.min(containerWidth - 100, x + offsetX));
      const newY = Math.max(0, Math.min(containerHeight - 100, y + offsetY));

      return { offsetX: newX - x, offsetY: newY - y };
    }

    return { offsetX: 0, offsetY: 0 }; // No repulsion if mouse is too far
  };

  return (
    <div
      ref={setContainerRef}
      className="relative bg-gray-900 m-4 rounded-lg text-white w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {skills.map((skill, index) => {
        const { x, y } = positions[index] || { x: 0, y: 0 };
        const containerWidth = containerRef ? containerRef.offsetWidth : 0;
        const containerHeight = containerRef ? containerRef.offsetHeight : 0;
        const { offsetX, offsetY } = calculateRepelEffect(x, y, containerWidth, containerHeight);

        return (
          <motion.div
            key={skill.name}
            initial={{ x, y }}
            animate={{
              x: x + offsetX,
              y: y + offsetY,
              scale: offsetX || offsetY ? 1.2 : 1, // Scale up on interaction
            }}
            transition={{
              duration: 0.6, // Smooth transition
              ease: 'easeOut',
            }}
            className="absolute"
            style={{ top: 0, left: 0 }}
          >
            <img src={skill.icon} alt={skill.name} className="w-20 h-20 transition-transform duration-300" />
            <h3 className="text-center text-lg">{skill.name}</h3>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillsPage;
